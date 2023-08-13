import * as React from 'react';
import "../../styles/services/services.css";
import { useState, ChangeEvent } from "react";
import Modal from 'react-modal';
import CustomDropdown from './CustomDropdown';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/Fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';




const Services = () => {
    const [ searchValue, setSearchValue] = useState("");
    const [selectedValue, setSelectedValue] = useState("10");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isPopuptwoOpen, setIsPopuptwoOpen] = useState(false);
    const [isPopupViewOpen, setIsPopupViewOpen] = useState(false);
    const [isPopupViewtwoOpen, setIsPopupViewtwoOpen] = useState(false);
    const [iseditPopupOpen, setIseditPopupOpen] = useState(false);


    const [ Name, setName] = useState("");
    const [Description, setDescription] = useState("");
    const [Price, setPrice] = useState("");
    const [selectedTimeValue, setselectedTimeValue] = useState("Select Sevice Time");
    // const [selectedStaffValue, setselectedStaffValue] = useState([]);
    const dropdownOptions = ['Janith', 'Chirasi', 'Pabasara'];

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
          minHeight: '650px',
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

  const openPopupView = () => {
    setIsPopupViewOpen(true);
  
  };
  
  const closePopupView = () => {
    setIsPopupViewOpen(false);
  };
  const openPopupViewtwo = () => {
    setIsPopupViewtwoOpen(true);
  
  };
  
  const closePopupViewtwo = () => {
    setIsPopupViewtwoOpen(false);
  };

  const openeditPopup = () => {
    setIseditPopupOpen(true);
  
  };
  
  const closeeditPopup = () => {
    setIseditPopupOpen(false);
  };

  // const [selectedImage, setSelectedImage] = useState<File | null>(null);

  // const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     setSelectedImage(file);
  //   }
  // };

  

    return (
      <div>
        
        <h2>Services List</h2>
        <div className="header_container">
        <p>Create, edit and manage service list</p>
        
        <div>
        <button className="primary_button" onClick={openPopup}>Add</button>
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
            <th>Sr.No</th>
            <th>Parent</th>
            <th>Name</th>
      
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Facisl Service</td>
            <td></td>
            <td>              
              <div className="btn_delete_edit">
              <  FaRegEdit size={20} onClick={openeditPopup} className="icon-with-gap" />
              <  RiDeleteBin5Line size={20} onClick={openPopuptwo} />
              </div>
              </td>
          </tr>
          <tr>
            <td>2</td>
            <td></td>
            <td style={{cursor: 'pointer'}} onClick={openPopupView}>Clean-up facial</td>

            <td>
            <div className="btn_delete_edit">
              <  FaRegEdit size={20} onClick={closePopup} className="icon-with-gap" />
              <  RiDeleteBin5Line size={20} onClick={openPopuptwo} />
              </div>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Hair service</td>
            <td></td>
            <td>
            <div className="btn_delete_edit">
              <  FaRegEdit size={20} onClick={closePopup} className="icon-with-gap" />
              <  RiDeleteBin5Line size={20} onClick={openPopuptwo} />
              </div>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td></td>
            <td style={{cursor: 'pointer'}} onClick={openPopupViewtwo}>Hair Coloring</td>
            <td>
            <div className="btn_delete_edit">
              <  FaRegEdit size={20} onClick={closePopup} className="icon-with-gap" />
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
            <h2 style={{ textAlign: 'center' , marginBottom: '10px' }}>Add Service</h2>
            
        <div className="name_container">
        <select value={selectedValue}
                onChange={(e)=>{
                    setSelectedValue(e.target.value);
                }}
        className="first_seelectbox">
                <option value="">Select Group</option>
                <option value="option1">Facial Service</option>
                <option value="option2">Hair Service</option>
        </select>
        <input
        type="text"
        value={Name}
        onChange={(e)=> {
            e.preventDefault()
            setName(e.target.value)
        }}
        placeholder="Name"
        className="inputbox_container"
        />
        </div>

        <textarea
        value={Description}
        onChange={(e)=> {
            e.preventDefault()
            setDescription(e.target.value)
        }}
        rows={5}
        placeholder="Description..."
        className="inputbox_container_description"
        />

        <div className="name_container">
            <input
                type="text"
                value={Price}
                onChange={(e)=> {
                    e.preventDefault()
                    setPrice(e.target.value)
                }}
                placeholder="Price"
                className="inputbox_container"
             />
        <select value={selectedTimeValue}
                onChange={(e)=>{
                    setselectedTimeValue(e.target.value);
                }}
        className="first_seelectbox">
                <option value="">Select Sevice Time</option>
                <option value="option1">00.00</option>
                <option value="option2">00.05</option>
                <option value="option1">00.10</option>
                <option value="option2">00.15</option>
                <option value="option1">00.20</option>
                <option value="option2">00.25</option>
                <option value="option1">00.30</option>
                <option value="option2">00.35</option>
                <option value="option1">00.40</option>
                <option value="option2">00.45</option>
                <option value="option1">00.50</option>
                <option value="option2">00.55</option>
                <option value="option1">01.00</option>
                <option value="option2">01.05</option>
                <option value="option1">01.10</option>
                <option value="option2">01.15</option>
                <option value="option1">01.20</option>
                <option value="option2">01.25</option>
                <option value="option1">01.30</option>
                <option value="option2">01.35</option>
                <option value="option1">01.40</option>
                <option value="option2">01.45</option>
                <option value="option1">01.50</option>
                <option value="option2">01.55</option>
                <option value="option1">02.00</option>
                <option value="option2">02.05</option>
                <option value="option1">02.10</option>
                <option value="option2">02.15</option>
                <option value="option1">02.20</option>
                <option value="option2">02.25</option>
                <option value="option1">02.30</option>
                <option value="option2">02.35</option>
                <option value="option1">02.40</option>
                <option value="option2">02.45</option>
                <option value="option1">02.50</option>
                <option value="option2">02.55</option>
                <option value="option1">03.00</option>
                <option value="option2">03.05</option>
                <option value="option1">03.10</option>
                <option value="option2">03.15</option>
                <option value="option1">03.20</option>
                <option value="option2">03.25</option>
                <option value="option1">03.30</option>
                <option value="option2">03.35</option>
                <option value="option1">03.40</option>
                <option value="option2">03.45</option>
                <option value="option1">03.50</option>
                <option value="option2">03.55</option>
                <option value="option1">04.00</option>
                <option value="option1">04.00</option>
                <option value="option2">04.05</option>
                <option value="option1">04.10</option>
                <option value="option2">04.15</option>
                <option value="option1">04.20</option>
                <option value="option2">04.25</option>
                <option value="option1">04.30</option>
                <option value="option2">04.35</option>
                <option value="option1">04.40</option>
                <option value="option2">04.45</option>
                <option value="option1">04.50</option>
                <option value="option2">04.55</option>
                <option value="option1">05.00</option>
                <option value="option2">05.05</option>
                <option value="option1">05.10</option>
                <option value="option2">05.15</option>
                <option value="option1">05.20</option>
                <option value="option2">05.25</option>
                <option value="option1">05.30</option>
                <option value="option2">05.35</option>
                <option value="option1">05.40</option>
                <option value="option2">05.45</option>
                <option value="option1">05.50</option>
                <option value="option2">05.55</option>
                <option value="option1">06.00</option>
                <option value="option2">06.05</option>
                <option value="option1">06.10</option>
                <option value="option2">06.15</option>
                <option value="option1">06.20</option>
                <option value="option2">06.25</option>
                <option value="option1">06.30</option>
                <option value="option2">06.35</option>
                <option value="option1">06.40</option>
                <option value="option2">06.45</option>
                <option value="option1">06.50</option>
                <option value="option2">06.55</option>
                <option value="option1">07.00</option>
                <option value="option2">07.05</option>
                <option value="option1">07.10</option>
                <option value="option2">07.15</option>
                <option value="option1">07.20</option>
                <option value="option2">07.25</option>
                <option value="option1">07.30</option>
                <option value="option2">07.35</option>
                <option value="option1">07.40</option>
                <option value="option2">07.45</option>
                <option value="option1">07.50</option>
                <option value="option2">07.55</option>
                <option value="option1">08.00</option>
                <option value="option1">08.00</option>
                <option value="option2">08.05</option>
                <option value="option1">08.10</option>
                <option value="option2">08.15</option>
                <option value="option1">08.20</option>
                <option value="option2">08.25</option>
                <option value="option1">08.30</option>
                <option value="option2">08.35</option>
                <option value="option1">08.40</option>
                <option value="option2">08.45</option>
                <option value="option1">08.50</option>
                <option value="option2">08.55</option>
                <option value="option1">08.00</option>
                <option value="option2">08.05</option>
                <option value="option1">08.10</option>
                <option value="option2">08.15</option>
                <option value="option1">08.20</option>
                <option value="option2">08.25</option>
                <option value="option1">08.30</option>
                <option value="option2">08.35</option>
                <option value="option1">08.40</option>
                <option value="option2">08.45</option>
                <option value="option1">08.50</option>
                <option value="option2">08.55</option>
                <option value="option1">09.00</option>
                <option value="option1">09.00</option>
                <option value="option2">09.05</option>
                <option value="option1">09.10</option>
                <option value="option2">09.15</option>
                <option value="option1">09.20</option>
                <option value="option2">09.25</option>
                <option value="option1">09.30</option>
                <option value="option2">09.35</option>
                <option value="option1">09.40</option>
                <option value="option2">09.45</option>
                <option value="option1">09.50</option>
                <option value="option2">09.55</option>
                <option value="option1">10.00</option>
        </select>
        </div>
        <p style={{
            marginTop: '40px',
        }}>Who can provide the service * </p>
        
      <div>
           <CustomDropdown options={dropdownOptions} />
      </div>
        <button className="save-button" onClick={openPopup}>Save</button>


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
        isOpen={isPopupViewOpen}
        onRequestClose={closePopupView}
        contentLabel="Example Popup"
        style={centerStyles}
        
      >          
        <div>
          <Card variant="outlined" style={{border: '1px solid rgb(79, 79, 79)'}}>
              <React.Fragment>
          <CardContent> 
       
            <Typography variant="body2">

  
          <div className="close_btn">
            <  AiOutlineCloseCircle size={30} onClick={closePopupView} />
         </div>
            <h2 style={{ textAlign: 'center' }}>View Service</h2>
            <p className="intro_container">Generate diverse packages by including names, group, description, price and srvice time and sessions associated with each service.</p>
            
        <Typography style={{margin: '30px 0px 20px 0px'}} variant="h5" gutterBottom>
        Clean-up facial
      </Typography>


      <Card sx={{ minWidth: 275 }} style={{border: '1px solid rgb(79, 79, 79)'}}>
      <CardContent>

        <Typography variant="body2">
        A clean-up facial is a professional skincare treatment that deeply cleanses and refreshes the skin on the face. It involves cleansing, exfoliation, steam, extraction of impurities like blackheads and whiteheads, and the application of a mask. The treatment aims to improve skin texture, unclog pores, and leave the skin looking revitalized and healthier. 
          
        </Typography>
      </CardContent>
    </Card>


        
        <table className="table">
        <thead>
          <tr>
            <th>Price</th>
            <th>Service Time</th>
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rs.1500</td>
            <td>00.30</td>
     
          </tr>  

        </tbody>
      </table>
      <p style={{margin:'30px 20px 50px 0px', textAlign:'end', fontSize: '18px'}}>Total price : 1600.00</p>
      </Typography>
          </CardContent>

        </React.Fragment>
        </Card>

        </div>


        

      </Modal>

    
      <Modal
        isOpen={isPopupViewtwoOpen}
        onRequestClose={closePopupViewtwo}
        contentLabel="View 2"
        style={centerStyles}
        
      >          
        <div>
          <Card variant="outlined" style={{border: '1px solid rgb(79, 79, 79)'}}>
              <React.Fragment>
          <CardContent> 
       
            <Typography variant="body2">

  
          <div className="close_btn">
            <  AiOutlineCloseCircle size={30} onClick={closePopupViewtwo} />
         </div>
            <h2 style={{ textAlign: 'center' }}>View Service</h2>
            <p className="intro_container">Generate diverse packages by including names, group, description, price and srvice time and sessions associated with each service.</p>
            
        <Typography style={{margin: '30px 0px 20px 0px'}} variant="h5" gutterBottom>
        Hair Coloring
      </Typography>


      <Card sx={{ minWidth: 275 }} style={{border: '1px solid rgb(79, 79, 79)'}}>
      <CardContent>

        <Typography variant="body2">
            Hair coloring is the art of changing hair color. It can be subtle, like adding highlights, or bold, with vibrant shades. Professionals use various techniques to apply color, giving you a new look or covering grays. It's a creative way to express your style and enhance your appearance.        </Typography>
      </CardContent>
    </Card>


        
        <table className="table">
        <thead>
          <tr>
            <th>Price</th>
            <th>Service Time</th>
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rs.2000</td>
            <td>00.45</td>
     
          </tr>  

        </tbody>
      </table>
      <p style={{margin:'30px 20px 50px 0px', textAlign:'end', fontSize: '18px'}}>Total price : 2000.00</p>
      </Typography>
          </CardContent>

        </React.Fragment>
        </Card>

        </div>


        

      </Modal>

      {/* <div>
      <h2>Image Upload</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {selectedImage && (
        <div>
          <h3>Selected Image Preview:</h3>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            style={{ maxWidth: '100%', maxHeight: '200px' }}
          />
        </div>
      )}
      </div> */}

<Modal
        isOpen={iseditPopupOpen}
        onRequestClose={closeeditPopup}
        contentLabel="Sevice Edit"
        style={centerStyles}
      >          
        <div>
          <div className="close_btn">
            <  AiOutlineCloseCircle size={30} onClick={closeeditPopup} />
         </div>
            <h2 style={{ textAlign: 'center' , marginBottom: '10px' }}>Edit Service</h2>
            
        <div className="name_container">
        <select value={selectedValue}
                onChange={(e)=>{
                    setSelectedValue(e.target.value);
                }}
        className="first_seelectbox">
                <option value="">Facial Service</option>
                <option value="option1">Facial Service</option>
                <option value="option2">Hair Service</option>
        </select>
        <input
        type="text"
        value="Clean-up facial"
        onChange={(e)=> {
            e.preventDefault()
            setName(e.target.value)
        }}
        placeholder="Name"
        className="inputbox_container"
        />
        </div>

        <textarea
        value="A clean-up facial is a professional skincare treatment that deeply cleanses and refreshes the skin on the face. It involves cleansing, exfoliation, steam, extraction of impurities like blackheads and whiteheads, and the application of a mask. The treatment aims to improve skin texture, unclog pores, and leave the skin looking revitalized and healthier."
        onChange={(e)=> {
            e.preventDefault()
            setDescription(e.target.value)
        }}
        rows={5}
        placeholder="Description..."
        className="inputbox_container_description"
        />

        <div className="name_container">
            <input
                type="text"
                value="Rs.1500"
                onChange={(e)=> {
                    e.preventDefault()
                    setPrice(e.target.value)
                }}
                placeholder="Price"
                className="inputbox_container"
             />
        <select value={selectedTimeValue}
                onChange={(e)=>{
                    setselectedTimeValue(e.target.value);
                }}
        className="first_seelectbox">
                <option value="">00.30</option>
                <option value="option1">00.00</option>
                <option value="option2">00.05</option>
                <option value="option1">00.10</option>
                <option value="option2">00.15</option>
                <option value="option1">00.20</option>
                <option value="option2">00.25</option>
                <option value="option1">00.30</option>
                <option value="option2">00.35</option>
                <option value="option1">00.40</option>
                <option value="option2">00.45</option>
                <option value="option1">00.50</option>
                <option value="option2">00.55</option>
                <option value="option1">01.00</option>
                <option value="option2">01.05</option>
                <option value="option1">01.10</option>
                <option value="option2">01.15</option>
                <option value="option1">01.20</option>
                <option value="option2">01.25</option>
                <option value="option1">01.30</option>
                <option value="option2">01.35</option>
                <option value="option1">01.40</option>
                <option value="option2">01.45</option>
                <option value="option1">01.50</option>
                <option value="option2">01.55</option>
                <option value="option1">02.00</option>
                <option value="option2">02.05</option>
                <option value="option1">02.10</option>
                <option value="option2">02.15</option>
                <option value="option1">02.20</option>
                <option value="option2">02.25</option>
                <option value="option1">02.30</option>
                <option value="option2">02.35</option>
                <option value="option1">02.40</option>
                <option value="option2">02.45</option>
                <option value="option1">02.50</option>
                <option value="option2">02.55</option>
                <option value="option1">03.00</option>
                <option value="option2">03.05</option>
                <option value="option1">03.10</option>
                <option value="option2">03.15</option>
                <option value="option1">03.20</option>
                <option value="option2">03.25</option>
                <option value="option1">03.30</option>
                <option value="option2">03.35</option>
                <option value="option1">03.40</option>
                <option value="option2">03.45</option>
                <option value="option1">03.50</option>
                <option value="option2">03.55</option>
                <option value="option1">04.00</option>
                <option value="option1">04.00</option>
                <option value="option2">04.05</option>
                <option value="option1">04.10</option>
                <option value="option2">04.15</option>
                <option value="option1">04.20</option>
                <option value="option2">04.25</option>
                <option value="option1">04.30</option>
                <option value="option2">04.35</option>
                <option value="option1">04.40</option>
                <option value="option2">04.45</option>
                <option value="option1">04.50</option>
                <option value="option2">04.55</option>
                <option value="option1">05.00</option>
                <option value="option2">05.05</option>
                <option value="option1">05.10</option>
                <option value="option2">05.15</option>
                <option value="option1">05.20</option>
                <option value="option2">05.25</option>
                <option value="option1">05.30</option>
                <option value="option2">05.35</option>
                <option value="option1">05.40</option>
                <option value="option2">05.45</option>
                <option value="option1">05.50</option>
                <option value="option2">05.55</option>
                <option value="option1">06.00</option>
                <option value="option2">06.05</option>
                <option value="option1">06.10</option>
                <option value="option2">06.15</option>
                <option value="option1">06.20</option>
                <option value="option2">06.25</option>
                <option value="option1">06.30</option>
                <option value="option2">06.35</option>
                <option value="option1">06.40</option>
                <option value="option2">06.45</option>
                <option value="option1">06.50</option>
                <option value="option2">06.55</option>
                <option value="option1">07.00</option>
                <option value="option2">07.05</option>
                <option value="option1">07.10</option>
                <option value="option2">07.15</option>
                <option value="option1">07.20</option>
                <option value="option2">07.25</option>
                <option value="option1">07.30</option>
                <option value="option2">07.35</option>
                <option value="option1">07.40</option>
                <option value="option2">07.45</option>
                <option value="option1">07.50</option>
                <option value="option2">07.55</option>
                <option value="option1">08.00</option>
                <option value="option1">08.00</option>
                <option value="option2">08.05</option>
                <option value="option1">08.10</option>
                <option value="option2">08.15</option>
                <option value="option1">08.20</option>
                <option value="option2">08.25</option>
                <option value="option1">08.30</option>
                <option value="option2">08.35</option>
                <option value="option1">08.40</option>
                <option value="option2">08.45</option>
                <option value="option1">08.50</option>
                <option value="option2">08.55</option>
                <option value="option1">08.00</option>
                <option value="option2">08.05</option>
                <option value="option1">08.10</option>
                <option value="option2">08.15</option>
                <option value="option1">08.20</option>
                <option value="option2">08.25</option>
                <option value="option1">08.30</option>
                <option value="option2">08.35</option>
                <option value="option1">08.40</option>
                <option value="option2">08.45</option>
                <option value="option1">08.50</option>
                <option value="option2">08.55</option>
                <option value="option1">09.00</option>
                <option value="option1">09.00</option>
                <option value="option2">09.05</option>
                <option value="option1">09.10</option>
                <option value="option2">09.15</option>
                <option value="option1">09.20</option>
                <option value="option2">09.25</option>
                <option value="option1">09.30</option>
                <option value="option2">09.35</option>
                <option value="option1">09.40</option>
                <option value="option2">09.45</option>
                <option value="option1">09.50</option>
                <option value="option2">09.55</option>
                <option value="option1">10.00</option>
        </select>
        </div>
        <p style={{
            marginTop: '40px',
        }}>Who can provide the service * </p>
        
      <div>
           <CustomDropdown options={dropdownOptions} />
      </div>
        <button className="save-button" onClick={openPopup}>Save</button>


        </div>

      </Modal>



      </div>
    )
  }
  
  export default Services