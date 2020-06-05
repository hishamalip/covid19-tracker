import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { Accordion, Card } from 'react-bootstrap';
import { Table, Badge, Button } from 'react-bootstrap';

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
        let table_data = district_names.map( (item, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="table-active">{item}</td>
                    <td className="table-primary">{ district_data[item].confirmed }</td>
                    <td className="">{ district_data[item].delta.confirmed }</td>
                    <td className="table-warning">{ district_data[item].active }</td>
                    <td className="table-danger">{ district_data[item].deceased }</td>
                    <td>{ district_data[item].delta.deceased }</td>
                    <td className="table-success">{ district_data[item].recovered }</td>
                    <td>{ district_data[item].delta.recovered}</td>
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
                            <Table responsive bordered hover size="sm">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>#</th>
                                        <th>District / Other</th>
                                        <th>Cases</th>
                                        <th>Today Cases</th>
                                        <th>Active</th>
                                        <th>Deaths</th>
                                        <th>Today Deaths</th>
                                        <th>Recoved</th> 
                                        <th>Today Recovered</th>
                                        <th></th>
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