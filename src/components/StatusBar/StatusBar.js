import React, {useState} from 'react';
import {StaffConsumer} from "../../contexts/StaffContext/staff-context";
import {Container, Row, Col} from "react-bootstrap";

export default function StatusBar(props) {

    const [statusbar, setStatusbar] = useState({
        currentTime: new Date().toLocaleDateString(),
    })

    // Don't use setInterval!
    // https://stackoverflow.com/questions/5479762/will-setinterval-cause-browsers-to-hang
    // Stack overflow problem

    // setTimeout(() => {
    //    // console.log(new Date())
    //    setStatusbar({currentTime: new Date().toLocaleString()})
    // }, 30000)

    return (
        <>
            <StaffConsumer>
                {
                    ({staff, room_id}) =>
                        <Container>
                            <Row>
                                <Col xs={4}>
                                    房號: {room_id}
                                </Col>
                                <Col xs={4}>
                                    {staff == null ? null : "Staff: " + staff}
                                </Col>
                                <Col xs={4}>
                                    {statusbar.currentTime}
                                </Col>
                            </Row>
                        </Container>
                }
            </StaffConsumer>
        </>
    )
}