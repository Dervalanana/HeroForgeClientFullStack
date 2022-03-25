import React, { useState, useEffect } from "react";
import CharacterRepository from "../../repos/CharacterRepository";
import ClassRepository from "../../repos/ClassRepository";
import EquipmentRepository from "../../repos/EquipmentRepository";
import SkillsRepository from "../../repos/SkillsRepository";

export const ProficientCreator = () => {
    const [equipment, setEquipment] = useState([])
    const [races, setRaces] = useState([])
    const [classes, setClasses] = useState([])
    const sync = () => {
        EquipmentRepository.getEquipment().then(setEquipment)
        CharacterRepository.getRaces().then(setRaces)
        ClassRepository.getAll().then(setClasses)
    }

    useEffect(() => { sync() }, [])
    const createProficiencies = () => {
        equipment.forEach(equip => {
            if (document.querySelector(`[name=equip--${equip.id}]`).checked) {
                const proficiency = {
                }
                proficiency.equipment = equip.id
                proficiency.race = document.querySelector("[name=race]").value
                proficiency.class = document.querySelector("[name=class]").value
                EquipmentRepository.addProficiency(proficiency)
            }})
            .then(sync)}
    



return <>
    <h1>1</h1>
    <h1>1</h1>
    <select name="race">
        <option value={0}></option>
        {races.map(race => <option value={race.id}>{race.name}</option>)}
    </select>
    <select name="class">
        <option value={0}></option>
        {classes.map(classs => <option value={classs.id}>{classs.name}</option>)}
    </select>

    {equipment.map(equip => {
        return <div>
            {equip.name}<input name={`equip--${equip.id}`} type="checkbox" />
        </div>
    })}
    <button onClick={createProficiencies}>Submit</button>
</>
}