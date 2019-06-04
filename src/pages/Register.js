import React, {Component} from "react";
import Container from "../components/Container";
import Btn from "../components/Btn"


class Register extends Component {
    goToLogin = () => (
        window.location.pathname= "/login"
    )
    render(){
        return(
<div>
        <Container>
            <div className="w3-animate-top" style={{ backgroundColor: "rgb(231, 248, 249)", marginTop: "30px", padding: "20px 200px", fontFamily: "Santral W01" }}>
                <form>
                    <div className="form-group">
                        <label htmlfor="firstName">First Name</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="firstname"  
                        placeholder="Enter your first name"/>   
                    </div>
                    <div className="form-group">
                        <label htmlfor="lastName">Last Name</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="lastname"  
                        placeholder="Enter your last name"/>    
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1"  placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Enter password"/>    
                    </div>
                        <Btn style={{ marginTop: "30px" }} href="/login" handleClick={this.goToLogin}>
                                <b>Submit</b>
                        </Btn>
                </form>       
                    
            </div>  
        </Container>
    </div>

        )
    }
}
 
    

export default Register;