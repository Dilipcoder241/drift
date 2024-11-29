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