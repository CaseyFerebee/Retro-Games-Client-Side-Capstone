import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCurrentOwnerGameCollection } from "../../../managers/GameCollectionManager";


export const GameCollectionList = () => {
  const [gameCollections, setGameCollections] = useState([]);

  useEffect(() => {
    getCurrentOwnerGameCollection().then((gameData) =>
      setGameCollections(gameData)
    );
  }, []);

  return (
    <div className="container">
      <h1 className="game-collection-title">Game Collection</h1>
      <div className="columns is-multiline">
        {gameCollections.map((gameObject) => (
          <div className="column is-one-third" key={gameObject.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src={gameObject?.game?.img}
                    alt={gameObject?.game?.title}
                  />
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
  );
};

