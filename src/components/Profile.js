import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleDown, faBox} from '@fortawesome/free-solid-svg-icons'
import classes from './Profile.module.css'
// import pic from "../images/profilepicture.jpg"; 
const Profile=()=>{
    return ( 
        
    <>
         <div className={classes.line}></div>
         <img src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/1.jpg" className={classes.pic} alt='alt'/>
            <FontAwesomeIcon icon={faAngleDown}className={classes.angle}></FontAwesomeIcon>
            <div className={classes.container}>
                <h5 className={classes.name}>Alina Mclourd</h5>
                <h5 className={classes.role}>VP People Manager</h5>
            </div>
            <div className={classes.container} >
                <FontAwesomeIcon icon={faBox}className={classes.imgs}></FontAwesomeIcon>
            </div>
             <div className={classes.lines}></div>
             
         </>
         
    )
}

export default Profile