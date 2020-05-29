import React from 'react';
import axios from 'axios';

import IndiaCards from './IndiaCards';
import { Container, Row, Col } from 'react-bootstrap';
import { Accordion, Card } from 'react-bootstrap';
import { Table, Badge, Button } from 'react-bootstrap';

class India extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            distrct_data: {}
        }
    }

    componentWillMount() {
        axios.get("https://api.covid19india.org/state_district_wise.json").then(response => {
            this.setState(
                { data: response.data }
            );
        });
    }

    render() {
        let all_state_names = Object.keys(this.state.data);

        let state_names = all_state_names.map((item, index) => {

            let all_districts = this.state.data[item].districtData;

            let total_confirmed = 0; let total_newcases = 0;
            let total_deaths = 0; let total_newdeaths = 0;
            let total_recovered = 0; let total_active = 0;

            let district_list = [];
            for (let x in all_districts) {
                total_confirmed += all_districts[x].confirmed;
                total_newcases += all_districts[x].delta.confirmed;
                total_deaths += all_districts[x].deceased;
                total_newdeaths += all_districts[x].delta.deceased;
                total_recovered += all_districts[x].recovered;
                total_active += all_districts[x].active;

                let ob = all_districts[x];
                ob["district_name"] = x;
                district_list.push(ob);
            }

            let district_rows = district_list.map((item, index) => {
                return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{item.district_name}</td>
                        <td>{item.confirmed}</td>
                        <td>{item.delta.confirmed}</td>
                        <td>{item.deceased}</td>
                        <td>{item.delta.deceased}</td>
                        <td>{item.recovered}</td>
                        <td>{item.active}</td>
                    </tr>
                );
            });

            return (
                <Card>
                    <Accordion.Toggle as={Card.Header} variant="primary" eventKey={index} className="font-weight-bold">
                        <Button variant="dark" style={ {marginRight:"10px"}}>{item}</Button>
                        <Badge variant="secondary">Confirmed-{total_confirmed}</Badge>{'  '}
                        <Badge variant="primary">New Cases-{total_newcases}</Badge>
                        <Badge variant="secondary">Deaths-{total_deaths}</Badge>{'  '}
                        <Badge variant="danger">New Deaths-{total_newdeaths}</Badge>{'  '}
                        <Badge variant="success">Recoverd-{total_recovered}</Badge>{'  '}
                        <Badge variant="warning">Active-{total_active}</Badge>{'  '}                        
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey={index}>
                        <Card.Body>
                            <Table responsive bordered hover size="sm">
                                <thead className="thead-dark">
                                    <tr>
                                        <td>#</td>
                                        <td>District</td>
                                        <td className="bg-primary">Confirmed</td>
                                        <td className="bg-warning">New Cases</td>
                                        <td className="bg-danger">Deaths</td>
                                        <td>New Deaths</td>
                                        <td className="bg-success">Recoverd</td>
                                        <td>Active</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {district_rows}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            );
        })



        return (
            <Container fluid>
                <Row>
                    <Col>
                        <IndiaCards />
                    </Col>
                </Row>

                <Row>
                    &nbsp;
                </Row>

                <Row>
                    <Col>
                        <Accordion>
                            {state_names}
                        </Accordion>
                    </Col>

                </Row>
            </Container>
        );
    }
}

export default India;