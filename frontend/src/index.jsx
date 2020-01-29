import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import ChatWindow from './components/chat';
import styles from './app.module.scss';
import client from './graphql/client';

function App() {
  return (
    <div className={styles.app}>
      <ChatWindow />
    </div>
  );
}

const DocumentNode = document.getElementById('app');
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  DocumentNode,
);
