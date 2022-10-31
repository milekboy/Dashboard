import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCar, faBars, faCloudArrowDown, faComputer, faMicrophone, faEarth, faPieChart, faAngleUp, faGear , faGripVertical, faX} from '@fortawesome/free-solid-svg-icons'
import Slider from "react-slick";
import './Navbar.css'
import { useLayoutEffect,useState} from 'react';
import Searchbar from './Searchbar';
import Mega from './Mega';
import Icons from './Icons';
import Profile from './Profile';
import Remake from './Remake';
import SidebarSub from './SidebarSub';
import Dividend from './Dividend';
import String from './String';
import Graphs from './Graphs';
import Sales from './Sales';
import Table1 from './Table1';
import Table2 from './Table2';
import Tasks from './Tasks';
import Chats from './Chats';
import Followers from './Followers';
import Pack from './Pack';
import SmallAnalytics from './small screen components/SmallAnalytics';
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
const Navbar =(props)=>{
  const [width, height] = useWindowSize();
   const [searchOn, setSearchOn] =useState(false);
   function searchOnHandler(){
   setSearchOn(true);
   }
   function searchOffHandler(){
   setSearchOn(false);
   }

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
   function toggleSidebarHandler(){
    setSidebarIsOpen(value => !value);
     ;
  }
     const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const isMobile = window.screen.width > 600
    
    const [packActive, setPackActive]=useState(false);
function packActiveHandler(){
    setPackActive(current => !current);
}
    return ( 
      <div>
       
    {sidebarIsOpen && isMobile?<Remake chill={toggleSidebarHandler}/>: isMobile?<SidebarSub chill={toggleSidebarHandler}/>:     <>
<nav className='navs'>
    <div className='flexs'>
        {sidebarIsOpen ? <FontAwesomeIcon icon={faX}  className='bars' onClick={toggleSidebarHandler}></FontAwesomeIcon> :
    <FontAwesomeIcon icon={faBars} className='bars' onClick={toggleSidebarHandler}></FontAwesomeIcon>}
    <h2 className='arch'>architect</h2>
    <FontAwesomeIcon icon={faGripVertical}  className='grips' onClick={packActiveHandler} ></FontAwesomeIcon>
    </div>
</nav>
{sidebarIsOpen? <Remake/>:null}
{ packActive ? <Pack/>: null}
</>}
    <header className={sidebarIsOpen? "header":"headerr"}>
   {searchOn ?<Searchbar change={searchOffHandler} />: <Mega onHandler={searchOnHandler}/>}
   <Icons/>
   <Profile/>
   <FontAwesomeIcon icon={faBars }  className='lolz'></FontAwesomeIcon> 
    </header>
       <div className={sidebarIsOpen? "box":"bo"}>
         { isMobile ? 
         <div className='container'>
            <FontAwesomeIcon icon={faCar } className='imgs'></FontAwesomeIcon>
                <h5 className='name'>Analytics Dashboard</h5>
                <h5 className='role'>This is an example dashboard created using build-in elements and components.</h5>
         </div> : <SmallAnalytics/>}
         <div className='container2'>
          <button className='var1'>Variation 1</button>
          <div>
          <button className='var2'>Variation 2</button>
          </div>
         </div>
         <div className='container3'>
         <div className='inside'>
           <div className='portfoli' ><h3 className='portfolio'>Portfolio Performance</h3>
           <button className='view'>View All</button>
           </div>
           <div className='line'></div>
           <div className='portfol' >
           <Dividend/>
           </div>
            <div className='line2'></div>
             <button className='report'>View Complete Report</button>
         </div>
       
         </div>
         <div className='container4'>
          <div className='insid'>
            <>
             <FontAwesomeIcon icon={faCloudArrowDown }  className='cloud'></FontAwesomeIcon> 
              <h3 className='portfolio'>
               Technical Support</h3>
         <div className='line4
         '></div>
         <div className='carousel'>
             <Slider {...settings}>
          <div>
           <Graphs  number='78' plus='+14'/>
           
          </div>
          <div>
           <Graphs number='20' plus='+3'/>
          </div>
          <div>
            <Graphs  number='52' plus='+10'/>
          </div>
         </Slider>
         <h4 className='sale'>SALES PROGRESS</h4>
         <div className='linex
         '></div>
         </div>
            </>
          </div>
           <div className='insidd'>
           <String/>
            </div> 
            
         </div>
         <div className='container5'>
    <div className='inside1'>
          <Sales number='874' text='sales last month'
          className="colors1"/>  
          </div>
   <div className='inside2'>
             <Sales number='1283' text='sales income' className="colors"/>  
          </div>
          <div className='inside2'>
             <Sales number='1286' text='last month sales'
             className="colors3"/>  
          </div>
          <div className='inside2'>
             <Sales number='564' text='total revenue'
             className="colors4"/>  
          </div>
 </div>
  <div className='container6'>
    <div className='insidei'>
           <div className='flex'>
            <FontAwesomeIcon icon={faComputer } className='computer'></FontAwesomeIcon> 
            <h3 id='text'> Easy Dynamic Tables</h3>
             <FontAwesomeIcon icon={faBars } className='computerr' ></FontAwesomeIcon> 
           </div>
           <div className='lin'></div>
           <div className='flex'>
             <h4 className='show'>Show</h4>
              <div className='select'>
      <select className='sid'>
        <option>10</option>
      </select>
    </div>
    <h4 className='entries'>entries</h4>
      <h4 className='search'> Search:</h4>
           <input className='input'></input>
           </div>
        <Table1 className="bold"
        Name='Name'
        Position='Position'
        Office='Office'
        Age='Age'
        Start='Start date'
        Salary='Salary'/>
        
         <Table2
          Name='Airi Satou'
        Position='Account'
        Office='Tokyo'
        Age='33'
        Start='2008/11/28	'
        Salary='$162,700'
         />
          <Table1 className="positions"
           Name='Anita Savi'
        Position='Chief Executive Officer (CEO)'
        Office='San Francisco	'
        Age='47'
        Start='2005/09/23	'
        Salary='$162,700'
          />
         <Table2
           Name='Bradley Greer'
        Position='Software Engineer	'
        Office='London	'
        Age='44'
        Start='2015/12/23	'
        Salary='$62,700'
         />
          <Table1 className="positions"
           Name='Brielle Williamson'
        Position='Integration Specialist		'
        Office='New York	'
        Age='61'
        Start='2005/13/03	'
        Salary='$232,700'
          />
         <Table2
          Name='Bruno Nash'
        Position='Software Engineer'
        Office='London	'
        Age='38'
        Start='2012/20/03	'
        Salary='$202,700'/>
          <Table1 className="positions"
           Name='Bruno Nash'
        Position='Software Engineer'
        Office='London	'
        Age='38'
        Start='2012/20/03	'
        Salary='$202,700'
          />
         <Table2
           Name='Cedric Kelly			'
        Position='Senior Javascript Developer '
        Office='Edinburgh'
        Age='22'
        Start='2019/10/03	'
        Salary='$132,650'
         />
          <Table1 className="positions"
           Name='Caesar Vance'
        Position='Pre-Sales Support'
        Office='New York	'
        Age='21'
        Start='2020/03/05'
        Salary='$13,650'
        />
         <Table2
            Name='Cara Stevens			'
        Position='Sales Assistant'
        Office='New York	'
        Age='46'
        Start='2004/10/07'
        Salary='$143,650'
         />
          <Table1 className="positions"
           Name='Donna Snider		'
        Position='Customer Support'
        Office='New York	'
        Age='	27'
        Start='2011/01/25'
        Salary='$203,690'/>
           <Table1 className="positions2"
            Name='Name'
        Position='Position'
        Office='Office'
        Age='Age'
        Start='Start date'
        Salary='Salary'
           />
           <div className='flex'>
            <h4 className='entriess'> Showing 1 to 10 0f 57 entries</h4>
           </div>
          </div>
           </div>
           <div className='container7'>
            <div className='insid'> 
            <Tasks/>
            </div>
            <div className='insidd'> 
            <Chats/>
            <div className='line'></div>
            <input placeholder='Write here and hit to send...' className='inputs'/>
            </div>
           </div>
             <div className='container8'>
            <div className='insidex'>
               <Followers/>
               {/* <div className='line'></div> */}
                <Followers/> 
            </div>
           </div>
           <div className='container9'>
            <div className='flexx'>
              <FontAwesomeIcon icon={faMicrophone } className='phone'></FontAwesomeIcon>
              <div className='vert'></div>
                 <FontAwesomeIcon icon={faEarth } className='earth'></FontAwesomeIcon>
              <div className='vert'></div>
                 <FontAwesomeIcon icon={faPieChart } className='chart'></FontAwesomeIcon>
              <div className='vert'></div>
            <h5 className='grids'>Footer Menu</h5>
              <FontAwesomeIcon icon={faAngleUp } className='up'></FontAwesomeIcon>
               <h5 className='grid'>Grid Menu</h5>
               <button className='jjc'>NEW</button>
              <FontAwesomeIcon icon={faAngleUp } className='up'></FontAwesomeIcon>
            </div>
             <FontAwesomeIcon icon={faGear} className='gear'></FontAwesomeIcon>
           </div>
        </div>
         
        </div>
    

    )
    
};
export default Navbar