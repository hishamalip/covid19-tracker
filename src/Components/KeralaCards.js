import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { CardDeck, Card } from 'react-bootstrap';

class KeralaCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            all_district_data: {}
        }
    }

    componentWillMount() {
        axios.get("https://api.covid19india.org/state_district_wise.json").then(response => {

            // console.log(response.data.Kerala.districtData);

            this.setState({
                all_district_data: response.data.Kerala.districtData
            });
        });
    }

    render() {
        // let district_names = Object.keys(this.state.all_district_data);
        // console.log(district_names)



        // let total_cases, total_today_cases, total_active, total_deaths, total_today_deaths, total_recovered = 0;
        // var district_names = Object.keys(this.state.all_district_data);

        // district_names.map( (district, index) => {
        //         total_cases += this.state.all_district_data[district].confirmed         
        // });

        var district_names = Object.keys(this.state.all_district_data);
        var x = district_names.map( (item, index) => {
		return(
			<h5> {item} </h5>
		);
	});

        console.log(district_names);
        return (
            <div>
		{x}
            </div>
            // <Container fluid className="text-center">
            //     <Row>
            //         <Col sm="2"> <h2>Kerala</h2> </Col>
            //     </Row>
            //     <Row>
            //         <Col sm>
            //             <CardDeck>
            //                 <Card bg="primary">
            //                     <Card.Header as="h4">Total Cases</Card.Header>
            //                     <Card.Body>
            //                         <Card.Title> cases {}</Card.Title>
            //                         <Card.Text>
            //                             Today : {}
            //                         </Card.Text>
            //                     </Card.Body>
            //                 </Card>

            //                 <Card bg="warning">
            //                     <Card.Header as="h4">Active Cases</Card.Header>
            //                     <Card.Body>
            //                         <Card.Title>active {}</Card.Title>
            //                         <Card.Text>
            //                         </Card.Text>
            //                     </Card.Body>
            //                 </Card>

            //                 <Card bg="danger">
            //                     <Card.Header as="h4">Total Death</Card.Header>
            //                     <Card.Body>
            //                         <Card.Title>deaths {}</Card.Title>
            //                         <Card.Text>
            //                             Today : {}
            //                         </Card.Text>
            //                     </Card.Body>
            //                 </Card>

            //                 <Card bg="success">
            //                     <Card.Header as="h4">Total Recovered</Card.Header>
            //                     <Card.Body>
            //                         <Card.Title>recovered{}</Card.Title>
            //                         <Card.Text>
            //                         </Card.Text>
            //                     </Card.Body>
            //                 </Card>
            //             </CardDeck>
            //         </Col>
            //     </Row>
            // </Container>
        );
    }
}

export default KeralaCards;
