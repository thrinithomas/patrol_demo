import React from 'react';
import { Card } from "react-bootstrap";

export default function DashboardCard(props) {
    return (
        <Card style={{ width: '18rem'}}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    What ever it is
                    {/*{props.remarklist ?*/}
                    {/*    <Card.Text>*/}
                    {/*        /!*<ul>*!/*/}
                    {/*        /!*    {*!/*/}
                    {/*        /!*        props.remarklist.map((item) => {*!/*/}
                    {/*        /!*            return <li key={}>{item}</li>*!/*/}
                    {/*        /!*        })*!/*/}
                    {/*        /!*    }*!/*/}
                    {/*        /!*</ul>*!/*/}
                    {/*    </Card.Text>*/}
                    {/*    : ""*/}
                    {/*}*/}
                </Card.Text>
            </Card.Body>
        </Card>

    )
}