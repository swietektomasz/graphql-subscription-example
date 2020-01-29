import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';

import { SEND_MESSAGE_MUTATION } from '../graphql/graphql';

function ChatBox({ user }) {
  const [message, setMessage] = useState('');
  const [sendMessage] = useMutation(SEND_MESSAGE_MUTATION);

  return (
    <div>
      <label htmlFor="message">
        Your message:
        <input
          type="text"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>
      <button type="button" onClick={() => sendMessage({ variables: { from: user, message } })}>
        Send
      </button>
    </div>
  );
}

ChatBox.propTypes = {
  user: PropTypes.string,
};

ChatBox.defaultProps = {
  user: '',
};

export default ChatBox;
