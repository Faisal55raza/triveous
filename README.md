# triveous Ecommerce Backend API

Welcome to the Ecommerce Backend API! This API provides functionality for managing various aspects of an ecommerce platform, including users, products, orders, and payments.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Authentication](#authentication)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running locally or accessible remotely.

### Installation

1. Clone this repository to your local machine:

   ```bash
   [git clone https://github.com/Faisal55raza/triveous
   ```

2. Navigate to the project directory:

   ```bash
   cd triveous
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables by creating a `.env` file in the root directory. You can use the `.env.example` file as a template.

5. Start the server:

   ```bash
   npm start
   ```

## Usage

Once the server is running, you can start sending requests to the API endpoints using your favorite API testing tool or client, such as Postman or cURL.

## Endpoints

The API provides the following endpoints:

User API's

- POST `/triveous/register` REGISTER USER
- POST `/triveous/login` LOGIN USER
- GET `/triveous/logout` LOGOUT USER

PRODUCT API's

- POST `/triveous/product/new` - CREATE A PRODUCT
- GET `/triveous/products` GET ALL PRODUCTS
- GET `/triveous/product/:id` GET A SINGLE PRODUCT BY ID
- GET `/triveous/products/category` GET PRODUCT CATEGORIES

CART API's

-POST `/triveous/cart/add/:id` ADD A PRODUCT TO CART
-GET `/triveous/cart/get`  GET ALL CART ITEMS
-PUT `/triveous/cart/increase/:id` INCREASE QUANTITY OF A CART ITEM
-PUT `/triveous/cart/decrease/:id` DECREASE QUANTITY OF A CART ITEM
-DELETE `/triveous/cart/delete` DELETE A CART ITEM

ORDER API's

-POST `/triveous/order/new` CREATE A ORDER
-GET `/triveous/orders/me` GET USER ORDER HISTORY
-GET `/triveous/order/:id` GET A SINGLE ORDER


## Authentication

Authentication is required for certain endpoints. You can implement authentication using JSON Web Tokens (JWT), OAuth, or any other method of your choice. Make sure to secure your API endpoints properly to prevent unauthorized access.

## Error Handling

The API returns appropriate HTTP status codes and error messages in JSON format to indicate the success or failure of a request. Please refer to the documentation for details on error handling.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for your own purposes.
