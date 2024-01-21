// import { useState } from 'react'
import './dist/Login.css'
import Gooogle from '../../assets/img/google.svg'

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>

            <main>
                <div className="box">
                    <button className="login"> <img src={Gooogle} alt="" />Google 登入</button>
                    <p>註冊/登入以繼續</p>
                </div>
            </main>

        </>
    )
}

export default App