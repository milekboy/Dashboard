import classes from './Text1.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCalendar} from '@fortawesome/free-solid-svg-icons'
const Text1=(props)=>{
    return(
        <>
        <div className="flex">
<img src='https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/1.jpg' alt='profile picture' className={classes.img}/>
<div className={classes.green}></div>
<div className={classes.chat}>
<h6 className={classes.message}>
But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.
</h6>
</div>
        </div>
        <h6 className={classes.time}>
             <FontAwesomeIcon icon={faCalendar} className={classes.cloud}></FontAwesomeIcon>
             11:01 AM | Yesterday
        </h6>
        </>
    );
};
export default Text1