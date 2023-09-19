import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getGameCollectionById, updateGameCollection } from "../../../managers/GameCollectionManager";
import { getAllConditions } from "../../../managers/ConditionManager";

export const GameCollectionUpdateForm = () => {
    const navigate = useNavigate();
    const { collectionId } = useParams()
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
        <div>
                <div key={gameData.id}>
                    <h1>Edit Game Collection</h1>
                    <form onSubmit={handleSubmit}>
                        <img src={gameData.game?.img} alt={gameData.game?.title} />
                        <p>Title: {gameData.game?.title}</p>
                        <p>Description: {gameData.game?.description}</p>
                        <p>Release Date: {gameData.game?.releaseDate}</p>
                        <p>Publisher: {gameData.game?.publisher}</p>
                        <p>Developer: {gameData.game?.developer}</p>
                        <p>Modes: {gameData.game?.modes}</p>
                        <label>
                            Condition:
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
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
        </div>
    );
};
