import SideBar from '@compound/SideBar/SideBar'
import Header from '../components/compound//Header/Header'
import DashBoard from '../views/DashBoard'
import style from './Layout.module.scss'
function Layout(){

    return(<div className={style.wrapper}>
          <div className={style.SideBarContainer}>
              <SideBar/>
          </div>
          <div className={style.mainpart}>
            <div className={style.headerContainer}>
               <Header/>
            </div>
            <div className={style.DashBoardContainer}>
               <DashBoard/>
            </div>
          </div>
    </div>)
}
export default Layout;