import React from "react";
import {Card, Col, Figure, Row} from "react-bootstrap";

export default function CardListCard(props) {

    return (
        <Card as="button" style={{
            width: '18rem',
            backgroundColor: props.item.isSelect ? 'cyan' : 'white'
        }}
              onClick={() => props.select(props.item.title)}
        >
            {/*<Card.Img variant="left" src={`${process.env.PUBLIC_URL}/assets/image/any.png`}/>*/}
            <Card.Body>
                <Row>
                    <Col xs={3}>
                        <Figure>
                            <Figure.Image
                                width={120}
                                height={180}
                                alt="120x180"
                                src={`${process.env.PUBLIC_URL}/assets/image/any.png`}
                            />
                        </Figure>
                    </Col>
                    <Col xs={9}>
                        <Card.Title>{props.item.title}</Card.Title>
                        <Row>
                            <Col>
                                <Card.Text>
                                    {props.item.e_name}
                                </Card.Text>
                            </Col>
                            <Col>
                                <Col>
                                    <Card.Text>
                                        {props.item.change_loc ? <>{props.item.change_loc}</> : null}
                                    </Card.Text>
                                </Col>

                                <Col>
                                    <Card.Text>
                                        {props.item.change_diaper ? <>{props.item.change_diaper}</> : null}
                                    </Card.Text>
                                </Col>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>

    )
}
