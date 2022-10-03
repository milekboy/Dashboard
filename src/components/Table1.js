import './Table1.css'
const Table1=(props)=>{
    return(
   <div className='flex'>
            <div className='Name'><h5
             className={`position ${props.className}`}
             >{props.Name}</h5></div>
             <div className='Name2'><h5  className={`position ${props.className}`}>{props.Position}</h5></div>
              <div className='Name3'><h5 className={`position ${props.className}`}>{props.Office}</h5></div>
               <div className='Name4'><h5 className={`position ${props.className}`}>{props.Age}</h5></div>
                <div className='Name5'><h5 className={`position ${props.className}`}>{props.Start}</h5></div>
                 <div className='Name6'><h5 className={`position ${props.className}`}>{props.Salary}</h5></div>
           </div>
    )
};
export default Table1