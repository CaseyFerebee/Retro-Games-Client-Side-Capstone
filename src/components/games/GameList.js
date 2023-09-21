import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllGames } from "../../managers/GameManager";

export const GameList = () => {
  const [games, setGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    getAllGames().then((gamesData) => setGames(gamesData));
  }, []);

  // Function to filter games based on the search query and selected genre
  const filteredGames = games.filter((game) => {
    const titleMatches = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    const genreMatches = selectedGenre === "All" || game.genre.label === selectedGenre;
    return titleMatches && genreMatches;
  });

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="title is-1 has-text-white" >Games</h1>

      <div className="columns">
        <div className="column is-half">
          <div className="field">
            <label className="label has-text-white">Select Genre:</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select value={selectedGenre} onChange={handleGenreChange}>
                  <option value="All">All</option>
                  <option value="Action">Action</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Racing">Racing</option>
                  <option value="Fighting">Fighting</option>
                  <option value="Sports">Sports</option>
                  <option value="Shooter">Shooter</option>
                  <option value="Role-Playing Game (RPG)">Role-Playing Game (RPG)</option>
                  <option value="Puzzle">Puzzle</option>
                  <option value="Simulation">Simulation</option>
                  <option value="Party">Party</option>
                  <option value="Music/Rhythm">Music/Rhythm</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-half">
          <div className="field">
            <label className="label has-text-white" >Search for games:</label>
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="Search for games"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="columns is-multiline">
        {filteredGames.map((game) => (
          <div className="column is-one-third" key={game.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={game.img} alt={game.title} />
                </figure>
              </div>
              <div className="card-content">
                <p className="title is-4">
                  <Link to={`/games/${game.id}`} className="has-text-centered">
                    {game.title}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
