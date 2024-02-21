// import { useState } from 'react'
import './Login.scss'
import Logo from '../../assets/img/Teng.png'
import Gooogle from '../../assets/img/google.svg'
import { Link } from 'react-router-dom';



function App() {


    return (
        <>

            <main>
                <div className="login-box">
                    <figure className='imgBox' ><img src={Logo} alt="logo" className='logo' /></figure>

                    <Link to="/reto/schedule">
                        <button className="login">
                            <img src={Gooogle} alt="google" />
                            Google 登入
                        </button>
                    </Link>

                    <p>註冊/登入以繼續</p>
                    <p className="agree">註冊即同意<a>隱私權政策</a>和<a>使用者條款</a></p>
                </div>
            </main>

        </>
    )
}

export default App