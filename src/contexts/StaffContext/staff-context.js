import React, {Component, createContext} from "react";

const StaffContext = createContext({
    staff: null,
    room_id: "037",
    setStaff: () => {},
    setRoom_id: () => {}
});

export class StaffProvider extends Component {
    setStaff = (value) => {
        this.setState({staff: value})
    }

    setRoom_id = (value) => {
        this.setState({room_id: value})
    }

    state = {
        staff: null,
        room_id: "037",
        setStaff: this.setStaff,
        setRoom_id: this.setRoom_id
    }

    render() {
        return (
            <StaffContext.Provider value={this.state}>
                {this.props.children}
            </StaffContext.Provider>
        )
    }
}

export const StaffConsumer = StaffContext.Consumer