import React, { Component } from "react";

class Login extends Component {
  state = {
    emailAddress: "",
    password: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
      event.preventDefault();
      // Make an API call to my user auth service
      // If response successful, redirect to Shop
      this.props.history.push("/shop");
      // If error, show error
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h1>Welcome back!</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 text-center">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name="emailAddress"
                      value={this.state.emailAddress}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
