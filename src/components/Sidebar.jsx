import React from 'react'
import sidebar from '../Styles/sidebar.css'
import { Button, IconButton } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from './SidebarOption';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PhoneIcon from '@mui/icons-material/Phone';
import DuoIcon from '@mui/icons-material/Duo';
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button startIcon={ <CreateIcon fontSize="large" /> }className="sidebar__compose" onClick={() => dispatch(openSendMessage())}>Compose</Button>

      <SidebarOption Icon={<InboxIcon />} title={"Inbox"} number={54} selected={true} />
      <SidebarOption Icon={<StarBorderIcon />} title={"Starred"} number={54} selected={false} />
      <SidebarOption Icon={<AccessTimeIcon />} title={"Snoozed"} number={54} selected={false} />
      <SidebarOption Icon={<LabelImportantIcon />} title={"Important"} number={54} selected={false} />
      <SidebarOption Icon={<NearMeIcon />} title={"Sent"} number={54} selected={false} />
      <SidebarOption Icon={<NoteIcon />} title={"Drafts"} number={54} selected={false} />
      <SidebarOption Icon={<ExpandMoreIcon />} title={"More"} number={54} selected={false} />

      <div className="sidebar__footer">
        <div className="sidebar__footericons">
            <IconButton>
                <PersonIcon />
            </IconButton>
            <IconButton>
                <DuoIcon />
            </IconButton>
            <IconButton>
                <PhoneIcon />
            </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
