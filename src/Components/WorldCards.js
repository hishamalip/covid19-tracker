import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { CardDeck, Card } from 'react-bootstrap';

class WorldCards extends React.Component {
    constructor() {
        super();
        this.state = {
            worldcards_data: []
        }
    }

    componentWillMount() {
        axios.get("https://disease.sh/v2/all").then(reponse => {
            this.setState({
                worldcards_data: reponse.data
            })
        });

    }

    render() {
        return (
            <Container fluid className="text-center">
                <Row>
                    <Col sm="2"> <h2>World</h2> </Col>
                </Row>
                <Row>
                    <Col sm>
                        <CardDeck>
                            <Card bg="primary">
                                <Card.Header as="h5">Total Cases</Card.Header>
                                <Card.Body>
                                    <Card.Title>{this.state.worldcards_data.cases}</Card.Title>
                                    <Card.Text>
                                        Today : {this.state.worldcards_data.todayCases}
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card bg="warning">
                                <Card.Header as="h5">Active Cases</Card.Header>
                                <Card.Body>
                                    <Card.Title>{this.state.worldcards_data.active}</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card bg="danger">
                                <Card.Header as="h5">Total Death</Card.Header>
                                <Card.Body>
                                    <Card.Title>{this.state.worldcards_data.deaths}</Card.Title>
                                    <Card.Text>
                                        Today : {this.state.worldcards_data.todayDeaths}
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card bg="success">
                                <Card.Header as="h5">Total Recovered</Card.Header>
                                <Card.Body>
                                    <Card.Title>{this.state.worldcards_data.recovered}</Card.Title>
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

export default WorldCards;