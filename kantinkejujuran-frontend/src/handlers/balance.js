import axios from 'axios';

// placholder
const apiUrl = 'http://localhost:3002';
const balanceUrl = apiUrl + '/balance';

function getBalance(container, navigate, warningHandler) {
  axios({
    method: 'get',
    url: balanceUrl,
    withCredentials: true,
  }).then((res) => {
    container.setState({ balance: res.data.balance });
  }).catch((err) => {
    warningHandler(err.response.data.message);
  });
}

function addBalance(container, navigate, warningHandler, amount) {
  axios({
    method: 'post',
    url: balanceUrl,
    data: {
      amount: amount,
    },
    withCredentials: true,
  }).then((res) => {
    getBalance(container, navigate, warningHandler);
  }).catch((err) => {
    warningHandler(err.response.data.message);
  });
}

function withdrawBalance(container, navigate, warningHandler, amount) {
  axios({
    method: 'delete',
    url: balanceUrl,
    data: {
      amount: amount,
    },
    withCredentials: true,
  }).then((res) => {
    getBalance(container, navigate, warningHandler);
  }).catch((err) => {
    warningHandler(err.response.data.message);
  });
}

export default { getBalance, addBalance, withdrawBalance };
