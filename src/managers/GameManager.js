export const getAllGames = () => {
    return fetch(`http://localhost:8000/games`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    },
  }).then((res) => res.json());
}

export const getSingleGame = (gameId) => {
    return fetch(`http://localhost:8000/games/${gameId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    },
  }).then((res) => res.json());
}