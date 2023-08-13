import React, { useState } from 'react'
import "../../styles/addEmployee/addEmployee.css"

function AddEmployee() {
    const[firstNameValue, setfirstNameValue] = useState("")
    const[secondNameValue, setsecondNameValue] = useState("")
    const[contactValue, setcontactValue] = useState("")
    const[emailValue, setemailValue] = useState("")
    const[lineoneValue, setlineoneValue] = useState("")
    const[linetwoValue, setlinetwoValue] = useState("")
    const[cityValue, setcityValue] = useState("")
    const[districtValue, setdistrictValue] = useState("")
    const[joindateValue, setjoindateValue] = useState("")
    const[genderValue, setgenderValue] = useState("Gender")
    const[roleValue, setroleValue] = useState("Role")

  return (
    <div>
        <h2 style={{marginBottom: '15px'}}>Add Employee</h2>
        <hr></hr>

      <p style={{ textAlign: 'left' , marginBottom: '10px', fontSize:'20px', margin: '20px 0px 20px 0px' }}>Details : </p>
      <div className="name_container">
          <div className='div_container'>
                    <p>First Name: </p>
            <input
            type="text"
            value={firstNameValue}
            onChange={(e)=> {
                e.preventDefault()
                setfirstNameValue(e.target.value)
            }}
            placeholder="First Name"
            className="inputbox_container"
            />
            </div>
            <div className='div_container'>
                    <p>Last Name: </p>
                        <input
            type="text"
            value={secondNameValue}
            onChange={(e)=> {
                e.preventDefault()
                setsecondNameValue(e.target.value)
            }}
            placeholder="Last Name"
            className="inputbox_container"
            />
            </div>
        </div>



        <div className="name_container">
                <div className='div_container'>
                    <p style={{marginTop: '10px'}}>Contact Number: </p>
            
                    <input
                    type="text"
                    value={contactValue}
                    onChange={(e)=> {
                        e.preventDefault()
                        setcontactValue(e.target.value)
                    }}
                    placeholder="Contact"
                    className="inputbox_container"
                    />
                </div>
                <div className='div_container'>
                <p style={{marginTop: '10px'}}>Email: </p>

                                <input
                    type="text"
                    value={emailValue}
                    onChange={(e)=> {
                        e.preventDefault()
                        setemailValue(e.target.value)
                    }}
                    placeholder="Email"
                    className="inputbox_container"
                    />
                </div>
        </div>
        <p style={{marginTop:'10px', fontSize: '18px'}}>Address: </p>

        <div className="name_container">
                    <input
                    type="text"
                    value={lineoneValue}
                    onChange={(e)=> {
                        e.preventDefault()
                        setlineoneValue(e.target.value)
                    }}
                    placeholder="Line 1"
                    className="inputbox_container"
                    />
                                <input
                    type="text"
                    value={linetwoValue}
                    onChange={(e)=> {
                        e.preventDefault()
                        setlinetwoValue(e.target.value)
                    }}
                    placeholder="Line 2"
                    className="inputbox_container"
                    />
        </div>
        <div className="name_container">
                    <input
                    type="text"
                    value={cityValue}
                    onChange={(e)=> {
                        e.preventDefault()
                        setcityValue(e.target.value)
                    }}
                    placeholder="City"
                    className="inputbox_container"
                    />
                                <input
                    type="text"
                    value={districtValue}
                    onChange={(e)=> {
                        e.preventDefault()
                        setdistrictValue(e.target.value)
                    }}
                    placeholder="District"
                    className="inputbox_container"
                    />
        </div>

        <div className="name_container">

                <div className='div_container'>
                <p style={{marginTop: '10px'}}>Gender: </p>

                <select value={genderValue}
                        onChange={(e)=>{
                            setgenderValue(e.target.value);
                        }}
                className="first_seelectbox">
                        <option value="">Gender</option>
                        <option value="option1">Male</option>
                        <option value="option2">Female</option>
                </select>
                </div>
                <div className='div_container'>

                </div>
         </div>

         <div className="name_container">
                <div className='div_container'>
                    <p style={{marginTop: '10px'}}>Date of joining: </p>
            
                    <input
                    type="text"
                    value={joindateValue}
                    onChange={(e)=> {
                        e.preventDefault()
                        setjoindateValue(e.target.value)
                    }}
                    placeholder="Date of Joining"
                    className="inputbox_container"
                    />
                </div>
                <div className='div_container'>
                <p style={{marginTop: '10px'}}>Role: </p>

                <select value={roleValue}
                        onChange={(e)=>{
                            setroleValue(e.target.value);
                        }}
                className="first_seelectbox">
                        <option value="">Role</option>
                        <option value="option2">Manager</option>
                        <option value="option2">Receptionist</option>
                        <option value="option3">Beautician</option>
                </select>
                </div>
         </div>
      

  
  <button className="save-button">Save</button>


  </div>
  )
}

export default AddEmployee