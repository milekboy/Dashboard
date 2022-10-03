import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleUp} from '@fortawesome/free-solid-svg-icons'
import classes from './Graphs.module.css'
const Graphs=(props)=>{
    return(
        <div>
  <h4 className={classes.text}>NEW ACCOUNT SINCE 2018</h4>
  <div className={classes.percentage}>
 <FontAwesomeIcon icon={faAngleUp } className={classes.emoji}></FontAwesomeIcon>
 <h1 className={classes.number}>{props.number}</h1>
 <h1 className={classes.texts}>%</h1>
 <h4 className={classes.num}>{props.plus}</h4>
  </div>
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgxQQ1kfO2-em1L8l9EQ5xzv9X0D95pOhb2g&usqp=CAU' alt='graph picture' className={classes.img}></img>
  
        </div>
    )
};
export default Graphs