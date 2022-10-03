import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch, faX} from '@fortawesome/free-solid-svg-icons'
import classes from './Searchbar.module.css'
const Searchbar=(props)=>{
return (
    <div className={classes.main}>
    <div className={classes.searchbar}>
    <input placeholder="Type to search" className={classes.input}></input>
     <FontAwesomeIcon icon={faSearch } className={classes.icon}></FontAwesomeIcon>
     </div>
      <FontAwesomeIcon icon={faX} className={classes.cancel} onClick={props.change}></FontAwesomeIcon>
     
     </div>
)
};
export default Searchbar