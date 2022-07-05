# Kantin Kejujuran Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation
Use Node Package Manager to install dependencies.
```bash
npm install
```

Create .env file to store environment variables, look at .env.example for example .env file. The .env file must have:
- REACT_APP_API_URL: URL of API. ex: ```REACT_APP_API_URL="http://localhost:3002"```

## Available Scripts
- `npm start`: Runs the app in the development mode ([http://localhost:3000](http://localhost:3000)).
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`:  Builds the app for production to the `build` folder.
- `npm run eject`: __One-way operation!!!__. Removes single build dependency from the project. 

For more information, see [create-react-app available scripts documentation](https://create-react-app.dev/docs/available-scripts/).

## Application Usage
### Register/Login
Go to login/register page by clicking login/register button in the navigation bar or by going to `/login`/`register`.

![image](https://user-images.githubusercontent.com/101683735/177265617-f77ec28b-8bc9-4c3d-a06d-ccb48b8be9d5.png)

Put a valid student ID and a password, then click the login/register button.

![image](https://user-images.githubusercontent.com/101683735/177265917-c5cd1349-4537-4ac8-84a8-c884631786c9.png)

### Logout
Click the logout button.

![image](https://user-images.githubusercontent.com/101683735/177266401-86a48eb7-41a6-4745-8799-e29108b983d3.png)

### Search for Products
Go to front page by clicking logo/products button in the navigation bar or by going to `/`.

![image](https://user-images.githubusercontent.com/101683735/177266832-42e951d7-d2e8-44e9-8582-1c37c763b08e.png)

All available products will be shown in the page. The sorting configuration can be changed with sortBy and Ascend/Descend toggle buttons.

![image](https://user-images.githubusercontent.com/101683735/177267296-8e4fe305-a466-4e5d-a67c-abc34fd27a4d.png)

### Buy Products
You need to login in order to buy a product. If you are logged in, click any available product in front page, then a box containing product details and buy button will appear. Click the buy button to buy the product.

![image](https://user-images.githubusercontent.com/101683735/177267738-415d3852-65d0-4d16-9a13-74700f8fec54.png)

### Add/Sell Products
You need to login in order to add a product. If you are logged in, click `+` button in front page, then you will be redirected to add product page. Fill the form and click the submit button to add product.

![image](https://user-images.githubusercontent.com/101683735/177268208-223d4454-28ff-40d3-b7f7-4442bb2c3204.png)

![image](https://user-images.githubusercontent.com/101683735/177268230-e0e9bfa6-f16d-472d-8073-dab0a27ba820.png)

### Add/Withdraw Balance
You need to login in order to add/withdraw balance. If you are logged in, go to balance page by clicking balance button in the navigation bar or by going to `/balance`. Fill the amount then click add/withdraw button to add/withdraw balance.

![image](https://user-images.githubusercontent.com/101683735/177268599-71d621cf-69c2-4a00-a971-0ed86eeb5904.png)

![image](https://user-images.githubusercontent.com/101683735/177268544-e612cdd9-16ae-474a-b568-ed01d7aba8ff.png)
