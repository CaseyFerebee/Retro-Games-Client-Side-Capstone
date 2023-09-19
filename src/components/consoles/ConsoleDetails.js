import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleConsole } from "../../managers/ConsoleManager";


export const ConsoleDetails = () => {
    const [console, setConsole] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getSingleConsole(id).then(setConsole);
    }, [id]);

    const handleAddToCollection = () => {
        navigate("/consolecollections/create", { state: { id: id } });
    };

    return (
    <div>
        <section className="consoles">
            <img src={console.img} alt={console.name} />
            <h3 className="console__name">{console.name}</h3>
            <div className="console__releaseDate">{console.releaseDate}</div>
            <div className="console__description">{console.description}</div>
        </section>
        <button className="add-game-button" onClick={handleAddToCollection}>
                Add Console to Collection
            </button>

    </div>
        
    );
};
