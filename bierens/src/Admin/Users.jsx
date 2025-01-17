import React, { useState, useEffect, useRef } from 'react';
import "./Users.css" // Importing the CSS

// Importing table from the PrimeReact library
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

// Importing the file with the data for the users enrolled in the referral program
import {UsersData} from "./Users_data.jsx"

// Importing other features from the PrimeReact library
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Link } from 'react-router-dom';
import Menu from './Menu.jsx';

export default function Users() {
    let emptyProduct = {
       id: null,
       name: '',
       company: '',
       joindate: '',
       email: "",
       referralsmade: 0
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

   // Get the data for the enrolled users from Users_data.jsx
   useEffect(() => {
       UsersData.getProducts().then((data) => setProducts(data));
   }, []);

   const openNew = () => {
       setProduct(emptyProduct);
       setSubmitted(false);
       setProductDialog(true);
   };
   
   // Closing a popup
   const hideDialog = () => {
       setSubmitted(false);
       setProductDialog(false);
   };

   // Closing the Delete User popup
   const hideDeleteProductDialog = () => {
       setDeleteProductDialog(false);
   };

   // Closing the Delete User popup when the button "No" is clicked
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

   // Deletes the selected user from the table
   const confirmDeleteProduct = (product) => {
       setProduct(product);
       setDeleteProductDialog(true);
   };

   // Deletes the selected user from the table and shows a popuup that the user has been removed from the referral program
   const deleteProduct = () => {
       let _products = products.filter((val) => val.id !== product.id);
       
       setDeletedPeople(prevState => {
           return [...prevState, product]
       })
      
       setProducts(_products);
       setDeleteProductDialog(false);
       setProduct(emptyProduct);
       toast.current.show({ severity: 'success', summary: 'Successful', detail: 'User removed from the referral program', life: 3000 });
   };

   // When an invitation is made, the Invite Dialog closes and a pop up that the invitation is successful appears
   const submitInvitation = () => {
    setProductDialog(false);
    toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Invitation sent successfully!', life: 3000 });
   };
   

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

   // Selecting a user in the table
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

   /* Exporting the data of the Users table into an .xlsx */
    const exportExcel = () => {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(products);
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array'
            });

            saveAsExcelFile(excelBuffer, 'users');
        });
    };

    /* Exporting the data of the Users table into an .xlsx */
    const saveAsExcelFile = (buffer, fileName) => {
        import('file-saver').then((module) => {
            if (module && module.default) {
                let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                let EXCEL_EXTENSION = '.xlsx';
                const data = new Blob([buffer], {
                    type: EXCEL_TYPE
                });

                module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
            }
        });
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
   

   const actionBodyTemplate = (rowData) => {
       return (
           <React.Fragment >
               {/* The "Delete" button on the table rows */}
               <Button style={{marginLeft: "0.5em"}}icon="pi pi-trash"  rounded severity="danger" onClick={() => confirmDeleteProduct(rowData)} />
           </React.Fragment>
       );
   };

  
   const productDialogFooter = (
       <React.Fragment>
           {/* The "Submit" button on the Invite dialog popup  */}
           <Button label="Submit" className='button-reform' onClick={submitInvitation} />
       </React.Fragment>
   );
   const deleteProductDialogFooter = (
       <React.Fragment>
        {/* The "Yes" and "No" buttons on the Delete User dialog popup */}
           <Button label="No" icon="pi pi-times" className='button-reform' outlined onClick={hideDeleteProductDialog} />
           <Button label="Yes" icon="pi pi-check" className='button-reform' severity="danger" onClick={deleteProduct} />
       </React.Fragment>
   );

   return (
       <section className='users-section'>
        <Menu/>
       <div className='users-table'>
         <div className='container-users-title-and-export-btn'>
           <div className='text-section'>
           <h1 className='users-title'>Users</h1>
           <p className='users-title-clarification'>Currently enrolled users in the referral program</p>
           </div>
           {/* Button for exporting the content of the Users table into an Excel file */}
           <Button className="btn-export-users-table" label="Export" icon="pi pi-upload" severity='success' onClick={exportExcel} />
         </div>
           <div className="nav-pages">

           {/* Toggling between the table for the enrolled and the deleted users */}
           <Link  to="./" state={deletedPeople} style={{textAlign: "left", textDecoration:"none", color: "black"}}> <p style={{margin: 0, marginBottom: "0.5em"}}>Users: {products.length} </p></Link>
           <Link to="/Admin/UsersDeleted" state={deletedPeople} style={{textAlign: "left", textDecoration:"none" }}> <p style={{margin: 0, marginBottom: "0.5em" }}>Deleted: {deletedPeople.length}</p></Link>
           </div>
           <div className='features'>
           <input className="input-search"type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..."/>
           <Button label="+ Invite" className="mr-2" id='invite-btn' severity={severityFeedback} onClick={() => openNew()}/>
           </div>
           <Toast ref={toast} />
           <div className="card">
    
    {/* Users table */}
    <DataTable ref={dt}  value={products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
       dataKey="id"  paginator rows={7} rowsPerPageOptions={[5, 10, 25]}
       paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
       currentPageReportTemplate="Showing {last} out of {totalRecords} users" globalFilter={globalFilter}>
    <Column selectionMode="multiple" exportable={false}></Column>
   <Column field="name" header="Name" sortable style={{textAlign: "left" }}></Column>
   <Column field="company" header={<div> Company</div>} sortable style={{textAlign: "left" }}></Column>
   <Column field="joindate" header={<div>Join Date</div>} sortable style={{textAlign: "left" }}></Column>
   <Column field="email" header={<div > Email</div>} sortable style={{textAlign: "left" }} ></Column>
   <Column field="referralsmade" header={<div> Referrals Made </div>} sortable style={{ textAlign: "left" }}></Column>
   <Column header={<div> Action </div>} body={actionBodyTemplate} exportable={false} style={{ textAlign: "left" }}></Column>
   
    </DataTable>

           </div>
           
           {/* Invite Users dialog popup */}
           <Dialog visible={productDialog} style={{ width: '32rem', borderRadius:"10px"}} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Invite New Users" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
               {product.image && <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.image} className="product-image block m-auto pb-3" />}
               <div className="field">
                   <label htmlFor="name" className="font-bold">
                       Email of the Referee
                   </label>
                   <InputText id="name" onChange={(e) => onInputChange(e, 'description')} />
                  
               </div>
               <div className="field">
                   <label htmlFor="description" className="font-bold">
                       Your Invitation Message
                   </label>
                   <InputTextarea id="description" value={product.feedbackAll} onChange={(e) => onInputChange(e, 'description')}  rows={3} cols={20} />
               </div>
           </Dialog>

           {/* Delete Users dialog popup */}
           <Dialog visible={deleteProductDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Are you sure?" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
               <div className="confirmation-content" style={{display: "flex", alignItems: "center"}}>
                   <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                   {product && (
                       <span style={{marginLeft: "0.5em"}}>
                           The selected user/s will not be able to make referrals anymore if you remove them from the referral program.
                       </span>
                   )}
               </div>
           </Dialog>
       </div>
       </section>
   );
}

