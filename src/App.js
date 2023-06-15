import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Mail from "./components/Mail";
import Emaillist from "./components/Emaillist";
import SendMail from "./components/SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
  }, [])

  return (
    <Router>
      {!user ? (
        <Login />
      ): (
      <div className="App">
        <Header />
        <div className="app__body">
          <Sidebar />

          <Routes>
          <Route path="/mail" element={<Mail />} />
          <Route path="/" element={<Emaillist />} />

          
          </Routes>
        </div>
        {sendMessageIsOpen? <SendMail /> : null}
      </div>
      )}
    </Router>
  );
}

export default App;
