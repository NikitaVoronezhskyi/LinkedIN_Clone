import React, { useState } from "react";
import "./Login.css";
import { auth } from "./Firebase";
import { login } from "../features/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {

    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const [profilePicture,setProfilePicture] = useState('')
    const dispatch = useDispatch()

    const register = () =>{
        auth.createUserWithEmailAndPassword(email,password)
        if (!name) {
            return alert("To Register, please enter a name")
        }if (!name && !email) {
            return alert("To Register, please enter a name and email")
        }
        else if (!email) {
            return alert("To Register,please enter an")
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePicture
            })
            .then(()=>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePicture
                }))
            })
        })
      }


    const loginToApp = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth =>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePicture,
            }))
        }).catch(error => alert(error))
        
    
    }
  return (
    <div className="login">
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo.png" alt="LinkedIn Logo"/>
        <form>
            <input name="name" required value={name} onChange={e=>setName(e.target.value)}  placeholder="Full Name" type="text" />
            <input name="profilePicture" value={profilePicture} onChange={e=>setProfilePicture(e.target.value)} placeholder="User Image URL (Optional)" type="text" />
            <input name="email" required value={email} onChange={e=>setEmail(e.target.value)}  placeholder="Email" type="email" />
            <input name="password" required value={password} onChange={e=>setPassword(e.target.value)}  placeholder="Password" type="password" />
            <button type="submit" onClick={loginToApp}>
                Log In
            </button>
        </form>
        <p href="#" onClick={register}>Register</p>
    </div>
  );
};

export default Login;
