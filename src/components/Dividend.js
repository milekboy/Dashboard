import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown, faAngleUp, faBuilding, faComputer, faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import classes from './Dividend.module.css'
const Dividend =()=>{
return (<>
  <>
      <FontAwesomeIcon icon={faComputer } className={classes.imgs}></FontAwesomeIcon>
      <div className={classes.cas}>
        <h className={classes.cash}>
            Cash Deposits
        </h>
        <h1 className={classes.million}>
            1,7M
        </h1>
        <h className={classes.angle}>
          <FontAwesomeIcon icon={faAngleDown  }></FontAwesomeIcon>  
          54.1% </h> <h className={classes. less}>less earnings</h>
       
      </div>
</>
<>
      <FontAwesomeIcon icon={faGraduationCap } className={classes.cap}></FontAwesomeIcon>
      <div className={classes.cas}>
        <h className={classes.cash}>
            Invested Dividents
        </h>
        <h1 className={classes.million}>
            9M
        </h1>
        <h className={classes. less}>less earnings</h>
        <h className={classes.us}>
          <FontAwesomeIcon icon={faAngleDown  }></FontAwesomeIcon>  
          54.1% </h> 
       
      </div>
</>
<>
      <FontAwesomeIcon icon={faBuilding } className={classes.build}></FontAwesomeIcon>
      <div className={classes.cas}>
        <h className={classes.cash}>
           Capital Gains
        </h>
        <h1 className={classes.millio}>
          $563
        </h1>
         <h className={classes. less}>increased by</h>
        <h className={classes.up}>
          <FontAwesomeIcon icon={faAngleUp  }></FontAwesomeIcon>  
          54.1% </h>
       
      </div>
</>
      </>
)
};
export default Dividend