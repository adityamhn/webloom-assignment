import React from 'react'
import { Card, Container, Row, Col, Image } from 'react-bootstrap'
import Header from '../../components/Header/Header'
import './Dashboard.scss'
import { CircleProgress } from 'react-gradient-progress'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { Bar, Line } from 'react-chartjs-2';
import { teamData } from '../Teams/TeamData'


//Graph Data
const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
    datasets: [
        {
            label: 'Recieved',
            data: [100, 115, 130, 120, 80, 105],
            backgroundColor: '#3954FF',
        },
        {
            label: 'Completed',
            data: [50, 90, 110, 100, 40, 90],
            backgroundColor: '#FFD339',

        },
    ],
};

//Graph Options
const options = {
    barThickness: 7,
    categoryPercentage: 0.9,
    responsive: true,
    maintainAspectRatio: false,
    scale: {
        xAxes: [{
            gridLines: {
                display: false,
                drawBorder: false,
            }
        }],
        yAxes: [{
            gridLines: {
                display: true,
                drawBorder: false,
            },
        }]
    },
};

//Analytic cards data
const mainDeets = [
    {
        title: "Works",
        percent: 50,
        number: 75,
        title2: "Works Today",
        color: ["#FFD339", "#FFD339"],
        secondaryColor: "#e5e5e5"
    },
    {
        title: "Analytics",
        percent: 25,
        number: 310,
        title2: "Analytics Today",
        color: ["#FF6D39", "#FF6D39"],
        secondaryColor: "#e5e5e5"

    },
    {
        title: "Statistics",
        percent: 59,
        number: 75,
        title2: "Statistics Today",
        color: ["#9539FF", "#9539FF"],
        secondaryColor: "#e5e5e5"

    },
    {
        title: "Tasks",
        percent: 75,
        number: 15,
        title2: "Tasks Today",
        color: ["#3954FF", "#3954FF"],
        secondaryColor: "#e5e5e5"

    }
]




const Dashboard = () => {

    return (
        <Container fluid className="dashboard-container">

            {/* Header */}
            <Header title={"Dashboard"} />


            <div className="dashboard-wrapper">
                <Row>

                    {/* Analytic Cards */}
                    <Col sm={6} className="main-cards-sec p-0">
                        {mainDeets.map((deet, index) => (
                            <Card key={index} className="data-card">
                                <div className="top">
                                    <div className="title">
                                        {deet.title}
                                    </div>
                                    <BsThreeDotsVertical className="dots" />
                                </div>
                                <div className="bottom">
                                    <CircleProgress percentage={deet.percent} strokeWidth={4} primaryColor={deet.color} fontSize={"12px"} fontColor={"#4d4d4d"} secondaryColor={deet.secondaryColor} width={80} className="progress-bar" />
                                    <div className="deets">
                                        <div className="percent">{deet.number}</div>
                                        <div className="name">{deet.title2}</div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </Col>

                    {/* Team Activity Graph */}
                    <Col sm={6} className="p-0">
                        <Card className="task-activity-card">
                            <div className="title">Team Activites</div>

                            <div className="graph">
                                <Bar data={data} options={options} />
                            </div>
                        </Card>
                    </Col>


                </Row>
                <Row>


                    {/* Task Activities Graph */}
                    <Col sm={8} className="p-0">
                        <Card className="team-activity-card">
                            <div className="title">Task Activities</div>
                            <div className="graph">
                                <Line data={data} options={options} />
                            </div>
                        </Card>
                    </Col>

                    {/* Team Member performance */}
                    <Col sm={4} className="p-0">
                        <Card className="team-member-card">
                            <div className="title">Team Member Performance</div>
                            <div className="all-members">
                                {teamData.map((member, index) => (
                                    <div key={index} className="member">
                                        <div className="member-details">
                                            <Image src={member.profile} className="member-img" />
                                            <div className="member-deets">
                                                <div className="name">{member.name}</div>
                                                <div className="role">{member.designation}</div>
                                            </div>
                                        </div>
                                        <div className="member-performance">{member.performance}</div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </Col>

                </Row>
            </div>
        </Container>
    )
}

export default Dashboard
