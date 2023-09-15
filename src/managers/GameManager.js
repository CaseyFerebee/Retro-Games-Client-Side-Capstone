export const getAllGames = () => {
    return fetch(`http://localhost:8000/games`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  }).then((res) => res.json());
}

export const getSingleGame = (id) => {
    return fetch(`http://localhost:8000/game/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  }).then((res) => res.json());
}