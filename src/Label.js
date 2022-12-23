import React, { useState } from 'react'
// import axios from 'axios';
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Label() {
  const [name, setName] = useState("")
  const [file, setFile] = useState();
  const [desc, setDesc] = useState("");
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const url = "mongodb://localhost:27017/crud/image"
  const [click, setClick] = useState("");
  const handleClick = (values, actions) => {
    var values = JSON.parse(localStorage.getItem("values") || "[]")

    var kush = {
      name: name, file: file, desc: desc, id: Math.random()
    }
    values.push(kush)
    localStorage.setItem("values", JSON.stringify(values))
    url.setItem("values",JSON.stringify(values))
    alert("image uploaded")

    actions.resetForm();
  }

return (
  <div>
    <br></br>
    <Form className=" d-grid gap-2" style={{ margin: "15rem", }} id="kush">
      <h1 style={{ margin: "3rem", }}>Form</h1>
      <label>File</label>
      <input className='form-control' type="file" onChange={handleChange} accept="image/*"  />
      <label> Name</label><Form.Group className="mb-3" controlId="formName">
        <Form.Control type="text" placeholder="Enter Name" required value={name} onChange={(e) => setName(e.target.value)} >
        </Form.Control>
      </Form.Group>
      <label> Desc</label><Form.Group className="mb-3" controlId="formAge">
        <Form.Control type="text" placeholder="Enter Desc" value={desc} onChange={(e) => setDesc(e.target.value)} >

        </Form.Control>
      </Form.Group>
      <Button type="submit" onClick={handleClick} style={{ margin: "3rem", }}>Submit</Button>

      <img src={file} alt="" onChange={(event) => { setClick(event.target.value) }}
        style={{ height: "0.3px", width: "0.5px" }}
      />
    </Form>
  </div>
)
}


export default Label;
