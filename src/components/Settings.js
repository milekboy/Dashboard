import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'
import classes from './Settings.module.css'
const Settings =(props)=>{
 return (
    <div className={classes.container}>
        <div className={classes.icon}>{props.emoji}</div>
        <h5 className={classes.label}>{props.label}</h5>
      <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon> 
     
    </div>
 )
};
export default Settings;