import React, { useState, useEffect } from 'react';
import { useSubscription } from '@apollo/react-hooks';

import Login from './login';
import ChatBox from './chatbox';
import { MESSAGE_SENT_SUBSCRIPTION } from '../graphql/graphql';

export default function ChatWindow() {
  const initialState = () => window.localStorage.getItem('savedUsername') || '';
  const [user, setUser] = useState(initialState);
  const [messages, setMessages] = useState([]);
  const { data } = useSubscription(MESSAGE_SENT_SUBSCRIPTION);

  useEffect(() => {
    if (data) {
      setMessages((current) => [...current, data]);
    }
  }, [data]);

  useEffect(() => {
    window.localStorage.setItem('savedUsername', user);
  }, [user]);

  return (
    <div>
      {!user && <Login user={user} setUser={setUser} />}
      {user && (
        <button
          type="button"
          onClick={() => {
            setUser('');
            window.localStorage.setItem('savedUsername', user);
          }}
        >
          Reset user
        </button>
      )}
      <ChatBox user={user} />
      {messages.map(({ messageSent: { message, id } }) => (
        <div key={id}>{message}</div>
      ))}
    </div>
  );
}
