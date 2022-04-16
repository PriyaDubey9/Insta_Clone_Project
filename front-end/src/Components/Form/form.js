import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import icon from '../instagram/icon.png'
import { Link } from 'react-router-dom';
import './form.css';

export default function Form(){
    const Navigate = useNavigate()  
    const [user,setUser] = useState({  
        file:"",author:"",location:"" ,description:""  
    })

    let name,value
    const handleInputs = (e)=>{   
        console.log(e)
        name = e.target.name
        value = e.target.value
        setUser({...user,[name]:value})
    }
    console.log(user)

    const PostData = async(e)=>{
        e.preventDefault()
        const {file,author, location,description} = user
        // https://back-endclone.herokuapp.com/data

        const res = await fetch("http://localhost:5000/addData",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                file,author,location,description
            })
        })
        const data = await res.json()
        if(data.status === "Success"){
            window.alert("Data Posted")
            Navigate('/Posts')
        }else{
            window.alert("Invalid")
        }
    }

    return(
        <body>
        <header className='for-header'>
            <img className='for-icon' src={icon} alt='icon'></img>
            <h1 className='for-name'>Insta Clone</h1>
            <Link to='/'><button className='logout-button'>Logout</button></Link>
        </header>
        <div className="form"> 
        <form method="POST">
            <label for ="file">File</label>
            {/* <input type="file" name="file" value={user.img} onChange={handleInputs}></input> */}
            <input type="file" name="file" placeholder="Image" value={user.file} onChange={handleInputs}></input><br></br>
            <input type="text" name="author" placeholder="Author" value={user.author} onChange={handleInputs}></input>
            <input type="text" name="location" placeholder="Location" value={user.location} onChange={handleInputs}></input><br></br>
            <input type="text" name="description" placeholder="Description" value={user.description} onChange={handleInputs}></input><br></br>
            <button type="submit" onClick={PostData}>Post</button>
        </form>
        </div>
        </body>
        
    )
}