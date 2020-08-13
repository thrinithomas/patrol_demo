import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import DashboardIDInput from "../../components/DashboardIDInput/DashboardIDInput";
import {PseudoDataConsumer} from "../../contexts/PseudoDataContext/PseudoDataContext";
import DashboardCarousel from "../../components/DashboardCarosuel/DashboardCarousel";


export default function DashboardScreen(props) {
    return (
        <PseudoDataConsumer>
            {
                ({datum}) =>
                    <Container>
                        <Row>
                            <Col><DashboardCard title={"Y1-1"} remarklist={["李貴", "軟餐"]}/></Col>
                            <Col><DashboardCard title={"Y1-2"} remarklist={["方祖文", "禁食"]}/></Col>
                        </Row>
                        <Row>
                            <Col><DashboardCard title={"Y1-3"} remarklist={["張容容"]}/></Col>
                            <Col><DashboardCard title={"Y1-4"} remarklist={["何雪"]}/></Col>
                        </Row>

                        <Row>
                            <Col>
                                <DashboardIDInput updateStaff={props.updateStaff}/>
                            </Col>
                        </Row>
                    </Container>
            }

        </PseudoDataConsumer>
    )
}
