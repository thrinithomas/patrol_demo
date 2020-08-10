import React from "react";
import {Carousel, Col, Container, Row} from "react-bootstrap";
import DashboardCard from "../DashboardCard/DashboardCard";
import DashboardIDInput from "../DashboardIDInput/DashboardIDInput";

export default function DashboardCarousel(props) {
    console.log(props)
    return (
        <Carousel>
            {/* Loop array la */}

            <Carousel.Item>
                <Carousel.Caption>
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
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Carousel.Caption>
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
                    <h3>Second slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>

            </Carousel.Item>

            <Carousel.Item>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>

            </Carousel.Item>
        </Carousel>
    )
}
