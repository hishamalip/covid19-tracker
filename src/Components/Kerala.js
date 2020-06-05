import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

import KeralaCards from './KeralaCards';

class Kerala extends React.Component {
    constructor() {
        super();
        this.state = {
            district_data: {}
        }
    }

    componentWillMount() {
        axios.get("https://api.covid19india.org/state_district_wise.json").then(response => {
            this.setState({
                district_data: response.data.Kerala.districtData
            });
        });
    }

    render() {
        var district_data = this.state.district_data;
        var district_names = Object.keys(this.state.district_data);
        let table_data = district_names.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="table-active">{item}</td>
                    <td className="table-primary text-center">{district_data[item].confirmed}</td>
                    <td className="table-warning text-center">{district_data[item].delta.confirmed}</td>
                    <td className="text-center">{district_data[item].active}</td>
                    <td className="table-danger text-center">{district_data[item].deceased}</td>
                    <td className="text-center">{district_data[item].delta.deceased}</td>
                    <td className="table-success text-center">{district_data[item].recovered}</td>
                    <td className="text-center">{district_data[item].delta.recovered}</td>
                </tr>
            );
        })

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
                                    <th>District / Other</th>
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
                                {table_data}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Kerala;