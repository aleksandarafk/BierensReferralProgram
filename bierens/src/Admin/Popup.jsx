import React, { useState, useEffect } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Rating } from "primereact/rating";
import "./Popup.css"

const Popup = () => {

    /* Global variables */
    const [visible, setVisible] = useState(false);
    const [ratingValue, setRatingValue] = useState(null);
    const getCloseButton = document.getElementsByClassName("p-dialog-header-icon")
    console.log(getCloseButton.onclick)
    const [userData, setUserData] = useState({description: "", 
    rating: ""
})
   
    /* Header of popup */
    const headerElement = (
        <div >
            
            <div className="header-dialog-feedback">Give us your feedback!  </div>
            <div> </div>
        </div>
    
      );

     /* Removes feedback from localStorage when "X" or "Done" */ 
    const RemoveFeedbackLocalStorage = () => {
        
        localStorage.removeItem("feedbackSent") 
        setVisible(false)
    }

    /* Footer of the popup */
    const footerContent = (
        <div className="footer-dialog-feedback">
            <Button label="DONE" className="popup-button" onClick={RemoveFeedbackLocalStorage} autoFocus />
        </div>
    );

    /* Gets the feedback from localStorage, if its true show the popup */
    useEffect(() => {
        const getPopup = JSON.parse(localStorage.getItem("feedbackSent"));

        if(getPopup){
            setVisible(true)
        }
    }, [])

    return (
        <div className="card flex justify-content-center">

            <Dialog visible={visible} style={{ width: '32rem', }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header={headerElement} footer={footerContent} modal className=" referral-popup-feedback p-fluid "  onHide={RemoveFeedbackLocalStorage}>
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