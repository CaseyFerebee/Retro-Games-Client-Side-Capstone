import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteGameCollectionById, getGameCollectionById } from "../../../managers/GameCollectionManager";


export const GameCollectionDetails = () => {
    const [collectionGame, setCollectionGame] = useState([]);
    const { collectionId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getGameCollectionById(collectionId).then(setCollectionGame);
    }, [collectionId]);

    const handleDelete = () => {
        deleteGameCollectionById(collectionId)
            .then(() => {
                navigate(`/gamecollections`);
            })
    }

    return (
        <div>
            <section className="game">
                <img src={collectionGame?.game?.img} alt={collectionGame?.game?.title} />
                <h3 className="game__title">{collectionGame?.game?.title}</h3>
                <div className="game__skill-level">{collectionGame?.game?.description}</div>
                <div className="game__players-needed">{collectionGame?.game?.releaseDate}</div>
                <div className="game__creator">{collectionGame?.game?.publisher}</div>
                <div className="game__type">{collectionGame?.game?.developer}</div>
                <div className="game__type">{collectionGame?.game?.modes}</div>
                <div className="game__type">{collectionGame?.condition?.label}</div>
            </section>
            <button onClick={() => { navigate(`/gamecollections/${collectionId}/edit`); }}>Edit</button>
            <button onClick={() => {handleDelete()}}>Delete</button>

        </div>
    );
};


