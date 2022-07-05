import axios from 'axios';

// placholder
const apiUrl = 'http://localhost:3002';
const productUrl = apiUrl + '/product';

function getProducts() {
  
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

export default { addProduct };
