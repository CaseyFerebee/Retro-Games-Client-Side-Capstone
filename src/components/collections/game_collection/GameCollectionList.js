import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCurrentOwnerGameCollection } from "../../../managers/GameCollectionManager";


export const GameCollectionList = () => {
  const [gameCollections, setGameCollections] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getCurrentOwnerGameCollection().then((gameData) =>
      setGameCollections(gameData)
    );
  }, []);

  const filteredGames = gameCollections.filter((gameObject) =>
    gameObject.game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <div className="has-text-centered">
        <h1 className="title is-1 has-text-white">Game Collection</h1>
        
        <div className="field" style={{ maxWidth: "300px", margin: "0 auto" }}>
          <input
            type="text"
            className="input"
            placeholder="Search for games"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="columns is-multiline">
          {filteredGames.map((gameObject) => (
            <div className="column is-one-third" key={gameObject.id}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={gameObject?.game?.img} alt={gameObject?.game?.title} />
                  </figure>
                </div>
                <div className="card-content">
                  <p className="title is-4">
                    <Link to={`/gamecollections/${gameObject.id}`}>
                      {gameObject?.game?.title}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};