import anecdoteService from '../services/anecdotes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id;

      const AnecdoteToChange = state.find((n) => n.id === id);
      const changedAnecdote = {
        ...AnecdoteToChange,
        votes: ++AnecdoteToChange.votes,
      };

      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote
      );
    case 'NEW_ANECDOTE':
      return [...state, action.data];
    case 'INIT_ANECDOTES':
      return action.data;
    default:
      return state;
  }
};

export const vote = (anecdote) => {
  return async (dispatch) => {
    const updateAnecdote = await anecdoteService.updateAnecdote(anecdote);
    dispatch({
      type: 'VOTE',
      data: updateAnecdote,
    });
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    });
  };
};

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    });
  };
};

export default reducer;
