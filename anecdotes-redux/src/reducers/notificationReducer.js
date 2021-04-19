const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data.content;
    case 'CLEAR_NOTIFICATION':
      return '';
    case 'SET_TIMER_ID':
      return action.data.timer;
    default:
      return state;
  }
};

let timer = null;
export const setNotification = (content, time = 5) => {
  return async (dispatch) => {
    await dispatch({ type: 'SET_NOTIFICATION', data: { content } });
    clearTimeout(timer);
    timer = setTimeout(() => {
      dispatch(clearNotification());
    }, time * 1000);
  };
};

const clearNotification = () => ({
  type: 'CLEAR_NOTIFICATION',
});

export default notificationReducer;
