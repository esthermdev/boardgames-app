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

## Data Fetching

This application fetches data from a Firebase Firestore database. The relevant data includes details about board games, scores, and trending information.

## How to Run

1. Clone the repository.
2. Install dependencies using `npm install`.
3. You need to clone the boardgamesServer repository as well and install its dependencies.
4. Start the boardgamesServer using `npm start`. This allows the app to fetch data on the backend.
5. Then start the boardgames-app using `npm start`. 

## Future Enhancements

- Improve the user interface and add more animations.
- Add user authentication and personalized game recommendations.
- Integrate more detailed statistics and game reviews.
- Integrate backend server APIs within the frontend app.

---

This README provides a brief overview of the project's purpose, technologies, and structure. For detailed instructions on how to contribute or report issues, please refer to the `CONTRIBUTING.md` and `ISSUE_TEMPLATE.md` files (coming soon).