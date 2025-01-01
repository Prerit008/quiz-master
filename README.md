# Quiz App

An interactive quiz app built with React. This app allows users to take a quiz, view questions, and submit their answers for scoring.

![Preview](https://github.com/Prerit008/quiz-master/blob/main/QuizMaster.png?raw=true)

## Prerequisites

Make sure you have the following installed:

- **Node.js** (version 14 or above)
- **npm** (Node Package Manager)

You can check if you have them installed by running:

```bash
node -v
npm -v
```

## Getting Started

Follow these steps to set up the project locally:

### 1. Clone the Repository

Clone the project to your local machine:

```bash
git clone https://github.com/Prerit008/quiz-master.git
cd quiz-master
```

### 2. Install Dependencies

Install the dependencies for both the client (React app) and server (Node.js backend).

#### Client (React app):

Navigate to the client folder and install dependencies:

```bash
cd client
npm install
```
#### Server (Node.js backend):

Navigate to the server folder and install dependencies:

```bash
cd ../server
npm install
```

### 3. Set Up and Run the Server
Navigate to the server directory and start the server:
```bash
cd server
npm start
```
Your server will be available at http://localhost:8080 in the browser.

### 4. Set Up and Run the Client
Navigate to the client directory and start the development server:
```bash
cd client
npm start
```
Your app will be available at http://localhost:3000 in the browser.


### 4. Running Tests
If you have set up tests for your app, you can run them with the following command:

```bash
npm test
```
### 5. Build the App
When you're ready to deploy, you can create a production build of your app:

```bash
npm run build
```
This will create a build/ folder containing the optimized production version of your app.

## Project Structure
Here's a breakdown of the main files and directories in this project:

### Client (React app)
```bash
/client
  README.md              - Instructions specific to the React app
  package-lock.json      - Lock file for dependencies
  package.json           - Defines client dependencies
  /public
    index.html           - The main HTML file for the app
    manifest.json        - Web app manifest
    robots.txt           - Robots.txt file
  /src
    /components          - React components
      App.js             - Root component
      Main.js            - Main quiz interface
      Questions.js       - Displays quiz questions
      Quiz.js            - Displays the quiz interface
      Result.js          - Displays the result
      ResultTable.js     - Displays the results in a table
    /helper
      helper.js          - Helper functions for the app
    /hooks
      FetchQuestion.js   - Custom hook for fetching questions
      setResult.js       - Custom hook for setting results
    /redux
      question_reducer.js - Reducer for quiz questions
      result_reducer.js  - Reducer for quiz results
      store.js           - Redux store configuration
    /styles
      index.css          - Global styles for the app
  index.js               - The entry point for the React app
```
### Server (Node.js backend)
```bash
/server
  /controllers
    controller.js        - Controller to handle API requests
  /database
    conn.js              - Database connection configuration
    data.js              - Sample data or database-related functions
  /models
    questionSchema.js    - Mongoose schema for questions
    resultSchema.js      - Mongoose schema for quiz results
  package-lock.json      - Lock file for server dependencies
  package.json           - Defines server dependencies
  /router
    route.js             - API route handlers
  server.js              - Main server file for handling requests
```

## Acknowledgments
Under the Supervision of **Dr. M. Ganesh**

- **QuizMaster: An Interactive Web-based Platform** was developed and submitted by:
  - **Prerit Agarwal** (Roll No: 2300971650041)
  - **Tanishq Singh** (Roll No: 2300971650060)
  - **Shreya Raj** (Roll No: 2300971650053)
  - **Shubham Kumar** (Roll No: 2300971650054)


A special thanks to all the mentors, peers, and resources that provided valuable insights throughout the project development process.
