export const getAllControllers = () => {
    return fetch(`http://localhost:8000/controllers`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  }).then((res) => res.json());
}

export const getSingleController = (id) => {
    return fetch(`http://localhost:8000/controller/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  }).then((res) => res.json());
}