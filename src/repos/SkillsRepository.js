export default {
    getAll(){
        return fetch("http://localhost:8000/skills", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            }
        })
            .then(response => response.json())
    },
    get(id){
        return fetch(`http://localhost:8000/skills/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            }
        })
            .then(response => response.json())
    },

    create(skill){
        return fetch("http://localhost:8000/skills", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            },
            body: JSON.stringify(skill)
        })
            .then(response => response.json())
    },
    
    update(id, skill){
        return fetch(`http://localhost:8000/skills/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            },
            body: JSON.stringify(skill)
        })
    },

    delete(id){
        return fetch(`http://localhost:8000/skills${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            }
        })
    },

    updateClassSkills(id, skills){
        return fetch(`http://localhost:8000/skills/${id}/update_class_skills`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            },
            body: JSON.stringify(skills)
        }).then(response => response.json())
    },

    spendPoints(id, points){
        return fetch(`http://localhost:8000/skills/${id}/spendpoints`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            },
            body: JSON.stringify(points)
        }) 
    }
}