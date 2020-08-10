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
                            <Col><DashboardCard title={"101"} remarklist={["hello", "try"]}/></Col>
                            <Col><DashboardCard title={"102"} remarklist={["hello", "try"]}/></Col>
                        </Row>
                        <Row>
                            <Col><DashboardCard title={"103"} remarklist={[]}/></Col>
                            <Col><DashboardCard title={"104"} remarklist={["hello"]}/></Col>
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
