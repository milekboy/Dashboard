import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {  faBars, faCheck, faDatabase, faTrash} from '@fortawesome/free-solid-svg-icons'
import classes from './Tasks.module.css'
import { useState} from 'react';
const Tasks=()=>{
    const [hoverOn, setHoverOn]=useState(false)
    function setHoverOnHandler(){
        setHoverOn(true)
    }
    function setHoverOffHandler(){
        setHoverOn(false)
    }
    return(
<>
<div className={classes.flex}>
  <FontAwesomeIcon icon={faDatabase} className={classes.database} ></FontAwesomeIcon>
  <h4 className={classes.tasks}>Task List</h4>
   <FontAwesomeIcon icon={faBars} className={classes.bar} ></FontAwesomeIcon>
</div>
<div className='line'></div>
<div className={classes.scroll}>
    <div className={classes.flex} onMouseOver={setHoverOnHandler} onMouseLeave={setHoverOffHandler}>
        <div className={classes.straight}></div>
      <input type='checkbox' className={classes.checkbox}></input>
      <div className={classes.ay}>
        <h5 className={classes.car}>Wash the car</h5>
        <h6 className={classes.bob}>Written by Bob</h6>
      </div>
      <button className={classes.button}>REJECTED</button>
      {hoverOn ?
      <>
 <FontAwesomeIcon icon={faCheck} className={classes.check} ></FontAwesomeIcon>
 <FontAwesomeIcon icon={faTrash} className={classes.trash} ></FontAwesomeIcon>
 </>
 : null}</div>
<div className='line'></div>
    <div className={classes.flex}>
        <div className={classes.straight}></div>
      <input type='checkbox' className={classes.checkbox}></input>
      <div className={classes.ay}>
        <h5 className={classes.car}>Task with dropdown menu
</h5>
        <h6 className={classes.bob}>By Johnny</h6>
      </div>
      <button className={classes.button}>REJECTED</button>
   
</div>
<div className='line'></div>
    <div className={classes.flex}>
        <div className={classes.straight}></div>
      <input type='checkbox' className={classes.checkbox}></input>
      <div className={classes.ay}>
        <h5 className={classes.car}>Wash the car</h5>
        <h6 className={classes.bob}>Written by Bob</h6>
      </div>
      <button className={classes.button}>REJECTED</button>
   
</div>
<div className='line'></div>

    <div className={classes.flex}>
        <div className={classes.straight}></div>
      <input type='checkbox' className={classes.checkbox}></input>
      <div className={classes.ay}>
        <h5 className={classes.car}>Wash the car</h5>
        <h6 className={classes.bob}>Written by Bob</h6>
      </div>
      <button className={classes.button}>REJECTED</button>
    
</div>
<div className='line'></div>
    <div className={classes.flex}>
        <div className={classes.straight}></div>
      <input type='checkbox' className={classes.checkbox}></input>
      <div className={classes.ay}>
        <h5 className={classes.car}>Wash the car</h5>
        <h6 className={classes.bob}>Written by Bob</h6>
      </div>
      <button className={classes.button}>REJECTED</button>
   
</div>
<div className='line'></div>
    <div className={classes.flex}>
        <div className={classes.straight}></div>
      <input type='checkbox' className={classes.checkbox}></input>
      <div className={classes.ay}>
        <h5 className={classes.car}>Wash the car</h5>
        <h6 className={classes.bob}>Written by Bob</h6>
      </div>
      <button className={classes.button}>REJECTED</button>
</div>
   </div>
   <div className='line'></div>
</>
    )
};
export default Tasks;