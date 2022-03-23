export default {
    getAll(id) {
        return fetch(`http://localhost:8000/levels/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            },
        })
            .then(response => response.json())
    },
    create(level){
        return fetch("http://localhost:8000/levels", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            },
            body: JSON.stringify(level)
        })
            .then(response => response.json())
    },
    
    update(id, level){
        return fetch(`http://localhost:8000/levels/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            },
            body: JSON.stringify(level)
        })
    },
    delete(id){
        return fetch(`http://localhost:8000/levels/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            }
        })
    },
    changeClass(id, details){
        return fetch(`http://localhost:8000/levels/${id}/change_class`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            },
            body: JSON.stringify(details)
        })
    }
}