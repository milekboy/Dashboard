import classes from './Table2.module.css'
const Table2=(props)=>{
    return(
   <div className='flex'>
            <div className={classes.Name}><h5 className={classes.position}>{props.Name}</h5></div>
             <div className={classes.Name2}><h5 className={classes.position}>{props.Position}</h5></div>
              <div className={classes.Name3}><h5 className={classes.position}>{props.Office}</h5></div>
               <div className={classes.Name4}><h5 className={classes.position}>{props.Age}</h5></div>
                <div className={classes.Name5}><h5 className={classes.position}>{props.Start}</h5></div>
                 <div className={classes.Name6}><h5 className={classes.position}>{props.Salary}</h5></div>
           </div>
    )
};
export default Table2