
import  './Sales.css'
const Sales =(props)=>{
    return(
        <>
        <div className='boxess'>
   <h4 className='dollar'>$</h4>
   <h1 className='number'>{props.number}</h1>
   </div>
   <h4 className='text'>{props.text}</h4>
   <img src='https://thumbs.dreamstime.com/b/heartbeat-icon-line-vector-heart-beat-illustration-template-logo-design-medical-flat-web-icons-sign-symbol-app-ui-190662793.jpg' alt='graph'className='grabh'></img>
    <div className={`linx ${props.className}`}></div>
</>
    );
};
export default Sales;