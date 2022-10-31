import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import classes from './SmallAnalytics.module.css'
const SmallAnalytics=()=>{
    return(
    
<div className={classes.analytic}>
<h3 className={classes.ana}>
    Analytics Dashboard
</h3>

<h6  className={classes.text}>
    This is an example dashboard created using build-in-elements <br/> <span> and components.</span>
</h6>

<div className={classes.flex}>
<FontAwesomeIcon icon={faStar } className={classes.imgs}></FontAwesomeIcon>
<button>
    Buttons
</button>
</div>
</div>
    
    );
};
export default SmallAnalytics;