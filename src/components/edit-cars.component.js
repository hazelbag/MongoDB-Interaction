import React, { Component } from 'react';
import axios from 'axios';

export default class EditExercise extends Component {
  constructor(props) {
    super(props);
    // Bind each function
    this.onChangeModel = this.onChangeModel.bind(this);
    this.onChangeMake = this.onChangeMake.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
    this.onChangeRegNum = this.onChangeRegNum.bind(this);
    this.onChangeOwner = this.onChangeOwner.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // State set to each input item required
    this.state = {
      model: 0,
      make: '',
      color: '',
      reg_num: '',
      owner: '',
      address: '',
      cars: []
    }
  }
  // When mounted get the data from the database and set them to state
  componentDidMount() {
    axios.get('/cars/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          model: response.data.model,
          make: response.data.make,
          color: response.data.color,
          reg_num: response.data.reg_num,
          owner: response.data.owner,
          address: response.data.address
        })
      })
      .catch(function (error) {
        console.log(error);
      })

      axios.get('/cars/')
      .then(response => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      })
  }
  // Get the input from the fields using the target value when entered into the form
  onChangeModel(e) {
    this.setState({
      model: e.target.value
    });
  }
  // Get the input from the fields using the target value when entered into the form
  onChangeMake(e) {
    this.setState({
      make: e.target.value
    });
  }
  // Get the input from the fields using the target value when entered into the form
  onChangeColor(e) {
    this.setState({
      color: e.target.value
    });
  }
  // Get the input from the fields using the target value when entered into the form
  onChangeRegNum(e) {
    this.setState({
      reg_num: e.target.value
    });
  }
  // Get the input from the fields using the target value when entered into the form
  onChangeOwner(e) {
    this.setState({
      owner: e.target.value
    });
  }
  // Get the input from the fields using the target value when entered into the form
  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
  }
  // When done editing the item and the user submits the return to the page, all items are set in state and the axios method will be used to post the updated item
  onSubmit(e) {
    e.preventDefault();
    const car = {
      model: this.state.model,
      make: this.state.make,
      color: this.state.color,
      reg_num: this.state.reg_num,
      owner: this.state.owner,
      address: this.state.address,
    };
    console.log(car);

    axios.post('/cars/update/' + this.props.match.params.id, car)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Edit Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
         
        <div className="form-group">
            <label>Year Model: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.model}
              onChange={this.onChangeModel}
            />
          </div>

          <div className="form-group">
            <label>Make: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.make}
              onChange={this.onChangeMake}
            />
          </div>

          <div className="form-group">
            <label>Color: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.color}
              onChange={this.onChangeColor}
            />
          </div>

          <div className="form-group">
            <label>Registration: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.reg_num}
              onChange={this.onChangeRegNum}
            />
          </div>

          <div className="form-group">
            <label>Owner: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.owner}
              onChange={this.onChangeOwner}
            />
          </div>

          <div className="form-group">
            <label>Owner Address: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.address}
              onChange={this.onChangeAddress}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Submit Edit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}