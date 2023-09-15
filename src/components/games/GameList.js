import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { getAllGames } from "../../managers/GameManager"


export const GameList = () => {

  const [games, setGames] = useState([])


  useEffect(
    () => {
      getAllGames().then((gamesData) => setGames(gamesData))
    },
    []
  )

  return (
    <div className="container">
      <h1 className="game-title">Games</h1>
      <article className="">
        {games.map(
          (gameObject) => {
            return <div className="game" key={gameObject.id}  >
              <div className="title"><Link to={`/games/${gameObject.id}`} key={gameObject.id}>{gameObject.title}</Link></div>
              <section className="" >
                <img src={gameObject.img} alt={gameObject.title} />
                <div>{gameObject.deveopler}</div>
              </section>
            </div>
          })}
      </article >
    </div >
  )
}

