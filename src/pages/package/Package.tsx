import "../../styles/package/package.css";
import { useState } from "react";
import Modal from 'react-modal';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/Fa'
import { RiDeleteBin5Line } from 'react-icons/ri';





const Package = () => {
    // State variables for managing input fields and modals

    const [ searchValue, setSearchValue] = useState("");
    const [selectedValue, setSelectedValue] = useState("10");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isPopuptwoOpen, setIsPopuptwoOpen] = useState(false);
    const [isPopupUpdateOpen, setIsPopupUpdateOpen] = useState(false);
    const [isPopupViewOpen, setIsPopupViewOpen] = useState(false);

    const [ Name, setName] = useState("");
    const [costPrice, setCostPrice] = useState("");
    const [specialPrice, setspecialPrice] = useState("");
    const [days, setdays] = useState("");
    // const [selectedTimeValue, setselectedTimeValue] = useState("Select Sevice Time");
    const [selectedServiceValue, setselectedServiceValue] = useState("Choose Services");
    const [selecteddayValue, setSelectedDayValue] = useState("Choose Services");


  // Define functions for opening and closing other modals

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
          marginTop: '4em'
          
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
          width: '650px',
          minHeight: '550px',
        },
    };
    const openPopuptwo = () => {
      setIsPopuptwoOpen(true);
    
    };
    
    const closePopuptwo = () => {
      setIsPopuptwoOpen(false);
    };

    const centerStylestwo =  {
      overlay: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        marginTop: '4em'
        
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
        minHeight: '300px',
      },
  };
  const openPopupUpdate = () => {
    setIsPopupUpdateOpen(true);
  
  };
  
  const closePopupUpdate = () => {
    setIsPopupUpdateOpen(false);
  };

  const openPopupView = () => {
    setIsPopupViewOpen(true);
  
  };
  
  const closePopupView = () => {
    setIsPopupViewOpen(false);
  };
    return (
      <div>
  
        
        <h2>Packages</h2>
        <div className="header_container">
        <p>Boost revenue with treatment packages, turning clients into loyal regulars. Manage package history for seamless, increased profitability.</p>
        
        <div>
        <button className="primary-button" onClick={openPopup}>Add Package</button>
        </div>
        </div>
        <div className="search_container">
        <div>
        <div className="show_container">
        <p>Show</p>
        <select value={selectedValue}
                onChange={(e)=>{
                    setSelectedValue(e.target.value);
                }}
                className="selectbox_container"
>
                <option value="">5</option>
                <option value="option1">10</option>
                <option value="option2">25</option>
                <option value="option3">50</option>
        </select>
        </div>

       </div>
        <input 
        type="text"
        value={searchValue}
        onChange={(e)=> {
            e.preventDefault()
            setSearchValue(e.target.value)
        }}
        placeholder="Search..."
        className="searchbar"

          />
          
          </div>


          <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{cursor: 'pointer'}} onClick={openPopupView}>Special Package</td>
            <td>1000</td>
            <td> 
              <div className="btn_delete_edit">
              <  FaRegEdit size={20} onClick={openPopupUpdate} className="icon-with-gap" />
              <  RiDeleteBin5Line size={20} onClick={openPopuptwo} />
              </div>
            </td>
          </tr>  
        </tbody>
      </table>
    



      <Modal
        isOpen={isPopupOpen}
        onRequestClose={closePopup}
        contentLabel="Example Popup"
        style={centerStyles}
      >          
        <div>
          <div className="close_btn">
            <  AiOutlineCloseCircle size={30} onClick={closePopup} />
         </div>
            <h2 style={{ textAlign: 'center' }}>Add New Package</h2>
            <p className="intro_container">Generate diverse packages by including names, offer prices, and the number of services and sessions associated with each package.</p>
            

        <input
        type="text"
        value={Name}
        onChange={(e)=> {
            e.preventDefault()
            setName(e.target.value)
        }}
        placeholder="Package Name"
        className="inputbox_container"
        />
        <select value={selectedServiceValue}
                onChange={(e)=>{
                    setselectedServiceValue(e.target.value);
                }}
          className="first_seelectbox">
                <option value="">Choose Services</option>
                <option value="option1">Clean-up facial(Price: 15.00)</option>
                <option value="option2">Hair Coloring(Price: 15.00)</option>
        </select>

        

        <div className="name_container">
            <input
                type="text"
                value={costPrice}
                onChange={(e)=> {
                    e.preventDefault()
                    setCostPrice(e.target.value)
                }}
                placeholder="Cost Price ()"
                className="inputbox_container"
             />
              <input
                type="text"
                value={specialPrice}
                onChange={(e)=> {
                    e.preventDefault()
                    setspecialPrice(e.target.value)
                }}
                placeholder="Special Price ()"
                className="inputbox_container"
             />
   
        </div>
        <div className="name_container">
        <input
              type="text"
              value={days}
              onChange={(e)=> {
                  e.preventDefault()
                  setdays(e.target.value)
              }}
              placeholder="Number of days"
              className="inputbox_container"
          />
        <select value={selecteddayValue}
                onChange={(e)=>{
                    setSelectedDayValue(e.target.value);
                }}
                className="first_seelectbox"
  >
                <option value="">Days</option>
                <option value="option1">Week</option>
                <option value="option2">Month</option>
                <option value="option2">Year</option>

        </select>

        </div>

        <div className="save_button_possition">
        <button className="save_button" onClick={closePopup}>Save</button>
        </div>


        </div>

      </Modal>

      <Modal
        isOpen={isPopuptwoOpen}
        onRequestClose={closePopuptwo}
        contentLabel="Delete"
        style={centerStylestwo}
        
      >          
          <div className="deleteclose_icon">
            <  AiOutlineCloseCircle size={80} style={{ color: '#990000' }} onClick={closePopup} />
         </div>
            <h2 style={{ textAlign: 'center' }}>Are you sure?</h2>
            <p style={{ textAlign: 'center' }}>Do you really want to delete theser records? This process cannot be undone.</p>
            

        <div className="YesNo_button_Gap">
            <button className="cancel_button" onClick={closePopuptwo}>Cancel</button>
            <button className="delete_button" onClick={closePopuptwo}>Delete</button>
        </div>


        

      </Modal>

      <Modal
        isOpen={isPopupUpdateOpen}
        onRequestClose={closePopupUpdate}
        contentLabel="Edit Popup"
        style={centerStyles}
        
      >          
        <div>
          <div className="close_btn">
            <  AiOutlineCloseCircle size={30} onClick={closePopupUpdate} />
         </div>
            <h2 style={{ textAlign: 'center' }}>Edit Package</h2>
            <p className="intro_container">Generate diverse packages by including names, offer prices, and the number of services and sessions associated with each package.</p>
            

        <input
        type="text"
        value="Special Package"
        onChange={(e)=> {
            e.preventDefault()
            setName(e.target.value)
        }}
        placeholder="Package Name"
        className="inputbox_container"
        />
        <select value={selectedServiceValue}
                onChange={(e)=>{
                    setselectedServiceValue(e.target.value);
                }}
          className="first_seelectbox">
                <option value="">Choose Services</option>
                <option value="option1">Clean-up facial(Price: 15.00)</option>
                <option value="option2">Hair Coloring(Price: 15.00)</option>
        </select>
        {/* create table for display package details  */}
        <table className="table">
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Action</th>
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hair coloring</td>
            <td>1</td>
            <td> 
              Rs.1000
            </td>
            <td className="editdlt_btn">
            <  RiDeleteBin5Line size={20} />
            </td>
          </tr>  
          <tr>
            <td>Clean-up facial</td>
            <td>1</td>
            <td> 
              Rs.600
            </td>
            <td className="editdlt_btn">
            <  RiDeleteBin5Line size={20}  />
            </td>
          </tr> 
        </tbody>
      </table>

        

        <div className="name_container">
            <input
                type="text"
                value="Rs.1200.00"
                onChange={(e)=> {
                    e.preventDefault()
                    setCostPrice(e.target.value)
                }}
                placeholder="Cost Price ()"
                className="inputbox_container"
             />
              <input
                type="text"
                value="Rs.1000.00"
                onChange={(e)=> {
                    e.preventDefault()
                    setspecialPrice(e.target.value)
                }}
                placeholder="Special Price ()"
                className="inputbox_container"
             />
   
        </div>
        <div className="name_container">
        <input
              type="text"
              value="5"
              onChange={(e)=> {
                  e.preventDefault()
                  setdays(e.target.value)
              }}
              placeholder="Number of days"
              className="inputbox_container"
          />
        <select value={selecteddayValue}
                onChange={(e)=>{
                    setSelectedDayValue(e.target.value);
                }}
                className="first_seelectbox"
  >
                <option value="">Days</option>
                <option value="option1">Week</option>
                <option value="option2">Month</option>
                <option value="option2">Year</option>

        </select>

        </div>

        <div className="save_button_possition">
        <button className="save_button" onClick={closePopup}>Save</button>
        </div>


        </div>


        

      </Modal>

      <Modal
        isOpen={isPopupViewOpen}
        onRequestClose={closePopupView}
        contentLabel="Example Popup"
        style={centerStyles}
        
      >          
        <div>
          <div className="close_btn">
            <  AiOutlineCloseCircle size={30} onClick={closePopupView} />
         </div>
            <h2 style={{ textAlign: 'center' }}>View Package</h2>
            <p className="intro_container">Generate diverse packages by including names, offer prices, and the number of services and sessions associated with each package.</p>
            

        <p style={{fontSize: '18px'}}>Special package</p>
        
        <table className="table">
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Qty</th>
            <th>Price</th>
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hair coloring</td>
            <td>1</td>
            <td> 
              Rs.1000
            </td>
          </tr>  
          <tr>
            <td>Clean-up facial</td>
            <td>1</td>
            <td> 
              Rs.600
            </td>
          </tr> 
        </tbody>
      </table>
      <p style={{margin:'10px 20px 0px 0px', textAlign:'end', fontSize: '18px'}}>Total price : 1600.00</p>

        </div>


        

      </Modal>




      </div>
    )
  }
  
  export default Package;