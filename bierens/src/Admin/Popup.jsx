import React, { useState, useEffect } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Rating } from "primereact/rating";
import "./Popup.css"

const Popup = () => {
    const [visible, setVisible] = useState(false);
    const [ratingValue, setRatingValue] = useState(null);
    const getCloseButton = document.getElementsByClassName("p-dialog-header-icon")
    console.log(getCloseButton.onclick)
    const [userData, setUserData] = useState({description: "", 
    rating: ""
})
   
    
    const headerElement = (
        <div >
            
            <div className="header-dialog">Give us your feedback!  </div>
            <div> </div>
        </div>
    
      );

    const RemoveFeedbackLocalStorage = () => {
        
        localStorage.removeItem("feedbackSent") 
        setVisible(false)
    }

    const footerContent = (
        <div className="footer-dialog">
            <Button label="DONE" className="popup-button" onClick={RemoveFeedbackLocalStorage} autoFocus />
        </div>
    );

    useEffect(() => {
        const getPopup = JSON.parse(localStorage.getItem("feedbackSent"));

        if(getPopup){
            setVisible(true)
        }
    }, [])

    return (
        <div className="card flex justify-content-center">
           
            {/* <Dialog visible={visible} modal header={headerElement} footer={footerContent} style={{ width: '50rem' }} onHide={RemoveFeedbackLocalStorage}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog> */}

            <Dialog visible={visible} style={{ width: '32rem', }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header={headerElement} footer={footerContent} modal className=" referral-popup p-fluid "  onHide={RemoveFeedbackLocalStorage}>
                <div className="popup-points" style={{marginTop: "-1em", marginBottom: "1em"}}> 
               Get closer to your next tier and recieve <span className="popup-points-inner"> +25 points! </span>
                </div>
                <div className="field">
                    <label htmlFor="description" className="font-bold popup-title">
                        How is your experience with the referral program so far?
                    </label>
                    <InputTextarea id="description" className="popup-textarea" style={{color: "white"}} value={userData.description} onChange={(e) => {setUserData(prevState => { return {...prevState, description: e.value}})}}   required rows={3} cols={20} />
                </div>
                <div className="rating">
                    <label htmlFor="rating" className="popup-title">Rating</label>
            <Rating  style={{marginTop: "0.3em"}} value={ratingValue} onChange={(e) => setRatingValue(e.value)} cancel={false}/>
        </div>

               
            </Dialog>
        </div>
    )
}

export default Popup