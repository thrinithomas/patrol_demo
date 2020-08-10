import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import CardListComponent from "../../components/CardListComponent/CardListComponent";

export default function MissionScreen() {

    // This is pseudo state with hard-code data
    const [task, setTask] = useState([
        {
            title: 101,
            bed_no: 'xxx',
            isSelect: false,
            change_loc: null,
            change_diaper: null
        },
        {
            title: 102,
            bed_no: 'xxx',
            isSelect: false,
            change_loc: null,
            change_diaper: null
        },
        {
            title: 103,
            bed_no: 'xxx',
            isSelect: false,
            change_loc: null,
            change_diaper: "大便"
        },
        {
            title: 104,
            bed_no: 'xxx',
            isSelect: false,
            change_loc: null,
            change_diaper: null
        }
    ])

    return (
        <Container>
            <Row>
                <Col>
                    <CardListComponent task={task} setTask={setTask}/>
                </Col>
                <Col>5678</Col>
            </Row>
        </Container>
    )

}