export default {
    getEquipment(){
        return fetch("http://localhost:8000/equipment", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            }
        })
            .then(response => response.json())
    },
    getEquipped(id){//id is for character
        return fetch(`http://localhost:8000/equipment/${id}/equipped`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            }
        })
            .then(response => response.json())
    },

    createEquipment(equipment){
        return fetch("http://localhost:8000/equipment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            },
            body: JSON.stringify(equipment)
        })
            .then(response => response.json())
    },
    
    updateEquipment(id, equipment){//id is for individual equipment
        return fetch(`http://localhost:8000/equipment/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            },
            body: JSON.stringify(equipment)
        })
    },

    delete(id){
        return fetch(`http://localhost:8000/equipment/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            }
        })
    },
    equip(id, equipment){//id is for character
        return fetch(`http://localhost:8000/equipment/${id}/equip`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            },
            body: JSON.stringify(equipment)
        })
    },
    unequip(id){//id is for individual equipped entry
        return fetch(`http://localhost:8000/equipment/${id}/unequip`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            }
        })
    },
    unequipAll(id){//id is for character
        return fetch(`http://localhost:8000/equipment/${id}/unequip_all`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("hero_token")}`
            }
        })
    },
    addProficiency(details){
        return fetch("http://localhost:8000/equipment/add_race_class_feat_proficiency", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("hero_token")}`
        },
        body: JSON.stringify(details)
    })
        .then(response => response.json())
        
    }
}