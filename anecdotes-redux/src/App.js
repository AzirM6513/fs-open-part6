import React from 'react';

import Notification from './components/Notification';
import AnecdoteFilter from './components/AnecdoteFilter';
import AnecdoteList from './components/AnecdoteList';
import AnecdoteForm from './components/AnecdoteForm';

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteFilter />
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
