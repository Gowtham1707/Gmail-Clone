import React from 'react'
import "../Styles/Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ArrowDropDown } from '@mui/icons-material';
import AppIcon from "@mui/icons-material/Apps"
import NotificationsIcon from '@mui/icons-material/Notifications';
import { logout, selectUser } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from "../firebase";

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signout = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        });
    }
  return (
    <div className="header">
        <div className="header__left">
            <IconButton >
                <MenuIcon />
            </IconButton>
            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" alt="Gmail" />
        </div>
        <div className="header__middle">
            <SearchIcon />
            <input type="text" placeholder="Search Mail" />
            <ArrowDropDown className="header__inputCaret" />
        </div>
        <div className="header__right">
            <IconButton >
                <AppIcon />
            </IconButton>
            <IconButton >
                <NotificationsIcon />
            </IconButton>
            <IconButton >
                <Avatar src={user?.photoUrl} onClick={signout} />
            </IconButton>
        </div>
    </div>
  )
}

export default Header
