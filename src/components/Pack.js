import classes from './Pack.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch, faX} from '@fortawesome/free-solid-svg-icons'
import Icons from './Icons';
import Searchbar from './Searchbar';
import { useState } from 'react';
const Pack=()=>{
    const [searchOn, setSearchOn]=useState(false);
   function setSearchOnHandler(){
    setSearchOn(current => !current);
   }
    return(
<>
<div className={classes.container}>
{ searchOn ? <><Searchbar/>  <FontAwesomeIcon icon={faX} className={classes.cancel} onClick={setSearchOnHandler}></FontAwesomeIcon></> : <FontAwesomeIcon icon={faSearch } className={classes.icon} onClick={setSearchOnHandler}></FontAwesomeIcon> }
<Icons/>
</div>
</>
    );
};
export default Pack;