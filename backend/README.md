# Drift Application API Documentation

## Overview

This documentation provides details about the Drift Application's backend API, specifically focusing on the user registration and login endpoints.

## API Endpoints

### 1. Register User

- **Endpoint**: `POST /user/register`
- **Description**: Registers a new user with the provided name, email, and password.
- **HTTP Method**: `POST`

#### Request Body

The request body should contain the following data in JSON format:
- `name`(string, require) : user name minimum 3 characters.
- `email`(string, require) : user email.
- `password`(string, require) : user password minimum 3 characters.


#### Example Response 

- `token`(string):JWT token.
- `user`(object):
    - `name`(string, require) : user name minimum 3 characters.
    - `email`(string, require) : user email.
    - `password`(string, require) : user password minimum 3 characters.

### 2. User Login

- **Endpoint**: `POST /user/login`
- **Description**: Authenticates a user with the provided email and password.
- **HTTP Method**: `POST`

#### Request Body

The request body should contain the following data in JSON format:
- `email`(string, required) : user email.
- `password`(string, required) : user password.

#### Example Response 

- `token`(string): JWT token.
- `user`(object):
    - `name`(string, required) : user name minimum 3 characters.
    - `email`(string, required) : user email.
    - `password`(string, require) : user password minimum 3 characters.

### 3. User Profile

- **Endpoint**: `GET /user/profile`
- **Description**: Retrieves the profile information of the currently authenticated user.
- **HTTP Method**: `GET`

#### Request Body

Requires a valid JWT token in the Authorization header.

#### Example Response 

- `user`(object):
    - `name`(string, required) : user name minimum 3 characters.
    - `email`(string, required) : user email.

### 4. User Logout

- **Endpoint**: `GET /user/logout`
- **Description**: Logout the currently authenticated user.
- **HTTP Method**: `GET`

#### Request Body

Requires a valid JWT token in the Authorization header.

#### Example Response 

A simple message logout successful


## Captain Routes 

### 1. Register Captain

- **Endpoint**: `POST /captain/register`
- **Description**: Registers a new captain with the provided name, email, password, and vehicle details.
- **HTTP Method**: `POST`

#### Request Body

The request body should contain the following data in JSON format:

- `name` (string, required): Captain's name (minimum 3 characters).
- `email` (string, required): Captain's email address (must be a valid email format).
- `password` (string, required): Captain's password (minimum 3 characters).
- `vehicle` (object, required): Vehicle details (must include the following fields):
  - `color` (string, required): Vehicle color (minimum 3 characters).
  - `plate` (string, required): Vehicle plate (minimum 3 characters).
  - `capacity` (integer, required): Vehicle capacity (must be greater than or equal to 1).
  - `vehicleType` (string, required): Type of vehicle (must be one of the following: "car", "auto", "motorcycle").

#### Example Response

- `token`(string):JWT token.
- `captain`(object):
    - `name` (string, required): Captain's name (minimum 3 characters).
    - `email` (string, required): Captain's email address (must be a valid email format).
    - `password` (string, required): Captain's password (minimum 3 characters).
    - `vehicle` (object, required): Vehicle details (must include the following fields):
    - `color` (string, required): Vehicle color (minimum 3 characters).
    - `plate` (string, required): Vehicle plate (minimum 3 characters).
    - `capacity` (integer, required): Vehicle capacity (must be greater than or equal to 1).
    - `vehicleType` (string, required): Type of vehicle (must be one of the following: "car", "auto", "motorcycle").

### 2. Captain Login

- **Endpoint**: `POST /captain/login`
- **Description**: Authenticates a captain with the provided email and password.
- **HTTP Method**: `POST`

#### Request Body

The request body should contain the following data in JSON format:

- `email` (string, required): Captain's email address (must be a valid email format).
- `password` (string, required): Captain's password (minimum 3 characters).


#### Example Response

- `token`(string):JWT token.
- `captain`(object):
    - `name` (string, required): Captain's name (minimum 3 characters).
    - `email` (string, required): Captain's email address (must be a valid email format).
    - `password` (string, required): Captain's password (minimum 3 characters).
    - `vehicle` (object, required): Vehicle details (must include the following fields):
    - `color` (string, required): Vehicle color (minimum 3 characters).
    - `plate` (string, required): Vehicle plate (minimum 3 characters).
    - `capacity` (integer, required): Vehicle capacity (must be greater than or equal to 1).
    - `vehicleType` (string, required): Type of vehicle (must be one of the following: "car", "auto", "motorcycle").

### 3. Captain Profile

- **Endpoint**: `GET /captain/profile`
- **Description**: Retrieves the profile information of the currently authenticated captain.
- **HTTP Method**: `GET`

#### Request Headers

Requires a valid JWT token in the Authorization header.

- **Authorization**: `Bearer YOUR_JWT_TOKEN`

#### Example Response

- `captain`(object):
    - `name` (string, required): Captain's name (minimum 3 characters).
    - `email` (string, required): Captain's email address (must be a valid email format).
    - `password` (string, required): Captain's password (minimum 3 characters).
    - `vehicle` (object, required): Vehicle details (must include the following fields):
    - `color` (string, required): Vehicle color (minimum 3 characters).
    - `plate` (string, required): Vehicle plate (minimum 3 characters).
    - `capacity` (integer, required): Vehicle capacity (must be greater than or equal to 1).
    - `vehicleType` (string, required): Type of vehicle (must be one of the following: "car", "auto", "motorcycle").

### 4. Captain Logout

- **Endpoint**: `GET /captain/logout`
- **Description**: Logs out the currently authenticated captain.
- **HTTP Method**: `GET`

#### Request Headers

Requires a valid JWT token in the Authorization header.

- **Authorization**: `Bearer YOUR_JWT_TOKEN`

#### Example Response 

A simple messade logout successful