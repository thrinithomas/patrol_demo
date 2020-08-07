import React, {createRef, useState} from "react";
import {Button, FormControl, InputGroup} from "react-bootstrap";
import {StaffConsumer} from "../../contexts/StaffContext/staff-context";
import {useLocation} from "react-router-dom";

export default function DashboardIDInput() {

    let location = useLocation();

    const cardInputRef = createRef();

    const [input, setInput] = useState({});

    const validateStaff = (value, callback) => {
        if (value === 1001) {
            callback(value)
            // Navigate to other page
        }
    }

    return (

        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text id="card_id">員工拍卡:</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                ref={cardInputRef}
                placeholder="Card ID"
                aria-label="Card ID"
                aria-describedby="card_id"
                onChange={() => setInput(cardInputRef.current.value)}
            />
            <StaffConsumer>
                {({setStaff}) => (
                    <Button onClick={() => setStaff(input)}> > </Button>
                )}
            </StaffConsumer>
        </InputGroup>
    )
}