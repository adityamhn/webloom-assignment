import React from 'react'
import { Card, Col, Container, FormControl, Image, Row } from 'react-bootstrap'
import Header from '../../components/Header/Header'
import { teamData } from './TeamData'
import './Teams.scss'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { CircleProgress } from 'react-gradient-progress'
import { Pie } from 'react-chartjs-2';

//Graph data
const data = {
    datasets: [
        {
            label: 'Recieved',
            data: [75, 30],
            backgroundColor: ['#3954FF', "#FFD339"],
        },
    ],
};



const Teams = () => {
    return (
        <Container fluid className="team-container">

            {/* Header */}
            <Header title={"Teams"} />

            <div className="team-wrapper">
                <Row>

                    {/* Team members sec */}
                    <Col sm={9} className="p-0 members-sec">
                        <div className="team-header">
                            <div className="title">
                                Team Members
                            </div>
                            <div className="sort-sec">
                                <div className="label">sort by :</div>
                                <FormControl as="select" className="sort">
                                    <option>All</option>
                                    <option>Z to A</option>
                                    <option>Max Bounty</option>
                                    <option>Min Bounty</option>
                                </FormControl>
                            </div>
                        </div>
                        <div className="all-cards-sec">
                            {teamData.map((member, index) => (
                                <Card key={index} className="member-card">
                                    <BsThreeDotsVertical className="icon" />
                                    <Card.Body className="member-body">
                                        <Image src={member.profile} className="member-profile-image" />
                                        <div className="member-name">{member.name}</div>
                                        <div className="member-email">{member.email}</div>
                                    </Card.Body>
                                    <Card.Footer className="member-footer">
                                        {member.designation}
                                    </Card.Footer>
                                </Card>
                            ))}
                        </div>

                    </Col>


                    {/* Top work sec */}
                    <Col sm={3}>
                        <Card className="top-work-card">
                            <Card.Header className="top-work-header">
                                <Image src="/assets/images/topWork.svg" className="logo" />
                                <div className="comp-name">Nxt_UXUI</div>
                                <div className="comp-subtitle">A designer team</div>
                                <div className="comp-email">nxt.uxui@gmail.com</div>
                            </Card.Header>
                            <Card.Body className="top-work-body">
                                <CircleProgress percentage={"80"} strokeWidth={4} primaryColor={["#3954FF", "#3954FF"]} fontSize={"12px"} fontColor={"#4d4d4d"} secondaryColor="#e5e5e5" width={120} className="progress-bar" />
                                <div className="comp-mem-deets">
                                    <Image src={"/assets/images/person.svg"} className="comp-mem-img" />
                                    <div className="mem-deets">
                                        <div className="name">Alina Endorson</div>
                                        <div className="role">CEO and Team Leader</div>
                                    </div>
                                </div>

                                <div className="comp-analytics">
                                    <div className="title">Total Team Member</div>
                                    <div className="graph-sec">
                                        <div className="percent">25</div>
                                        <div className="graph">
                                            <Pie data={data} width="80px" height="80px" />
                                        </div>

                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </div>
        </Container>
    )
}

export default Teams
