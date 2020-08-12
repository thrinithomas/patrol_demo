import React, {useEffect} from "react";
import {Button, Col} from "react-bootstrap";
import CardListCard from "../CardListCard/CardListCard";

export default function CardListComponent(props) {

    // useEffect(() => {
    //     // console.log('Did update a')
    //     // //if (props.item) {
    //     //     console.log(props.task.list)
    //
    // }, [props.task.list])

    return (
        <>

            <Col>
                {props.task.list.map(e => {
                    return <CardListCard key={e.title} item={e} select={props.select}/>
                })}
            </Col>

        </>
    )
}
