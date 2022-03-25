import "./weapons.css"

export const Weapons = ({ character }) => {

    const calculateModifier = (ability) => {
        const abilityModifier = Math.floor((character[ability] - 10) / 2)
        return abilityModifier
    }
    const sumDetails = (stat) => {
        let count = 0
        character.level_set?.forEach(
            level => count += level.levelDetails?.[stat]
        )
        return count
    }

    const attackBonus = (weapon) => {
        let total = 0
        if (weapon.weaponType = "ranged") {
            total = sumDetails("BAB") + calculateModifier("dex")
        }
        else {
            total = sumDetails("BAB") + calculateModifier("str")
        }
        if (!(character.proficiencies.find(prof => prof.id === weapon.id))) {
            total = total - 4
        }
        if(total>=0) total = `+${total}`
        return total
    }


    return <div className="weapons">
        {character.equipment?.map(
            eq => {
                if (eq.equipment.mediumDamage)
                    return <div className="singleWeapon">
                        <div className="row1">
                        <div className="name">{eq.equipment.name}</div>
                        <div className="attackBonus">{`${attackBonus(eq.equipment)}`}</div>
                        <div className="damage">{eq.equipment.mediumDamage}</div>
                        </div>
                        <div className="row2">
                        <div className="range">{eq.equipment.range}</div>
                        <div className="weight">{`${eq.equipment.mediumWeight}`}</div>
                        <div className="type">{eq.equipment.damageType}</div>
                        <div className="size">M</div>
                        </div>
                    </div>
            }
        )}
    </div>
}