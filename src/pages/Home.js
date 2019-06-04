import React, { Component } from "react";
import Container from "../components/Container";
import Btn from "../components/Btn";
import Row from "../components/Row";
import Col from "../components/Col";



class Home extends Component {
    goToSearch = () => (
        window.location.pathname = "/search"
    )
    goToRegister = () => (
        window.location.pathname= "/register"
    )
    goToLogin = () => (
        window.location.pathname= "/login"
    )
    render() {
        return (
            <div>
                <Container>

                <h1 className="text-center" style={{ color: "rgb(11, 199, 193", marginTop: "20px", textShadow: "1px 2px 2px rgb(11, 199, 193)", fontFamily: "Santral W01" }}>Welcome to Designer Products Page </h1>
                {/* <Row> */}
                {/* <Col size="md-3"></Col>
                <Col size="md-6"> */}
                <div style={{ backgroundColor: "rgb(231, 248, 249)", marginTop: "30px", padding: "20px 200px", fontFamily: "Santral W01" }}>
                    <h1 className="text-center">Who We Are?</h1>
                    <p>Here you can easily:</p>
                    <ul style={{fontFamily: "Santral W01"}}>
                        <li>Search for your favorite designer items</li>
                        <li>Compare prices and characteristics of the items</li>
                        <li>See other people reviews</li>
                        <li>Write a review to help others using your experience</li>
                    </ul>
                </div>
                {/* </Col> */}
                {/* </Row> */}
                <Row>
                    <Col size="md-5"></Col>
                    <Col size="md-2">
                        <Btn style={{ marginTop: "30px", fontFamily: "Santral W01" }} handleClick={this.goToSearch}>
                            <b>Ready to Search</b>
                        </Btn>
                    </Col>
                </Row>
                <div style={{ backgroundColor: "rgb(231, 248, 249)", marginTop: "30px", padding: "20px 200px", fontFamily: "Santral W01" }}>
                    <h2 className="text-center">If You Would Like to Write a Review You Should be a Member</h2>
                    
                </div>
                <Row>
                    <Col size="md-4"></Col>
                    <Col size="md-2">
                        <Btn style={{ marginTop: "30px" }}  handleClick={this.goToRegister}>
                            <b>Register</b>
                        </Btn>
                    </Col>
                    <Col size="md-2">
                        <Btn style={{ marginTop: "30px" }}  handleClick={this.goToLogin}>
                            <b>Already a Member</b>
                        </Btn>
                    </Col>
                </Row>
                </Container>   
            </div>
        )
    }


}

export default Home;

