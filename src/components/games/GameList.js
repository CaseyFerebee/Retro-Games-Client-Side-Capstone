import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllGames } from "../../managers/GameManager";

export const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getAllGames().then((gamesData) => setGames(gamesData));
  }, []);

  return (
    <div className="container">
      <h1 className="title is-1">Games</h1>
      <div className="columns is-multiline">
        {games.map((gameObject) => (
          <div className="column is-one-third" key={gameObject.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={gameObject.img} alt={gameObject.title} />
                </figure>
              </div>
              <div className="card-content">
                <p className="title is-4">
                  <Link to={`/games/${gameObject.id}`} className="has-text-centered">
                    {gameObject.title}
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
