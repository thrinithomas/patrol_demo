import React, {useState} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import CardListComponent from "../../components/CardListComponent/CardListComponent";
import MissionListComponent from "../../components/MissionListComponent/MissionListComponent";

export default function MissionScreen() {

    // This is pseudo state with hard-code data
    const [task, setTask] = useState({
        list: [
            {
                title: "Y1-1",
                e_name: '李貴',
                isSelect: false,
                change_loc: null,
                change_diaper: null
            },
            {
                title: "Y1-2",
                e_name: '方祖文',
                isSelect: false,
                change_loc: null,
                change_diaper: null
            },
            {
                title: "Y1-3",
                e_name: '張容容',
                isSelect: false,
                change_loc: null,
                change_diaper: null
            },
            {
                title: "Y1-4",
                e_name: '何雪',
                isSelect: false,
                change_loc: null,
                change_diaper: null
            }
        ]
    })

    const selectAll = () => {
        let s_task = [...task.list]
        s_task = s_task.map(e => ({
            ...e,
            isSelect: true
        }))
        setTask({list: s_task})
    }

    const select = (title) => {
        let s_task = [...task.list]
        // console.log(title)
        let found = s_task.findIndex(e => e.title === title)
        // console.log(found)
        let item = {...s_task[found]}
        item.isSelect = !item.isSelect
        s_task[found] = item
        setTask({list: s_task})
    }

    const updateChangeLoc = (choice) => {
        // Check isSelect
        // then update its status
        let s_task = [...task.list]
        s_task = s_task.map(e => (e.isSelect === true ? {...e, change_loc: choice} : e))
        setTask({list: s_task})
    }

    const updateChangeDiaper = (choice) => {
        // Check isSelect
        // then update its status
        let s_task = [...task.list]
        s_task = s_task.map(e => (e.isSelect === true ? {...e, change_diaper: choice} : e))
        setTask({list: s_task})
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Button variant="warning" onClick={() => selectAll()}>
                        ALL
                    </Button>
                </Col>
                <Col>

                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col xs={4}>
                    <CardListComponent task={task} setTask={setTask} select={select}/>
                </Col>
                <Col xs={8}>
                    <MissionListComponent updateChangeLoc={updateChangeLoc} updateChangeDiaper={updateChangeDiaper}/>
                </Col>
            </Row>
        </Container>
    )

}
