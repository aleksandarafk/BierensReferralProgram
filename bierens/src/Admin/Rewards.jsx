//Useful components / functions & states
import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/RewardsData';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { InputTextarea } from 'primereact/inputtextarea';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

//CSS files needed for styling
import "./Rewards.css";
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';

export default function Rewards() {
    let emptyProduct = {
        id: null,
        name: '',
        season: null,
        type: null,
        image: '',
        imageUrl: '',
        description: '',
        category: null,
        tier: 0,
        quantity: 0,
    };

    const [products, setProducts] = useState(null);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
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

    const saveProduct = () => {
        setSubmitted(true);
    
        if (product.name.trim()) {
            let _products = [...products];
            let _product = { ...product };
    
            if (product.id) {
                const index = findIndexById(product.id);
                _products[index] = _product;
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Reward Updated', life: 3000 });
            } else {
                _product.id = createId();
                _products.push(_product);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Reward Created', life: 3000 });
            }
    
            setProducts(_products);
            setProductDialog(false);
            setProduct(emptyProduct);
        }
    };
    
    const cols = [
        { field: 'name', header: 'Name' },
        { field: 'tier', header: 'Tier' },
        { field: 'season', header: 'Season' },
        { field: 'quantity', header: 'Quantity' },
        { field: 'type', header: 'Type' }
    ];

    const exportColumns = cols.map((col) => ({ title: col.header, dataKey: col.field }));

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

        setProducts(_products);
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Reward Deleted', life: 3000 });
    };

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
        let chars = '123456789';

        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return id;
    };

    const exportPDF = () => {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then(() => {
                const doc = new jsPDF.default(0, 0);

                doc.autoTable(exportColumns, products);
                doc.save('products.pdf');
            });
        });
    };

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    };

    const deleteSelectedProducts = () => {
        let _products = products.filter((val) => !selectedProducts.includes(val));

        setProducts(_products);
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Reward Deleted', life: 3000 });
    };

    const onCategoryChange = (e) => {
        let _product = { ...product };

        _product['season'] = e.value;
        setProduct(_product);
    };

    const onTypeChange = (e) => {
        let _product = { ...product };

        _product['type'] = e.value;
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
    const onUpload = (event) => {
        const file = event.files[0];
        const reader = new FileReader();
    
        reader.onload = (e) => {
            let _product = { ...product };
            _product.image = e.target.result;
            setProduct(_product);
        };
    
        reader.readAsDataURL(file);
    };
    
    
    const rightToolbarTemplate = () => {
        return <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportPDF} />;
    };

    const imageBodyTemplate = (rowData) => {
        return <img src={rowData.image} alt={rowData.image} className="product-image" style={{ width: '50px', height: '50px' }} />
        ;
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    };

    const header = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h4 className="m-0">View, change or remove rewards based on Tier, Year & Season</h4>
            
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." style={{marginRight: '5px'}} />
                <Button label="New" icon="pi pi-plus" severity="success" onClick={openNew} style={{marginRight: '5px'}}/>
                <Button label="Delete" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} />
            </IconField>
        </div>
    );
    const productDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
        </React.Fragment>
    );
    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteProduct} />
        </React.Fragment>
    );
    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteSelectedProducts} />
        </React.Fragment>
    );

    return (
        <div>
            <Toast ref={toast} />
            <div className='heading'>
            <h2>Rewards</h2>
            </div>
            <div className='navbar'></div>
            <div className="card">
            <DataTable ref={dt} value={products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
           dataKey="id"
           resizableColumns
           emptyMessage="No results found."
           className="custom-datatable"
           paginator
           rows={6}
           rowsPerPageOptions={[6, 8, 10, 12]}
           showGridlines
           paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
           currentPageReportTemplate="Showing {last} out of {totalRecords} rewards"
           globalFilter={globalFilter} header={header}
           paginatorRight={rightToolbarTemplate}>
    <Column selectionMode="multiple" exportable={false}></Column>
    <Column field="name" header="Reward Name" style={{ minWidth: '6rem' }}></Column>
    <Column field="image" header="Image" body={imageBodyTemplate} style={{ minWidth: '4rem' }}></Column>
    <Column field="tier" header="Tier" sortable style={{ minWidth: '4rem' }}></Column>
    <Column field="season" header="Season" style={{ minWidth: '6rem' }}></Column>
    <Column field="quantity" header="Quantity" sortable style={{ minWidth: '4rem' }}></Column>
    <Column field="type" header="Type" sortable style={{ minWidth: '6rem' }}></Column>
    <Column header="Action" body={actionBodyTemplate} exportable={false} style={{ minWidth: '6rem' }}></Column>
</DataTable>
            </div>

            <Dialog visible={productDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Product Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
    {product.image && <img src={product.image} alt={product.image} className="product-image block m-auto pb-3" />}
    <div className="field">
        <label htmlFor="name" className="font-bold">
            Name
        </label>
        <InputText id="name" value={product.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.name })} />
        {submitted && !product.name && <small className="p-error">Name is required.</small>}
    </div>
    <div className="field">
        <label htmlFor="description" className="font-bold">
            Description
        </label>
        <InputTextarea id="description" value={product.description} onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20} />
    </div>
    <div className="field">
        <label className="mb-3 font-bold">Season</label>
        <div className="formgrid grid">
            <div className="field-radiobutton col-6">
                <RadioButton inputId="season1" name="season" value="Winter" onChange={onCategoryChange} checked={product.season === 'Winter'} />
                <label htmlFor="season1">Winter</label>
            </div>
            <div className="field-radiobutton col-6">
                <RadioButton inputId="season2" name="season" value="Spring" onChange={onCategoryChange} checked={product.season === 'Spring'} />
                <label htmlFor="season2">Spring</label>
            </div>
            <div className="field-radiobutton col-6">
                <RadioButton inputId="season3" name="season" value="Summer" onChange={onCategoryChange} checked={product.season === 'Summer'} />
                <label htmlFor="season3">Summer</label>
            </div>
            <div className="field-radiobutton col-6">
                <RadioButton inputId="season4" name="season" value="Autumn" onChange={onCategoryChange} checked={product.season === 'Autumn'} />
                <label htmlFor="season4">Autumn</label>
            </div>
        </div>
    </div>
    <div className="field">
        <label className="mb-3 font-bold">Type</label>
        <div className="formgrid grid">
            <div className="field-radiobutton col-6">
                <RadioButton inputId="type1" name="type" value="Digital" onChange={onTypeChange} checked={product.type === 'Digital'} />
                <label htmlFor="type1">Digital</label>
            </div>
            <div className="field-radiobutton col-6">
                <RadioButton inputId="type2" name="type" value="Physical" onChange={onTypeChange} checked={product.type === 'Physical'} />
                <label htmlFor="type2">Physical</label>
            </div>
        </div>
    </div>
    <div className="formgrid grid">
        <div className="field col">
            <label htmlFor="quantity" className="font-bold">
                Quantity
            </label>
            <InputNumber id="quantity" value={product.quantity} min={1} max={99} showButtons onValueChange={(e) => onInputNumberChange(e, 'quantity')} />
        </div>
    </div>
    <div className="formgrid grid">
        <div className="field col">
            <label htmlFor="tier" className="font-bold">
                Tier
            </label>
            <InputNumber id="tier" value={product.tier} showButtons min={1} max={5} onValueChange={(e) => onInputNumberChange(e, 'tier')} />
        </div>
    </div>
    <div className="field">
        <label htmlFor="image" className="font-bold">Image</label>
        <FileUpload name="image" accept="image/*" customUpload uploadHandler={onUpload}/>
    </div>
</Dialog>

            <Dialog visible={deleteProductDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {product && (
                        <span>
                            Are you sure you want to delete <b>{product.name}</b>?
                        </span>
                    )}
                </div>
            </Dialog>

            <Dialog visible={deleteProductsDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {product && <span>Are you sure you want to delete the selected rewards?</span>}
                </div>
            </Dialog>
        </div>
    );
}
        