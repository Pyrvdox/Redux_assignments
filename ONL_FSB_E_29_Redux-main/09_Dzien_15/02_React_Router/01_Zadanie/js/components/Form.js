import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addProduct(this.state);
    console.log(this.state);
  };
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, price } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" name="name" placeholder="nazwa" onChange={this.handleChange} value={name} />
        <input type="number" name="price" placeholder="cena" onChange={this.handleChange} value={price} />
        <button type="submit">Dodaj produkt</button>
      </form>
    );
  }
}

export default Form;
