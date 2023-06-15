import React from "react";
import emailList from "../Styles/emailList.css";
import { Checkbox, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import Section from "./Section";
import InboxIcon from "@mui/icons-material/Inbox";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PeopleIcon from "@mui/icons-material/People";
import Emailrow from "./Emailrow";
import { useState, useEffect } from "react";
// import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
// import { db } from "./firebase"; // Assuming you have already initialized the Firebase app and exported the firestore instance as 'db'


function Emaillist() {
  const [email, setEmails] = useState([]);


  // useEffect(() => {
  //   db.collection("emails")
  //     .orderBy("timestamp", "desc")
  //     .onSnapshot((snapshot) =>
  //       setEmails(
  //         snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           data: doc.data(),
  //         }))
  //       )
  //     );

  //   console.log(email)
  // }, []);

  useEffect(() => {
    onSnapshot(query(collection(db, "emails"), orderBy("timestamp", "desc")), (snapshot) => {
      setEmails(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      })));
    });

    // const unsubscribe = 
    // return () => {
    //   unsubscribe(); // Unsubscribe from the snapshot listener when the component unmounts
    // };
  }, []);
  // console.log(email)
  return (
    <div className="emaillist">
      <div className="emaillist__settings">
        <div className="emaillist__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emaillist_settingsRight">
          <IconButton>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardIcon />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={<InboxIcon />} title="Primary" color="red" selected />
        <Section Icon={<PeopleIcon />} title="Social" color="#1A73E8" />
        <Section Icon={<LocalOfferIcon />} title="Promotions" color="green" />
      </div>

      {/* <div className="emailList__list">
        {email.map(({ id, data: { to, subject, message, timestamp } }) => {
          <Emailrow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />;
        })}
        </div> */}
      {email.map(({ id, data: { subject, to, timestamp, message} }) => (
        <Emailrow
          id={id}
          key={id}
          title={to}
          subject={subject}
          description={message}
          time={new Date(Number(timestamp) * 1000).toUTCString()}
        />
      ))}

        <Emailrow
          title="twitch"
          subject="Hey follow streamer!!!"
          description="This is a test"
          time="10pm"
        />
        <Emailrow
          title="twitch"
          subject="Hey follow streamer!!!"
          description="This is a test"
          time="10pm"
        />
        <Emailrow
          title="twitch"
          subject="Hey follow streamer!!!"
          description="This is a test"
          time="10pm"
        />
        <Emailrow
          title="twitch"
          subject="Hey follow streamer!!!"
          description="This is a test"
          time="10pm"
        />
        <Emailrow
          title="twitch"
          subject="Hey follow streamer!!!"
          description="This is a test"
          time="10pm"
        />
        <Emailrow
          title="twitch"
          subject="Hey follow streamer!!!"
          description="This is a test"
          time="10pm"
        />
        <Emailrow
          title="twitch"
          subject="Hey follow streamer!!!"
          description="This is a test"
          time="10pm"
        />
        <Emailrow
          title="twitch"
          subject="Hey follow streamer!!!"
          description="This is a test"
          time="10pm"
        />
        <Emailrow
          title="twitch"
          subject="Hey follow streamer!!!"
          description="This is a test"
          time="10pm"
        />
        
        {/* <Emailrow
          title="twitch"
          subject="Hey follow streamer!!!"
          description="This is a test"
          time="10pm"
        />
        <Emailrow
          title="twitch"
          subject="Hey follow streamer!!!"
          description="This is a test"
          time="10pm"
        /> */}
      {/* </div> */}
    </div>
  );
}

export default Emaillist;
