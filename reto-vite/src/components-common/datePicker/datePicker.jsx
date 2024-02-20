import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import '../../../node_modules/react-datepicker/dist/react-datepicker.css'
import './datePicker.scss'
import { addDays } from 'date-fns';

const datePicker = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    return (
        <div>
            <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                formatWeekDay={nameOfDay => nameOfDay.substr(0, 1)}
                // excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
                minDate={new Date()}
                dateFormat="M月d日"
                onChange={(update) => {
                    setDateRange(update);
                }}
                placeholderText={`請選擇日期`}
                
            />
        </div>
    );
}

export default datePicker
