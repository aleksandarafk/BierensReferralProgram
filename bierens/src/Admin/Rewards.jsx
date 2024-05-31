import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { ProductService } from './service/RewardsData';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { FileUpload } from 'primereact/fileupload';



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

    const cols = [
        { field: 'name', header: 'Name' },
        { field: 'tier', header: 'Tier' },
        { field: 'season', header: 'Season' },
        { field: 'quantity', header: 'Quantity' },
        { field: 'type', header: 'Type' }
    ];

    const exportColumns = cols.map((col) => ({ title: col.header, dataKey: col.field }));

    const exportPDF = () => {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then(() => {
                const doc = new jsPDF.default(0, 0);

                doc.autoTable(exportColumns, products);
                doc.save('products.pdf');
            });
        });
    };

    const rightToolbarTemplate = () => {
        return <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportPDF} />;
    };


    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2" />
                <Button icon="pi pi-trash" rounded outlined severity="danger" />
            </React.Fragment>
        );
    };

    const header = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h4 className="m-0">View, change or remove rewards based on Tier, Year & Season</h4>
            
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search" />
                <InputText type="search" placeholder="Search..." style={{marginRight: '5px'}} />
                <Button label="New" icon="pi pi-plus" severity="success"  style={{marginRight: '5px'}}/>
                <Button label="Delete" icon="pi pi-trash" severity="danger" />
            </IconField>
        </div>
    );

    return(
        <div>
        <Toast/>
        <div className='heading'>
        <h1>Rewards</h1>
        </div>
        <div className='navbar'></div>
        <div className="card">
        <DataTable
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
       >
        <Column selectionMode="multiple"></Column>
        <Column field="name" header="Reward Name" style={{ minWidth: '6rem' }}></Column>
        <Column field="image" header="Image" body={imageBodyTemplate} style={{ minWidth: '4rem' }}></Column>
        <Column field="tier" header="Tier" sortable style={{ minWidth: '4rem' }}></Column>
        <Column field="season" header="Season" style={{ minWidth: '6rem' }}></Column>
        <Column field="quantity" header="Quantity" sortable style={{ minWidth: '4rem' }}></Column>
        <Column field="type" header="Type" sortable style={{ minWidth: '6rem' }}></Column>
        <Column header="Action" body={actionBodyTemplate} style={{ minWidth: '6rem' }}></Column>
        </DataTable>
        </div>

        <Dialog style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Product Details" modal className="p-fluid">
    <div className="field">
        <label htmlFor="name" className="font-bold">
            Name
        </label>
        <InputText id="name" required autoFocus/>
        {<small className="p-error">Name is required.</small>}
    </div>
    <div className="field">
        <label htmlFor="description" className="font-bold">
            Description
        </label>
        <InputTextarea id="description" required rows={3} cols={20} />
    </div>
    <div className="field">
        <label className="mb-3 font-bold">Season</label>
        <div className="formgrid grid">
            <div className="field-radiobutton col-6">
                <RadioButton inputId="season1" name="season" value="Winter" />
                <label htmlFor="season1">Winter</label>
            </div>
            <div className="field-radiobutton col-6">
                <RadioButton inputId="season2" name="season" value="Spring" />
                <label htmlFor="season2">Spring</label>
            </div>
            <div className="field-radiobutton col-6">
                <RadioButton inputId="season3" name="season" value="Summer" />
                <label htmlFor="season3">Summer</label>
            </div>
            <div className="field-radiobutton col-6">
                <RadioButton inputId="season4" name="season" value="Autumn" />
                <label htmlFor="season4">Autumn</label>
            </div>
        </div>
    </div>
    <div className="field">
        <label className="mb-3 font-bold">Type</label>
        <div className="formgrid grid">
            <div className="field-radiobutton col-6">
                <RadioButton inputId="type1" name="type" value="Digital" />
                <label htmlFor="type1">Digital</label>
            </div>
            <div className="field-radiobutton col-6">
                <RadioButton inputId="type2" name="type" value="Physical" />
                <label htmlFor="type2">Physical</label>
            </div>
        </div>
    </div>
    <div className="formgrid grid">
        <div className="field col">
            <label htmlFor="quantity" className="font-bold">
                Quantity
            </label>
            <InputNumber id="quantity" min={1} max={99} showButtons/>
        </div>
    </div>
    <div className="formgrid grid">
        <div className="field col">
            <label htmlFor="tier" className="font-bold">
                Tier
            </label>
            <InputNumber id="tier" showButtons min={1} max={5}/>
        </div>
    </div>
    <div className="field">
        <label htmlFor="image" className="font-bold">Image</label>
        <FileUpload name="image" accept="image/*" customUpload />
    </div>

</Dialog>

<Dialog style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                        <span>
                            Are you sure you want to delete <b>the product</b>?
                        </span>
                </div>
            </Dialog>

            <Dialog  style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    <span>Are you sure you want to delete the selected rewards?</span>
                </div>
            </Dialog>
        </div>

        
    )
}