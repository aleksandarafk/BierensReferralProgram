import React, { useState, useEffect, useRef } from 'react';
import "./Users.css"
import { useLocation } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {UsersData} from "./Users_data.jsx"
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { Dialog } from 'primereact/dialog';
import { Tag } from 'primereact/tag';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Link } from 'react-router-dom';

export default function UsersDeleted() {
    let emptyProduct = {
        id: null,
        name: '',
        company: '',
        joindate: '',
        email: "",
        referralsmade: 0
   };

   const [products, setProducts] = useState([]);
   const [allData, setAllData] = useState([])
   const [productDialog, setProductDialog] = useState(false);
   const [deleteProductDialog, setDeleteProductDialog] = useState(false);
   const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
   const [product, setProduct] = useState(emptyProduct);
   const [selectedProducts, setSelectedProducts] = useState(null);
   const [submitted, setSubmitted] = useState(false);
   const [deletedPeople, setDeletedPeople] = useState([])
   const [globalFilter, setGlobalFilter] = useState(null);
   const toast = useRef(null);
   const dt = useRef(null);
   console.log(deletedPeople)

   const linkProps = useLocation().state;
   console.log(linkProps)

   useEffect(() => {
       setProducts(linkProps);
       UsersData.getProducts().then((data) => setAllData(data));
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

   const returnUser = (product) => {
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
       toast.current.show({ severity: 'success', summary: 'Successful', detail: 'User returned back to the referral program', life: 3000 });
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
               <Button style={{marginLeft: "0.5em"}}icon="pi pi-plus"  rounded onClick={() => returnUser(rowData)} />
           </React.Fragment>
       );
   };

  
   const productDialogFooter = (
       <React.Fragment>
           <Button label="Done" icon="pi pi-check" onClick={hideDialog} />
       </React.Fragment>
   );
   const deleteProductDialogFooter = (
       <React.Fragment>
           <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductDialog} />
           <Button label="Yes" icon="pi pi-check" className='button-reform' severity='success' onClick={deleteProduct} />
       </React.Fragment>
   );
   const deleteProductsDialogFooter = (
       <React.Fragment>
           <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductsDialog} />
           <Button label="Yes" icon="pi pi-check"  severity="danger" onClick={deleteSelectedProducts} />
       </React.Fragment>
   );

   return (
       <section className='users-section'>
        <div className='users-table'>
               <div className='text-section'>
           <h1 className='users-title'> Deleted Users</h1>
           <p className='users-title-clarification'>Users that have been removed from the referral program</p>
           </div>
           <div className='nav-pages'>
           <Link to="/Admin/Users" style={{textAlign: "left", textDecoration:"none"}}> <p style={{margin: 0, marginBottom: "0.5em"}}> Users: {allData.length - products.length} </p></Link>
           <Link to="./" style={{textAlign: "left", textDecoration:"none", color: "black"}}> <p style={{margin: 0, marginBottom: "0.5em"}}>Deleted: {products.length}</p></Link>
           </div>
           <div className='navbar'></div>
           <div className='features'>
           <input className="input-search"type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..."/>
           </div>
           <Toast ref={toast} />
           <div className="card">

               <DataTable ref={dt} value={products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
       dataKey="id"  paginator rows={7} rowsPerPageOptions={[5, 10, 25]}
       paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
       currentPageReportTemplate="Showing {last} out of {totalRecords} users" globalFilter={globalFilter}>
    <Column selectionMode="multiple" exportable={false}></Column>
   <Column field="name" header="Name" sortable style={{textAlign: "left" }}></Column>
   <Column field="company" header={<div> Company </div>} sortable style={{textAlign: "left" }}></Column>
   <Column field="joindate" header={<div>Join Date </div>} sortable style={{textAlign: "left" }}></Column>
   <Column field="email" header={<div > Email</div>} sortable style={{textAlign: "left" }} ></Column>
   <Column field="referralsmade" header={<div> Referrals Made </div>} sortable style={{ textAlign: "left" }}></Column>
   <Column header={<div> Action </div>} body={actionBodyTemplate} exportable={false} style={{ textAlign: "left" }}></Column>
</DataTable>

           </div>

           <Dialog className="dialog" visible={deleteProductDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
               <div className="confirmation-content" style={{display: "flex", alignItems:"center"}}>
                   <i className="pi pi-info-circle mr-3" style={{ fontSize: '2rem' }} />
                   {product && (
                       <span style={{marginLeft: "0.5em"}}>
                           Are you sure you want to return the selected user <b>{product.name}</b>?
                       </span>
                   )}
               </div>
           </Dialog>

           <Dialog className="dialog" visible={deleteProductsDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
               <div className="confirmation-content">
                   <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                   {product && <span>Are you sure you want to delete the selected products?</span>}
               </div>
           </Dialog>
           </div>
       </section>
   );
}