# Take Home Test from Sezzle, Inc.

Create a web app (using any programming languages) which logs calculations as they happen and shares those calculations with everyone connected to the website.

For example, user A and user B go to your site at the same time. User A calculates "5 + 5", which equals "10". This is logged below the calculator as "5 + 5 = 10". User B is updated about this calculation right after user A posts it. Now, user B calculates "3 x 4".This calculates to “12” and displays "3 x 4=12" right below the prior calculation. User A sees this update immediately after user B posts it.

Results should remain between sessions. Only show the last 10 calculations descending from most recent to oldest.

This app is deployed on [Heroku](https://calm-brook-35590.herokuapp.com/)

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
5. In the terminal, `npm run server` and `npm run client`

## Reflection

App allows users to:

- [x] Add, subtract, multiple and divide
- [x] See their own (and other users) equations
- [x] Showing newest to oldest, limited to 10 equations on the screen at one time.


I first designed the UI of calculator to visualize what I wanted the calculator to look like first before adding the logic. The reason why I chose React and Typescript was because this was something new I've been working in and wanted to challenge myself with using Typescript. If I had more time, I probably would have tried building a .Net/C# backend as a challenge.

Things to fix or add:

- [ ] Save calculations that have recurring decimals.
- [ ] Expanded operations that evaluates commands using order of operations.
- [ ] Conversion between common bases (Square Root, Logarithms, Exponents).
