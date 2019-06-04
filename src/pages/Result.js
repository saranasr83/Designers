// import React, {Component} from "react";
// // import Container from "../components/Container";


// class Result extends Component {
//     // state= {
//     //     products:[]
//     // }

//     componentDidMount(){
//     }

    

//     render(){
//         return(
//             <div>
//             <h1 className="text-center">Result pageeeee</h1> 
//             </div>
//         )
//     }
// }

// export default Result;

// this below code is for showing all the products in the DB but we wanna be selective

import React, {Component} from "react";
import axios from "axios";
// import Container from "../components/Container";


class Result extends Component {
    state= {
        products:[]
    }

    componentDidMount(){
        this.getProducts();
    }

    getProducts= () => {
        // fetch('http://localhost:3002/result', {
        //     method: "GET",
        //     data:JSON.stringify({
        //         kind: "bag",
        //         brand: "Dior"
        //     })
        // })
        axios.get ('http://localhost:3002/result', {
            kind: "bag",
            brand: "Dior"
        })
        // .then(response => response.json())
        // .then (({data}) => {
        //     console.log("data",data)})
        .then (response => this.setState({ products: response.data.data }))
        // .then(response => console.log("response",response))
        .catch (err=> console.log(err))
    }

    renderProduct = ({id,kind,brand,model}) => <div key={id} >{kind}{brand}{model}</div>
    render(){
    // ************this is going to grab product from state instead of writing "{this.state.products.map()" ******************
        const {products} = this.state
        return(
            <div>
            <h1 className="text-center">Result pageeeee</h1> 
            {products.map(this.renderProduct)}           
            </div>
        )
    }
}

export default Result;