import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Container, Row, Col } from 'react-bootstrap';
import WorldCards from './WorldCards';

class World extends React.Component {
    constructor() {
        super();
        this.state = {
            world_data: [],
            sort: 0,
            load: false
        }
    }

    componentDidMount() {
        this.setState({ load: true })
        axios.get("https://disease.sh/v2/countries").then(response => {
            this.setState({
                world_data: response.data,
                load: false
            });
        });
    }

    renderTable = () => {
        return this.state.world_data.map((item, index) => {
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
    }

    sortData = () => {
        const sort = this.state.sort
        this.setState({
            world_data: this.state.world_data.sort(function (a, b) {
                var textA = a.country.toUpperCase();
                var textB = b.country.toUpperCase();
                if (sort)
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                else
                    return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
            }),
            sort: !this.state.sort
        })
    }

    render() {

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
                                        <th onClick={this.sortData} style={{ cursor: "pointer" }}>
                                            Country / Other
                                            <i class={!this.state.sort ? "fa fa-caret-up" : "fa fa-caret-down"} style={{ marginLeft: "20px" }} onClick={this.sortData} />
                                        </th>
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
                                    {!this.state.load ? this.renderTable() : <div className="loader-container"><div className="loader"></div></div>}
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