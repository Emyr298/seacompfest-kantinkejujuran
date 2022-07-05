# Kantin Kejujuran Backend
## Installation
Use Node Package Manager to install dependencies.
```bash
npm install
```

Create .env file to store environment variables, look at .env.example for example .env file. The .env file must have:
- NODE_ENV: Node environment (development/production). ex: ```NODE_ENV="development"```.
- PORT: Port number. ex: ```PORT=3002```.
- SESSION_SECRET_KEY: Random string used for express-session's secret key. ex: ```SESSION_SECRET_KEY="A Random String"```.
- MONGO_URI: MongoDB Connection String URI. ex: ```MONGO_URI="mongodb+srv://<username>:<password>@<cluster-name>.prx1c.mongodb.net/<db-name>?retryWrites=true&w=majority"```

## Usage
Run ```npm start``` to start the application.

## API Documentation
### Normal
`/register`
- `POST`: Registers a user. Request: `{id, password}`. Response: -.

`/session`
- `GET`: Get logged in user id. Request: -. Response: `{id}`.
- `POST`: Login. Request: `{id, password}`. Response: -.
- `DELETE`: Logout. Request: -. Response: -.

`/product`
- `GET`: Get data of all products. Query: `{sortBy, sortDirection}`. Response: {products}. Available sortBy: `'name'`, `'created'`. Available sortDirection: `'ascending'`, `'descending'`.
- `POST`: Add product. Request: `FormData object`. Response: -.

`/product/:productId`
- `GET`: Get product data with `productId` id. Request: -. Response: `{product}`
- `DELETE`: Buy product with `productId` id. Request: -. Response: -.

`/balance`
- `GET`: Get canteen's balance. Request: -. Response: `{balance}`.
- `POST`: Increase balance by `amount`. Request: `{amount}`. Response: -.
- `DELETE`: Decrease balance by `amount`. Request: `{amount}`. Response: -.

### Error
Response: `{message}`.
