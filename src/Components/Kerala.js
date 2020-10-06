import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

import KeralaCards from './KeralaCards';

class Kerala extends React.Component {
    constructor() {
        super();
        this.state = {
            district_data: {},
            district_names: [],
            sort: 0,
            load: false
        }
    }

    componentDidMount() {
        this.setState({ load: true });
        axios.get("https://api.covid19india.org/state_district_wise.json").then(response => {
            this.setState({
                district_data: response.data.Kerala.districtData,
                district_names: Object.keys(response.data.Kerala.districtData),
                load: false
            });
        });
    }

    renderTable = () => {
        return this.state.district_names.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="table-active">{item}</td>
                    <td className="table-primary text-center">{this.state.district_data[item].confirmed}</td>
                    <td className="table-warning text-center">{this.state.district_data[item].delta.confirmed}</td>
                    <td className="text-center">{this.state.district_data[item].active}</td>
                    <td className="table-danger text-center">{this.state.district_data[item].deceased}</td>
                    <td className="text-center">{this.state.district_data[item].delta.deceased}</td>
                    <td className="table-success text-center">{this.state.district_data[item].recovered}</td>
                    <td className="text-center">{this.state.district_data[item].delta.recovered}</td>
                </tr>
            );
        })
    }

    sortData = () => {
        this.setState({ district_names: this.state.district_names.reverse(), sort: !this.state.sort })
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <KeralaCards />
                    </Col>
                </Row>

                <Row>
                    &nbsp;
                    </Row>

                <Row>
                    <Col>
                        <Table responsive bordered hover text-center size="sm">
                            <thead className="thead-dark">
                                <tr>
                                    <th>#</th>
                                    <th onClick={this.sortData} style={{ cursor: "pointer" }}>
                                        <span>District / Other</span>
                                        <i class={!this.state.sort ? "fa fa-caret-up" : "fa fa-caret-down"} style={{ marginLeft: "20px" }} onClick={this.sortData} />
                                    </th>
                                    <th className="bg-primary text-center">Total Cases</th>
                                    <th className="bg-warning text-center">New Cases</th>
                                    <th className="text-center">Active Cases</th>
                                    <th className="bg-danger text-center">Deaths</th>
                                    <th className="text-center">New Deaths</th>
                                    <th className="bg-success text-center">Recoved</th>
                                    <th className="text-center">New Recovered</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!this.state.load ? this.renderTable() : <div className="loader-container"><div className="loader"></div></div>}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container >
        );
    }
}

export default Kerala;