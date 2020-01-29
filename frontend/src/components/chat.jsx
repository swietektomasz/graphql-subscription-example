import React, { useState } from 'react';

import Login from './login';
import ChatBox from './chatbox';

export default function ChatWindow() {
  const [user, setUser] = useState('');

  return (
    <div>
      <Login user={user} setUser={setUser} />
      <ChatBox user={user} />
    </div>
  );
}
