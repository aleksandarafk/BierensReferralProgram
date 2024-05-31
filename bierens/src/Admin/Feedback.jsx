import React, { useState, useEffect, useRef } from 'react';
import "./Feedback.css"
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {FeedbackData} from "./FeedbackData.jsx"
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import { StyleClass } from 'primereact/styleclass';
import { Paginator } from 'primereact/paginator';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Link } from 'react-router-dom';

export default function Feedback() {
     let emptyProduct = {
        id: null,
        email: '',
        date: '',
        location: '',
        feedback: "",
        rating: 0
    };

    const [products, setProducts] = useState([]);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [feedbackDialog, setFeedbackDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [deletedPeople, setDeletedPeople] = useState([])
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    console.log(deletedPeople)
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    
    let severityFeedback = selectedProducts === null || selectedProducts.length === deletedPeople.length ? "secondary" : "success";


    useEffect(() => {
        FeedbackData.getProducts().then((data) => setProducts(data));
    }, []);

    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    };

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    };

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    };

    const hideFeedbackDialog = () => {
        setFeedbackDialog(false);
    };

    const saveProduct = () => {
        setSubmitted(true);

        if (product.name.trim()) {
            let _products = [...products];
            let _product = { ...product };

            if (product.id) {
                const index = findIndexById(product.id);

                _products[index] = _product;
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            } else {
                _product.id = createId();
                _product.image = 'product-placeholder.svg';
                _products.push(_product);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            setProducts(_products);
            setProductDialog(false);
            setProduct(emptyProduct);
        }
    };

    const editProduct = (product) => {
        setProduct({ ...product });
        setProductDialog(true);
    };

    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    };

    const deleteProduct = () => {
        let _products = products.filter((val) => val.id !== product.id);
        
        setDeletedPeople(prevState => {
            return [...prevState, product]
        })
       
        setProducts(_products);
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    };

    const feedbackSent = () => {

        setFeedbackDialog(false)
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Feedback sent', life: 3000 });
    }

    const showFeedbackPrompt = (severity) => {
        if(selectedProducts === null || selectedProducts.length === deletedPeople.length ){
            setFeedbackDialog(false)
        }
        else{
            setFeedbackDialog(true)
            console.log(selectedProducts)
            localStorage.setItem("feedbackSent", true)
        }
    }

    const findIndexById = (id) => {
        let index = -1;

        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    };

    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return id;
    };

    const exportCSV = () => {
        dt.current.exportCSV();
    };

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    };

    const deleteSelectedProducts = () => {
        let _products = products.filter((val) => !selectedProducts.includes(val));

        
        
        setProducts(_products);
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    };

    const onCategoryChange = (e) => {
        let _product = { ...product };

        _product['category'] = e.value;
        setProduct(_product);
    };

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _product = { ...product };

        _product[`${name}`] = val;

        setProduct(_product);
    };

    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        let _product = { ...product };

        _product[`${name}`] = val;

        setProduct(_product);
    };

   

    const rightToolbarTemplate = () => {
        return <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />;
    };

    const imageBodyTemplate = (rowData) => {
        return <img src={`https://primefaces.org/cdn/primereact/images/product/${rowData.image}`} alt={rowData.image} className="shadow-2 border-round" style={{ width: '64px' }} />;
    };

   

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.inventoryStatus} severity={getSeverity(rowData)}></Tag>;
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment >
                <Button icon="pi pi-file"  rounded className="mr-2" onClick={() => editProduct(rowData)} />
                <Button style={{marginLeft: "0.5em"}}icon="pi pi-trash"  rounded severity="danger" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    };

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

   
    const productDialogFooter = (
        <React.Fragment>
            <Button label="Done" className='button-reform' icon="pi pi-check" onClick={hideDialog} />
        </React.Fragment>
    );
    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className='button-reform' outlined onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" className='button-reform' severity="danger" onClick={deleteProduct} />
        </React.Fragment>
    );
    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className='button-reform' outlined onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check"  className='button-reform' severity="danger" onClick={deleteSelectedProducts} />
        </React.Fragment>
    );

    const feedbackDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className='button-reform' outlined onClick={hideFeedbackDialog} />
            <Button label="Yes" icon="pi pi-check"  className='button-reform' severity="danger" onClick={feedbackSent} />
        </React.Fragment>
    );

    return (
        <section className='feedback-section'>
        <div className='feedback-table'>
            <div className='text-section'>
            <h1 className='h1Feedback'>Feedback</h1>
            <p className='paragraphFeedback '>Take a look at all of the reviews given by users.</p>
            </div>
            <div className="nav-pages">
            <Link  to="/Feedback" state={deletedPeople} style={{textAlign: "left", textDecoration:"none", color: "black"}}> <p style={{margin: 0, marginBottom: "0.5em"}}>All feedback: {products.length} </p></Link>
            <Link to="/FeedbackDeleted" state={deletedPeople} style={{textAlign: "left", textDecoration:"none" }}> <p style={{margin: 0, marginBottom: "0.5em" }}>Deleted: {deletedPeople.length}</p></Link>
            </div>
            <div className='navbar'></div>
            <div className='features'>
            <input className="input-search"type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..."/>
            <Button label="Request Feedback" severity={severityFeedback} onClick={() => showFeedbackPrompt(severityFeedback)}/>
            </div>
            <Toast ref={toast} />
            <div className="card">
                {/* <Toolbar className="mb-2" right={rightToolbarTemplate}></Toolbar> */}

                <DataTable ref={dt}  value={products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
        dataKey="id"  paginator rows={7} rowsPerPageOptions={[5, 10, 25]}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Showing {last} out of {totalRecords} users" globalFilter={globalFilter}>
     <Column selectionMode="multiple" exportable={false}></Column>
    <Column field="email" header="Email" sortable style={{textAlign: "left" }}></Column>
    <Column field="date" header={<div> Date</div>} sortable style={{textAlign: "left" }}></Column>
    <Column field="location" header={<div>Location</div>} sortable style={{textAlign: "left" }}></Column>
    <Column field="rating" header={<div > Rating</div>} body={ratingBodyTemplate} sortable ></Column>
    <Column field="feedbackShort" header={<div> Feedback </div>} sortable style={{ textAlign: "left" }}></Column>
    <Column header={<div> Action </div>} body={actionBodyTemplate} exportable={false} style={{ textAlign: "left" }}></Column>
    
</DataTable>

            </div>

            <Dialog visible={productDialog} style={{ width: '32rem', borderRadius:"10px"}} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="User Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                {product.image && <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.image} className="product-image block m-auto pb-3" />}
                <div className="field">
                    <label htmlFor="name" className="font-bold">
                        Email
                    </label>
                    <InputText disabled id="name" value={product.email} onChange={(e) => onInputChange(e, 'description')} />
                   
                </div>
                <div className="field">
                    <label htmlFor="description" className="font-bold">
                        Feedback
                    </label>
                    <InputTextarea disabled id="description" value={product.feedbackAll} onChange={(e) => onInputChange(e, 'description')}  rows={3} cols={20} />
                </div>
            </Dialog>

            <Dialog visible={deleteProductDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                <div className="confirmation-content" style={{display: "flex", alignItems: "center"}}>
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {product && (
                        <span style={{marginLeft: "0.5em"}}>
                            Are you sure you want to delete the user's feedback<b>{product.name}</b>?
                        </span>
                    )}
                </div>
            </Dialog>

            <Dialog visible={deleteProductsDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {product && <span>Are you sure you want to delete the selected products?</span>}
                </div>
            </Dialog>

            <Dialog visible={feedbackDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={feedbackDialogFooter} onHide={hideFeedbackDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {product && <span>Are you sure you want to ask for feedback?</span>}
                </div>
            </Dialog>
        </div>
        </section>
    );
}