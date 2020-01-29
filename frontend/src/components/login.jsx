import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Login({ setUser }) {
  const [userInput, setUserInput] = useState('');
  return (
    <div>
      <label htmlFor="username">
        Username
        <input
          type="text"
          name="username"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
      </label>
      <button type="button" onClick={() => setUser(userInput)}>
        Set username
      </button>
    </div>
  );
}

Login.propTypes = {
  setUser: PropTypes.func,
};

Login.defaultProps = {
  setUser: () => {},
};

export default Login;
