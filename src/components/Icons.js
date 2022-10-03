import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell, faBox, faFlagUsa, faImage} from '@fortawesome/free-solid-svg-icons'
import classes from './Icons.module.css'
const Icons =()=>{
return(
    <div className={classes.container}>
        <div className={classes.cover}>
         <FontAwesomeIcon icon={faBox } className={classes.lol}></FontAwesomeIcon>
         </div>
         <div className={classes.coverr}>
          <FontAwesomeIcon icon={faBell } className={classes.lol}></FontAwesomeIcon>
          </div>
          <div className={classes.coverrr}>
           <FontAwesomeIcon icon={faFlagUsa } className={classes.lol}></FontAwesomeIcon>
           </div>
           <div className={classes.coverrrr}>
            <FontAwesomeIcon icon={faImage  } className={classes.lol}></FontAwesomeIcon>
            </div>
    </div>
)

}; 
export default Icons;