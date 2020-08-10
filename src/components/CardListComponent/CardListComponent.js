import React from "react";
import {Button, Col} from "react-bootstrap";
import CardListCard from "../CardListCard/CardListCard";

export default function CardListComponent(props) {
    return (
        <>
            <Col>
                <Button variant="warning">
                    ALL
                </Button>
            </Col>
            <Col>
                Card List
                {props.task.map(e => {
                    console.log(e)
                    return <>
                        <CardListCard item={e}/>
                    </>

                })}
            </Col>

        </>
    )
}