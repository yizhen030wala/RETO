// NoteInput 自己輸入每個行程的備註

import React, { useState } from 'react';
import "../ScheduleSheet.scss"

const NoteInput = ({ defaultNote, onNoteChange }) => {
    const [note, setNote] = useState(defaultNote);

    const handleNoteChange = (e) => {
        setNote(e.target.value);
        onNoteChange(e.target.value);
    }

    return (
        <>
            <input
                className="note"
                type="text"
                value={note}
                onChange={handleNoteChange}
            />
        </>
    );
}

export default NoteInput;