import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { addGameCollection } from "../../../managers/GameCollectionManager";
import { getSingleGame } from "../../../managers/GameManager";
import { getAllConditions } from "../../../managers/ConditionManager";

export const GameCollectionForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { gameId } = location.state;
    const [gameData, setGameData] = useState({});
    const [selectedCondition, setSelectedCondition] = useState("");
    const [conditions, setConditions] = useState([]);

    useEffect(() => {
        getSingleGame(gameId).then((response) => {
            setGameData(response);
        });

        getAllConditions().then((response) => {
            setConditions(response);
        });
    }, [gameId]);

    const handleConditionChange = (e) => {
        setSelectedCondition(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const createGameCollection = {
            game: parseInt(gameData.id, 10),
            condition: parseInt(selectedCondition, 10),
        };

        addGameCollection(createGameCollection).then(() => {
            navigate(`/gamecollections`);
        });
    };

    return (
        <div className="container">
            <section className="hero is-medium is-primary">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <img
                            src={gameData.img}
                            alt={gameData.title}
                            className="game-image is-large"
                        />
                        <h1 className="title is-1">{gameData.title}</h1>
                        <p className="subtitle">{gameData.description}</p>
                        <div className="columns">
                            <div className="column">
                                <p>
                                    <strong>Release Date:</strong> {gameData.releaseDate}
                                </p>
                            </div>
                            <div className="column">
                                <p>
                                    <strong>Publisher:</strong> {gameData.publisher}
                                </p>
                            </div>
                            <div className="column">
                                <p>
                                    <strong>Developer:</strong> {gameData.developer}
                                </p>
                            </div>
                        </div>
                        <div className="tags is-centered">
                            <span className="tag is-info">{gameData.modes}</span>
                            <span className="tag is-success">{gameData.genre?.label}</span>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="field">
                                <label className="label">Condition of Game:</label>
                                <div className="control">
                                    <div className="select">
                                        <select
                                            value={selectedCondition}
                                            onChange={handleConditionChange}
                                            required
                                        >
                                            <option value="">Select a condition</option>
                                            {conditions.map((condition) => (
                                                <option key={condition.id} value={condition.id}>
                                                    {condition.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button
                                        type="submit"
                                        className="button is-info is-fullwidth add-game-button"
                                    >
                                        Add this wonderful game to your collection
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};