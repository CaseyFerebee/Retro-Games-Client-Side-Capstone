import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import { getCurrentOwnerGameCollectionGameId } from "../../../managers/GameCollectionManager";


export const GameCollectionDetails = () => {
    const [ownerGame, setOwnerGame] = useState([]);
    const { ownerGameId } = useParams();

    useEffect(() => {
        getCurrentOwnerGameCollectionGameId(ownerGameId).then(setOwnerGame);
    }, [ownerGameId]);


    return (
        <div>
            {ownerGame.map((item) => (
                <section className="game" key={item.id}>
                    <img src={item?.game.img} alt={item?.game.title} />
                    <h3 className="game__title">{item?.game.title}</h3>
                    <div className="game__skill-level">{item?.game.description}</div>
                    <div className="game__players-needed">{item?.game.releaseDate}</div>
                    <div className="game__creator">{item?.game.publisher}</div>
                    <div className="game__type">{item?.game.developer}</div>
                    <div className="game__type">{item?.game.modes}</div>
                    <div className="game__type">{item?.condition?.label}</div>

                </section>
            ))}
        </div>
    );

};
