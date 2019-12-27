/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Create the props that will be rendered for the table output
const Car = props => (
  <tr>
    <td>{props.car.model}</td>
    <td>{props.car.make}</td>
    <td>{props.car.color}</td>
    <td>{props.car.reg_num}</td>
    <td>{props.car.owner}</td>
    <td>{props.car.address}</td>
    <td>
      {/* Link to the edit and delete option */}
      <Link to={"/edit/" + props.car._id}>edit</Link> | <a href="#" onClick={() => { props.deleteCar(props.car._id) }}>delete</a>
    </td>
  </tr>
)

export default class CarsList extends Component {
  constructor(props) {
    super(props);
    // Bind the delete car option to deleteCar
    this.deleteCar = this.deleteCar.bind(this)
    this.state = { cars: [] };
  }

  // When mounted get the data from the database and set them to state
  componentDidMount() {
    axios.get('/cars/')
      .then(response => {
        this.setState({ cars: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // Delete the cars by ID when deleting
  deleteCar(id) {
    axios.delete('/cars/'+ id)
      .then(response => { console.log(response.data) });
    this.setState({
      cars: this.state.cars.filter(el => el._id !== id)
    })
  }
  // Map the cars to the table
  carList() {
    return this.state.cars.map(currentcar => {
      return <Car car={currentcar} deleteCar={this.deleteCar} key={currentcar._id} />;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged cars</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Year</th>
              <th>Model</th>
              <th>Color</th>
              <th>Registration Number</th>
              <th>Owner</th>
              <th>Owner Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.carList()}
          </tbody>
        </table>
      </div>
    )
  }
}