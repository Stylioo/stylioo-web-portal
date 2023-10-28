import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../../styles/quicksale/quicksale.css";

const Quicksale = () => {
  // set values 
    const [ searchValue, setSearchValue] = useState("");
    const [ calanderValue, setCalanderValue] = useState(new Date());
    return (
      <div>
        <h2>Create Invoice</h2>
        <div className='inputcontainer'>
        <input
        type="text"
        value={searchValue}
        onChange={(e)=> {
            e.preventDefault()
            setSearchValue(e.target.value)
        }}
        placeholder="Search by Name/Contact/Address/File No/Card Number (Atleast 3 characters are required)"
        style={{
            padding: '10px',
            border: '2px solid green',
            borderRadius: '4px',
            fontSize: '16px',
            width: '60%', 
          }}
        />
        <div className='billdatebox'>

        <p>Bill Date</p>
        <DatePicker
        selected={calanderValue}
        onChange={(date) => {
            setCalanderValue(date);
        }}
        placeholderText="Select a date"
        className="calanderBox"
        />
        </div>
        </div>
      </div>
    )
  }
  
  export default Quicksale