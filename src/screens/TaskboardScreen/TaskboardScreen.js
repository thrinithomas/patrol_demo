import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import TaskboardCard from "../../components/TaskboardCard/TaskboardCard";

export default function TaskboardScreen() {
    return (
        <Container>
            <Row>
                <Col>
                    <TaskboardCard title="Patrol"/>
                </Col>
                <Col>
                    <TaskboardCard title="Clean"/>
                </Col>
                <Col>
                    <TaskboardCard />
                </Col>
            </Row>
            <Row>
                Patrol, Cleansing...
            </Row>
            <Row>
                <a href="/" >Return to home and invalidate staff</a>
            </Row>
        </Container>
    )
}
