import React, {Component} from "react";

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  clearPlaceholder = () => {
    this.setState({
      value: ""
    })
    
  }

  render() {
    return (
      <div>
        <input value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} type="text"/>
        <button onClick={() => (this.props.onUserAdd(this.state.value), this.clearPlaceholder())}>Dodaj użytkownika</button>
      </div>
    );
  }
}

export default UserInput;
