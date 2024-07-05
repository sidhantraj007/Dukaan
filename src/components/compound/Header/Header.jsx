import React from 'react'
import TopBarLeft from '@atom/TopBarleft/TopBarLeft'
import SearchBar from '@atom/SearchBar/SearchBar'
import HeaderOption from '@atom/HeaderOption/HeaderOption'
import style from './header.module.scss'
import chat from '@assets/svg/chat/Group.svg'
import dropDown from '@assets/svg/dropdown/dropdown.svg'
function Header() {
  return (
    <div className={style.header}>
        <div className={style.topbarleft}>
         <TopBarLeft/>
        </div>
        <div className={style.searchbar}>
           <SearchBar/>
        </div>        
        <div className={style.headeroption}>
            <div> <HeaderOption image={chat}/></div>
            <div> <HeaderOption image={dropDown}/></div>
        </div>
    </div>
  )
}

export default Header;