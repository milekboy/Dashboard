import classes from './Followers.module.css'
const Followers=()=>{
    return(
<div className={classes.flexi}>
<div className={classes.flexii}>
    <div>
    <h3 className={classes.total}>Total Orders</h3>
    <h4 className={classes.year}>Last year expenses</h4>
    </div>
    <h1 className={classes.num}>1896</h1>
</div>

<div className={classes.flexii}>
    <div>
    <h3 className={classes.total}>Followers</h3>
    <h4  className={classes.year}>People intrested</h4>
    </div>
    <h1  className={classes.num2}>45,9%</h1>
</div>

<div className={classes.flexii}>
    <div className={classes.blue}>
    <h3 className={classes.total}>Total Orders</h3>
    <h4  className={classes.year}>Last year expenses</h4>
    </div>
    <h1  className={classes.numm}>1896</h1>
</div>


</div>
    );
};
export default Followers