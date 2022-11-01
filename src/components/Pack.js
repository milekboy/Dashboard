import './Pack.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch, faX, faBell, faBox, faFlagUsa, faImage} from '@fortawesome/free-solid-svg-icons'
import Searchbar from './Searchbar';
import { useState } from 'react';
const Pack=()=>{
    const [searchOn, setSearchOn]=useState(false);
   function setSearchOnHandler(){
    setSearchOn(current => !current);
   }
    return(
<>
<div className='containerp'>
{ searchOn ? <><Searchbar/>  <FontAwesomeIcon icon={faX} className='cancelp' onClick={setSearchOnHandler}></FontAwesomeIcon></> : <FontAwesomeIcon icon={faSearch } className='iconp' onClick={setSearchOnHandler}></FontAwesomeIcon> }
<div className={searchOn?'lorr': 'containerpp'}>
        <div className='coverp'>
         <FontAwesomeIcon icon={faBox } className='lolp'></FontAwesomeIcon>
         </div>
         <div className='coverrp'>
          <FontAwesomeIcon icon={faBell } className='lolp'></FontAwesomeIcon>
          </div>
          <div className='coverrrp'>
           <FontAwesomeIcon icon={faFlagUsa } className='lolp'></FontAwesomeIcon>
           </div>
           <div className='coverrrrp'>
            <FontAwesomeIcon icon={faImage  } className='lolp'></FontAwesomeIcon>
            </div>
    </div>
</div>
</>
    );
};
export default Pack;