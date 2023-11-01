import { useState } from 'react';

import Modal from 'react-modal';
import Closebutton from "./Closebutton";
import Donebutton from "./Donebutton";
import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { AiOutlineCheckCircle } from 'react-icons/ai';




import "../../styles/addons/addons.css";

const Addons = () => {
const [isPopupOpen, setIsPopupOpen] = useState(false);

const openPopup = () => {
  setIsPopupOpen(true);

};

const closePopup = () => {
  setIsPopupOpen(false);
};
const centerStyles =  {
    overlay: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '8px',
      padding: '20px',
      border: 'none',
      width: '400px',
      minHeight: '400px',
    },
  };
    return (
      <div>


         <button onClick={openPopup}>Open Popup</button>
         <Modal
        isOpen={isPopupOpen}
        onRequestClose={closePopup}
        contentLabel="Example Popup"
        style={centerStyles}
      >

        <div>
            {/* <span className="close" onClick={closePopup}>
              &times;
            </span> */}
            <div className='popup_container'>
              <h2>Service Name : </h2>
              <p>Hair Colouring</p>
            </div>
        
            <div className='popup_container'>
                 <h2>Product Name : </h2>
                 <p>Colour Cream</p>
            </div>
        

        {/* <input type="text" placeholder="Service Name" /> */}
        <div className='popup_container'>

            <h2>Brand Name : </h2>
            <select value="" >
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
        </div>
        <div className='popup_container'>
            <h2>Price : </h2>
            <p>LKR.2000.00</p>
        </div>
        </div>
          
            <div className='btn_center'>
             < AiOutlineCheckCircle size={30} onClick={closePopup} />
             < RiCloseCircleLine size={30}  onClick={closePopup} />


            </div>
      </Modal>
       
      </div>
    )
  }
  
  export default Addons

































