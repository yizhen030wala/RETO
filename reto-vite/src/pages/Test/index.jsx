import React from 'react'
import { Link } from 'react-router-dom';
import './CSS/index.css'
import AddToast from '../../components-common/addToast/addToast.jsx'
import RemoveToast from '../../components-common/removeToast/removeToast.jsx'
import MemberToast from '../../components-common/memberToast/memberToast.jsx'
import TextToast from '../../components-common/textToast/textToast.jsx'
import DeleteToast from '../../components-common/deleteToast/deleteToast.jsx'
import DatePicker from '../../components-common/datePicker/datePicker.jsx'
import ButtonDel from '../../components-common/Button/ButtonDel/ButtonDel.jsx'
import LightboxLine from '../../components-common/LightboxLine';
import SpotCard from '../../components-common/ScheduleCard/SpotCard/SpotCard.jsx';

const index = () => {
  return (
    <div>
      <SpotCard />

      {/* <LightboxLine />
      <ButtonDel/>
      <AddToast/>
      <DeleteToast/>
      <MemberToast/>
      <RemoveToast/>
      <TextToast/>
      <DatePicker/>
      <div id="calendar"></div>
      <Link to="/">登入頁</Link>
      <p className="test">scss變數導入測試</p> */}
    </div>
  )
}

export default index
