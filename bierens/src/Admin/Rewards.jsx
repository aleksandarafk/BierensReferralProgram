import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { ProductService } from './service/RewardsData';
import "./Rewards.css";
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';


export default function Rewards() {


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
        <Column header="Action" style={{ minWidth: '6rem' }}></Column>
        </DataTable>
        </div>
        </div>
    )
}