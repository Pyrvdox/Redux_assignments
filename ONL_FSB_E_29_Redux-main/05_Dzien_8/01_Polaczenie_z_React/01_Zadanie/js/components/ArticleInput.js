import React, {Component} from "react";

class ArticleInput extends Component {

  static defaultProps = {
    onArticleAdd: () => {
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      userId: "jan",
      title: ""
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onInputChange(event) {
    this.setState({title: event.target.value});
  }

  onSelectChange(event) {
    this.setState({userId: event.target.value});
  }

  onClick() {
    this.props.onArticleAdd(this.state, this.props.users[this.state.userId]);
  }

  render() {
    return (
      <div>
        <input value={this.state.title} onChange={this.onInputChange}/>
        <select value={this.state.userId} onChange={this.onSelectChange}>
          {Object.keys(this.props.users).map((user) => <option key={user}>{user}</option>)}
        </select>
        <button onClick={this.onClick}>Dodaj artykuł</button>
      </div>
    );
  }
}

export default ArticleInput;
