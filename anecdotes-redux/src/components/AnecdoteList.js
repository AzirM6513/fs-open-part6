import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { vote, initializeAnecdotes } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = (props) => {
  const { initializeAnecdotes, vote, setNotification } = props;

  useEffect(() => {
    initializeAnecdotes();
  }, [initializeAnecdotes]);

  const anecdotes = props.anecdotes;

  const voteById = (anecdote) => {
    vote(anecdote);
    setNotification(`you voted for '${anecdote.content}'`, 5);
  };

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteById(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
    anecdotes: state.anecdotes
      .sort((a, b) => b.votes - a.votes)
      .filter((anecdote) =>
        anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
      ),
  };
};

export default connect(mapStateToProps, {
  vote,
  initializeAnecdotes,
  setNotification,
})(AnecdoteList);
