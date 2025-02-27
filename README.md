# GameConnect API

## Overview

GameConnect is a gaming community platform that provides game details, user reviews, and recommendations. Users can filter games by category, platform, and rating, as well as sort by popularity, price, and user reviews.

## Setup & Deployment

1. Clone the repository:
   ```sh
   git clone https://github.com/AkshAI-2030/GameConnect
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

### Game Sorting

- **By Popularity:** `/games/sort/popularity?order=ascending` or `descending`
- **By Price:** `/games/sort/price?order=low-to-high` or `high-to-low`
- **By Reviews:** `/games/sort/reviews?order=least-to-most` or `most-to-least`

### Game Filtering

- **By Category:** `/games/filter/category?category=action`
- **By Platform:** `/games/filter/platform?platform=pc`
- **By Rating:** `/games/filter/rating?rating=4-plus`

### Retrieve All Games

- **Endpoint:** `/games`
- Returns all available games.

## Features

- Sort games by popularity, price, and user reviews.
- Filter games by category, platform, and rating.
- Seamless integration with GameConnect’s frontend UI.

### Notes

- Ensure `cors` is imported before API endpoints:
  ```javascript
  let cors = require('cors');
  app.use(cors());
  ```

## Live Demo & Resources
- **StackBlitz URL:** [StackBlitz Project](https://stackblitz.com/~/github.com/AkshAI-2030/GameConnect)

## Conclusion

This API provides powerful filtering and sorting options for game listings, enhancing the GameConnect experience.

