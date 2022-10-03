import classes from './Chats.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars, faPrint} from '@fortawesome/free-solid-svg-icons'
import Text1 from './Text1';
import Text2 from './Text2';
const Chats=()=>{
    return(
<>
   <div className={classes.flex}>
 <FontAwesomeIcon icon={faPrint } className={classes.imgs}></FontAwesomeIcon>
 <h5 className={classes.chat}>Chat Box</h5>
 <FontAwesomeIcon icon={faBars } className={classes.img}></FontAwesomeIcon>
   </div>
    <div className={classes.line}></div>
    <div className={classes.scroll}>
    <Text1/>
    <Text2/>
     <Text1/>
    <Text2/>
     <Text1/>
    <Text2/>
    </div>
   </>
    )
};
export default Chats;
