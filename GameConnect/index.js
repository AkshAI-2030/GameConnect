const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

let db;
(async () => {
  db = await open({
    filename: './GameConnect/database.sqlite',
    driver: sqlite3.Database,
  });
})();

//1.
async function fetchAllGames() {
  let query = 'SELECT * FROM games';
  let response = await db.all(query, []);
  return {
    games: response,
  };
}
app.get('/games', async (req, res) => {
  try {
    let results = await fetchAllGames();
    if (results.games.length === 0) {
      return res.status(400).json('No games found');
    }
    return res.status(200).json(results);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});
//2.
async function fetchGamesById(id) {
  let query = 'SELECT * FROM games WHERE id = ?';
  let response = await db.all(query, [id]);
  return {
    games: response,
  };
}
app.get('/games/details', async (req, res) => {
  let id = req.query.id;
  try {
    let results = await fetchGamesById(id);
    if (results.games.length === 0) {
      return res.status(400).json('No games found with this ' + id);
    }
    return res.status(200).json(results);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});
//3.
async function fetchGamesByGenre(genre) {
  let query = 'SELECT * FROM games WHERE genre = ?';
  let response = await db.all(query, [genre]);
  return {
    games: response,
  };
}
app.get('/games/genre', async (req, res) => {
  let genre = req.query.genre;
  try {
    let results = await fetchGamesByGenre(genre);
    if (results.games.length === 0) {
      return res.status(400).json('No games found with this ' + genre);
    }
    return res.status(200).json(results);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});
//4.
async function fetchGamesByPlatform(platform) {
  let query = 'SELECT * FROM games WHERE platform = ?';
  let response = await db.all(query, [platform]);
  return {
    games: response,
  };
}
app.get('/games/platform', async (req, res) => {
  let platform = req.query.platform;
  try {
    let results = await fetchGamesByPlatform(platform);
    if (results.games.length === 0) {
      return res.status(400).json('No games found with this ' + platform);
    }
    return res.status(200).json(results);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});
//5.
async function sortGamesByRating() {
  let query = 'SELECT * FROM games ORDER BY rating DESC';
  let response = await db.all(query, []);
  return {
    games: response,
  };
}
app.get('/games/sort-by-rating', async (req, res) => {
  try {
    let results = await sortGamesByRating();
    if (results.games.length === 0) {
      return res.status(400).json('No games found');
    }
    return res.status(200).json(results);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});
//6.
async function fetchAllPlayers() {
  let query = 'SELECT * FROM players';
  let response = await db.all(query, []);
  return {
    players: response,
  };
}
app.get('/players', async (req, res) => {
  try {
    let results = await fetchAllPlayers();
    if (results.players.length === 0) {
      return res.status(400).json('No players found');
    }
    return res.status(200).json(results);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});
//7.
async function fetchAllPlayersById(id) {
  let query = 'SELECT * FROM players WHERE id = ?';
  let response = await db.all(query, [id]);
  return {
    players: response,
  };
}
app.get('/players/details', async (req, res) => {
  let id = req.query.id;
  try {
    let results = await fetchAllPlayersById(id);
    if (results.players.length === 0) {
      return res.status(400).json('No players found with this ' + id);
    }
    return res.status(200).json(results);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});
//8.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
