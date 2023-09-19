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
        getSingleGame(gameId)
        .then((response) => {
            setGameData(response);
        })
        
        getAllConditions()
        .then((response) => {
            setConditions(response); 
        })
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

        addGameCollection(createGameCollection)
            .then(() => {
                navigate(`/gamecollections`);
            })
    };

    return (
        <div>
            <h1>Edit Game Collection</h1>
            <form onSubmit={handleSubmit}>
            <img src={gameData.img} alt={gameData.title} />
                <p>Title: {gameData.title}</p>
                <p>Title: {gameData.description}</p>
                <p>Title: {gameData.releaseDate}</p>
                <p>Title: {gameData.publisher}</p>
                <p>Title: {gameData.developer}</p>
                <p>Title: {gameData.modes}</p>
                <p>Title: {gameData.genre?.label}</p>
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
    );
};
