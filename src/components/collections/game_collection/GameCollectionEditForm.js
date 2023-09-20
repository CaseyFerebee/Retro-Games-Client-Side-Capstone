import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getGameCollectionById, updateGameCollection } from "../../../managers/GameCollectionManager";
import { getAllConditions } from "../../../managers/ConditionManager";

export const GameCollectionUpdateForm = () => {
    const navigate = useNavigate();
    const { collectionId } = useParams();
    const [gameData, setGameData] = useState([]);
    const [selectedCondition, setSelectedCondition] = useState("");
    const [conditions, setConditions] = useState([]);

    useEffect(() => {
        getGameCollectionById(collectionId)
        .then((response) => {
            setGameData(response);
            setSelectedCondition(response?.condition?.label)
        })
        
        getAllConditions()
        .then((response) => {
            setConditions(response); 
        })
        }, [collectionId]);

    const handleConditionChange = (e) => {
        setSelectedCondition(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updateGame = {
            condition: parseInt(selectedCondition, 10),
        };

        updateGameCollection(collectionId, updateGame)
            .then(() => {
                navigate(`/gamecollections/${collectionId}`);
            })
    };

    return (
        <div className="container">
            <section className="hero is-medium is-primary">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <img
                            src={gameData.game?.img}
                            alt={gameData.game?.title}
                            className="game-image is-large"
                        />
                        <h1 className="title is-1">Edit Game Collection</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="content">
                                <p className="subtitle">Title: {gameData.game?.title}</p>
                                <p>Description: {gameData.game?.description}</p>
                                <p>Release Date: {gameData.game?.releaseDate}</p>
                                <p>Publisher: {gameData.game?.publisher}</p>
                                <p>Developer: {gameData.game?.developer}</p>
                                <p>Modes: {gameData.game?.modes}</p>
                            </div>
                            <div className="field">
                                <label className="label">Condition:</label>
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
                                        Update Game Collection
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