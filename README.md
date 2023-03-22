# Arithmetic Calculator REST API

This is a Node.js based backend REST API for a simple arithmetic calculator functionality. The API supports basic arithmetic operations such as addition, subtraction, multiplication, division, square root, and a random string generation.

Each functionality has a separate cost per request, and users have a starting credit/balance. Each request will be deducted from the user's balance, and if the user's balance is not enough to cover the request cost, the request will be denied.

## Prerequisites

Before getting started, you should have the following installed on your system:

- Node.js
- npm (or yarn)
- TypeScript

## Instructions 🚀

To get started, clone the repository and run the following command:

```
npm install
```

## Configuration

Create a .env file in the root directory of your project with the following environment variables:

```
NODE_ENV=development
PORT=3000
DB_NAME=mydatabase
DB_USER=myuser
DB_PASSWORD=mypassword
DB_HOST=localhost
DB_PORT=5432
```

## Running the Server

To start the server, run the following command:

```
npm run dev
```

This will start the server on the port specified in the .env file.

## API Endpoints

The API endpoints are defined in the routerApi function in index.ts.

- /api/v1/users - User endpoints
- /api/v1/auth - Authentication endpoints
- /api/v1/operations - Operations endpoints
- /api/v1/record - Record endpoints
