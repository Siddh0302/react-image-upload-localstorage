import React from 'react'
import "./App.css"
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import FitbitIcon from '@mui/icons-material/Fitbit';
import SettingsIcon from '@mui/icons-material/Settings';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ForumIcon from '@mui/icons-material/Forum';
export default function Main() {
  return (
      <div id='kush'>
        <nav>
            <FitbitIcon style={{fontSize:"70px",color:"red",backgroundColor:"white",borderRadius:"35px"}} className="logo"/>
              <br></br>
              <br></br>
            <ul>
            <li><VideoChatIcon style={{fontSize:"40px",cursor:"pointer"}}/></li>
            <li><LiveTvIcon style={{fontSize:"40px",cursor:"pointer"}}/></li>
            <li><PeopleAltIcon style={{fontSize:"40px",cursor:"pointer"}}/></li>
            <li><ForumIcon style={{fontSize:"40px",cursor:"pointer"}}/></li>
            <li><CircleNotificationsIcon style={{fontSize:"40px",cursor:"pointer"}}/></li>
            <li><SettingsIcon style={{fontSize:"40px",cursor:"pointer"}}/></li>
            </ul>
        </nav>
      </div>
  )
}
