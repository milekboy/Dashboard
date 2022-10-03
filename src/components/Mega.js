import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch, faGift, fa4, faGear} from '@fortawesome/free-solid-svg-icons'
import classes from './Mega.module.css'
import Settings from './Settings';
const Mega=(props)=>{
 return(<>
    <FontAwesomeIcon icon={faSearch }  onClick={props.onHandler} className={classes.lol}></FontAwesomeIcon>
    <Settings emoji = {<FontAwesomeIcon icon={faGift }></FontAwesomeIcon>} label='Mega Menu'/>
      <Settings emoji = {<FontAwesomeIcon icon={fa4 }></FontAwesomeIcon>} label='Settings'/>
        <Settings emoji = {<FontAwesomeIcon icon={faGear }></FontAwesomeIcon>} label='Project'/>
    </>
 )
};
export default Mega