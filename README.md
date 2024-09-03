# The Boardgame Shelf

## Project Overview

The Boardgame Shelf is an interactive web application designed to provide board game enthusiasts with detailed information about various board games, including their scores and trending status. Users can explore games, view details, check scoreboards, and get recommendations on what to play next.

**Note:** This project is currently under development.

## Technologies Used

- **React:** For building the user interface.
- **React Router:** For handling navigation within the application.
- **Redux Toolkit:** For state management.
- **Reactstrap:** For Bootstrap components in React.
- **Firebase Firestore:** For storing and fetching data related to board games and scores.
- **Firebase:** For backend services including Firestore.
- **React Spring:** For animations.

## Features

- **Home Page:** Welcome page with trending games and featured events.
- **Boardgames Page:** List of all board games available.
- **Game Detail Page:** Detailed view of a selected board game.
- **Random Page:** Random board game suggestion.
- **Scoreboards Page:** View and manage scores for various board games.

## Data Fetching and API

This application fetches data from a backend server (boardgameServer). The relevant data includes details about board games, scores, and trending information.

**Important Notes:**
- You need to run the boardgameServer backend project to fetch the data and work with it on the front end.
- Working APIs are the CRUD operations for the boardgames route.
- Users can log in with a username and password (contact the developer for credentials).
- User authentication is required to perform POST, UPDATE, or DELETE operations on boardgame data.
- All other REST API routes only use GET to fetch data.

## How to Run

1. Clone this repository (frontend).
2. Install dependencies using `npm install`.
3. Clone the [boardgameServer](https://github.com/esthermdev/boardgameServer) repository and install its dependencies.
4. Start the boardgameServer using `npm start`. This allows the app to fetch data on the backend.
5. Start this frontend app using `npm start`.

## User Authentication

To perform CREATE, UPDATE, or DELETE operations on boardgame data, users need to log in. Contact the developer for valid credentials.

## Future Enhancements

- Improve the user interface and add more animations.
- Add user registration and expand authentication features.
- Integrate more detailed statistics and game reviews.
- Expand API functionality for other data types (scores, trending games, etc.).

---

This README provides a brief overview of the project's purpose, technologies, and structure. For detailed instructions on how to contribute or report issues, please refer to the `CONTRIBUTING.md` and `ISSUE_TEMPLATE.md` files (coming soon).