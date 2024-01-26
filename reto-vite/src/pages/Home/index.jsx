import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components-common/Header/Header'

const index = () => {
  return (
    <div>
      <Header/>
      <p>here is 首頁</p>
      <Link to="/login">登入頁</Link>
      <br></br>
      <Link to="/test">test demo page</Link>
    </div>
  )
}

export default index
