export default {
    getAll(){
        return fetch("http://localhost:8000/characters", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            }
        })
            .then(response => response.json())
    },
    get(id){
        return fetch(`http://localhost:8000/characters/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            }
        })
            .then(response => response.json())
    },

    create(character){
        return fetch("http://localhost:8000/characters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            },
            body: JSON.stringify(character)
        })
            .then(response => response.json())
    },
    
    update(id, character){
        return fetch(`http://localhost:8000/characters/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            },
            body: JSON.stringify(character)
        })
    },

    delete(id){
        return fetch(`http://localhost:8000/characters/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            }
        })
    },
    getRaces(){
        return fetch(`http://localhost:8000/races`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            }
        }) .then(response => response.json())
    }
}