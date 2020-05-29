import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Container, Row, Col } from 'react-bootstrap';
import WorldCards from './WorldCards';

class World extends React.Component {
    constructor() {
        super();
        this.state = {
            world_data: []
        }
    }

    componentWillMount() {
        axios.get("https://disease.sh/v2/countries").then(response => {
            this.setState({
                world_data: response.data
            });
        });
    }

    render() {

        let table_data = this.state.world_data.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="table-active">{item.country}</td>
                    <td className="table-primary">{item.cases}</td>
                    <td className="table-warning">{item.todayCases}</td>
                    <td className="table-danger">{item.deaths}</td>
                    <td>{item.todayDeaths}</td>
                    <td className="table-success">{item.recovered}</td>
                    <td>{item.active}</td>
                    <td>{item.critical}</td>
                </tr>
            );
        })

          
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col>
                            <WorldCards />
                        </Col>
                    </Row>

                    <Row>
                        &nbsp;
                    </Row>

                    <Row>
                        <Col>
                            <Table responsive bordered hover size="sm">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>#</th>
                                        <th>Country / Other</th>
                                        <th className="bg-primary">Total Cases</th>
                                        <th className="bg-warning">New Cases</th>
                                        <th className="bg-danger">Total Deaths</th>
                                        <th>New Deaths</th>
                                        <th className="bg-success">Recovered</th>
                                        <th>Active Cases</th>
                                        <th>Serious / Critical</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {table_data}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                </Container>
            </div>

        );
    }
}

export default World;