export default {
    getAll(){
        return fetch("http://localhost:8000/classes", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            }
        })
            .then(response => response.json())
    },
    get(id){
        return fetch(`http://localhost:8000/classes/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            }
        })
            .then(response => response.json())
    },

    create(character){
        return fetch("http://localhost:8000/classes", {
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
        return fetch(`http://localhost:8000/classes/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            },
            body: JSON.stringify(character)
        })
    },

    delete(id){
        return fetch(`http://localhost:8000/classes${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            }
        })
    },

    updateClassSkills(id, skills){
        return fetch(`http://localhost:8000/classes/${id}/update_class_skills`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            },
            body: JSON.stringify(skills)
        })
    }
}