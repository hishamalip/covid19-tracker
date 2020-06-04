import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import KeralaCards from './KeralaCards';

class Kerala extends React.Component{
    render(){
        return(
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
                        
                    </Col>

                </Row>
            </Container>
        );
    }
}

export default Kerala;