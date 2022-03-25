import "./armor.css"

export const Armor = ({ character }) => {

    


    return <div className="armorShieldInfo">
        {character.equipment?.map(
            eq => {
                if (eq.equipment.armorBonus)
                    return <div className="armorInfo">
                        <div className="row1">
                        <div className="armorName">{eq.equipment.name}</div>
                        <div className="armorType">{eq.equipment.armorType}</div>
                        <div className="armorBonus">{`+${eq.equipment.armorBonus}`}</div>
                        <div className="maxDex">{`+${eq.equipment.maxDex}`}</div>
                        </div>
                        <div className="row2">
                        <div className="ACP">{`-${eq.equipment.ACP}`}</div>
                        <div className="ASF">{`${eq.equipment.ASF}%`}</div>
                        <div className="armorWeight">{eq.equipment.mediumWeight}</div>
                        </div>
                    </div>
                else if(eq.equipment.shieldBonus)
                    return <div className="shieldInfo">
                    <div className="row1">
                    <div className="shieldName">{eq.equipment.name}</div>
                    <div className="shieldBonus">{`+${eq.equipment.shieldBonus}`}</div>
                    <div className="shieldACP">{`-${eq.equipment.ACP}`}</div>
                    <div className="shieldASF">{`${eq.equipment.ASF}%`}</div>
                    </div>
                    <div className="row2">
                    <div className="shieldWeight">{`${eq.equipment.mediumWeight}`}</div>
                    </div>
                </div>
            }
        )}
    </div>
}