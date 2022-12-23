import React ,{useState,useEffect} from 'react'
import { Button , Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
function Edit() {
    function saveLanguage()
{
  var courses=JSON.parse(localStorage.getItem("courses") || "[]");
  var course={
    name:name,
    desc:desc,
    file:file
  }
  courses.push(course)
  localStorage.setItem("courses",JSON.stringify(courses))
}
const [name, setName] = useState("");
const [desc, setDesc] = useState("");
const [id, setId] = useState("");
const [file, setFile] = useState("");

//     var index=value.map(function(e)
// {
//     return e.id
// }).indexOf(id);
    // const handleSubmit =(e) =>
    // {
    //     e.preventDefault();

    //     let a =Employee[index];
    //     a.name=name;
    //     a.desc=desc;
    //     a.file=file;
    // }
    const [values, setValues] = useState([])
    useEffect(()=>{
        const values =localStorage.getItem("values")
        setValues(JSON.parse(values))
    },[])
const handleClick=(e)=>
{
    // window.location.reload();
    const values =JSON.parse(localStorage.getItem("values"))
    
    // console.log(id);
    var index=values.filter((users)=>{
       return id === users.id
        // console.log(users.id);
    })
    console.log(index);
    localStorage.setItem("values",JSON.stringify(index))
}
    useEffect(()=>
    {
        setName(localStorage.getItem("Name"))
        setFile(localStorage.getItem("file"))
        setId(localStorage.getItem("Id"))
        setDesc(localStorage.getItem("desc"))
    },[])
  return (
    <div>
      <Form className="d-grid gap-2" style={{margin : "15rem"}} onSubmit={saveLanguage}>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="file" placeholder="" value={file} required onChange={(e)=>setFile(e.target.value)} accept="image/*" >

                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e)=>setName(e.target.value)} >

                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDesc">
                    <Form.Control type="text" placeholder="Enter desc" value={desc} required onChange={(e)=>setDesc(e.target.value)} >

                    </Form.Control>
                </Form.Group>
                <Link to="/table">
                <Button type="button" onClick={handleClick} >Update</Button></Link>
            </Form>
    </div>
  )
}

export default Edit
