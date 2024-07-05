import NavTop from "../../atoms/NavTop/NavTop";
import NavOption from "../../atoms/NavOption/NavOption";
import CreditCount from "../../atoms/CreditCount/CreditCount";
import style from './SideBar.module.scss';
import data from '@content/Sidebar/data.js';
function SideBar() {
  return (
    <div className={style.sidebar}>
        <div className={style.navtop}>
          <NavTop/>
        </div>
        <div className={style.navmid}>
          {data.map((item,index)=>{
            return (<NavOption title={item.title} image={item.src} key={index}></NavOption>)
          })}
        </div>
        <div className={style.navbottom}>
          <CreditCount amount={220.10}/>
        </div>
    </div>
  );
}

export default SideBar;
