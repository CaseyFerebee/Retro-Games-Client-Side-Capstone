import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import { getSingleGame } from "../../managers/GameManager";


export const GameDetails = () => {
    const [game, setGame] = useState({});
    const { gameId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        getSingleGame(gameId).then(setGame);
    }, [gameId]);

    const handleAddToCollection = () => {
        navigate("/gamecollections/:gameId/create", { state: { gameId: gameId } });
    };

    return (
    <div>
        <section className="game">
            <img src={game.img} alt={game.title} />
            <h3 className="game__title">{game.title}</h3>
            <div className="game__skill-level">{game.description}</div>
            <div className="game__players-needed">{game.releaseDate}</div>
            <div className="game__creator">{game.publisher}</div>
            <div className="game__type">{game.developer}</div>
            <div className="game__type">{game.modes}</div>
            <div className="game__type">{game.genre?.label}</div>
        </section>
        <button className="add-game-button" onClick={handleAddToCollection}>
                Add Game to Collection
            </button>

    </div>
    );
};
