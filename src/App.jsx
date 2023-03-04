import React, { useState } from "react";

import "./App.css";
import FormInput from "./components/FormInput";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // const [username, setUsername] = useState("");
  //   console.log(username)
  // const usernameRef=useRef()
  // console.log("re-rendered")
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:"Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-za-z0-9]{3,16}$",
      required: true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage:"It should be a valid email address!",
      label: "Email",
      required: true
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      errorMessage:"",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern :`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage:"Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(usernameRef)
    // const data= new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()))
  };
 const onChange=(e)=>{
  setValues({...values,[e.target.name]: e.target.value})
 }
 const successToast=()=>{
  // alert("login success")
  toast.success("Login Success! ",{
    position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
  })
 }
 const errorToast=()=>{
  toast.error('Unsuccessfull!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
 }
// console.log(values)
  return (
    <div className="app">
    {!inputs ?(

      <div>     
      <form onSubmit={handleSubmit}>
     
 
<h1>Register</h1>
        {/* <FormInput placeholder="Username" setUsername={setUsername} /> */}
        {/* <FormInput  refer={usernameRef} placeholder="Username"  />  */}
        {/* <FormInput name="username" placeholder="Username"  /> 
        <FormInput name="email" placeholder="Email" />
        <FormInput name="fullname"  placeholder="Full Name" />
        <FormInput  name="password" placeholder="Password" /> */}
     {inputs.map((input)=>(
      <FormInput key={input.id} 
      {...input}
       value={values[input.name]} 
       onChange={onChange}/>
     ))}
        <button onClick={successToast}>Submit</button>
        
      </form>
      </div>
      
     ):(
      <div>     
      <form onSubmit={handleSubmit}>
     
 
<h1>Register</h1>
        {/* <FormInput placeholder="Username" setUsername={setUsername} /> */}
        {/* <FormInput  refer={usernameRef} placeholder="Username"  />  */}
        {/* <FormInput name="username" placeholder="Username"  /> 
        <FormInput name="email" placeholder="Email" />
        <FormInput name="fullname"  placeholder="Full Name" />
        <FormInput  name="password" placeholder="Password" /> */}
     {inputs.map((input)=>(
      <FormInput key={input.id} 
      {...input}
       value={values[input.name]} 
       onChange={onChange}/>
     ))}
        <button onClick={errorToast}>Submit</button>
        
      </form>

      </div>
      
      ) }
      
      <ToastContainer />
    </div>
  );
}

export default App;
