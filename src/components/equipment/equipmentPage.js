import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import EquipmentRepository from "../../repos/EquipmentRepository"
import "./equipment.css"

export const EquipmentPage = () => {
    const [equipment, setEquipment] = useState([])
    const [equipped, setEquipped] = useState([])
    const { characterId } = useParams()
    const sync = () => {
        EquipmentRepository.getEquipment().then(setEquipment)
        EquipmentRepository.getEquipped(characterId).then(setEquipped)
    }
    useEffect(() => sync(), [])
    const equipmentDetails = (eq) => {
        const details = []
        for (const prop in eq.equipment) {
            if (eq.equipment[prop] && prop !== "id") details.push(<div>{`${prop}:${eq.equipment[prop]}`}</div>)
        }
        return details
    }

    const equip = (slot, eq) => {
        const details = {
            equipmentId: eq,
            slot: slot
        }
        if (equipped.find(e => e.slot === slot)) {
            EquipmentRepository.unequip(equipped.find(e => e.slot === slot).id).then(
                EquipmentRepository.equip(characterId, details)).then(sync)
        }
        else {
            EquipmentRepository.equip(characterId, details).then(sync)
        }
    }
    const unequip = (slot) => {
        EquipmentRepository.unequip(equipped.find(e => e.slot === slot).id).then(sync)
    }
    const unequipAll = () => {
        EquipmentRepository.unequipAll(characterId).then(sync)
    }


    return <>
        <section className="equipment">
            <section className="weaponSelect">
                <h3>Weapons</h3>
                <div className="equipment">
                    <section>
                        Weapon 1:<br />
                        <select className="weaponSelect" onChange={evt => equip(1, evt.target.value)}>
                            <option value={null}></option>
                            {equipment.map(e => {
                                if (e.mediumDamage) {
                                    return <option value={e.id}>{e.name}</option>
                                }
                            })}
                        </select>
                        <button onClick={() => unequip(1)}>Unequip</button>
                        <div>Details:</div>
                        {equipped.find(e => e.slot === 1) ?
                            equipmentDetails(equipped.find(e => e.slot === 1))
                            : "nothing equipped"}
                    </section>
                    <section>Weapon 2:<br />
                        <select className="weaponSelect" onChange={evt => equip(2, evt.target.value)}>
                            <option value={null}></option>
                            {equipment.map(e => {
                                if (e.mediumDamage) {
                                    return <option value={e.id}>{e.name}</option>
                                }
                            })}
                        </select>
                        <button onClick={() => unequip(2)}>Unequip</button>
                        <div>Details:</div>
                        {equipped.find(e => e.slot === 2) ?
                            equipmentDetails(equipped.find(e => e.slot === 2))
                            : "nothing equipped"}
                    </section>
                    <section>Weapon 3:<br />
                        <select className="weaponSelect" onChange={evt => equip(3, evt.target.value)}>
                            <option value={null}></option>
                            {equipment.map(e => {
                                if (e.mediumDamage) {
                                    return <option value={e.id}>{e.name}</option>
                                }
                            })}
                        </select>
                        <button onClick={() => unequip(3)}>Unequip</button>
                        <div>Details:</div>
                        {equipped.find(e => e.slot === 3) ?
                            equipmentDetails(equipped.find(e => e.slot === 3))
                            : "nothing equipped"}
                    </section>
                </div>
            </section>
            <section className="armorSelect">
                <h3>Armor</h3>
                <div>
                    <section>Body Armor:<br />
                        <select className="armorSelect" onChange={evt => equip(98, evt.target.value)}>
                            <option value={null}></option>
                            {equipment.map(e => {
                                if (e.armorBonus) {
                                    return <option value={e.id}>{e.name}</option>
                                }
                            })}
                        </select>
                        <button onClick={() => unequip(98)}>Unequip</button>
                        <div>Details:</div>
                        {equipped.find(e => e.slot === 98) ?
                            equipmentDetails(equipped.find(e => e.slot === 98))
                            : "nothing equipped"}
                    </section>
                    <section>Shield:<br />
                        <select className="shieldSelect" onChange={evt => equip(99, evt.target.value)}>
                            <option value={null}></option>
                            {equipment.map(e => {
                                if (e.shieldBonus) {
                                    return <option value={e.id}>{e.name}</option>
                                }
                            })}
                        </select>
                        <button onClick={() => unequip(99)}>Unequip</button>
                        <div>Details:</div>
                        {equipped.find(e => e.slot === 99) ?
                            equipmentDetails(equipped.find(e => e.slot === 99))
                            : "nothing equipped"}</section>
                </div>
            </section>
            <button onClick={unequipAll}>Unequip Everything</button>
        </section>
    </>
}