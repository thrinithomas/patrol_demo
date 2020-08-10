import React, {useState} from 'react';
import {StaffConsumer} from "../../contexts/StaffContext/staff-context";

export default function StatusBar(props) {

    const [statusbar, setStatusbar] = useState({
        currentTime: new Date().toLocaleString(),
    })

    // Don't use setInterval!
    // https://stackoverflow.com/questions/5479762/will-setinterval-cause-browsers-to-hang
    // Stack overflow problem

    //setTimeout(() => {
    //    // console.log(new Date())
    //    setStatusbar({currentTime: new Date().toLocaleString()})
    //}, 1000)

    return (
        <>
            <StaffConsumer>
                {
                    ({staff, room_id}) =>
                        <h3>房號: {room_id} {staff == null ? null : "Staff: " + staff} {statusbar.currentTime}</h3>

                }
            </StaffConsumer>
        </>
    )
}