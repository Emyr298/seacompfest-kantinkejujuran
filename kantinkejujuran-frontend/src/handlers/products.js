import axios from 'axios';

// placholder
const apiUrl = 'http://localhost:3002';
const productUrl = apiUrl + '/product';

function getProducts(container, navigate, warningHandler, sortData, sortDirection) {
  axios({
    method: 'get',
    url: productUrl,
    params: {
      sortBy: sortData,
      sortDirection: sortDirection,
    },
    withCredentials: true,
  }).then((res) => {
    container.setState({ products: res.data.products });
  }).catch((err) => {
    warningHandler(err.response.data.message);
  });
}

function addProduct(container, navigate, warningHandler, productName, productPrice, productImage, productDesc) {
  const formData = new FormData();
  formData.append('productName', productName);
  formData.append('productPrice', productPrice);
  formData.append('productImage', productImage);
  formData.append('productDesc', productDesc);
  
  axios({
    method: 'post',
    url: productUrl,
    data: formData,
    withCredentials: true,
  }).then((res) => {
    navigate('/');
  }).catch((err) => {
    warningHandler(err.response.data.message);
  });
}

function getProduct(container, navigate, warningHandler, productId) {
  axios({
    method: 'get',
    url: productUrl + '/' + productId,
    withCredentials: true,
  }).then((res) => {
    container.setState({ selectedProduct: res.data.product });
  }).catch((err) => {
    warningHandler(err.response.data.message);
  });
}

function buyProduct(container, navigate, warningHandler, productId) {
  axios({
    method: 'delete',
    url: productUrl + '/' + productId,
    withCredentials: true,
  }).then((res) => {
    container.setState({ selectedProduct: null });
  }).catch((err) => {
    warningHandler(err.response.data.message);
  });
}

export default { getProducts, addProduct, getProduct, buyProduct };
