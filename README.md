# Jay's Calc vTwo

Create a web app (using any programming languages) which logs calculations as they happen and shares those calculations with everyone connected to the website.

For example, user A and user B go to your site at the same time. User A calculates "5 + 5", which equals "10". This is logged below the calculator as "5 + 5 = 10". User B is updated about this calculation right after user A posts it. Now, user B calculates "3 x 4".This calculates to “12” and displays "3 x 4=12" right below the prior calculation. User A sees this update immediately after user B posts it.

Results should remain between sessions. Only show the last 10 calculations descending from most recent to oldest.

This app is deployed on [Heroku](https://jaycalctwo.herokuapp.com/)

## Built With

React,
TypeScript,
Node.js,
Express.js,
PostgreSQL, and
styled-components

## Prerequistes

- [Node.js](https://nodejs.org/en/)
- [PostgresQL](https://www.postgresql.org/)
- [Postico](https://eggerapps.at/postico/)

## Installation

Steps to get the development environment running.

1. Clone/Download this project.
2. Set up a local PostgreSQL database called `Calculations`
3. Use the data.sql instructions to create a table in your database
4. In the terminal, CD into the project folder and use the command `npm install`
5. To run locally, in the terminal, `npm run dev`

## Summary

App allows users to:

- [x] Add, subtract, multiple and divide
- [x] See their own (and other users) equations
- [x] Showing newest to oldest, limited to 10 equations on the screen at one time.

Things to fix or add:

- [ ] Add styling for mobile browsers and responsive window sizing.
- [ ] Save calculations that have recurring decimals.
- [ ] Expanded operations that evaluates commands using order of operations.
- [ ] Conversion between common bases (Square Root, Logarithms, Exponents).

## Acknowledgments

* Forked from [James Nguyen's Repo](https://github.com/Zygy93/Calculator-app).