import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom";
import StatusBar from "./components/StatusBar/StatusBar";
import DashboardScreen from "./screens/DashboardScreen/DashboardScreen";
import 'bootstrap/dist/css/bootstrap.min.css';
import {StaffConsumer} from "./contexts/StaffContext/staff-context";

function App() {

    return (
        <StaffConsumer>
            {
                (staff, room_id) =>
                    <div className="App">
                        <StatusBar staff={staff} room_id={room_id}/>
                        <Switch>
                            <Route exact path="/config">
                                <h3>Set room no.</h3>
                            </Route>

                            <Route path={"/" + room_id + "/" + staff + "/tasks"}>
                                <>
                                    <h2>Hello this room {room_id} task screen</h2>
                                </>
                            </Route>

                            <Route path="/">
                                <DashboardScreen/>
                            </Route>
                        </Switch>

                    </div>

            }

        </StaffConsumer>
    );
}

export default App;
