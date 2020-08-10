import React from "react";
import {Card, Col, Figure, Row} from "react-bootstrap";

export default function CardListCard(props) {
    return (
        <Card id={props.item.title} style={{width: '18rem'}}>
            {/*<Card.Img variant="left" src={`${process.env.PUBLIC_URL}/assets/image/any.png`}/>*/}
            <Card.Body>
                <Row>
                    <Figure>
                        <Figure.Image
                            width={80}
                            height={80}
                            alt="60x60"
                            src={`${process.env.PUBLIC_URL}/assets/image/any.png`}
                        />
                    </Figure>
                    <Col>
                        <Card.Title>{props.item.title}</Card.Title>
                        <Card.Text>
                            <Row>
                                <Col>xxx</Col>
                                <Col>
                                    {props.item.change_loc ? props.item.change_loc : null}
                                </Col>
                                <Col>
                                    {props.item.change_diaper ? props.item.change_diaper : null}
                                </Col>
                            </Row>
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>

    )
}