// Import necessary modules and dependencies.
import React, { useState } from 'react'
import "../../styles/addEmployee/addEmployee.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// Define the AddEmployee component.
function AddEmployee() {
    // Define state variables to manage form input values.
    const [firstNameValue, setfirstNameValue] = useState("")
    const [secondNameValue, setsecondNameValue] = useState("")
    const [contactValue, setcontactValue] = useState("")
    const [emailValue, setemailValue] = useState("")
    const [lineoneValue, setlineoneValue] = useState("")
    const [linetwoValue, setlinetwoValue] = useState("")
    const [cityValue, setcityValue] = useState("")
    const [districtValue, setdistrictValue] = useState("")
    const [joindateValue, setjoindateValue] = useState("")
    const [genderValue, setgenderValue] = useState("")
    const [roleValue, setroleValue] = useState("")
    // Use the useNavigate hook from react-router to navigate between pages.

    const navigate = useNavigate()

    // Define a function to handle adding a new employee.

    const handleAddNewEmployee = async () => {
        if (firstNameValue === "" || secondNameValue === "" || contactValue === "" || emailValue === "" || joindateValue === "" || genderValue === "" || roleValue === "") {
            alert("Please fill all the fields")
            return
        }

        try {
            console.log("clicked");
            // Make a POST request to the server to add a new employee.

            const response = await axios.post("http://localhost:5400/employee", {
                email: emailValue,
                first_name: firstNameValue,
                last_name: secondNameValue,
                contact_no: contactValue,
                address_line_1: lineoneValue,
                address_line_2: linetwoValue,
                city: cityValue,
                district: districtValue,
                role: roleValue,
            })

            console.log(response.data);
            const data = response.data
            if (response.status === 200) {
                if (data.success) {
                    console.log(data.data);
                    navigate("/staff")

                }
            }

        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h2 style={{ marginBottom: '15px' }}>Add Employee</h2>
            <hr></hr>

            <p style={{ textAlign: 'left', marginBottom: '10px', fontSize: '20px', margin: '20px 0px 20px 0px' }}>Details : </p>
                           {/* Input fields for first name and last name. */}

            <div className="name_container">
                <div className='div_container'>
                    <p>First Name: </p>
                    <input
                        type="text"
                        value={firstNameValue}
                        onChange={(e) => {
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
                        onChange={(e) => {
                            e.preventDefault()
                            setsecondNameValue(e.target.value)
                        }}
                        placeholder="Last Name"
                        className="inputbox_container"
                    />
                </div>
            </div>



            <div className="name_container">
                                {/* Input fields for contact number and email. */}

                <div className='div_container'>
                    <p style={{ marginTop: '10px' }}>Contact Number: </p>

                    <input
                        type="text"
                        value={contactValue}
                        onChange={(e) => {
                            e.preventDefault()
                            setcontactValue(e.target.value)
                        }}
                        placeholder="Contact"
                        className="inputbox_container"
                    />
                </div>
                <div className='div_container'>
                    <p style={{ marginTop: '10px' }}>Email: </p>

                    <input
                        type="text"
                        value={emailValue}
                        onChange={(e) => {
                            e.preventDefault()
                            setemailValue(e.target.value)
                        }}
                        placeholder="Email"
                        className="inputbox_container"
                    />
                </div>
            </div>
            <p style={{ marginTop: '10px', fontSize: '18px' }}>Address: </p>

            <div className="name_container">
                <input
                    type="text"
                    value={lineoneValue}
                    onChange={(e) => {
                        e.preventDefault()
                        setlineoneValue(e.target.value)
                    }}
                    placeholder="Line 1"
                    className="inputbox_container"
                />
                <input
                    type="text"
                    value={linetwoValue}
                    onChange={(e) => {
                        e.preventDefault()
                        setlinetwoValue(e.target.value)
                    }}
                    placeholder="Line 2"
                    className="inputbox_container"
                />
            </div>
            <div className="name_container">
                {/* add inputs  */}
                <input
                    type="text"
                    value={cityValue}
                    onChange={(e) => {
                        e.preventDefault()
                        setcityValue(e.target.value)
                    }}
                    placeholder="City"
                    className="inputbox_container"
                />
                <input
                    type="text"
                    value={districtValue}
                    onChange={(e) => {
                        e.preventDefault()
                        setdistrictValue(e.target.value)
                    }}
                    placeholder="District"
                    className="inputbox_container"
                />
            </div>

            <div className="name_container">

                <div className='div_container'>
                    <p style={{ marginTop: '10px' }}>Gender: </p>

                    <select value={genderValue}
                        onChange={(e) => {
                            setgenderValue(e.target.value);
                        }}
                        className="first_seelectbox">
                        <option value="">Gender</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                    </select>
                </div>
                <div className='div_container'>

                </div>
            </div>

            <div className="name_container">
                <div className='div_container'>
                    <p style={{ marginTop: '10px' }}>Date of joining: </p>

                    <input
                        type="text"
                        value={joindateValue}
                        onChange={(e) => {
                            e.preventDefault()
                            setjoindateValue(e.target.value)
                        }}
                        placeholder="Date of Joining"
                        className="inputbox_container"
                    />
                </div>
                <div className='div_container'>
                    <p style={{ marginTop: '10px' }}>Role: </p>

                    <select value={roleValue}
                        onChange={(e) => {
                            setroleValue(e.target.value);
                        }}
                        className="first_seelectbox">
                            {/* select the user role  */}
                        <option value="">Role</option>
                        <option value="MANAGER">Manager</option>
                        <option value="BEAUTICIAN">Beautician</option>
                        <option value="RECEPTIONIST">Receptionist</option>
                    </select>
                </div>
            </div>



            <button className="save-button" onClick={handleAddNewEmployee}>Save</button>


        </div>
    )
}

export default AddEmployee