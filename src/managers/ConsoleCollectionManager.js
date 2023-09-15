export const getAllConsoleCollection = () => {
    return fetch(`http://localhost:8000/consolecollections`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    },
  }).then((res) => res.json());
}

export const getConsoleCollectionById = (id) => {
    return fetch(`http://localhost:8000/consolecollections/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    },
  }).then((res) => res.json());
}

export const getCurrentOwnerConsoleCollection = () => {
  return fetch(`http://localhost:8000/consolecollections?current`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": `Token ${localStorage.getItem("auth_token")}`
  },
}).then((res) => res.json());
}