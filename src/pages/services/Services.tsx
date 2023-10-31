import * as React from 'react';
import "../../styles/services/services.css";
import { useState, ChangeEvent, useEffect, useCallback } from "react";
import Modal from 'react-modal';
import CustomDropdown from './CustomDropdown';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/Fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import axios from '../../axios'
import Loading from '../../components/Loading';
import { covertMinToHMin } from '@/utils/covertMinToHMin';

type servicesType = {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: string;
}


const Services = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("10");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopuptwoOpen, setIsPopuptwoOpen] = useState(false);
  const [isPopupViewOpen, setIsPopupViewOpen] = useState(false);
  const [isPopupViewtwoOpen, setIsPopupViewtwoOpen] = useState(false);
  const [iseditPopupOpen, setIseditPopupOpen] = useState(false);


  const [services, setServices] = useState<servicesType[]>([]);
  const [deleteOrUpdateId, setDeleteOrUpdateId] = useState<string>("");

  const [category, setCategory] = useState('other');
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState("");
  const [duration, setDuration] = useState("00:30");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const [isLoading, setIsLoading] = useState(false)



  const dropdownOptions = ['Janith', 'Chirasi', 'Pabasara'];

  const openPopup = () => {
    setIsPopupOpen(true);

  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const centerStyles = {
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



  const centerStylestwo = {
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

  const fetchServices = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get('/service')
      if (response.status === 200) {
        const data = response.data

        if (data.success) {
          console.log(data.data);
          setServices(data.data)
        }

      }
    } catch (error) {
      console.log(error);
    }
    finally {
      setIsLoading(false)
    }
  }

  const handleAddService = async (e: any) => {

    try {

      const response = await axios.post('/service', {
        category: category,
        name: Name,
        description: Description,
        price: parseFloat(Price),
        duration: parseInt(duration),
        status: "active",
        // selectedOptions: selectedOptions
      })

      console.log(response.data);

      if (response.status === 200) {
        if (response.data.success) {
          console.log(response.data.data);
          setCategory('')
          setName('')
          setDescription('')
          setPrice("")
          setDuration('')
          closePopup()
          fetchServices()

        }
      }

    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = (id: string) => {
    openPopuptwo()
    setDeleteOrUpdateId(id)
  }

  const handleDeleteOk = async () => {
    try {
      const response = await axios.delete(`/service/${deleteOrUpdateId}`)
      if (response.status === 200) {
        if (response.data.success) {
          console.log(response.data.data);
          closePopuptwo()
          fetchServices()
        }
      }
      setDeleteOrUpdateId("")
    } catch (error) {
      console.log(error);
    }
  }

  const handleDeleteCancel = () => {
    setDeleteOrUpdateId("")
    closePopuptwo()
  }

  useEffect(() => {
    fetchServices()
  }, [])



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
              onChange={(e) => {
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
          onChange={(e) => {
            e.preventDefault()
            setSearchValue(e.target.value)
          }}
          placeholder="Search..."
          className="searchbar"
        />
      </div>

      {
        isLoading ? <Loading /> :
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Description</th>
                <th>Price</th>
                <th>Duration</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              {
                services.map(service => (
                  <tr key={service.id}>
                    <td>{service.name}</td>
                    <td>{service.category}</td>
                    <td style={{ maxWidth: '250px' }}>{service.description}</td>
                    <td>LKR {service.price}</td>
                    <td>{covertMinToHMin(parseInt(service.duration))}</td>
                    <td>
                      <div className="btn_delete_edit">
                        <  FaRegEdit size={20} onClick={closePopup} className="icon-with-gap" />
                        <  RiDeleteBin5Line size={20} onClick={() => handleDelete(service.id)} />
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
      }

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
          <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Add Service</h2>

          <div className="name_container">
            <select value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="first_seelectbox">
              <option >Select Group</option>
              <option value="facial">Facial</option>
              <option value="hair">Hair</option>
              <option value="pedicure">Pedicure</option>
              <option value="menicure">Menicure</option>
              <option value="other">Other</option>
            </select>
            <input
              type="text"
              value={Name}
              onChange={(e) => {
                e.preventDefault()
                setName(e.target.value)
              }}
              placeholder="Name"
              className="inputbox_container"
            />
          </div>

          <textarea
            value={Description}
            onChange={(e) => {
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
              onChange={(e) => {
                e.preventDefault()
                setPrice(e.target.value)
              }}
              placeholder="Price"
              className="inputbox_container"
            />
            <select
              onChange={(e) => {
                setDuration(e.target.value);
              }}
              className="first_seelectbox">
              <option value="">Duration</option>
              <option value="15">15 min</option>
              <option value="30">30 min</option>
              <option value="45">45 min</option>
              <option value="60">01 hr 00 min</option>
              <option value="75">01 hr 15 min</option>
              <option value="90">01 hr 30 min</option>
              <option value="105">01 hr 45 min</option>
              <option value="120">02 hr 00 min</option>
              <option value="135">02 hr 15 min</option>
              <option value="150">02 hr 30 min</option>
              <option value="165">02 hr 45 min</option>
              <option value="180">03 hr 00 min</option>
              <option value="195">03 hr 15 min</option>
              <option value="210">03 hr 30 min</option>
              <option value="225">03 hr 45 min</option>
              <option value="240">04 hr 00 min</option>
              <option value="255">04 hr 15 min</option>
              <option value="270">04 hr 30 min</option>
              <option value="285">04 hr 45 min</option>
              <option value="300">05 hr 00 min</option>
            </select>
          </div>
          <p style={{
            marginTop: '40px',
          }}>Who can provide the service * </p>

          <div>
            <CustomDropdown selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} options={dropdownOptions} />
          </div>
          <button className="save-button" onClick={handleAddService}>Save</button>


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
          <button className="cancel_button" onClick={handleDeleteCancel}>Cancel</button>
          <button className="delete_button" onClick={handleDeleteOk}>Delete</button>
        </div>

      </Modal>
      <Modal
        isOpen={isPopupViewOpen}
        onRequestClose={closePopupView}
        contentLabel="Example Popup"
        style={centerStyles}

      >
        <div>
          <Card variant="outlined" style={{ border: '1px solid rgb(79, 79, 79)' }}>
            <React.Fragment>
              <CardContent>

                <Typography variant="body2">


                  <div className="close_btn">
                    <  AiOutlineCloseCircle size={30} onClick={closePopupView} />
                  </div>
                  <h2 style={{ textAlign: 'center' }}>View Service</h2>
                  <p className="intro_container">Generate diverse packages by including names, group, description, price and srvice time and sessions associated with each service.</p>

                  <Typography style={{ margin: '30px 0px 20px 0px' }} variant="h5" gutterBottom>
                    Clean-up facial
                  </Typography>


                  <Card sx={{ minWidth: 275 }} style={{ border: '1px solid rgb(79, 79, 79)' }}>
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
                  <p style={{ margin: '30px 20px 50px 0px', textAlign: 'end', fontSize: '18px' }}>Total price : 1600.00</p>
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
          <Card variant="outlined" style={{ border: '1px solid rgb(79, 79, 79)' }}>
            <React.Fragment>
              <CardContent>

                <Typography variant="body2">


                  <div className="close_btn">
                    <  AiOutlineCloseCircle size={30} onClick={closePopupViewtwo} />
                  </div>
                  <h2 style={{ textAlign: 'center' }}>View Service</h2>
                  <p className="intro_container">Generate diverse packages by including names, group, description, price and srvice time and sessions associated with each service.</p>

                  <Typography style={{ margin: '30px 0px 20px 0px' }} variant="h5" gutterBottom>
                    Hair Coloring
                  </Typography>


                  <Card sx={{ minWidth: 275 }} style={{ border: '1px solid rgb(79, 79, 79)' }}>
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
                  <p style={{ margin: '30px 20px 50px 0px', textAlign: 'end', fontSize: '18px' }}>Total price : 2000.00</p>
                </Typography>
              </CardContent>

            </React.Fragment>
          </Card>

        </div>




      </Modal>
    </div>
  )
}

export default Services
