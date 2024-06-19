//Useful components / functions & states 
//Imported from PrimeReact library, React and the RewardsData.jsx file
import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { RewardService } from './service/RewardsData';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { InputTextarea } from 'primereact/inputtextarea';
import { IconField } from 'primereact/iconfield';
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

//Function that renders the Rewards page
export default function Rewards() {
    //Empty reward that serves as a placeholder when an admin adds a new rewards
    let emptyReward = {
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

    //setting up consts for various functions such as: pop-ups for deletion / adding
    //filtering a reward, adding / submiting changes to a reward property
    //const db - for extracting the data from the array 
    const [rewards, setRewards] = useState(null);
    const [rewardDialog, setRewardDialog] = useState(false);
    const [deleteRewardDialog, setDeleteRewardDialog] = useState(false);
    const [deleteRewardsDialog, setDeleteRewardsDialog] = useState(false);
    const [reward, setReward] = useState(emptyReward);
    const [selectedrewards, setSelectedrewards] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    //getting reward data from the array in the RewardsData.jsx
    useEffect(() => {
        RewardService.getRewards().then((data) => setRewards(data));
    }, []);

    //Func for opening a dialog (pop-up) for a new reward
    const openNew = () => {
        setReward(emptyReward);
        setSubmitted(false);
        setRewardDialog(true);
    };

    //Func for closing a pop-up (dialog)
    const hideDialog = () => {
        setSubmitted(false);
        setRewardDialog(false);
    };

    //Func for closing the Delete pop-up
    const hidedeleteRewardDialog = () => {
        setDeleteRewardDialog(false);
    };

    //Func for closing the Delete pop-up
    const hidedeleteRewardsDialog = () => {
        setDeleteRewardsDialog(false);
    };

    //Func for saving a reward and displaying it in the end of the table
    const savereward = () => {
        setSubmitted(true);

        //IF function for showcasing an alert for the admin to know a reward was added successfully
        //Function also works if a property of the said reward is updated
        //consists of adding the reward to the end of the table as well as displaying the new properties
        if (reward.name.trim()) {
            let _rewards = [...rewards];
            let _reward = { ...reward };

            if (reward.id) {
                const index = findIndexById(reward.id);
                _rewards[index] = _reward;
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Reward Updated', life: 3000 });
            } else {
                _reward.id = createId();
                _rewards.push(_reward);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Reward Created', life: 3000 });
            }

            setRewards(_rewards);
            setRewardDialog(false);
            setReward(emptyReward);
        }
    };

    //Const for the different fields id's and header names for the table
    const cols = [
        { field: 'name', header: 'Name' },
        { field: 'tier', header: 'Tier' },
        { field: 'season', header: 'Season' },
        { field: 'quantity', header: 'Quantity' },
        { field: 'type', header: 'Type' }
    ];

    // const exportColumns = cols.map((col) => ({ title: col.header, dataKey: col.field }));

    //Func for allowing a reward to be edited
    const editreward = (reward) => {
        setReward({ ...reward });
        setRewardDialog(true);
    };

    //Func for showcasing a pop up asking the admin if he wants to delete the selected rewards
    const confirmDeletereward = (reward) => {
        setReward(reward);
        setDeleteRewardDialog(true);
    };

    //Func for deleting a reward and displaying an alert for visual confirmation
    const deletereward = () => {
        let _rewards = rewards.filter((val) => val.id !== reward.id);

        setRewards(_rewards);
        setDeleteRewardDialog(false);
        setReward(emptyReward); x
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Reward Deleted', life: 3000 });
    };

    //Func for filtering and searching by name
    const findIndexById = (id) => {
        let index = -1;

        for (let i = 0; i < rewards.length; i++) {
            if (rewards[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    };

    //Func for creating unique id for each reward in order to make them unique
    const createId = () => {
        let id = '';
        let chars = '123456789';

        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return id;
    };


    //Func that exports the table data into an .xlsx format file
    const exportExcel = () => {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(rewards);
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array'
            });

            saveAsExcelFile(excelBuffer, 'rewardslist');
        });
    };

    //Func that saves the said file on the desktop of the admin
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

    //Const for a pop-up that appears when multiple rewards are selected for deletion
    const confirmDeleteSelected = () => {
        setDeleteRewardsDialog(true);
    };

    //Const that deletes multiple rewards at once and displays an alert
    const deleteSelectedrewards = () => {
        let _rewards = rewards.filter((val) => !selectedrewards.includes(val));

        setRewards(_rewards);
        setDeleteRewardsDialog(false);
        setSelectedrewards(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Reward Deleted', life: 3000 });
    };

    //Func for changing the season category of a reward
    const onCategoryChange = (e) => {
        let _reward = { ...reward };

        _reward['season'] = e.value;
        setReward(_reward);
    };

    //Func for changing the type category of a reward
    const onTypeChange = (e) => {
        let _reward = { ...reward };

        _reward['type'] = e.value;
        setReward(_reward);
    };

    //Func for changing the name of a reward
    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _reward = { ...reward };

        _reward[`${name}`] = val;

        setReward(_reward);
    };

    //Func for changing the quantity of a reward
    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        let _reward = { ...reward };

        _reward[`${name}`] = val;

        setReward(_reward);
    };

    //Func for uploading an image to a reward from the admin's desktop
    const onUpload = (event) => {
        const file = event.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            let _reward = { ...reward };
            _reward.image = e.target.result;
            setReward(_reward);
        };

        reader.readAsDataURL(file);
    };

    //Button that uses the exportExcel func
    const rightToolbarTemplate = () => {
        return <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportExcel} />;
    };

    //Visual render func of the image within the table and pop-up for rewards
    const imageBodyTemplate = (rowData) => {
        return <img src={rowData.image} alt={rowData.image} className="reward-image" style={{ width: '50px', height: '50px', borderRadius: '10px' }} />
            ;
    };

    //Func that renders buttons for editing or deleting a reward within the table
    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editreward(rowData)} />
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDeletereward(rowData)} />
            </React.Fragment>
        );
    };

    //Header of the table consists of the search bar using the setGlobalFilter func
    //Button for adding a new reward using the openNew func
    //Button for deleting a reward using the confirmDeleteSelected func / disabled by default
    const header = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-end">
            <IconField iconPosition="left">
                <input className="input-search" type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
                <Button label="New" icon="pi pi-plus" severity="success" onClick={openNew} style={{ marginRight: '5px' }} />
                <Button label="Delete" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedrewards || !selectedrewards.length} />
            </IconField>
        </div>
    );

    //Func that renders the buttons that either save changes or cancel them using the hidDialog and savereward func
    const rewardDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" onClick={savereward} />
        </React.Fragment>
    );

    //Func that renders the buttons for canceling or proceeding with the deletion of a reward(s)
    //Using the hidedeleteRewardDialog and deletereward func
    const deleteRewardDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hidedeleteRewardDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deletereward} />
        </React.Fragment>
    );

    //Same func as above but for multiple selections
    const deleteRewardsDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hidedeleteRewardsDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteSelectedrewards} />
        </React.Fragment>
    );

    //Rendering of the table and utilizing the funcs and components above
    //Table is created using PrimeReact as well as a mix of divs and Components from said library
    return (
        <section className='reward-section'>
            <div className='reward-table'>
                <Toast ref={toast} />
                <div className='textsection'>
                    <div className='text-textsection'>
                        <h1 className='h1Rewards'>Rewards</h1>
                        <p className='paragraphRewards '>View, change or remove rewards based on Tier, Year & Season</p>
                    </div>
                </div>
                <div className='navbar'></div>
                {/*<input className="input-search"type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..."/>*/}
                <div className="card">
                    <DataTable ref={dt} value={rewards} selection={selectedrewards} onSelectionChange={(e) => setSelectedrewards(e.value)}
                        dataKey="id"
                        resizableColumns
                        emptyMessage="No results found."
                        className="custom-datatable"
                        paginator
                        rows={6}
                        rowsPerPageOptions={[6, 8, 10, 12]}
                        /*showGridlines*/ //this allows the user to change the width of each column
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {last} out of {totalRecords} rewards"
                        globalFilter={globalFilter} header={header}
                        paginatorRight={rightToolbarTemplate}>

                        {/*Each column for each different data entry, using the relevant funcs as well as having a similar styling*/}
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

                {/*Creating the visual element of the dialog(s) (pop-up(s)) that appear when editing or adding a new reward*/}
                <Dialog visible={rewardDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Reward Details" modal className="p-fluid" footer={rewardDialogFooter} onHide={hideDialog}>
                    {reward.image && <img src={reward.image} alt={reward.image} className="reward-image block m-auto pb-3" />}
                    <div className="field">
                        <label htmlFor="name" className="font-bold">
                            Reward Name
                        </label>
                        <InputText id="name" value={reward.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !reward.name })} />
                        {submitted && !reward.name && <small className="p-error">Reward name is required.</small>}
                    </div>
                    <div className="field">
                        <label htmlFor="description" className="font-bold">
                            Reward Description
                        </label>
                        <InputTextarea id="description" value={reward.description} onChange={(e) => onInputChange(e, 'description')} required autoFocus className={classNames({ 'p-invalid': submitted && !reward.description })} autoResize rows={3} cols={20} />
                        {submitted && !reward.description && <small className="p-error">Reward description is required.</small>}
                    </div>
                    <div className="field">
                        <label className="mb-3 font-bold">Reward Season</label>
                        <div className="formgrid grid">
                            <div className="field-radiobutton col-6">
                                <RadioButton inputId="season1" name="season" value="Winter" onChange={onCategoryChange} checked={reward.season === 'Winter'} />
                                <label htmlFor="season1">Winter</label>
                            </div>
                            <div className="field-radiobutton col-6">
                                <RadioButton inputId="season2" name="season" value="Spring" onChange={onCategoryChange} checked={reward.season === 'Spring'} />
                                <label htmlFor="season2">Spring</label>
                            </div>
                            <div className="field-radiobutton col-6">
                                <RadioButton inputId="season3" name="season" value="Summer" onChange={onCategoryChange} checked={reward.season === 'Summer'} />
                                <label htmlFor="season3">Summer</label>
                            </div>
                            <div className="field-radiobutton col-6">
                                <RadioButton inputId="season4" name="season" value="Autumn" onChange={onCategoryChange} checked={reward.season === 'Autumn'} />
                                <label htmlFor="season4">Autumn</label>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="mb-3 font-bold">Reward Type</label>
                        <div className="formgrid grid">
                            <div className="field-radiobutton col-6">
                                <RadioButton inputId="type1" name="type" value="Digital" onChange={onTypeChange} checked={reward.type === 'Digital'} />
                                <label htmlFor="type1">Digital</label>
                            </div>
                            <div className="field-radiobutton col-6">
                                <RadioButton inputId="type2" name="type" value="Physical" onChange={onTypeChange} checked={reward.type === 'Physical'} />
                                <label htmlFor="type2">Physical</label>
                            </div>
                        </div>
                    </div>
                    <div className="formgrid grid">
                        <div className="field col">
                            <label htmlFor="quantity" className="font-bold">
                                Reward Quantity
                            </label>
                            <InputNumber id="quantity" value={reward.quantity} min={1} max={99} showButtons onValueChange={(e) => onInputNumberChange(e, 'quantity')} />
                        </div>
                    </div>
                    <div className="formgrid grid">
                        <div className="field col">
                            <label htmlFor="tier" className="font-bold">
                                Reward Tier
                            </label>
                            <InputNumber id="tier" value={reward.tier} showButtons min={1} max={5} onValueChange={(e) => onInputNumberChange(e, 'tier')} />
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="image" className="font-bold">Reward Image</label>
                        <FileUpload name="image" accept="image/*" customUpload uploadHandler={onUpload} />
                    </div>
                </Dialog>

                {/*Dialog for visual showcase of a pop-up confirmation for deleting a reward*/}
                <Dialog visible={deleteRewardDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteRewardDialogFooter} onHide={hidedeleteRewardDialog}>
                    <div className="confirmation-content">
                        <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                        {reward && (
                            <span>
                                Are you sure you want to delete <b>{reward.name}</b>?
                            </span>
                        )}
                    </div>
                </Dialog>

                {/*Dialog for visual showcase of a pop-up confirmation for deleting multiple reward*/}
                <Dialog visible={deleteRewardsDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteRewardsDialogFooter} onHide={hidedeleteRewardsDialog}>
                    <div className="confirmation-content">
                        <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                        {reward && <span>Are you sure you want to delete the selected rewards?</span>}
                    </div>
                </Dialog>
            </div>
        </section>
    );
}
