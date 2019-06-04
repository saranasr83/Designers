import React, { Component } from "react";
import Container from "../components/Container";
import Questions from "../components/Questions";
import options from "../options.json";
import Btn from "../components/Btn"

class Search extends Component {

    state = {
        itemName: "",
        brandName: ""
    }
    // we create a generic handleChange function that looks at the name attribute (name=) 
    // on each input type and dynamically sets the component’s state based on the 
    // input field’s name attribute (name=) and the value associated with it.

    handleInputChange = event => {
        const { name, value } = event.target;
        console.log(value);
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        // event.preventDefault();

        if(this.state.itemName && this.state.brandName){
            const {
                itemName,
                brandName,
              } = this.state
          
              console.log(`the item name is: ${itemName}. the brand name is: ${brandName}`)
            // .then(res => {
                this.setState({ itemName: "", brandName: "" })
                window.location.pathname= "/result"
            // })
            // .catch(err => console.log(err));    
        }
    }
        
    render() {
        return (
            <div>
                <Container>
                    <h1 style={{ fontFamily: "Santral W01" }}>Be More Specific</h1>
                    <div className="w3-animate-top" style={{ backgroundColor: "rgb(231, 248, 249)", marginTop: "30px", padding: "20px 200px", fontFamily: "Santral W01" }}>
                        <form className="budget-form">
                            {options.map((op, key) => (
                                <Questions
                                    question={op.question}
                                    id={op.id}
                                    key={key}
                                    name={op.name}
                                    item1={op.item1}
                                    item2={op.item2}
                                    item3={op.item3}
                                    item4={op.item4}
                                    item5={op.item5}
                                    item6={op.item6}
                                    item7={op.item7}
                                    item8={op.item8}
                                    item9={op.item9}
                                    item10={op.item10}
                                    item11={op.item11}
                                    item12={op.item12}
                                    item13={op.item13}
                                    // value={this.state.op}
                                    change={this.handleInputChange}
                                />
                            ))}
                        </form>
                        <Btn style={{ marginTop: "30px" }} href="/login" handleClick={this.handleFormSubmit}>
                            <b>Search</b>
                        </Btn>

                    </div>
                </Container>
            </div>

        )
    }
}

export default Search;