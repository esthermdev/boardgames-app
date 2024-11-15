# The Boardgame Shelf

## Project Overview

The Boardgame Shelf is an interactive web application designed to provide board game enthusiasts with detailed information about various board games, including their scores and trending status. Users can explore games, view details, check scoreboards, and get recommendations on what to play next.

**Note:** This project is currently under development.

## Project Background

The Boardgame Shelf was developed as a capstone project during my time at a full-stack web development bootcamp. The implementation leverages various technologies and concepts learned throughout the program, including:

- Modern front-end development with React
- State management principles using Redux
- RESTful API design and implementation
- Database integration with Firebase
- User authentication and authorization
- Responsive web design
- Component-based architecture

As a bootcamp capstone project, this application represents both a learning journey and a foundation for future enhancements. While fully functional, it continues to evolve as I apply new skills and best practices learned since its initial development.

## Technologies Used

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Redux](https://img.shields.io/badge/Redux_Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Bootstrap](https://img.shields.io/badge/Reactstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://reactstrap.github.io/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Firestore](https://img.shields.io/badge/Firestore-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/docs/firestore)
[![React Spring](https://img.shields.io/badge/React_Spring-43853D?style=for-the-badge&logo=react&logoColor=white)](https://react-spring.dev/)

## Features

- **Home Page:** Welcome page with trending games and featured events.
- **Boardgames Page:** List of all board games available.
- **Game Detail Page:** Detailed view of a selected board game.
- **Random Page:** Random board game suggestion.
- **Scoreboards Page:** View and manage scores for various board games.

**Screenshots**
<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/10a60b78-20b9-4b71-8041-a90a200f83a0" width="400"/></td>
    <td><img src="https://github.com/user-attachments/assets/51445fc3-17a6-429f-a57a-1c5dd60f618c" width="400"/></td>
    <td><img src="https://github.com/user-attachments/assets/7e5e2d8b-7373-41ca-a406-f2a5169c119a" width="400"/></td>
  </tr>
  <tr>
    <td align="center">Homepage</td>
    <td align="center">Boardgames Page</td>
    <td align="center">Scoreboards Page</td>
  </tr>
</table>

## Data Fetching and API

This application fetches data from a backend server (boardgameServer). The relevant data includes details about board games, scores, and trending information.

**Important Notes:**
- You need to run the **boardgameServer** backend project to fetch the data and work with it on the front end.
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
