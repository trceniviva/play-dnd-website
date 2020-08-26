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
const selectClass = document.getElementById("first-class-dropdown");

let levelsAvailable = 20;
let abilityModsAvailable = 0;
let countLanguagesAvailable = 0;
let languagesAvailable = [];
let allLanguages = ['Abyssal', 'Celestial', 'Common', 'Daelkyr', 'DeepSpeech', 'Draconic', 'Dwarvish', 'Elvish', 'Giant', 'Gith', 'Gnomish', 'Goblin', 'Halfling', 'Infernal', 'Kraul', 'Leonin', 'Loxodon', 'Marquesian', 'Minotaur', 'Naush', 'Orc', 'Primordial', 'Quori', 'Riedran', 'Sylvan', 'Undercommon', 'Vedalken', 'Zemnian']

var playerRace;
var playerSubrace;
var playerClass = { class: "", armor: [], weapons: [], tools: [], countToolsAdd: -1, toolOptions: [], skills: [], countSkillsAdd: -1, skillsOptions: [] };

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
        abilityAddAllowed: ["str", "dex", "con", "int", "wis", "cha"],
        abilityAddRule: "",
        speed: 30,
        darkvision: false,
        skills: [],
        countSkillsAdd: 2,
        skillsOptions: ["Deception", "Insight", "Intimidation", "Persuasion"]
    },
    {
        race: "Gnome",
        subraces: ["Forest", "Rock"],
        languages: ["Common", "Gnomish"],
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
        languages: ["Common", "Giant"],
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
        languages: ["Common", "Elvish"],
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
        languages: ["Common", "Orc"],
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
        languages: ["Common", "Halfling"],
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
    },
    {
        race: "Kenku",
        subraces: [],
        languages: [],
        countLangAdd: 0,
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
        skillsOptions: ["Acrobatics", "Deception", "Stealth", "SleightofHand"]
    },
    {
        race: "Tabaxi",
        subraces: [],
        languages: ["Common"],
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
        skills: ["Perception", "Stealth"],
        countSkillsAdd: 0,
        skillsOptions: []
    },
    {
        race: "Tiefling",
        subraces: [],
        languages: ["Common", "Infernal"],
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
        languages: ["Common", "Aquan"],
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
        languages: ["Common", "Aquan"],
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