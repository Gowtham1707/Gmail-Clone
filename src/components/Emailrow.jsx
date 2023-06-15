import React from "react";
import emailrow from "../Styles/emailrow.css";
import { CheckBox } from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "../features/mailSlice";

function Emailrow({ id, title, subject, description, time }) {
  const history = useNavigate();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time
      })
    )
    history("/mail")
  }
  return (
    <div className="emailRow" onClick={openMail}>
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject}{" "}
          <span className="emailRow__description">-{description}</span>
        </h4>
      </div>
      <div className="emailRow__time">
        <p>{time}</p>
      </div>
    </div>
  );
}

export default Emailrow;
