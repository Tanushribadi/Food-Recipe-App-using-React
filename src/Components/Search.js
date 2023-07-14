import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'        //using function we are navigating to other page(we cannot use links or a tags here)
import {useState} from 'react'
//import '../App.css'


export default function Search () {
    const [input,setInput] = useState("")
    const navigate = useNavigate ();           //assign the hook to vaiable
  
        const submitHandler = (e) => {      //when we hit enter only pages shoukd load not whole component
        e.preventDefault();               //to avoid refreshing of whole page
        navigate("/searched/"+input);          //in () location we want to go to is added(input-whatever the user searched for)
        }
        return (
            <Form onSubmit={submitHandler}>
                <div>
                <input type="text" value={input} onChange={(e) =>setInput(e.target.value)} 
                    placeholder="Search"/>
                </div>
           </Form>
    )
}

const Form = styled.form`
margin:-56rem 8rem;
margin-left:170px;

div{
    position:relative;
    width:100%;
}
input{
    border:none;
    background:linear-gradient(35deg,#494949,#313131);
    color:white;
    font-size:1.4rem;
    padding:0rem 1rem;
    outline:none;
    border-radius:5px;
    width:90%;

  
}
`;
