import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {   faAngleLeft, faBars, faNoteSticky, faPizzaSlice, faSpaceShuttle, faPieChart, faBasketball, faDirections} from '@fortawesome/free-solid-svg-icons'
import './Remake.css'
import { useState} from 'react';
const Remake=(props)=>{
    const [dropdownActive, setDropdownActive]=useState(false)
        const [dropdown2Active, setDropdown2Active]=useState(false)
         const [dropdown3Active, setDropdown3Active]=useState(false)
          const [dropdown5Active, setDropdown5Active]=useState(false)
         const [dropdown4Active, setDropdown4Active]=useState(false)
         const [dropdown6Active, setDropdown6Active]=useState(false)
           const [dropdown7Active, setDropdown7Active]=useState(false)
function dropdownHandler(){
    setDropdownActive(value => !value);
}
function dropdown2Handler(){
    setDropdown2Active(value => !value);
}
function dropdown3Handler(){
    setDropdown3Active(value => !value);
}
function dropdown4Handler(){
    setDropdown4Active(value => !value);
}
function dropdown5Handler(){
    setDropdown5Active(value => !value);
}
function dropdown6Handler(){
    setDropdown6Active(value => !value);
}
function dropdown7Handler(){
    setDropdown7Active(value => !value);
}
    return(<>
         <header className='head'>
        <h3 className='logo'>architect</h3>
      <FontAwesomeIcon icon={faBars}  onClick={props.chill} className='lol' ></FontAwesomeIcon>
       </header>
    <div className='wrapper'>
        
        <div className='sidebar'>
         <h3 className='menu'>Menu</h3>
       <div className='flexi' onClick={dropdownHandler}>
        <FontAwesomeIcon icon={faSpaceShuttle}  className='lol1' ></FontAwesomeIcon>
        <h3 className='board'>Dashboard</h3>
 <FontAwesomeIcon icon={faAngleLeft}  className='loll1' ></FontAwesomeIcon>
       </div>
        {dropdownActive ?
        <>
        <div className='flex'>
            <div className='long'></div>
            <div>
                <h4 className='ana'>Analytics</h4>
  <h4 className='anali'>Commerce</h4>
<h4 className='anali'>Sales</h4>
<h4 className='anali'>Minimal</h4>
<h4 className='anali'>CRM</h4>
            </div>
            
        </div>

</>
: null}
        <div className='flexi' onClick={dropdown2Handler}>
        <FontAwesomeIcon icon={faNoteSticky}  className='lol1' ></FontAwesomeIcon>
        <h3 className='boards'>Pages</h3>
 <FontAwesomeIcon icon={faAngleLeft}  className='lolll1' ></FontAwesomeIcon>
       </div>
        {dropdown2Active ?
        <>
        <div className='flex'>
            <div className='long'></div>
            <div>
                <h4 className='ana'>Login</h4>
  <h4 className='anali'>Login Boxed</h4>
<h4 className='anali'>Register</h4>
<h4 className='anali'>Regiser Boxed</h4>
<h4 className='anali'>Fogort Pins</h4>
            </div>
            
        </div>

</>
: null}
  <div className='flexi' onClick={dropdown3Handler}>
        <FontAwesomeIcon icon={faPizzaSlice}  className='lol1' ></FontAwesomeIcon>
        <h3 className='boards'>Application</h3>
 <FontAwesomeIcon icon={faAngleLeft}  className='lolll2' ></FontAwesomeIcon>
       </div>
        {dropdown3Active ?
        <>
        <div className='flex'>
            <div className='long'></div>
            <div>
                <h4 className='ana'>Login</h4>
  <h4 className='anali'>Login Boxed</h4>
<h4 className='anali'>Register</h4>
<h4 className='anali'>Regiser Boxed</h4>
<h4 className='anali'>Fogort Pins</h4>
            </div>
            
        </div>

</>
: null}
 <h3 className='menus'>UI Components</h3>
    <div className='flexi' onClick={dropdown5Handler}>
        <FontAwesomeIcon icon={faSpaceShuttle}  className='lol1' ></FontAwesomeIcon>
        <h3 className='board'>Dashboard</h3>
 <FontAwesomeIcon icon={faAngleLeft}  className='loll1' ></FontAwesomeIcon>
       </div>
        {dropdown5Active ?
        <>
        <div className='flex'>
            <div className='long'></div>
            <div>
                <h4 className='ana'>Analytics</h4>
  <h4 className='anali'>Commerce</h4>
<h4 className='anali'>Sales</h4>
<h4 className='anali'>Minimal</h4>
<h4 className='anali'>CRM</h4>
            </div>
            
        </div>

</>
: null}
   <div className='flexi' onClick={dropdown4Handler}>
        <FontAwesomeIcon icon={faNoteSticky}  className='lol1' ></FontAwesomeIcon>
        <h3 className='boards'>Pages</h3>
 <FontAwesomeIcon icon={faAngleLeft}  className='lolll1' ></FontAwesomeIcon>
       </div>
        {dropdown4Active ?
        <>
        <div className='flex'>
            <div className='long'></div>
            <div>
                <h4 className='ana'>Login</h4>
  <h4 className='anali'>Login Boxed</h4>
<h4 className='anali'>Register</h4>
<h4 className='anali'>Regiser Boxed</h4>
<h4 className='anali'>Fogort Pins</h4>
            </div>
            
        </div>

</>
: null}
   <div className='flexi' onClick={dropdown6Handler}>
        <FontAwesomeIcon icon={faSpaceShuttle}  className='lol1' ></FontAwesomeIcon>
        <h3 className='board'>Dashboard</h3>
 <FontAwesomeIcon icon={faAngleLeft}  className='loll1' ></FontAwesomeIcon>
       </div>
        {dropdown6Active ?
        <>
        <div className='flex'>
            <div className='long'></div>
            <div>
                <h4 className='ana'>Analytics</h4>
  <h4 className='anali'>Commerce</h4>
<h4 className='anali'>Sales</h4>
<h4 className='anali'>Minimal</h4>
<h4 className='anali'>CRM</h4>
            </div>
            
        </div>

</>
: null}
 <div className='flexi' onClick={dropdown7Handler}>
        <FontAwesomeIcon icon={faSpaceShuttle}  className='lol1' ></FontAwesomeIcon>
        <h3 className='board'>Dashboard</h3>
 <FontAwesomeIcon icon={faAngleLeft}  className='loll1' ></FontAwesomeIcon>
       </div>
        {dropdown7Active ?
        <>
        <div className='flex'>
            <div className='long'></div>
            <div>
                <h4 className='ana'>Analytics</h4>
  <h4 className='anali'>Commerce</h4>
<h4 className='anali'>Sales</h4>
<h4 className='anali'>Minimal</h4>
<h4 className='anali'>CRM</h4>
            </div>
            
        </div>

</>
: null}
<h3 className='menus'>Dashboard Widgets</h3>
<div className='flexi'>
        <FontAwesomeIcon icon={faPieChart}  className='lol1' ></FontAwesomeIcon>
        <h3 className='board'>Chart Boxes 1</h3>
 
 </div>
 <div className='flexi'>
        <FontAwesomeIcon icon={faBasketball}  className='lol1' ></FontAwesomeIcon>
        <h3 className='board'>Chart Boxes 2</h3>
 
 </div>
 <div className='flexi'>
        <FontAwesomeIcon icon={faDirections}  className='lol1' ></FontAwesomeIcon>
        <h3 className='board'>Chart Boxes 3</h3>
 
 </div>
 <div className='flexi'>
        <FontAwesomeIcon icon={faDirections}  className='lol1' ></FontAwesomeIcon>
        <h3 className='board'>Chart Boxes 3</h3>
 
 </div>
 
        </div>

    </div>
       </>
    )
};
export default Remake;