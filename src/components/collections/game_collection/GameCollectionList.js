import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { getCurrentOwnerGameCollection } from "../../../managers/GameCollectionManager"

export const GameCollectionList = () => {

    const [gameCollections, setGameCollections] = useState([])


    useEffect(
        () => {
            getCurrentOwnerGameCollection().then((gameData) => setGameCollections(gameData))
        },
        []
    )

    return (
        <div className="container">
            <h1 className="game-collection-title">game Collection</h1>
            <article className="">
                {gameCollections.map(
                    (gameObject) => {
                        return <div className="game" key={gameObject.id}  >
                            <div className="title"><Link to={`/games/${gameObject?.game?.id}`} key={gameObject.id}>{gameObject?.game?.title}</Link></div>
                            <section className="" >
                                <img src={gameObject?.game?.img} alt={gameObject?.game?.name} />
                            </section>
                        </div>
                    })}
            </article >
        </div >
    )
}

