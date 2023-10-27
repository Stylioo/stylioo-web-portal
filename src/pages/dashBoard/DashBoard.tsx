import * as React from 'react';
// import "../../styles/services/services.css";
import { useState, ChangeEvent, useEffect, useCallback } from "react";
import Modal from 'react-modal';



import axios from '../../axios'
import Loading from '../../components/Loading';


const DashBoard = () => {


  return (
    <div>

      <h2>Dashboard</h2>
      <div className="header_container">
        <p>Create, edit and manage service list</p>
{/* 
        <div>
          <button className="primary_button" onClick={openPopup}>Add</button>
        </div> */}
      </div>
  
    </div>
  )
}

export default DashBoard
