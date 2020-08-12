import React, {useEffect, useState} from "react";
import {Alert, Button, Col, Row, Spinner} from "react-bootstrap";
import {useHistory} from "react-router-dom"
import MissionCard from "../MissionCard/MissionCard";

export default function MissionListComponent(props) {

    const [mission, setMission] = useState(
        {
            isSelect: null,
            isSelectDetail: null,
            isLoading: false,
            isSubmit: false
        }
    )

    // useEffect method for mission item selection
    useEffect(() => {
        if (mission) {
            console.log(mission.isSelect, mission.isSelectDetail)
        }
    }, [mission])

    // useEffect method for simulate network submit
    useEffect(() => {
        if (mission.isLoading) {
            simulateNetworkRequest().then(() => {
                setMission({...mission, isLoading: false, isSubmit: true})
            })
        }
    }, [mission.isLoading])

    const updateMission = (title) => {
        setMission({
            ...mission,
            isSelect: title,
            isSelectDetail: null,
            isSubmit: false
        })
    }

    const updateMissionDetail = (title) => {
        console.log(`updateMissionDetail ${title}`)
        setMission({
            ...mission,
            isSelectDetail: title
        })
    }

    const onUpdateClick = () => {
        if (mission.isSelect === "轉身") {
            props.updateChangeLoc(mission.isSelectDetail)
        } else if (mission.isSelect === "換片") {
            props.updateChangeDiaper(mission.isSelectDetail)
        }

        setMission(({
            ...mission,
            isSelect: null,
            isSelectDetail: null,
        }))
    }

    const simulateNetworkRequest = () => {
        return new Promise((resolve) => setTimeout(resolve, 1000))
    }

    const onSubmitClick = () => {
        setMission({
            ...mission,
            isLoading: true,
        })
    }


    const onCancelClick = () => {
        setMission({
            ...mission,
            isSelect: null,
            isSelectDetail: null
        })
    }
    let history = useHistory();
    const onReturnClick = () => {
        onCancelClick()
        // window.location.reload(false)
        history.push('/patrol_demo')
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
                bottom: '4rem',
                right: '0',
                left: '0'
            }}>
                {mission.isSelect ?
                    <>
                        <Col xs={6}><Button variant="danger" onClick={() => onUpdateClick()}
                                            disabled={mission.isSelectDetail === null}>確認</Button></Col>
                        <Col xs={6}><Button variant="success" onClick={() => onCancelClick()}>取消</Button></Col>
                    </>
                    :
                    <>
                        <Col xs={6}><Button variant="outline-danger"
                                            onClick={() => onSubmitClick()}>
                            {mission.isLoading ? <Spinner as="span" size="sm" animation="border"/> : <span>上載數據</span>}
                        </Button></Col>
                        <Col xs={6}><Button variant="outline-success"
                                            onClick={() => onReturnClick()}>返回上一頁</Button></Col>
                    </>}
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
                {mission.isSubmit ? <Col xs={12}><Alert variant="success"> 上載成功! </Alert></Col> : null}
            </Row>
        </>
    )
}
