# Rate Repository App
![CI](https://github.com/Kaltsoon/rate-repository-api/workflows/CI/badge.svg)

An Android mobile app to rate Github repositories. Based on the project from the React Native section of the FullStackOpen course by MOOC Finland.

## Table of Contents
- [Requirements](#requirements)
- [Env](#env)
- [Client](#client)
- [Server](#server)
- [Tests](#tests)
- [FAQ](#-faq)
- [Notes](#notes)


## Requirements
This app requires sdk version 55 in order to work.


## Env
The following environment variables are required:

- Client
  ```env
  APOLLO_SERVER_URL=http://<server-ip>:4000/graphql
  ```

- Server
  ```env
  GITHUB_CLIENT_ID=<client-id>
  GITHUB_CLIENT_SECRET=<client-secret>
  JWT_SECRET=<secret>
  ```

Store both `.env` files on their respective root folders, alongside the `package.json` file.


## Client
### Setup
Install dependencies
```bash
cd ./client && npm install
```

Start the Metro Bundler
```bash
npm run start
```

- Access the app on http://localhost:8081

- For the Expo Go app, either scan the QR code or enter the url exp://localhost:8081

## Server
### ✔️ Requirements
Works at least with Node version v20. If you haven't installed Node or npm, [nvm⇗](https://github.com/nvm-sh/nvm) is an easy to use tool for installing both. Nvm is also handy if you want to quickly switch between different Node versions.

### 🚀 Getting started
1. Install dependencies
    ```bash
    cd ./server && npm install
    ```

2. Rate Repository API uses the GitHub API, which has a quite small rate limit (60 requests per hour) for unauthorized requests. Therefore, we need to register it as an OAuth application to obtain client credentials. Register your [OAuth application⇗](https://github.com/settings/applications/new) by setting:

    - Application name : "**Rate Repository API**"
    - Homepage URL : **https://github.com/Kaltsoon/rate-repository-api**
    - Authorization callback URL : **http://localhost:5000**
  
3. Now you should see your application [here⇗](https://github.com/settings/developers) and by going to the application's page, see the "Client ID" and "Client Secret" values.

4. Create a file `.env` in the `rate-repository-api` directory and copy the contents of the `.env.template` file there. In the `.env` file, replace `GITHUB_CLIENT_ID`, and `GITHUB_CLIENT_SECRET` variable values with your newly registered OAuth application's credentials. If you want, you can also use a different secret for the `JWT_SECRET` variable, which is used to sign access tokens.

5. Setup the SQLite database and run the migrations
    ```bash
    npm run build
    ```

6. Populate the database with some seed data
    ```bash
    npm run seed:run
    ```

    - **Note:** running this command will remove all existing data.

7. Start the server
    ```bash
    npm run start
    ```
    
8. Access the Apollo Sandbox at http:/localhost:4000

### 🔑 Authentication
To list all the registered users, you can run this query in the Apollo Sandbox:
```javascript
{
  users {
    edges {
      node {
        username
      }
    }
  }
}
```

You can retrieve an access token by performing the `authenticate` mutation:
```javascript
mutation {
  authenticate(credentials: { username: "kalle", password: "password" }) {
    accessToken
  }
}
```

All access tokens expire after **seven days**. If you performed step 5. in the "Getting started" section, users "kalle", "elina" and "matti" all have the password `password`.

You can also register a new user by performing the `createUser` mutation:
```javascript
mutation {
  createUser(user: { username: "myusername", password: "mypassword" }) {
    id
    username
  }
}
```

### Authorize requests in the Apollo Sandbox
A handy way to authorize requests in the Apollo Sandbox is to retrieve an access token using the `authorize` mutation (see above for details) and then add the following in the "Headers" tab below the operations editor:
```json
{
  "Authorization": "Bearer <ACCESS_TOKEN>"
}
```


## Tests
### Frontend component integration tests
1. Install dependencies
    ```bash
    cd ./client && npm install
    ```

2. Run the tests
    ```bash
    npm run test
    ```


## ❓ FAQ
- **How to reset the database?** If you are absolutely sure that you want to remove _all_ the existing data, just remove the `database.sqlite` file in the `rate-repository-api` directory and run `npm run build`. You can run `npm run seed:run` to initialize the new database with seed data.

- **Is this production ready?** Almost. The current version of the API utilizes the SQLite database, which is not quite suitable for production. Luckily, all database queries are performed with [Objection](https://vincit.github.io/objection.js/) ORM, and changing the underlying database driver is just a matter of [configuration](http://knexjs.org/#Installation-client).


## Notes
The port 5000 might be reserved in new macOS versions. If you see this error
```bash
Error: listen EADDRINUSE: address already in use :::5000
```

Define an alternative port in file `.env`, example:
```bash
PORT=5001
```

Change also the [Authorization callback URL⇗](https://github.com/settings/developers) to have the new port value.
