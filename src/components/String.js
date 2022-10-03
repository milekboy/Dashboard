
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle, faPlus, faBottleWater} from '@fortawesome/free-solid-svg-icons'
import classes from './String.module.css'
const String=()=>{
    return(
        //   <div>
           <>
           <FontAwesomeIcon icon={faBottleWater} className={classes.cloud}></FontAwesomeIcon>
          <h3 className={classes.portfolio}>Timeline Example</h3>
        <div className={classes.line4}></div>
             
        <div className={classes.scrollable}>
         <div className={classes.line}></div>
          <div className={classes.horizon}> 
          <FontAwesomeIcon icon={faCircle} className={classes.circle}></FontAwesomeIcon>
          <h5 className={classes.label}>All Hands Meeting</h5>
          </div>  
            <FontAwesomeIcon icon={faCircle} className={classes.circle2}></FontAwesomeIcon>
          <h5 className={classes.label2}>Yet another one, at <span className={classes.time}>15:00 PM</span></h5>
            <div className={classes.horizo}> 
           <FontAwesomeIcon icon={faCircle} className={classes.circle3}></FontAwesomeIcon>
          <h5 className={classes.label3}>Build the production realese</h5>
          <button className={classes.new}>NEW</button>
          </div>
           <div className={classes.horizon2}> 
            <FontAwesomeIcon icon={faCircle} className={classes.circle4}></FontAwesomeIcon>
          <h5 className={classes.label4}>Something not important</h5>
          </div>
          <img src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/1.jpg" className={classes.pic}/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4g8xUnnDU4kVOp8_-3f3aPDusw_D2AlyXw&usqp=CAU" className={classes.pic2}/>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9EWJXakOBhOQvhl8k0GCRsakU9RxV2m-qiQ&usqp=CAU" className={classes.pic2}/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU" className={classes.pic2}/>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4g8xUnnDU4kVOp8_-3f3aPDusw_D2AlyXw&usqp=CAU" className={classes.pic2}/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5S7x-uPyVGyBxjUf5jqXgtILiU-6nprBTDw&usqp=CAU" className={classes.pic2}/>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9EWJXakOBhOQvhl8k0GCRsakU9RxV2m-qiQ&usqp=CAU" className={classes.pic2}/>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" className={classes.pic2}/>
                  
                   <FontAwesomeIcon icon={faPlus} className={classes.plus}></FontAwesomeIcon >
                    <div > 
          <FontAwesomeIcon icon={faCircle} className={classes.circle5}></FontAwesomeIcon>
          <h5 className={classes.label5}>This dot has an info state</h5>
          </div>  
            <div > 
          <FontAwesomeIcon icon={faCircle} className={classes.circle6}></FontAwesomeIcon>
          <h5 className={classes.label6}>This dot has a dark state</h5>
          </div>  
           <div > 
          <FontAwesomeIcon icon={faCircle} className={classes.circle7}></FontAwesomeIcon>
          <h5 className={classes.label7}>All Hands Meeting</h5>
          </div>  
           <FontAwesomeIcon icon={faCircle} className={classes.circle2}></FontAwesomeIcon>
          <h5 className={classes.label2}>Yet another one, at <span className={classes.time}>15:00 PM</span></h5>
           <div className={classes.horizo}> 
           <FontAwesomeIcon icon={faCircle} className={classes.circle3}></FontAwesomeIcon>
          <h5 className={classes.label3}>Build the production realese</h5>
          <button className={classes.new}>NEW</button>
          </div>
           <div className={classes.line5}></div> 
            </div>
         
          {/* //  </div> */}
           <div className={classes.line6}></div> 
           <button className={classes.message}>View all Messages</button>
            <FontAwesomeIcon icon={faCircle} className={classes.circle12}></FontAwesomeIcon>
    </>
    )
};
export default String;
