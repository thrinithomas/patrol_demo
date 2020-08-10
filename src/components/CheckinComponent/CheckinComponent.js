import React, {useEffect, useState} from "react";
import {Button, Col, Container, Row, Spinner} from "react-bootstrap";

export default function CheckinComponent(props) {

    const [check, setCheck] = useState({
        isCheck: false,
        isLoading: false
    })

    // This function is referring to
    // https://react-bootstrap.netlify.app/components/buttons/#button-loading-state
    const simulateNetworkRequest = () => {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    useEffect(() => {
        if (check.isLoading) {
            simulateNetworkRequest().then(() => {
                setCheck({isCheck: true, isLoading: false})
            })
        }
    }, [check.isLoading])

    const handleClick = () => setCheck({...check, isLoading: true});

    return (
        <Container>
            <Row>
                <Col xs={3}>
                    <Button variant={check.isCheck ? "info" : "outline-info"}
                            disabled={check.isLoading}
                            onClick={!check.isLoading ? handleClick : null}>
                        {check.isLoading ? <Spinner as="span" size="sm" animation="border"/> : <span>&#10003;</span>}

                    </Button>
                </Col>
                <Col xs={9}>
                    <Row>
                        {/* check incoming date is undefined or null */}
                        <span>上次<strong> {props.select} </strong>時間: {props.fakeDate.previousDate.toLocaleString()}</span>
                    </Row>
                    <Row>
                        {check.isCheck ?
                            <span>今次 <strong>{props.select}</strong> 時間: {new Date().toLocaleString()}</span> : null}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}