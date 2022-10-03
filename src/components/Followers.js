import classes from './Followers.module.css'
const Followers=()=>{
    return(
<div className='flex'>
<div >
    <h3 className={classes.total}>Total Orders</h3>
    <h4 className={classes.year}>Last year expenses</h4>
</div>
<h1 className={classes.num}>1896</h1>
<div>
    <h3 className={classes.total}>Followers</h3>
    <h4  className={classes.year}>People intrested</h4>
</div>
<h1  className={classes.num2}>45,9%</h1>
<div>
    <h3 className={classes.total}>Total Orders</h3>
    <h4  className={classes.year}>Last year expenses</h4>
</div>
<h1  className={classes.num}>1896</h1>

</div>
    );
};
export default Followers