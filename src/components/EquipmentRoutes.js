import React from "react"
import { Route } from "react-router-dom"
import { EquipmentGenerator } from "./equipment/equipmentCreator"
import { EquipmentPage } from "./equipment/equipmentPage"
import { ProficientCreator } from "./equipment/proficientList"


export const EquipmentRoutes = () => {
    return <>
        <Route exact path="/:characterId(\d+)/equipment">
            <EquipmentPage />
        </Route>
        <Route exact path="/createEquipment">
            <EquipmentGenerator />
        </Route>
        <Route exact path="/createProficiencies">
            <ProficientCreator />
        </Route>
    </>
}