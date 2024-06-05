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
// import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';

export default function SimplePopup() {
  
  const [anchor, setAnchor] = React.useState(null);
  const [visible, setVisible] = useState(false);
  const [ratingValue, setRatingValue] = useState(null);
  const [userData, setUserData] = useState({description: "", 
    rating: ""
})

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

  const open = Boolean(anchor);
  const id = open ? 'simple-popper' : undefined;

  const headerElement = (
    <div >
        
        <div className="header-dialog">Refer </div>
        <div> </div>
    </div>

  );

const RemoveFeedbackLocalStorage = () => {
    setVisible(false)
}

const footerContent = (
    <div className="footer-dialog">
        <Button label="DONE" className="popup-button" onClick={RemoveFeedbackLocalStorage} autoFocus />
    </div>
);


  return (
    
    <div className="users-main-page-v5">
      
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
        <button className="component-1-child" onClick={() => {setVisible(true)}}>START REFERRING</button>  
         
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
          <button className="component-10-child">SPIN</button>
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
     {visible && <div className="card flex justify-content-center"  >

           <Dialog visible={visible} style={{ width: '40rem', height: '35rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header={headerElement} footer={footerContent} modal className=" referral-popup p-fluid "  onHide={RemoveFeedbackLocalStorage}>
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
       </div> }
       { visible && <div style={backgroundHover}></div> }
    </div>
    
  );
};




