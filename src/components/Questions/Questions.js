import React, {Component} from "react";

class Questions extends Component {

    
    render(){
        return(
            <div className="align-items-center">
                <div className="col-auto my-1">
                    <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref"><strong>{this.props.question}</strong></label>
                    <select className="custom-select mr-sm-2" name={this.props.name} id="inlineFormCustomSelect" onChange={this.props.change}>

                    <option defaultValue>Choose...</option>

                        <option value={this.props.item1}>{this.props.item1}</option>
                        <option value={this.props.item2}>{this.props.item2}</option>
                        <option value={this.props.item3}>{this.props.item3}</option>
                        <option value={this.props.item4}>{this.props.item4}</option>
                        <option value={this.props.item5}>{this.props.item5}</option>
                        <option value={this.props.item6}>{this.props.item6}</option>
                        <option value={this.props.item7}>{this.props.item7}</option>
                        <option value={this.props.item8}>{this.props.item8}</option>
                        <option value={this.props.item9}>{this.props.item9}</option>
                        <option value={this.props.item10}>{this.props.item10}</option>
                        <option value={this.props.item11}>{this.props.item11}</option>
                        <option value={this.props.item12}>{this.props.item12}</option>
                        <option value={this.props.item13}>{this.props.item13}</option>

                    </select>
                    </div>
                </div>
        )
    }
}

export default Questions;