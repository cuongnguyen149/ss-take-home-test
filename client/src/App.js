import React from 'react';
import './App.css';
import { CREATE_USER } from './user/user.type';
import { gql, useMutation } from '@apollo/client';

function handleSubmit(event) {
  // alert('test');
  const CREATE_USER = gql`
  mutation createUser($userInput: {
    firstName: String!
    lastName: String!
    email: String!
    hearFromSource: HearFromSource
    password: String!
    isAgreeWithTerm: Boolean!
  }) {
    createUser(userInput: $userInput) {
      email
    }
  }
`;
  event.preventDefault();
  const data = new FormData(event.target);
  console.log(data.values());
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome! Create an Account!</h2>
      </header>
      <form
        onSubmit={handleSubmit}
        className="offset-md-3 col-md-6 sign-up-form"
      >
        <h3>Account Admin</h3>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              name="firstName"
              required
            />
          </div>

          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6 text-right align-mid">
            <label for="hearFromSource">How did you hear about us?</label>
          </div>
          <div className="form-group col-md-6">
            <select class="form-control" id="hearFromSource">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck1"
              required
            />
            <label className="form-check-label" for="gridCheck1">
              I agree to SurveySaurus <a href="#">Term of Services</a> and{' '}
              <a href="#">Police</a>
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary sign-up-btn">
          Sign Up
        </button>
        <p className="already-have-account">
          Already have an account? <a href="#">Log In Here</a>
        </p>
      </form>
    </div>
  );
}

export default App;
