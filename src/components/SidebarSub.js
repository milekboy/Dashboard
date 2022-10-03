import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {  faBasketball, faCalendar, faCar, faDiamond, faDiamondTurnRight, faDirections, faGem, faLightbulb, faNoteSticky, faPieChart, faPizzaSlice, faSpaceShuttle, faX} from '@fortawesome/free-solid-svg-icons'
import './SidebarSub.css'
const SidebarSub=(props)=>{
return(
    <>
         <header className='hea'>
      <FontAwesomeIcon icon={faX}  onClick={props.chill} className='lo' ></FontAwesomeIcon>
       </header>
    <div className='wrappe'>
        
        <div className='sideba'>
            <div className='tern'></div>
<FontAwesomeIcon icon={faSpaceShuttle}  className='lo1' ></FontAwesomeIcon>
 <FontAwesomeIcon icon={faCalendar}  className='lo2' ></FontAwesomeIcon>
 <FontAwesomeIcon icon={faPizzaSlice}  className='lo2' ></FontAwesomeIcon>
 <div className='tern2'></div>
 <FontAwesomeIcon icon={faGem}  className='lo3' ></FontAwesomeIcon>
  <FontAwesomeIcon icon={faCar}  className='lo3' ></FontAwesomeIcon>
  <FontAwesomeIcon icon={faNoteSticky}  className='lo3' ></FontAwesomeIcon>
    <div className='tern2'></div>
    <FontAwesomeIcon icon={faPieChart}  className='lo3' ></FontAwesomeIcon>
     <FontAwesomeIcon icon={faDirections}  className='lo3' ></FontAwesomeIcon>
     <FontAwesomeIcon icon={faBasketball}  className='lo3' ></FontAwesomeIcon>
        <FontAwesomeIcon icon={faNoteSticky}  className='lo3' ></FontAwesomeIcon>
         <div className='tern2'></div>
           <FontAwesomeIcon icon={faLightbulb}  className='lo3' ></FontAwesomeIcon>
        </div>

    </div>
       </>
)
};
export default SidebarSub;