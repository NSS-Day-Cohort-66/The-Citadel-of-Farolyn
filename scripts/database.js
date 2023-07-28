const database = {

    schools: [
        {
            id:"1",
            name:"Abjuration",
            description:"This school is focused on protective spells, as well as spells which cancel or interfere with other spells, magical effects or supernatural abilities.",
            disclaimer:"Abjuration is intended for self-defense and may never be used to counter spells intended for medical therapy or domestic enhancement, or to dispel municipal wards or other enchantments for the public good."
        },
        {
            id:"2",
            name:"Conjuration",
            description:"This school is focused on instantaneous transportation, conjuring manifestations of creatures, energy or objects, and object creation.",
            disclaimer:"Conjuration is strictly forbidden within city limits, and teleportation spells are forbidden without a current license valid within the region of incantation."
        },
        {
            id:"3",
            name:"Divination",
            description:"This school is focused on acquiring and revealing information.",
            disclaimer:"Farsight into private dwellings is forbidden, and publication of prognosticated information is subject to statutes of divinatory libel."
        },
        {
            id:"4",
            name:"Enchantment",
            description:"This school is focused on affecting the minds of others including influencing or controlling their behavior.",
            disclaimer:"Enchantment is forbidden except for sanctioned duals in which all participants have agreed by sacred pact to their inclusion."
        },
        {
            id:"5",
            name:"Evocation",
            description:"This school pertains to creating matter and energy, called up out of nothing.",
            disclaimer:"All acts of evocation are subject to the laws of physical combat."
        },
        {
            id:"6",
            name:"Illusion",
            description:"This school involves the ability to change the appearance of something, by creating a phantasm.",
            disclaimer:"Illusions used to coerce or mislead are subject to the same statutes and penalties as other such skullduggery."
        },
        {
            id:"7",
            name:"Necromancy",
            description:"Necromancy spells involve death, undeath, and the manipulation of life energy.",
            disclaimer:"Raised corpses are subject to the same laws as elementals and familiars, and the summoner shall be liable for any damages incurred during the period of resurrection."
        },
        {
            id:"8",
            name:"Transmutation",
            description:"This school focuses on the ability to change matter. Spells in this school alter the properties of their targets.",
            disclaimer:"All transmutations must be consensual, and must be reversed upon request or per prior contractual specification."
        },
    ],

    types: [
        {
            id:"1",
            name: "Wizard",
            description: "Achieves a command of magic through study of texts and mastery of spells",
            greeting: "May the light of knowledge guide and fortify thee"
        },
        {
            id:"2",
            name: "Sorcerer",
            description: "Power is based on innate ability and cultivated through meditation and practice",
            greeting: "I honor your path, and your way."
        },
        {
            id:"3",
            name: "Warlock",
            description: "Draws power from affiliation to a deity, fortified by his/her faith therein",
            greeting: "As we beckon to that which beckons, so I beckon unto thee"
        },
        {
            id:"4",
            name: "Druid",
            description: "Magic is rooted in nature, and fluctuates based on setting and the favor of animist spirits",
            greeting: "May your roots be deep and your fruits be sweet"
        },
        {
            id:"5",
            name: "Bard",
            description: "Gains limited spellcasting ability by channeling creative energies, bolstered by muses",
            greeting: "Drain the tankard, for another awaits!"
        },
    ],    

    books: [
        {
            id: "1",
            name: 'The Tome of Disbalance',
            types: ["1","2","3"],
            schools: ["2","6","8"]
        },
        {
            id: "2",
            name: 'Bobbin\'s Guide to Manifestation',
            types: ["1","3","4","5"],
            schools: ["2","5"]
        },
        {
            id: "3",
            name: 'Spectral Fireworks and Raising the Dead',
            types: ["1","3"],
            schools: ["6","7"]
        },
        {
            id: "4",
            name: 'Telepathy: The Mind Within the Mind',
            types: ["1","2","3"],
            schools: ["3","4"]
        },
        {
            id: "5",
            name: 'Telekinesis for Dummies',
            types: ["1","2","3","5"],
            schools: ["2"]
        },
        {
            id: "6",
            name: 'The Elements and You',
            types: ["2","3","4"],
            schools: ["2","5","8"]
        },
        {
            id: "7",
            name: 'Mudruk\'s Field Guide to Fairy Circles',
            types: ["4"],
            schools: ["1","2","6"]
        },
        {
            id: "8",
            name: 'An Introduction to Summoning',
            types: ["1","2","3","4"],
            schools: ["2","4","5","6"]
        },
        {
            id: "8",
            name: 'From This To That: Transmutation made Easy',
            types: ["1"],
            schools: ["8"]
        },
        {
            id: "9",
            name: 'Creatures and their Applications',
            types: ["2","4"],
            schools: ["2","4"]
        },
        {
            id: "10",
            name: 'Wild Magic',
            types: ["2","3","4","5"],
            schools: ["3","5","8"]
        },
        {
            id: "11",
            name: 'Just Say No: Wards, Counters, and Disenchantment',
            types: ["1","3"],
            schools: ["1","4","6"]
        },
        {
            id: "12",
            name: 'Birdsong as Incantation',
            types: ["4","5"],
            schools: ["1","3","4"]
        },
        {
            id: "13",
            name: 'Ghostly Spirits and How to Raise Them',
            types: ["1","3"],
            schools: ["7"]
        },
    ],

}

export const getTypes = ()=> {
    return database.types.map( type => ({...type}) );
}

export const getSchools = ()=> {
    return database.schools.map( school => ({...school}) );
}

export const getBooks = ()=> {
    return database.books.map( book => ({...book}) );
}

export const getSchoolById = (id)=> {
    let schoolToOutput = {};
    database.schools.forEach( school => {
        if (school.id==id) schoolToOutput = school;
    })
    return schoolToOutput;
}
export const getTypeById = (id)=> {
    let typeToOutput = {};
    database.types.forEach( type => {
        if (type.id==id) typeToOutput = type;
    })
    return typeToOutput;
}