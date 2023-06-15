import React from "react";
import sendMail from "../Styles/sendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { CloseSendMessage } from "../features/mailSlice";
import {db}  from '../firebase' 
import { collection,  doc, setDoc, Timestamp , addDoc } from "firebase/firestore"; 
import firebase from 'firebase/compat/app';

function SendMail() {
  const dispatch = useDispatch();
  const onSubmit = (formData) => {
    // db.collections('emails').add(
    //   {
    //     to: formData.to,
    //     subject: formData.subject,
    //     message: formData.message,
    //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //   }
    // );
    // setDoc(doc(db, 'emails', id), {
    //     to: formData.to,
    //     subject: formData.subject,
    //     message: formData.message,
    //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    // });
    const docRef = addDoc(collection(db, "emails"), {
              to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(CloseSendMessage());
  }
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail__close" onClick={() => dispatch(CloseSendMessage())} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          {...register('to', { required: true })}
          placeholder="To"
        />
        {errors.to && errors.to.type === "required" && <span className="sendmail__error">To is required</span>}
        <input
          type="text"
          {...register("subject", { required: true })}
          placeholder="Subject"
        />
        {errors.to && errors.to.type === "required" && <span className="sendmail__error">Subject is required</span>}
        <input
          type="text"
          {...register("message", { required: true })}
          placeholder="Message"
          className="sendMail__message"
        />
        {errors.to && errors.to.type === "required" && <span className="sendmail__error">message is required</span>}
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            varient="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
