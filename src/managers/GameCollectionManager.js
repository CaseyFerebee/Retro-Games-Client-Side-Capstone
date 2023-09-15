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