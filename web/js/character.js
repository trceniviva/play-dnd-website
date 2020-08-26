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
const selectedBackground = document.getElementById("background-dropdown");
const selectSubrace = document.getElementById("subrace-dropdown");
const selectClass = document.getElementById("first-class-dropdown");

let levelsAvailable = 20;
let abilityModsAvailable = 0;
let countLanguagesAvailable = 0;
let languagesAvailable = [];
let allLanguages = ['Abyssal', 'Celestial', 'Common', 'Daelkyr', 'DeepSpeech', 'Draconic', 'Dwarvish', 'Elvish', 'Giant', 'Gith', 'Gnomish', 'Goblin', 'Halfling', 'Infernal', 'Kraul', 'Leonin', 'Loxodon', 'Marquesian', 'Minotaur', 'Naush', 'Orc', 'Primordial', 'Quori', 'Riedran', 'Sylvan', 'Undercommon', 'Vedalken', 'Zemnian']

var playerRace = {race: "",subraces: [],languages: [],countLangAdd: 0,str: 0,dex: 0,con: 0,int: 0,wis: 0,cha: 0,countAbilityAdd: 0,abilityAddAllowed: [],abilityAddRule: "",speed: 0,darkvision: false,skills: [],countSkillsAdd: 0,skillsOptions: []}
var playerSubrace;
var playerClass = { class: "", armor: [], weapons: [], tools: [], countToolsAdd: -1, toolOptions: [], skills: [], countSkillsAdd: -1, skillsOptions: [] };
var playerBackground = { background: "", skills: [], countSkillsAdd: 0, skillsOptions: [], languages: [], countLangAdd: 0, tools: [], countToolsAdd: 0, toolOptions: []}

let raceData = [
    {
        race: "Elf",
        subraces: ["Dark", "Eladrin", "High", "Wood"],
        languages: ["common", "elvish"],
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
        languages: ["common", "dwarvish"],
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
        languages: ["common", "primordial"],
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
        languages: ["common", "draconic"],
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
        languages: ["common"],
        countLangAdd: 2,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 2,
        countAbilityAdd: 1,
        abilityAddAllowed: ["str", "dex", "con", "int", "wis", "cha"],
        abilityAddRule: "",
        speed: 30,
        darkvision: false,
        skills: [],
        countSkillsAdd: 2,
        skillsOptions: ["deception", "insight", "intimidation", "persuasion"]
    },
    {
        race: "Gnome",
        subraces: ["Forest", "Rock"],
        languages: ["common", "gnomish"],
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
        languages: ["common", "giant"],
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
        languages: ["common", "elvish"],
        countLangAdd: 1,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 2,
        countAbilityAdd: 2,
        abilityAddAllowed: ["str", "dex", "con", "int", "wis"],
        abilityAddRule: "oneEach",
        speed: 30,
        darkvision: true,
        skills: [],
        countSkillsAdd: 2,
        skillsOptions: ['Acrobatics', 'AnimalHandling', 'Arcana', 'Athletics',
            'Deception', 'History', 'Insight', 'Intimidation', 'Investigation',
            'Medicine', 'Nature', 'Perception', 'Performance', 'Persuasion',
            'Religion', 'SleightofHand', 'Stealth', 'Survival']
    },
    {
        race: "Half-orc",
        subraces: [],
        languages: ["common", "orc"],
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
        subraces: ["Lightfoot", "Stout"],
        languages: ["common", "halfling"],
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
        languages: ["common"],
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
    },
    {
        race: "Kenku",
        subraces: [],
        languages: [],
        countLangAdd: -99,
        str: 0,
        dex: 2,
        con: 0,
        int: 0,
        wis: 1,
        cha: 0,
        countAbilityAdd: 0,
        abilityAddAllowed: [],
        abilityAddRule: "",
        speed: 30,
        darkvision: false,
        skills: [],
        countSkillsAdd: 2,
        skillsOptions: ["acrobatics", "deception", "stealth", "sleightofhand"]
    },
    {
        race: "Tabaxi",
        subraces: [],
        languages: ["common"],
        countLangAdd: 1,
        str: 0,
        dex: 2,
        con: 0,
        int: 0,
        wis: 0,
        cha: 1,
        countAbilityAdd: 0,
        abilityAddAllowed: [],
        abilityAddRule: "",
        speed: 30,
        darkvision: true,
        skills: ["perception", "stealth"],
        countSkillsAdd: 0,
        skillsOptions: []
    },
    {
        race: "Tiefling",
        subraces: [],
        languages: ["common", "infernal"],
        countLangAdd: 1,
        str: 0,
        dex: 0,
        con: 0,
        int: 1,
        wis: 0,
        cha: 2,
        countAbilityAdd: 0,
        abilityAddAllowed: [],
        abilityAddRule: "",
        speed: 30,
        darkvision: true,
        skills: [],
        countSkillsAdd: 0,
        skillsOptions: []
    },
    {
        race: "Tortle",
        subraces: [],
        languages: ["common", "aquan"],
        countLangAdd: 0,
        str: 2,
        dex: 0,
        con: 0,
        int: 0,
        wis: 1,
        cha: 0,
        countAbilityAdd: 0,
        abilityAddAllowed: [],
        abilityAddRule: "",
        speed: 30,
        darkvision: false,
        skills: ["Survival"],
        countSkillsAdd: 0,
        skillsOptions: []
    },
    {
        race: "Warforged",
        subraces: [],
        languages: ["common"],
        countLangAdd: 0,
        str: 0,
        dex: 0,
        con: 2,
        int: 0,
        wis: 0,
        cha: 0,
        countAbilityAdd: 1,
        abilityAddAllowed: ["str", "dex", "int", "wis", "cha"],
        abilityAddRule: "",
        speed: 30,
        darkvision: false,
        skills: [],
        countSkillsAdd: 1,
        skillsOptions: ['Acrobatics', 'AnimalHandling', 'Arcana', 'Athletics',
            'Deception', 'History', 'Insight', 'Intimidation', 'Investigation',
            'Medicine', 'Nature', 'Perception', 'Performance', 'Persuasion',
            'Religion', 'SleightofHand', 'Stealth', 'Survival']
    }
]

let subraceData = [
    {
        subrace: "Dark",
        parentRace: "Elf",
        languages: [],
        countLangAdd: 0,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 1,
        speed: 0,
    },
    {
        subrace: "Eladrin",
        parentRace: "Elf",
        languages: [],
        countLangAdd: 0,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 1,
        speed: 0,
    },
    {
        subrace: "High",
        parentRace: "Elf",
        languages: [],
        countLangAdd: 1,
        str: 0,
        dex: 0,
        con: 0,
        int: 1,
        wis: 0,
        cha: 0,
        speed: 0,
    },
    {
        subrace: "Wood",
        parentRace: "Elf",
        languages: [],
        countLangAdd: 0,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 1,
        cha: 0,
        speed: 5,
    },
    {
        subrace: "Hill",
        parentRace: "Dwarf",
        languages: [],
        countLangAdd: 0,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 1,
        cha: 0,
        speed: 0,
    },
    {
        subrace: "Mountain",
        parentRace: "Dwarf",
        languages: [],
        countLangAdd: 0,
        str: 2,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        speed: 0,
    },

    {
        subrace: "Air",
        parentRace: "Genasi",
        languages: [],
        countLangAdd: 0,
        str: 0,
        dex: 1,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        speed: 0,
    },
    {
        subrace: "Earth",
        parentRace: "Genasi",
        languages: [],
        countLangAdd: 0,
        str: 1,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        speed: 0,
    },
    {
        subrace: "Fire",
        parentRace: "Genasi",
        languages: [],
        countLangAdd: 0,
        str: 0,
        dex: 0,
        con: 0,
        int: 1,
        wis: 0,
        cha: 0,
        speed: 0,
    },
    {
        subrace: "Water",
        parentRace: "Genasi",
        languages: [],
        countLangAdd: 0,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 1,
        cha: 0,
        speed: 0,
    },
    {
        subrace: "Forest",
        parentRace: "Gnome",
        languages: [],
        countLangAdd: 0,
        str: 0,
        dex: 1,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        speed: 0,
    },
    {
        subrace: "Rock",
        parentRace: "Gnome",
        languages: [],
        countLangAdd: 0,
        str: 0,
        dex: 0,
        con: 1,
        int: 0,
        wis: 0,
        cha: 0,
        speed: 0,
    },
    {
        subrace: "Lightfoot",
        parentRace: "Halfling",
        languages: [],
        countLangAdd: 0,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 1,
        speed: 0,
    },
    {
        subrace: "Stout",
        parentRace: "Halfling",
        languages: [],
        countLangAdd: 0,
        str: 0,
        dex: 0,
        con: 1,
        int: 0,
        wis: 0,
        cha: 0,
        speed: 0,
    }
]

let backgroundData = [
    {
        background: "Acolyte",
        skills: ["Insight", "Religion"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 2,
        tools: [],
        countToolsAdd: 1,
        toolOptions: ["Cartographer's Tools", "Navigator's Tools"]
    }, {
        background: "Anthropologist",
        skills: ["Insight", "Religion"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 2,
        tools: [],
        countToolsAdd: 0,
        toolOptions: []
    }, {
        background: "Archeologist",
        skills: ["History", "Survival"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 1,
        tools: [],
        countToolsAdd: 0,
        toolOptions: ["Cartographer's Tools", "Navigator's Tools"]
    }, {
        background: "Athlete",
        skills: ["Acrobatics", "Athletics"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 1,
        tools: ["Land Vehicles"],
        countToolsAdd: 0,
        toolOptions: []
    }, {
        background: "Charlatan",
        skills: ["Deception", "Sleight of Hand"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 0,
        tools: ["Disguise Kit", "Forgery Kit"],
        countToolsAdd: 0,
        toolOptions: []
    }, {
        background: "City Watch/Investigator",
        skills: ["Athletics", "Insight"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 2,
        tools: [],
        countToolsAdd: 0,
        toolOptions: []
    }, {
        background: "Clan Crafter",
        skills: ["History", "Insight"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 1,
        tools: [],
        countToolsAdd: 1,
        toolOptions: ["Alchemist's Supplies",
            "Brewer's Supplies",
            "Calligrapher's Supplies",
            "Carpenter's Tools",
            "Cartographer's Tools",
            "Cobbler's Tools",
            "Cook's Utensils",
            "Glassblower's Tools",
            "Jeweler's Tools",
            "Leatherworker's Tools",
            "Mason's Tools",
            "Painter's Supplies",
            "Potter's Tools",
            "Smith's Tools",
            "Tinker's Tools",
            "Weaver's Tools",
            "Woodcarver's Tools"]
    }, {
        background: "Cloistered Scholar",
        skills: ["History"],
        countSkillsAdd: 1,
        skillsOptions: ["Arcana","Nature","Religion"],
        languages: [],
        countLangAdd: 2,
        tools: [],
        countToolsAdd: 0,
        toolOptions: []
    }, {
        background: "Courtier",
        skills: ["Insight","Persuasion"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 2,
        tools: [],
        countToolsAdd: 0,
        toolOptions: []
    }, {
        background: "Criminal/Spy",
        skills: ["Deception","Stealth"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 0,
        tools: ["Thieves' Tools"],
        countToolsAdd: 1,
        toolOptions: ["Dragonchess Set","Playing Card Set","Three-Dragon Ante Set"]
    }, {
        background: "Entertainer",
        skills: ["Acrobatics","Performance"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 0,
        tools: ["Disguise Kit"],
        countToolsAdd: 1,
        toolOptions: ["Bagpipes","Drum","Dulcimer","Flute","Horn","Lute","Lyre","Pan Flute","Shawm","Viol"]
    }, {
        background: "Faction Agent",
        skills: ["Insight"],
        countSkillsAdd: 1,
        skillsOptions: ["Animal Handling","Arcana", "Deception", "History", "Intimidation","Investigation",
            "Medicine","Nature","Perception","Performance","Persuasion","Religion","Survival"],
        languages: [],
        countLangAdd: 2,
        tools: [],
        countToolsAdd: 0,
        toolOptions: []
    }, {
        background: "Far Traveler",
        skills: ["Insight","Perception"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 1,
        tools: [],
        countToolsAdd: 1,
        toolOptions: ["Bagpipes","Drum","Dulcimer","Flute","Horn","Lute","Lyre","Pan Flute","Shawm","Viol",
            "Dragonchess Set","Playing Card Set","Three-Dragon Ante Set"]
    }, {
        background: "Fisher",
        skills: ["History","Survival"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 1,
        tools: [],
        countToolsAdd: 0,
        toolOptions: []
    }, {
        background: "Folk Hero",
        skills: ["Animal Handling","Survival"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 0,
        tools: ["Land Vehicles"],
        countToolsAdd: 1,
        toolOptions: ["Alchemist's Supplies",
            "Brewer's Supplies",
            "Calligrapher's Supplies",
            "Carpenter's Tools",
            "Cartographer's Tools",
            "Cobbler's Tools",
            "Cook's Utensils",
            "Glassblower's Tools",
            "Jeweler's Tools",
            "Leatherworker's Tools",
            "Mason's Tools",
            "Painter's Supplies",
            "Potter's Tools",
            "Smith's Tools",
            "Tinker's Tools",
            "Weaver's Tools",
            "Woodcarver's Tools"]
    }, {
        background: "Gladiator",
        skills: ["Acrobatics","Performance"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 0,
        tools: ["Disguise Kit"],
        countToolsAdd: 1,
        toolOptions: ["Bagpipes","Drum","Dulcimer","Flute","Horn","Lute","Lyre","Pan Flute","Shawm","Viol"]
    }, {
        background: "Guild Artisan/Merchant",
        skills: ["Insight","Persuasion"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 1,
        tools: [],
        countToolsAdd: 1,
        toolOptions: ["Alchemist's Supplies",
            "Brewer's Supplies",
            "Calligrapher's Supplies",
            "Carpenter's Tools",
            "Cartographer's Tools",
            "Cobbler's Tools",
            "Cook's Utensils",
            "Glassblower's Tools",
            "Jeweler's Tools",
            "Leatherworker's Tools",
            "Mason's Tools",
            "Painter's Supplies",
            "Potter's Tools",
            "Smith's Tools",
            "Tinker's Tools",
            "Weaver's Tools",
            "Woodcarver's Tools"]
    }, {
        background: "Haunted One",
        skills: [],
        countSkillsAdd: 2,
        skillsOptions: ["Arcana", "Investigation", "Religion", "Survival"],
        languages: [],
        countLangAdd: 2,
        tools: [],
        countToolsAdd: 0,
        toolOptions: []
    }, {
        background: "Hermit",
        skills: ["Medicine", "Religion"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 1,
        tools: ["Herbalism Kit"],
        countToolsAdd: 0,
        toolOptions: []
    }, {
        background: "Inheritor",
        skills: ["Survival"],
        countSkillsAdd: 1,
        skillsOptions: ["Arcana", "History", "Religion"],
        languages: [],
        countLangAdd: 1,
        tools: [],
        countToolsAdd: 1,
        toolOptions: ["Bagpipes","Drum","Dulcimer","Flute","Horn","Lute","Lyre","Pan Flute","Shawm","Viol",
        "Dragonchess Set","Playing Card Set","Three-Dragon Ante Set"]
    }, {
        background: "Knight",
        skills: ["History","Persuasion"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 1,
        tools: [],
        countToolsAdd: 1,
        toolOptions: ["Dragonchess Set","Playing Card Set","Three-Dragon Ante Set"]
    }, {
        background: "Knight of the Order",
        skills: ["Persuasion"],
        countSkillsAdd: 1,
        skillsOptions: ["Arcana", "History", "Nature", "Religion"],
        languages: [],
        countLangAdd: 1,
        tools: [],
        countToolsAdd: 1,
        toolOptions: ["Bagpipes","Drum","Dulcimer","Flute","Horn","Lute","Lyre","Pan Flute","Shawm","Viol",
        "Dragonchess Set","Playing Card Set","Three-Dragon Ante Set"]
    }, {
        background: "Marine",
        skills: ["Athletics", "Survival"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 0,
        tools: ["Land Vehicles", "Water Vehicles"],
        countToolsAdd: 0,
        toolOptions: []
    }, {
        background: "Mercenary Veteran",
        skills: ["Athletics", "Persuasion"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 0,
        tools: ["Land Vehicles"],
        countToolsAdd: 1,
        toolOptions: ["Dragonchess Set","Playing Card Set","Three-Dragon Ante Set"]
    }, {
        background: "Noble",
        skills: ["History", "Persuasion"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 1,
        tools: [],
        countToolsAdd: 1,
        toolOptions: ["Dragonchess Set","Playing Card Set","Three-Dragon Ante Set"]
    }, {
        background: "Outlander",
        skills: ["Athletics", "Survival"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 1,
        tools: [],
        countToolsAdd: 1,
        toolOptions: ["Bagpipes","Drum","Dulcimer","Flute","Horn","Lute","Lyre","Pan Flute","Shawm","Viol"]
    }, {
        background: "Pirate",
        skills: ["Athletics", "Perception"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 0,
        tools: ["Navigator's Tools", "Water Vehicles"],
        countToolsAdd: 0,
        toolOptions: []
    }, {
        background: "Sage",
        skills: ["Arcana", "History"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 2,
        tools: [],
        countToolsAdd: 0,
        toolOptions: []
    }, {
        background: "Sailor",
        skills: ["Athletics", "Perception"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 0,
        tools: ["Navigator's Tools","Water Vehicles"],
        countToolsAdd: 0,
        toolOptions: []
    }, {
        background: "Shipwright",
        skills: ["History", "Perception"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 0,
        tools: ["Carpenter's Tools","Water Vehicles"],
        countToolsAdd: 0,
        toolOptions: []
    }, {
        background: "Smuggler",
        skills: ["Athletics", "Deception"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 0,
        tools: ["Water Vehicles"],
        countToolsAdd: 0,
        toolOptions: []
    }, {
        background: "Soldier",
        skills: ["Athletics", "Intimidation"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 0,
        tools: ["Land Vehicles"],
        countToolsAdd: 1,
        toolOptions: ["Dragonchess Set","Playing Card Set","Three-Dragon Ante Set"]
    }, {
        background: "Urban Bounty Hunter",
        skills: [],
        countSkillsAdd: 2,
        skillsOptions: ["Deception","Insight","Persuasion","Stealth"],
        languages: [],
        countLangAdd: 0,
        tools: [],
        countToolsAdd: 2,
        toolOptions: ["Dragonchess Set","Playing Card Set","Three-Dragon Ante Set",
        "Bagpipes","Drum","Dulcimer","Flute","Horn","Lute","Lyre","Pan Flute","Shawm","Viol",
        "Theives' Tools"]
    }, {
        background: "Urchin",
        skills: ["Sleight of Hand","Stealth"],
        countSkillsAdd: 0,
        skillsOptions: [],
        languages: [],
        countLangAdd: 0,
        tools: ["Disguise Kit","Theives' Tools"],
        countToolsAdd: 0,
        toolOptions: []
    }
]

let classData = [
    {
        class: "Artificer",
        armor: ["Light Armor", "Medium Armor", "Shields"],
        weapons: ["Simple Weapons"],
        tools: ["Theives' Tools", "Tinker's Tools"],
        countToolsAdd: 1,
        toolOptions: [],
        skills: [],
        countSkillsAdd: 2,
        skillsOptions: ["Arcana", "History", "Investigation", "Medicine", "Nature", "Perception", "SleightofHand"],
    },
    {
        class: "Barbarian",
        armor: ["Light Armor", "Medium Armor", "Shields"],
        weapons: ["Simple Weapons", "Martial Weapons"],
        tools: [],
        countToolsAdd: 0,
        toolOptions: [],
        skills: [],
        countSkillsAdd: 2,
        skillsOptions: ["AnimalHandling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"],
    },
    {
        class: "Bard",
        armor: ["Light Armor"],
        weapons: ["Simple Weapons", "Hand Crossbows", "Longswords", "Rapiers", "Shortswords"],
        tools: [],
        countToolsAdd: 3,
        toolOptions: ["Bagpipes", "Drum", "Dulcimer", "Flute", "Horn", "Lute", "Lyre", "Pan Flute", "Shawm", "Viol"],
        skills: [],
        countSkillsAdd: 3,
        skillsOptions: ["Acrobatics", "AnimalHandling", "Arcana", "Athletics", "Deception",
            "History", "Insight", "Intimidation", "Investigation", "Medicine",
            "Nature", "Perception", "Performance", "Persuasion", "Religion",
            "SleightofHand", "Stealth", "Survival"],
    }
]

function setPlayerClass() {
    for (var i = 0; i < classData.length; i++) {
        if (classData[i].class === selectClass.value) {
            playerClass = classData[i];
        }
    }
}

function setPlayerBackground() {
    for (var i = 0; i < backgroundData.length; i++) {
        if (backgroundData[i].background === selectedBackground.value) {
            playerBackground = backgroundData[i];
        }
    }
}

function setPlayerRace() {
    for (var i = 0; i < raceData.length; i++) {
        if (raceData[i].race === selectedRace.value) {
            playerRace = raceData[i];
        }
    }
}

function showSubraceOptions() {
    document.getElementById("subrace-container").classList.add("hide-element")
    selectSubrace.innerHTML = "";
    if (playerRace.subraces.length > 0) {
        document.getElementById("subrace-container").classList.remove("hide-element");
        for (i = 0; i < playerRace.subraces.length; i++) {
            var subraceOption = document.createElement("option");
            subraceOption.innerHTML = playerRace.subraces[i];
            selectSubrace.append(subraceOption);
        }
    }
}

function setPlayerSubrace() {
    for (var i = 0; i < subraceData.length; i++) {
        if (subraceData[i].subrace === selectSubrace.value) {
            playerSubrace = subraceData[i];
        }
    }
}

function resetSkills() {
    // autoProfList.innerHTML = "";
    var skillChecks = document.querySelectorAll(".skill-box");
    for (var i = 0; i < skillChecks.length; i++) { skillChecks[i].checked = false; skillChecks[i].disabled = true };
}

function applyRaceSkills() {
    if (playerRace.skillsOptions.length > 0) {
        for (var i = 0; i < playerRace.skillsOptions.length; i++) {
            var skillBox = document.getElementById(playerRace.skillsOptions[i].toLowerCase());
            skillBox.disabled = false;
        }
    }
    if (playerRace.skills.length > 0) {
        for (var i = 0; i < playerRace.skills.length; i++) {
            var skillBox = document.getElementById(playerRace.skills[i].toLowerCase());
            skillBox.checked = true;
        }
    }
}

function applyClassSkills() {
    if (playerClass.skillsOptions.length > 0) {
        for (var i = 0; i < playerClass.skillsOptions.length; i++) {
            var skillBox = document.getElementById(playerClass.skillsOptions[i].toLowerCase());
            if (skillBox.checked === false) {
                skillBox.disabled = false;
            }
        }
    }
}

function applyRaceLanguages() {
    if (playerRace.languages.length > 0) {
        for (var i = 0; i < playerRace.languages.length; i++) {
            document.getElementById(playerRace.languages[i].toLowerCase()).checked = true;
            document.getElementById(playerRace.languages[i].toLowerCase()).disabled = true;
        }
    }
}

const langItems = document.querySelectorAll(".language-box");
var langCap = playerRace.countLangAdd + playerBackground.countLangAdd +playerRace.languages.length;

function resetLanguages() {
    for (var i = 0; i < langItems.length; i++) {
        langItems[i].checked = false;
        langItems[i].disabled = false;}
        }

function checkLanguageCap() {
    langCap = playerRace.languages.length + playerRace.countLangAdd + playerBackground.countLangAdd;
    let langChecked = 0;
    for (var i = 0; i < langItems.length; i++) {
        if (langItems[i].checked === true)
        langChecked = langChecked + 1;}
    if (langChecked === langCap) {
        for (var i = 0; i < langItems.length; i++) {
            if (langItems[i].checked === false) {
            langItems[i].disabled = true}}
} else if (langChecked < langCap) {
    for (var i = 0; i < langItems.length; i++) {
        if (langItems[i].checked === false) {
        langItems[i].disabled = false}
    }} else if (langChecked > langCap) {
        for (var i = 0; i < langItems.length; i++) {
            if (langItems[i].checked === false) {
            langItems[i].disabled = true}
    }

} }