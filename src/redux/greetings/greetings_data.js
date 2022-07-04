import fetchGreeting from '../../services/fetchGreeting';

const GET_GREETING = 'GET_GREETING';

const getGreeting = () => async (dispatch) => {
  const greeting = fetchGreeting();
  greeting
    .then((data) => {
      console.log('DATA' + data);
      dispatch({
        type: GET_GREETING,
        payload: data,
      });
    })
    .catch((err) => {
      console.log('ERROR:' + err);
    });
};

const reducer = (greeting = '', action) => {
  switch (action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return greeting;
  }
};

export { getGreeting };

export default reducer;
