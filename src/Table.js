import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import "./App.css"
import Label from './Label';
function Table() {
    const [values, setValues] = useState([])
    useEffect(()=>{
        const values =localStorage.getItem("values")
        setValues(JSON.parse(values))
    },[])
    const handleDelete=(id)=>
    {
        window.location.reload();
        const values =JSON.parse(localStorage.getItem("values"))
        
        // console.log(id);
        var index=values.filter((users)=>{
           return id !== users.id
            // console.log(users.id);
        })
        console.log(index);
        localStorage.setItem("values",JSON.stringify(index))
    }
  return (
    <div>
     <table className='container' style={{borderRadius:"5px",textAlign:"left"}}>
  <tr style={{backgroundColor:"yellow"}}>
  <th>Id</th>
    
    <th>Image</th>
    <th>Name</th>
    <th>desc</th>
    <th>Actions</th>
  </tr>
    
  {
            values && values.length>0
            ?
            values.map((value)=>{
                return(
                    <>
                    {/* <div> */}
                    {/* <table className=''> */}
                    <tr>
                    <td>{value.id}</td>

                        <td><img src={value.file}  style={{height:"80px",width:"80px"}} /></td>
                        <td>{value.name}</td>
                        <td>{value.desc}</td>

                        <td>
                            <div className=''>
                            <Link to={"/edit/id"+value.id}>
                                <button className='but btn btn-success'>Edit 📝 </button> </Link>&nbsp;
                                <button type="submit" className='but btn btn-danger' onClick={()=>handleDelete(value.id)}>Delete 🗡️ </button>
                            </div>
                        </td>
                    </tr>
                    {/* </table> */}
                    {/* </div> */}
                    </>
                )
            })
            :
            "no DAta"
        }

</table>


<Label />
    </div>
  )
}
export default Table;