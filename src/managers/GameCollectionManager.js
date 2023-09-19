export const getCurrentOwnerGameCollection = () => {
  return fetch(`http://localhost:8000/gamecollections?current`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    },
  }).then((res) => res.json());
}


export const getCurrentOwnerGameCollectionGameId = (ownerGameId) => {
  return fetch(`http://localhost:8000/gamecollections?game_id=${ownerGameId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    },
  }).then((res) => res.json());
}

export const addGameCollection = (newGameCollection) => {
  return fetch(`http://localhost:8000/gamecollections`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    },
    body: JSON.stringify(newGameCollection)
  }).then((res) => res.json());
}

export const updateGameCollection = (collectionId, updateGameCollection) => {
  return fetch(`http://localhost:8000/gamecollections/${collectionId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    },
    body: JSON.stringify(updateGameCollection)
  })
}

export const getGameCollectionById = (collectionId) => {
  return fetch(`http://localhost:8000/gamecollections/${collectionId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    },
  }).then((res) => res.json());
}

export const deleteGameCollectionById = (collectionId) => {
  return fetch(`http://localhost:8000/gamecollections/${collectionId}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem("auth_token")}`,
      },
  })
};