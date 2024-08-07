# Backend Engineering Coding Challenge

## Project Introduction

Welcome to the Backend Engineering Coding Challenge. This project is a simple NestJS application with one endpoint that returns a paginated list of movies. The movies are sourced from a PostgreSQL database using TypeORM.
The applications exposes one endpoint called `/movie`, which is defined in `src/movie/movie.controller.ts`. This endpoint currently handles one Query Parameter called `pagination` to set the page and page limit. Those Parameters are passed to the `MovieService` in `src/movie/movie.service.ts` where the pagination is applied to the sql query.

Your task is to extend the current endpoint to include an option which allows to search for movies using a string.

## Challenge Instructions

### Task

1. Extend the existing endpoint to accept a query parameter called `searchTerm`.
2. Modify the service to query the PostgreSQL database for movies that contain the provided string, in addition to the existing pagination functionality.

**Expected Working Time:** The estimated time to complete this task is about 2-3 hours.

### Example

The Http request `GET http://localhost:3000/movie?page=1&limit=10&searchTerm=Inception` should return the first 10 results that contain the string `Inception`.

## Development Instructions

### Prerequisites

- Node.js (>=20.x)
- Docker

### Setup

1. Run `npm install`
1. Start the database by running `docker compose up`
1. Run the database migrations by executing `npm run migration:run`
1. Run the application with the command `npm run dev`

The application should now be available on `http://localhost:3000` and you should be able to see a first result of the movie endpoint by calling `http://localhost:3000/movie`

### Handing in Your Solution

Create a new public repository and send us a link to it
