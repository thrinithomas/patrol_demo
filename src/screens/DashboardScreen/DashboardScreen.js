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
                            <Col><DashboardCard title={"125882"} remarklist={["李貴", "try"]}/></Col>
                            <Col><DashboardCard title={"125881"} remarklist={["方祖文", "try"]}/></Col>
                        </Row>
                        <Row>
                            <Col><DashboardCard title={"125885"} remarklist={["張容容"]}/></Col>
                            <Col><DashboardCard title={"125883"} remarklist={["何雪"]}/></Col>
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
