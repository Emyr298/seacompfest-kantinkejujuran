import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL; //'http://localhost:3002';
const registerUrl = apiUrl + '/register';
const sessionUrl = apiUrl + '/session';

function register(app, navigate, warningHandler, studentId, password) {
  axios({
    method: 'post',
    url: registerUrl,
    data: {
      id: studentId,
      password: password,
    },
    withCredentials: true,
  }).then((res) => {
    navigate('/');
    getSessionInfo(app, navigate, warningHandler);
  }).catch((err) => {
    warningHandler(err.response.data.message);
  });
}

function getSessionInfo(app, navigate, warningHandler) {
  axios({
    method: 'get',
    url: sessionUrl,
    withCredentials: true,
  }).then((res) => {
    app.setState({ studentId: res.data.id });
  }).catch((err) => {
    warningHandler(err.response.data.message);
  });
}

function login(app, navigate, warningHandler, studentId, password) {
  axios({
    method: 'post',
    url: sessionUrl,
    data: {
      id: studentId,
      password: password,
    },
    withCredentials: true,
  }).then((res) => {
    navigate('/');
    getSessionInfo(app, warningHandler);
  }).catch((err) => {
    warningHandler(err.response.data.message);
  });
}

function logout(app, navigate, warningHandler) {
  axios({
    method: 'delete',
    url: sessionUrl,
    withCredentials: true,
  }).then((res) => {
    navigate('/');
    getSessionInfo(app, warningHandler);
  }).catch((err) => {
    warningHandler(err.response.data.message);
  })
}

export default { getSessionInfo, register, login, logout };
