import React, { useState } from "react";

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../src/utils/mutations';

import Auth from '../src/utils/auth';

const SignUpModal = (props) => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
      });
      const [addUser] = useMutation(ADD_USER);


    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
          ...formState,
          [name]: value,
        });
      };

      const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        console.log('You signed up!')
    
        try {
          const { data } = await addUser({
            variables: { ...formState },
          });
    
          Auth.login(data.addUser.token);
        } catch (e) {
          console.error(e);
        }
      }; 
    

    return (
      <div className="signUp-modal">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <label>
              Username:
              <input
                className="form-input"
                placeholder="Your username"
                name="username"
                type="text"
                value={formState.name}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
            </label>
            <br />
            <label>
              Password:
              <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                checked={formState.isPremium}
                onChange={handleChange}
              />
              <span> </span>Check to sign up for premium account for <br></br>
              $10/month.
            </label>
            <br />
            <button type="submit">Sign Up</button>
          <button type="button" onClick={props.onClose}>Close</button>
          </form>
        </div>
      </div>
    );
}

export default SignUpModal;