export const getCurrentOwnerControllerCollection = () => {
    return fetch(`http://localhost:8000/controllercollections?current`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
    }).then((res) => res.json());
}