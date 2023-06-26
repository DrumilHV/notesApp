import React, { useState } from 'react';
import "./Addbutton.css";


const Addbutton = () => {
  const [data, setData] = useState([{ title: '', note: '' }]);

  const handleClick = () => {
    setData([...data, { title: '', note: '' }]);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const updatedData = data.map((item, index) => {
      if (index === i) {
        return { ...item, [name]: value };
      }
      return item;
    });
    setData(updatedData);
  };

  const handleDelete = (i) => {
    const updatedData = data.filter((item, index) => index !== i);
    setData(updatedData);
    console.log(i);
  };
  const handleSave = (i,val)=>{
    console.log(i+` ${val.note} <= ${val.title} `);
  }

  return (
    <div className="container">
      {data.map((val, i) => (
        <div className='TextInput title-text-pair' key={i}>
          <input
            name="title"
            className='titleInput'
            placeholder="title"
            value={val.title}
            onChange={(e) => handleChange(e, i)}
          />
          <input
            name="note"
            value={val.note}
            className="textInput"
            placeholder="note..."
            onChange={(e) => handleChange(e, i)}
          />
          <div className="button-wrapper">
            <button className="deleteButton" onClick={() => handleDelete(i)}>Delete</button>
            <button className="saveButton" onClick={()=>handleSave(i,val)}>Save</button>
          </div>
        </div>
      ))}
      <button className="addButton" onClick={handleClick}>+</button>
    </div>
  );
};

export default Addbutton;
