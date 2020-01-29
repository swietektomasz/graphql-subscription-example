import React from 'react';
import PropTypes from 'prop-types';

function Login({ user, setUser }) {
  return (
    <div>
      <label htmlFor="username">
        Username
        <input
          type="text"
          name="username"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        />
      </label>
    </div>
  );
}

Login.propTypes = {
  user: PropTypes.string,
  setUser: PropTypes.func,
};

Login.defaultProps = {
  user: '',
  setUser: () => {},
};

export default Login;
