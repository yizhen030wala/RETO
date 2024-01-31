import React from 'react'
import { Link } from 'react-router-dom';
import './CSS/index.css'
import AddToast from '../../components-common/addToast/addToast.jsx'
import RemoveToast from '../../components-common/removeToast/removeToast.jsx'
import MemberToast from '../../components-common/memberToast/memberToast.jsx'
import TextToast from '../../components-common/textToast/textToast.jsx'
import DeleteToast from '../../components-common/deleteToast/deleteToast.jsx'
import DatePicker from '../../components-common/datePicker/datePicker.jsx'
import LightboxLine from '../../components-common/LightboxLine'




const index = () => {
  return (
    <div>
      <AddToast/>
      <DeleteToast/>
      <MemberToast/>
      <RemoveToast/>
      <TextToast/>
      <DatePicker/>
      <div id="calendar"></div>
      <Link to="/">登入頁</Link>
      <p className="test">scss變數導入測試</p>
      <p>各位身體健康</p>
      <span>好</span>
    </div>
  )
}

export default index
