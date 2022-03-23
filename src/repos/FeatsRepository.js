export default {
    get(id) {
        return fetch(`http://localhost:8000/feats/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            }
        })
            .then(response => response.json())
    },
    getAll() {
        return fetch(`http://localhost:8000/feats`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            }
        })
            .then(response => response.json())
    },
    create(feat){
        return fetch("http://localhost:8000/feats", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            },
            body: JSON.stringify(feat)
        })
            .then(response => response.json())
    },
    
    update(id, feat){
        return fetch(`http://localhost:8000/feats/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            },
            body: JSON.stringify(feat)
        })
    },

    delete(id){
        return fetch(`http://localhost:8000/feats/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            }
        })
    },
    learn(details){
        return fetch(`http://localhost:8000/feats/learn`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            },
            body: JSON.stringify(details)
        }).then(response => response.json())
    }
}