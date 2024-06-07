import React, { useEffect } from "react";
import { useState } from "react";
import "./User.css";
import { Routes, Route, useLocation } from 'react-router-dom'
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Rating } from "primereact/rating";
import "./referPopUp.css"
import Popup from "../Admin/Popup";


// import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';

export default function SimplePopup() {
  
  const [anchor, setAnchor] = React.useState(null);
  const [visible, setVisible] = useState(false);
  const [popUpVisible, setPopupVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [ratingValue, setRatingValue] = useState(null);
  const [userData, setUserData] = useState({description: "", 
    rating: ""
});

useEffect(() => {

  const getPopUpLocalStorage = JSON.parse(localStorage.getItem("feedbackSent"));

  if(getPopUpLocalStorage){
    setPopupVisible(true);
  }
}
, [])

const [changeStyle, setChangeStyle] = useState({reward1: false, reward2: false});
  const styleNormal = {width: "187px", transition:"0.6s ease-out" };
  const styleHover = {width: "230px", zIndex:"3", height: "auto", transition:"0.5s ease-in"};
  const styleBackgroundHover = { width:"100vw", height:"100vh", position:"fixed", top: "0", left:"0", backgroundColor: "rgba(0,0,0,0.65)" ,
  transition: " 0.5s ease"};
  const styleBackground = { zIndex:"-2", width:"100vw", height:"100vh", position:"fixed", top: "0", left:"0", backgroundColor: "rgba(0,0,0,0)" ,
  transition: " 0.5s ease"};
  const textNormal = {zIndex: "-1", color: "white"};
  const texthover = {zIndex: "1", transition: "0.5s ease-in"};

const backgroundHover = {position: "fixed" , top:"0", left:"0", width:"100vw", height:"100vh", backgroundColor: "rgba(0,0,0,0.7)", transition: "0.5s ease-in"};
const backgroundNormal = {backgroundColor: "rgba(0,0,0,0.0)", transition: "0.5s ease-in"};

  const headerElement = (
    <div className="header-dialog">Refer </div>
  );

const footerContent = (
    <div className="footer-dialog">
        c
    </div>
);

const closepopup = () => {setVisible(false)} 

const closepopup2 = () => {setVisible2(false)} 

const header2Element = (
  <div className="header-dialog2">Your reward:</div>
);

const footer2Content = (
  <div className="footer-dialog">
      c
  </div>
);


  return (
    
    <div className="users-main-page-v5">
      {popUpVisible && <Popup/>}
      <img
        className="users-main-page-v5-child"
        alt=""
        src="/rectangle-47.svg"
      />
      {/* <img className="image-1-icon" alt="" src="/image-1@2x.png" /> */}
      <div className="users-main-page-v5-item" />
      <div className="users-main-page-v5-inner" />
      <div className="rectangle-div" />
      <div className="users-main-page-v5-child1" />
      <img
        className="bierens-white-logo-1-icon"
        alt=""
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/14f7de217d395ca637d8f539a44a298ca9406584a04020b45cb887798c117892?apiKey=1487a4e6add04b00a5f73b9046459d15&"
      />
    
      <div className="referral-system"></div> 
      <b className="tier-1">TIER 1</b>
      <div className="users-main-page-v5-child2" />
      <b className="tier-2">TIER 2</b>
      <b className="pts">50 / 100 pts</b>
      <div className="users-main-page-v5-child3" />
      <div className="users-main-page-v5-child4" />
      <div className="users-main-page-v5-child5" />
      <img
        className="rectangle-icon"
        alt=""
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/75cac9a796c4956968a5918588acdc4a2e2e9ec8fabb0f938ddbf86e9fa47ff4?apiKey=1487a4e6add04b00a5f73b9046459d15&"
      />
      <img
        className="users-main-page-v5-child6"
        alt=""
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/63dee188aecadceb207276a083558a88cd3ed0cd4299094ba9c3b8d675577dd6?apiKey=1487a4e6add04b00a5f73b9046459d15&"
      />
      <div className="line-div" />
      <div className="users-main-page-v5-child7" />
      <div className="users-main-page-v5-child8" />
      <img
        className="mingcutecheck-fill-icon"
        alt=""
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4a5423a60ba25e0b32220396b17db1d15c2c742a8ca24564316cecb6bd76bf4?apiKey=1487a4e6add04b00a5f73b9046459d15&"
      />
      <div className="users-main-page-v5-child9" />
      <div className="users-main-page-v5-child10" />
      <b className="dropping-tier-in">Dropping tier in:</b>
      <b className="d-10h">29D 10H</b>
      <b className="tier-3">TIER 3</b>
      <div className="users-main-page-v5-child11" />
      <img
        className="users-main-page-v5-child12"
        alt=""
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/33332bb981c18aa8c5327131cca3d65cbbe7ab43d3d0509eb9078eafc7f5cd38?apiKey=1487a4e6add04b00a5f73b9046459d15&"
      />
      <div className="users-main-page-v5-child13" />
      <img
        className="users-main-page-v5-child14"
        alt=""
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/33ffd3834dd10fda1a466b9929e4ecd61153f4d8dfde3bf0e993136da18ff5c9?apiKey=1487a4e6add04b00a5f73b9046459d15&"
      />
      <div className="users-main-page-v5-child15" />
      <b className="tier-4">TIER 4</b>
      <div className="users-main-page-v5-child16" />
      <img
        className="users-main-page-v5-child17"
        alt=""
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7616171af7934d5c204ebce830cf480531027af9c81af339a6b2720064d2d380?apiKey=1487a4e6add04b00a5f73b9046459d15&"
      />
      <img
        className="users-main-page-v5-child18"
        alt=""
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/17ca856c1f64cf7875b622be6a27658a71113c544a5f4e6847865ebddfeb5058?apiKey=1487a4e6add04b00a5f73b9046459d15&"
      />
      <div className="users-main-page-v5-child19" />
      <div className="users-main-page-v5-child20" />
      <div className="users-main-page-v5-child21" />
      <div className="users-main-page-v5-child22" />
      <div className="log-out">Log out</div>
      <p className="text-reward" style={changeStyle.reward1 || changeStyle.reward2 ? texthover : textNormal}> {changeStyle.reward1 ? 
      "Atomic Habits by James Clear is a comprehensive, practical guide on how to change your habits and get 1% better every day. Using a framework called the Four Laws of Behavior Change, Atomic Habits teaches readers a simple set of rules for creating good habits and breaking bad ones." 
      : "Enjoy a discount when shopping for something that you need or just indulge yourself!"}</p>
      <img
        className="material-symbolslogout-icon"
        alt=""
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/df2523439314fd635550447ad14804c65a7f40be469bdfaa1403bb30045d37ac?apiKey=1487a4e6add04b00a5f73b9046459d15&"
      />
      <img
        className="material-symbolslock-outline-icon"
        alt=""
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/351540b6769d86329bb34b7b1f0e400c4f9161e038dd28e06182805dca7503fb?apiKey=1487a4e6add04b00a5f73b9046459d15&"
      />
      <img
        className="material-symbolslock-outline-icon1"
        alt=""
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/351540b6769d86329bb34b7b1f0e400c4f9161e038dd28e06182805dca7503fb?apiKey=1487a4e6add04b00a5f73b9046459d15&"
      />
      <img
        className="material-symbolslock-outline-icon2"
        alt=""
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/351540b6769d86329bb34b7b1f0e400c4f9161e038dd28e06182805dca7503fb?apiKey=1487a4e6add04b00a5f73b9046459d15&"
      />
      <img
        className="material-symbolslock-outline-icon3"
        alt=""
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/351540b6769d86329bb34b7b1f0e400c4f9161e038dd28e06182805dca7503fb?apiKey=1487a4e6add04b00a5f73b9046459d15&"
      />
      <b className="tier-31">TIER 3</b>
      <div className="component-1">
        <div className="component-1-child" />
        {/* <Button aria-describedby={id} className="component-1-child" type="button" onClick={handleClick}>
        START REFERRING
        </Button> */}
        <button className="component-1-child" onClick={() => {setVisible(true)}}>REFER AGAIN</button>  
         
      </div>
      <div className="component-3">
        <img
        onMouseLeave={() => setChangeStyle(prevState => {return {...prevState, reward1: false}})}
        onMouseEnter={() => setChangeStyle(prevState => {return {...prevState, reward1: true}})}
        style={changeStyle.reward1 ? styleHover : styleNormal}
          className="component-3-child"
          alt=""
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/25c653830a0bf3a6e299ebb473d2ae0ea7ffe033ce9e19dafac95ec7647c8e42?apiKey=1487a4e6add04b00a5f73b9046459d15&"
        />
        <img
        onMouseLeave={() => setChangeStyle(prevState => {return {...prevState, reward2: false}})}
        onMouseEnter={() => setChangeStyle(prevState => {return {...prevState, reward2: true}})}
        style={changeStyle.reward2 ? styleHover : styleNormal}
          className="component-3-item"
          alt=""
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/65319b3450d741ff42fada16b1dc7297e11184055e44edc2b01b515cc20f0ffe?apiKey=1487a4e6add04b00a5f73b9046459d15&"
        />
        <b className="tier-21">TIER 2</b>
        <div className="component-3-inner" />
        <b className="cant-decide">Can’t decide?</b>
        <div className="component-10">
          <div className="component-10-child" />
          <button className="component-10-child" onClick={() => {setVisible2(true)}}>SPIN</button>
          {/* <button className="component-10-child">SPIN</button> */}
        </div>
      </div>
      <div className="users-main-page-v5-child23" />
      <div className="season-switch-autumn">
        <b className="autumn-season">
          <span className="autumn-season-txt-container">
            <span>
              AUTUMN
              <span className="span">{` `}</span>
            </span>
            <span className="season">SEASON</span>
          </span>
        </b>
       
      </div>

{visible && <div className="card flex justify-content-center "  >

           <Dialog visible={visible} style={{ width: '40rem', height: '40rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header={headerElement} footer={footerContent} modal className=" referral-popup p-fluid "  onHide={closepopup}>
              <div className="new-start-referring-child4" />
              <div className="new-start-referring-child5" />
              <div className="new-start-referring-child6" />
              <div className="new-start-referring-child7" />
              <b className="referral-link">Referral Link</b>
              <div className="email-invite">Email Invite</div>
              <svg className="cicopy-icon" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.125 7.125V4.90833C7.125 4.02167 7.125 3.57833 7.29758 3.2395C7.44958 2.94104 7.69104 2.69958 7.9895 2.54758C8.32833 2.375 8.77167 2.375 9.65833 2.375H14.0917C14.9783 2.375 15.4217 2.375 15.7605 2.54758C16.0584 2.69938 16.3006 2.94159 16.4524 3.2395C16.625 3.57833 16.625 4.02167 16.625 4.90833V9.34167C16.625 10.2283 16.625 10.6717 16.4524 11.0105C16.3005 11.3083 16.0583 11.5505 15.7605 11.7024C15.4217 11.875 14.9783 11.875 14.094 11.875H11.875M7.125 7.125H4.90833C4.02167 7.125 3.57833 7.125 3.2395 7.29758C2.94156 7.44934 2.69934 7.69156 2.54758 7.9895C2.375 8.32833 2.375 8.77167 2.375 9.65833V14.0917C2.375 14.9783 2.375 15.4217 2.54758 15.7605C2.69938 16.0584 2.94159 16.3006 3.2395 16.4524C3.57754 16.625 4.02088 16.625 4.90596 16.625H9.34483C10.2291 16.625 10.6717 16.625 11.0105 16.4524C11.3084 16.3006 11.5506 16.0584 11.7024 15.7605C11.875 15.4217 11.875 14.9791 11.875 14.094V11.875M7.125 7.125H9.34167C10.2283 7.125 10.6717 7.125 11.0105 7.29758C11.3084 7.44938 11.5506 7.69159 11.7024 7.9895C11.875 8.32754 11.875 8.77087 11.875 9.65596V11.875" stroke="#A66333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div className="httpsbierens-debt-referray">
                https://bierens-debt-referra/Yai_34
              </div>

              <div className="getpoints">
                Get Points
              </div>

              <div className="new-start-referring-inner" />
              <div className="send-a-custom">Send a custom email to a friend</div>
              <b className="pts1">
                <span className="pts-txt">
                  <span className="pts10">10</span>
                  <span className="span1">{` `}</span>
                  <span className="pts2">pts</span>
                </span>
              </b>
              <div className="new-start-referring-child1" />
              <div className="send-the-invitation">
                Send the invitation link to 3 users
              </div>
              <b className="pts3">
                <span className="pts-txt">
                  <span className="pts10">50</span>
                  <span className="span1">{` `}</span>
                  <span className="pts2">pts</span>
                </span>
              </b>
              <div className="new-start-referring-child2" />
              <div className="new-start-referring-child3" />
              <b className="progress">2 / 3</b>
              <b className="complete">COMPLETE</b>
           </Dialog>
       </div> }
       {visible2 && <div className="card flex justify-content-center"  >

           <Dialog visible={visible2} style={{ width: '22rem', height: '28rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header={header2Element} footer={footer2Content} modal className=" referral-popup p-fluid "  onHide={closepopup2}>

              <img
              className="component-3-child-popup"
              alt=""
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/25c653830a0bf3a6e299ebb473d2ae0ea7ffe033ce9e19dafac95ec7647c8e42?apiKey=1487a4e6add04b00a5f73b9046459d15&"
              />

              <div className="component-3-child-popup-effect"></div>

              <div class="loader-container">
                <div class="loader"></div>

              </div>


              

           </Dialog>
       </div> }
       <div style={changeStyle.reward1 || changeStyle.reward2 ? styleBackgroundHover : styleBackground}>  </div>

       { visible && <div style={backgroundHover}></div> }
       { visible2 && <div style={backgroundHover}></div> }
    </div>
    
  );
};




