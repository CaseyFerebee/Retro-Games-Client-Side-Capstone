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

export const getControllerCollectionById = (collectionId) => {
    return fetch(`http://localhost:8000/controllercollections/${collectionId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
    }).then((res) => res.json());
}

export const deleteControllerCollectionById = (collectionId) => {
    return fetch(`http://localhost:8000/controllercollections/${collectionId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
        },
    })
};

export const addControllerCollection = (newControllerCollection) => {
    return fetch(`http://localhost:8000/controllercollections`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(newControllerCollection)
    }).then((res) => res.json());
}

export const updateControllerCollection = (collectionId, updateControllerCollection) => {
    return fetch(`http://localhost:8000/controllercollections/${collectionId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(updateControllerCollection)
    })
}