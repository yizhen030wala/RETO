import './CSS/header.css'
import Logo from '../../assets/img/RETO logo//logo & text/32px.svg'
import User from '../../assets/img/Avatar/Mask Group.svg'
import Menu from '../../assets/img/icon/icon-black/menu.svg'


function Header() {

  return (
    <>
      <header className="header">
        {/* LOGO  */}
        <div className='logo'>
          <a href="./index.html">
            <img src={Logo} alt="RETO logo" />
          </a>
        </div>
        {/* 置頂導覽按鈕  */}
        <nav>
          <ul className="nav_btn">
            <li><a href="#">開始探索</a></li>
            <li><a href="#">我的景點</a></li>
            <li><a href="#">行程表</a></li>
          </ul>
        </nav>
        {/* 會員登入  */}
        <div className="user">
          <figure className="user_box">
            <a href="#">
              <img src={User} alt="user" />
            </a>
          </figure >

          <figure className="menu_box">
            <a href="" id='menu'><img src={Menu} alt="" /></a>
          </figure>
        </div>

      </header>
    </>
  )
}

export default Header