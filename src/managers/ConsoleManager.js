export const getAllConsoles = () => {
    return fetch(`http://localhost:8000/consoles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  }).then((res) => res.json());
}

export const getSingleConsole = (id) => {
    return fetch(`http://localhost:8000/console/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  }).then((res) => res.json());
}