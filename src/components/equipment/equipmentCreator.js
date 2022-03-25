import React, { useState, useEffect } from "react";
import EquipmentRepository from "../../repos/EquipmentRepository";

export const EquipmentGenerator = () => {
    const [equipment, setEquipment] = useState([])
    const sync = () => EquipmentRepository.getEquipment().then(setEquipment)

    useEffect(() => { sync() }, [])

    const createEquipment = () => {
        const equip = {}
        for(const prop in equipment[0]){
            if(prop!=="id") equip[prop] = document.querySelector(`[name=${prop}]`).value
        }
        EquipmentRepository.createEquipment(equip).then(sync)
    }


    return <>
        <h1>1</h1>
        <h1>1</h1>
        {equipment.map(equipment => {
            if (equipment.id === 1) {
                const inputHolder = []
                for (const prop in equipment) {
                    if (prop !== "id") {
                        inputHolder.push(<div>
                            {`${prop}:`} <input name={prop} />
                        </div>)
                    }
                }
                return inputHolder
            }
        })}
        <button onClick={createEquipment}>Create</button>
        {equipment.map(equipment=><div>{`${equipment.id}:${equipment.name}`}</div>)}
    </>
}