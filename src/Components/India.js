import React from 'react';
import IndiaCards from './IndiaCards';
import { Container, Row, Col } from 'react-bootstrap';

class India extends React.Component {
    render() {
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
                    India state wise list
                </Row>

            </Container>
        );
    }
}

export default India;