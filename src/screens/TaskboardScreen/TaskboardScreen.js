import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap';
import TaskboardCard from "../../components/TaskboardCard/TaskboardCard";
import CheckinComponent from "../../components/CheckinComponent/CheckinComponent";
import {Redirect} from "react-router-dom";

export default function TaskboardScreen() {

    // let logoutSec = 30;

    const [option, setOption] = useState({
        select: null
    });

    const prevDate = new Date()
    prevDate.setDate(prevDate.getDate() - 1)

    const [fakeDate, setFakeDate] = useState({
        previousDate: prevDate
    })

    // let tempDate = new Date();
    // tempDate.setDate(tempDate.getDate() - 1)

    // console.log(`Entry time ${new Date().toLocaleTimeString()}`)

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         console.log(`Auto redirect ${new Date().toLocaleTimeString()}`)
    //     }, 15000)
    //     return () => clearTimeout(timer)
    // }, [])

    // const [seconds, setSeconds] = useState(logoutSec);
    //
    // useEffect(() => {
    //
    //
    //     const interval = setTimeout(() => {
    //         //setSeconds(seconds => seconds -1);
    //         //if (seconds === 0) {
    //             window.location.reload(false);
    //         //}
    //     }, 30000)
    //
    //     return () => clearInterval(interval);
    // }, [])

    // setTimeout(() => {
    //     window.location.reload(false); // Refresh page after 30s
    //     // return <Redirect push to="/" />
    //     console.log("Update Interval")
    // }, logoutSec * 1000)


    useEffect(() => {
        console.log(`Hit effect at ${new Date().toLocaleString()}`)
        const redirectTimer = setTimeout(() => {
            console.log(`Bye at ${new Date().toLocaleString()}`)
            // window.location.reload(false); // Refresh page after 30s

        }, 15000)
        return () => clearTimeout(redirectTimer);
    }, [])


    return (
        <Container>
            <Row>
                <Col>
                    <TaskboardCard title="巡邏" id="patrol" onSelect={setOption}/>
                </Col>
                <Col>
                    <TaskboardCard title="清潔" id="cleansing" onSelect={setOption}/>
                </Col>
                <Col>
                    <TaskboardCard title="任務" id="mission" onSelect={setOption}/>
                </Col>
            </Row>
            <Row>
                {
                    option.select ?
                        option.select !== '任務' ?
                            <CheckinComponent select={option.select} fakeDate={fakeDate} setFakeDate={setFakeDate}/> :
                            <Redirect to="/missions"/> :
                        null
                }
            </Row>
            <Row>
                <Container>
                    <Row>
                        <Button variant="success" href="/">Return to home and invalidate staff</Button>
                    </Row>
                    <Row>
                        {/*<h1>{seconds} 後自動返回主頁</h1>*/}
                    </Row>
                </Container>
            </Row>
        </Container>
    )
}
