import React, { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import { useDispatch, useSelector } from "react-redux"
import { login, logout, selectUser } from './features/userSlice';
import Header from './components/Header';
import Main from './components/Main';
import { auth } from './components/Firebase';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged(userAuth =>{
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }))
      } else{
        dispatch(logout())
      }
    })
  },[])

  return (
    <div className="App">
      {!user? <Login/> : (
        <div className="app__body">
          <Header/>
          <Main/>
        </div>
      )}
    </div>
  );
}

export default App;
