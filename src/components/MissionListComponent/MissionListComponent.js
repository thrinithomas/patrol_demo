import React, {useEffect, useState} from "react";
import {Row, Col, Button, Container} from "react-bootstrap";
import MissionCard from "../MissionCard/MissionCard";

export default function MissionListComponent(props) {

    const [mission, setMission] = useState(
        {
            isSelect: null,
            isSelectDetail: null,
        }
    )

    const updateMission = (title) => {
        setMission({
            isSelect: title,
            isSelectDetail: null,
        })
    }

    const updateMissionDetail = (title) => {
        console.log(`updateMissionDetail ${title}`)
        setMission({
            ...mission,
            isSelectDetail: title
        })
    }


    const onCancelClick = () => {
        setMission({
            isSelect: null,
            isSelectDetail: null
        })
    }

    const onReturnClick = () => {
        onCancelClick()
        window.location.reload(false)
    }

    let cardStyle = {width: '13rem', padding: '5px'}
    let selectedCardStyle = {width: '13rem', padding: '5px', backgroundColor: 'salmon'}

    let choiceCardStyle = {width: '11rem', padding: '5px'}
    let selectedChoiceCardStyle = {width: '11rem', padding: '5px', backgroundColor: 'salmon'}


    return (
        <>
            <Row style={{padding: '0px', height: '8rem'}}>
                <Col xs={4}>
                    <MissionCard title="轉身" cardStyle={cardStyle}
                                 selectedCardStyle={selectedCardStyle} isSelect={mission.isSelect}
                                 select={updateMission}/>
                </Col>
                <Col xs={4}>
                    <MissionCard title="換片" cardStyle={cardStyle}
                                 selectedCardStyle={selectedCardStyle} isSelect={mission.isSelect}
                                 select={updateMission}/>
                </Col>
                <Col xs={4}>
                    <MissionCard title="???" cardStyle={cardStyle}
                                 selectedCardStyle={selectedCardStyle} isSelect={mission.isSelect}
                                 select={updateMission}/>
                </Col>
            </Row>
            <Row>
                {
                    mission.isSelect ?
                        mission.isSelect === "轉身" ?
                            <>
                                <Col xs={4}>
                                    <MissionCard title="平卧" isSelect={mission.isSelectDetail}
                                                 cardStyle={choiceCardStyle}
                                                 selectedCardStyle={selectedChoiceCardStyle}
                                                 select={updateMissionDetail}/>
                                </Col>
                                <Col xs={4}>
                                    <MissionCard title="左則" isSelect={mission.isSelectDetail}
                                                 cardStyle={choiceCardStyle}
                                                 selectedCardStyle={selectedChoiceCardStyle}
                                                 select={updateMissionDetail}/>
                                </Col>
                                <Col xs={4}>
                                    <MissionCard title="右則" isSelect={mission.isSelectDetail}
                                                 cardStyle={choiceCardStyle}
                                                 selectedCardStyle={selectedChoiceCardStyle}
                                                 select={updateMissionDetail}/>
                                </Col>
                            </>
                            :
                            mission.isSelect === "換片" ?
                                <>
                                    <Col xs={4}>
                                        <MissionCard title="大便" isSelect={mission.isSelectDetail}
                                                     cardStyle={choiceCardStyle}
                                                     selectedCardStyle={selectedChoiceCardStyle}
                                                     select={updateMissionDetail}/>
                                    </Col>
                                    <Col xs={4}>
                                        <MissionCard title="小便" isSelect={mission.isSelectDetail}
                                                     cardStyle={choiceCardStyle}
                                                     selectedCardStyle={selectedChoiceCardStyle}
                                                     select={updateMissionDetail}/>
                                    </Col>
                                </>
                                :
                                mission.isSelect === "???" ?
                                    <>
                                    </>
                                    :
                                    <>
                                    </>
                        :
                        <>
                        </>

                }
            </Row>
            <Row style={{
                padding: '0px',
                height: '4rem',
                width: 'auto',
                position: 'absolute',
                bottom: '0',
                right: '0',
                left: '0'
            }}>
                {mission.isSelect ?
                    <>
                        <Col xs={6}><Button variant="success">Update</Button></Col>
                        <Col xs={6}><Button variant="danger" onClick={() => onCancelClick()}>Cancel</Button></Col>
                    </>
                    :
                    <>
                        <Col xs={6}><Button variant="outline-success">Submit</Button></Col>
                        <Col xs={6}><Button variant="outline-danger"
                                            onClick={() => onReturnClick()}>Return</Button></Col>
                    </>}
            </Row>

        </>
    )
}
