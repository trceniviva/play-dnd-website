let player = {
    race: {
        race: '',
        subrace: ''
    },
    class: {
        first: '',
        firstLevels: 0,
        firstSub: '',
        second: '',
        secondLevels: 0,
        secondSub: ''
    },
    background: '',
    languages: []
}

const selectedRace = document.getElementById("race-dropdown");
const selectSubrace = document.getElementById("subrace-dropdown");
// let subraceOptions = [];
let levelsAvailable = 20;
let abilityModsAvailable = 0;
let countLanguagesAvailable = 0;
let languagesAvailable = [];
let allLanguages = ['Abyssal', 'Celestial', 'Common', 'Daelkyr', 'DeepSpeech', 'Draconic', 'Dwarvish', 'Elvish', 'Giant', 'Gith', 'Gnomish', 'Goblin', 'Halfling', 'Infernal', 'Kraul', 'Leonin', 'Loxodon', 'Marquesian', 'Minotaur', 'Naush', 'Orc', 'Primordial', 'Quori', 'Riedran', 'Sylvan', 'Undercommon', 'Vedalken', 'Zemnian']

let raceData = [
    {
        race: "Elf",
        subraces: ["Dark", "Eladrin", "High", "Wood"],
        languages: ["Common", "Elvish"],
        countLangAdd: 1,
        str: 0,
        dex: 2,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        countAbilityAdd: 0,
        abilityAddAllowed: [],
        abilityAddRule: "",
        speed: 30,
        darkvision: true,
        skills: ["Perception"],
        countSkillsAdd: 0,
        skillsOptions: []
    },
    {
        race: "Dwarf",
        subraces: ["Hill", "Mountain"],
        languages: ["Common", "Dwarvish"],
        countLangAdd: 0,
        str: 0,
        dex: 0,
        con: 2,
        int: 0,
        wis: 0,
        cha: 0,
        countAbilityAdd: 0,
        abilityAddAllowed: [],
        abilityAddRule: "",
        speed: 25,
        darkvision: true,
        skills: [],
        countSkillsAdd: 0,
        skillsOptions: []
    },
    {
        race: "Genasi",
        subraces: ["Air", "Earth", "Fire", "Water"],
        languages: ["Common", "Primordial"],
        countLangAdd: 0,
        str: 0,
        dex: 0,
        con: 2,
        int: 0,
        wis: 0,
        cha: 0,
        countAbilityAdd: 0,
        abilityAddAllowed: [],
        abilityAddRule: "",
        speed: 30,
        darkvision: false,
        skills: [],
        countSkillsAdd: 0,
        skillsOptions: []
    },
    {
        race: "Dragonborn",
        subraces: [],
        languages: ["Common", "Draconic"],
        countLangAdd: 0,
        str: 2,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 1,
        countAbilityAdd: 0,
        abilityAddAllowed: [],
        abilityAddRule: "",
        speed: 30,
        darkvision: false,
        skills: [],
        countSkillsAdd: 0,
        skillsOptions: []
    },
    {
        race: "Changeling",
        subraces: [],
        languages: ["Common"],
        countLangAdd: 2,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 2,
        countAbilityAdd: 1,
        abilityAddAllowed: ["str","dex","con","int","wis","cha"],
        abilityAddRule: "",
        speed: 30,
        darkvision: false,
        skills: [],
        countSkillsAdd: 2,
        skillsOptions: ["Deception","Insight","Intimidation","Persuasion"]
    },
    {
        race: "Gnome",
        subraces: ["Forest","Rock"],
        languages: ["Common","Gnomish"],
        countLangAdd: 0,
        str: 0,
        dex: 0,
        con: 0,
        int: 2,
        wis: 0,
        cha: 0,
        countAbilityAdd: 0,
        abilityAddAllowed: [],
        abilityAddRule: "",
        speed: 25,
        darkvision: true,
        skills: [],
        countSkillsAdd: 0,
        skillsOptions: []
    },
    {
        race: "Goliath",
        subraces: [],
        languages: ["Common","Giant"],
        countLangAdd: 0,
        str: 2,
        dex: 0,
        con: 1,
        int: 0,
        wis: 0,
        cha: 0,
        countAbilityAdd: 0,
        abilityAddAllowed: [],
        abilityAddRule: "",
        speed: 30,
        darkvision: false,
        skills: ["Athletics"],
        countSkillsAdd: 0,
        skillsOptions: []
    },
    {
        race: "Half-elf",
        subraces: [],
        languages: ["Common","Elvish"],
        countLangAdd: 1,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 2,
        countAbilityAdd: 2,
        abilityAddAllowed: ["str","dex","con","int","wis"],
        abilityAddRule: "oneEach",
        speed: 30,
        darkvision: true,
        skills: [],
        countSkillsAdd: 2,
        skillsOptions: ['Acrobatics','Animal Handling','Arcana','Athletics',
        'Deception','History','Insight','Intimidation','Investigation',
        'Medicine','Nature','Perception','Performance','Persuasion',
        'Religion','Sleight of Hand','Stealth','Survival']
    },
    {
        race: "Half-orc",
        subraces: [],
        languages: ["Common","Orc"],
        countLangAdd: 0,
        str: 2,
        dex: 0,
        con: 1,
        int: 0,
        wis: 0,
        cha: 0,
        countAbilityAdd: 0,
        abilityAddAllowed: [],
        abilityAddRule: "",
        speed: 30,
        darkvision: true,
        skills: ["Intimidation"],
        countSkillsAdd: 0,
        skillsOptions: []
    },
    {
        race: "Halfling",
        subraces: ["Lightfoot","Stout"],
        languages: ["Common","Halfling"],
        countLangAdd: 0,
        str: 0,
        dex: 2,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        countAbilityAdd: 0,
        abilityAddAllowed: [],
        abilityAddRule: "",
        speed: 25,
        darkvision: false,
        skills: [],
        countSkillsAdd: 0,
        skillsOptions: []
    },
    {
        race: "Human",
        subraces: [],
        languages: ["Common"],
        countLangAdd: 1,
        str: 1,
        dex: 1,
        con: 1,
        int: 1,
        wis: 1,
        cha: 1,
        countAbilityAdd: 0,
        abilityAddAllowed: [],
        abilityAddRule: "",
        speed: 30,
        darkvision: false,
        skills: [],
        countSkillsAdd: 0,
        skillsOptions: []
    }
]

function showSubraceOptions(race) {
    var subraceOptions = [];
    selectSubrace.innerHTML = '';

    for (i = 0; i < raceData.length; i++) {
        if (raceData[i].race === race) {
            subraceOptions = raceData[i].subraces
        }
    }
    if (subraceOptions.length > 0) {
        for (i = 0; i < subraceOptions.length; i++) {
            var subraceOption = document.createElement("option");
            subraceOption.innerHTML = subraceOptions[i];
            selectSubrace.append(subraceOption);
        }
    }
}

function raceLanguages(race) {
    if (race != "Kenku") {
        player.languages.push("Common");
        languagesAvailable = [];
    }
    if (twoLangRaces.includes(race)) {
        countLanguagesAvailable += 2;
    }
}