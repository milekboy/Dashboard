import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCar} from '@fortawesome/free-solid-svg-icons'
import classes from './Analytics.module.css'
const Analytics=()=>{
    return (
        <div className={classes.box}>
        <div className={classes.container}>
            <FontAwesomeIcon icon={faCar } className={classes.imgs}></FontAwesomeIcon>
             <div className={classes.container}>
                <h5 className={classes.name}>Analytics Dashboard</h5>
                <h5 className={classes.role}>This is an example dashboard created using build-in elements and components.</h5>
            </div>
        </div>
        </div>

        
    )
}
export default Analytics