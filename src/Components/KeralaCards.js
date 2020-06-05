import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { CardDeck, Card } from 'react-bootstrap';

class KeralaCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            district_data: {}
        }
    }

    componentWillMount() {
        axios.get("https://api.covid19india.org/state_district_wise.json").then(response => {

            // console.log(Object.keys(response.data.Kerala.districtData));

            this.setState({
                district_data: response.data.Kerala.districtData
            });
        });
    }

    render() {
        var district_names = Object.keys(this.state.district_data);
        let total_cases = 0, total_today_cases = 0;
        let active_cases = 0;
        let total_deaths = 0, total_today_deaths = 0;
        let total_recovered = 0, total_today_recovered = 0;

        district_names.map((item, index) => {
            total_cases += this.state.district_data[item].confirmed;
            total_today_cases += this.state.district_data[item].delta.confirmed;
            active_cases += this.state.district_data[item].active;
            total_deaths += this.state.district_data[item].deceased;
            total_today_deaths += this.state.district_data[item].delta.deceased;
            total_recovered += this.state.district_data[item].recovered;
            total_today_recovered += this.state.district_data[item].delta.recovered;
        })

        return (
            <Container fluid className="text-center">
                <Row>
                    <Col sm="2"> <h2>Kerala</h2> </Col>
                </Row>
                <Row>
                    <Col sm>
                        <CardDeck>
                            <Card bg="primary">
                                <Card.Header as="h4">Total Cases</Card.Header>
                                <Card.Body>
                                    <Card.Title>{total_cases}</Card.Title>
                                    <Card.Text>
                                        Today : {total_today_cases}
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card bg="warning">
                                <Card.Header as="h4">Active Cases</Card.Header>
                                <Card.Body>
                                    <Card.Title>{active_cases}</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card bg="danger">
                                <Card.Header as="h4">Total Deaths</Card.Header>
                                <Card.Body>
                                    <Card.Title>{total_deaths}</Card.Title>
                                    <Card.Text>
                                        Today : {total_today_deaths}
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card bg="success">
                                <Card.Header as="h4">Total Recovered</Card.Header>
                                <Card.Body>
                                    <Card.Title>{total_recovered}</Card.Title>
                                    <Card.Text>
                                        Today : {total_today_recovered}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default KeralaCards;
