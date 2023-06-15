import React from 'react';
import sidebarOption from '../Styles/sidebarOption.css';
import { ListItem } from '@mui/material';

function SidebarOption({Icon, title, number, selected}) {
  return (
    <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
      {Icon}
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  )
}

export default SidebarOption
