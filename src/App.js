import React from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import StatusBar from "./components/StatusBar/StatusBar";
import DashboardScreen from "./screens/DashboardScreen/DashboardScreen";
import 'bootstrap/dist/css/bootstrap.min.css';
import {StaffConsumer} from "./contexts/StaffContext/staff-context";
import TaskboardScreen from "./screens/TaskboardScreen/TaskboardScreen";
import MissionScreen from "./screens/MissionScreen/MissionScreen";

function App() {

    return (
        <StaffConsumer>

                {
                    ({staff, room_id}) =>
                        <div className="App">
                            <StatusBar staff={staff} room_id={room_id}/>
                            <Switch>
                                <Route exact path="/patrol_demo">
                                    {staff !== null ? <Redirect to="/patrol_demo/tasks"/> : null}
                                    <DashboardScreen/>
                                </Route>

                                <Route path="/patrol_demo/config">
                                    <h3>Set room no.</h3>
                                </Route>

                                <Route path={"/patrol_demo/tasks"}>
                                    {staff == null ? <Redirect to="/patrol_demo"/> : null}
                                    <TaskboardScreen/>
                                </Route>

                                <Route path={"/patrol_demo/missions"}>
                                    {staff == null ? <Redirect to="/patrol_demo"/> : null}
                                    <MissionScreen/>
                                </Route>


                                {/* Need to invalidate staff ID here or
                             redirect the user to task page if staff ID exist */}
                                <Redirect from="*" to="/patrol_demo"/>

                            </Switch>

                        </div>

                }

        </StaffConsumer>
    );
}

export default App;
