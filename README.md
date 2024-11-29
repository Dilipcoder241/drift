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

A simple messade logout successful