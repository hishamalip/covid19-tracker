import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap'; 
import { CardDeck, Card } from 'react-bootstrap';

class IndiaCards extends React.Component {
    constructor() {
        super();
        this.state = {
            indiacards_data: []
        }
    }

    componentWillMount() {
        axios.get("https://disease.sh/v2/countries/india").then(response => {
            this.setState({
                indiacards_data: response.data
            })
        });

    }

    render() {
        return (
            <Container fluid className="text-center">
                <Row>
                    <Col sm="2"> <h2>India</h2> </Col>
                </Row>
                <Row>
                    <Col sm>
                        <CardDeck>
                            <Card bg="primary">
                                <Card.Header as="h5">Total Cases</Card.Header>
                                <Card.Body>
                                    <Card.Title>{this.state.indiacards_data.cases}</Card.Title>
                                    <Card.Text>
                                        Today : {this.state.indiacards_data.todayCases}
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card bg="warning">
                                <Card.Header as="h5">Active Cases</Card.Header>
                                <Card.Body>
                                    <Card.Title>{this.state.indiacards_data.active}</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card bg="danger">
                                <Card.Header as="h5">Total Death</Card.Header>
                                <Card.Body>
                                    <Card.Title>{this.state.indiacards_data.deaths}</Card.Title>
                                    <Card.Text>
                                        Today : {this.state.indiacards_data.todayDeaths}
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card bg="success">
                                <Card.Header as="h5">Total Recovered</Card.Header>
                                <Card.Body>
                                    <Card.Title>{this.state.indiacards_data.recovered}</Card.Title>
                                    <Card.Text>
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

export default IndiaCards;