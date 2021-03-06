let player = {
    race: 'none',
    subrace: 'none',
    fullRace: 'none',
    class: 'none',
    classLevels: 1,
    subclass: 'none',
    secondClass: 'none',
    secondClassLevels: 0,
    secondSubclass: 'none',
    background: 'none',
    level: 1,
    languages: [],
    str: 0, 
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0,
    strRace: 0,
    dexRace: 0,
    conRace: 0,
    intRace: 0,
    wisRace: 0,
    chaRace: 0,
    strMod: 0,
    dexMod: 0,
    conMod: 0,
    intMod: 0,
    wisMod: 0,
    chaMod: 0,
    skillProficiencies: [],
    toolProficiencies: [],
    instrumentProficiencies: [],
    gamingProficiencies: [],
    utilities: [],
    spells: [],
    tools: [],
    languages: []
}

const allSkills = [
    "Acrobatics","Animal Handling","Arcana","Athletics","Deception",
    "History","Insight","Intimidation","Investigation","Medicine",
    "Nature","Perception","Performance","Persuasion","Religion",
    "Sleight of Hand","Stealth","Survival"
]
const artisansTools = [
    "Alchemist's Supplies",
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
    "Woodcarver's Tools"
]
const allInstruments = [
    "Bagpipes","Drum","Dulcimer","Flute","Horn","Lute","Lyre","Pan Flute","Shawm","Viol"
]
const gamingSets = [
    "Dragonchess Set","Playing Card Set","Three-Dragon Ante Set"
]

const subraceDropdown = document.getElementById("subrace-dropdown")
const subraceColumn = document.getElementById("subrace-column")
const refresh = document.getElementById("refresh-character")
const subclassDropdown = document.getElementById("subclass-one-drop")
const secondSubclassDropdown = document.getElementById("subclass-two-drop")

const characterForm = document.getElementById("character-basics-form")

refresh.addEventListener('click', function (e) { e.preventDefault() })

function refreshCore() {
    player.race = document.getElementById("raceDropdown").value;
    player.subrace = subraceDropdown.value;
    player.class = document.getElementById("classOneDropdown").value;
    player.subclass = subclassDropdown.value;
    player.secondClass = document.getElementById("classTwoDropdown").value;
    player.secondSubclass = secondSubclassDropdown.value;
    player.background = document.getElementById("backgroundDropdown").value;
    player.classLevels = Number(document.getElementById("classOneLevelsDropdown").value);
    player.secondClassLevels = Number(document.getElementById("classTwoLevelsDropdown").value);
    player.level = Number(document.getElementById("classOneLevelsDropdown").value) + Number(document.getElementById("classTwoLevelsDropdown").value);
    document.getElementById("output-player-subrace").innerHTML=player.subrace;
    document.getElementById("output-player-race").innerHTML=player.race;
    document.getElementById("output-class-one-level").innerHTML="Level " + player.classLevels;
    if (player.subclass != "Choose First Subclass") {
    document.getElementById("output-class-one-sub").innerHTML=player.subclass;} else {
        document.getElementById("output-class-one-sub").innerHTML='';
    }
    document.getElementById("output-class-one").innerHTML=player.class;
    if (player.secondClass != "2nd Class") {
        document.getElementById("output-class-two-level").innerHTML="Level " + player.secondClassLevels;
        document.getElementById("output-class-two-sub").innerHTML=player.secondSubclass;
        document.getElementById("output-class-two").innerHTML=player.secondClass;
    } else {
        document.getElementById("output-class-two-level").innerHTML='';
        document.getElementById("output-class-two-sub").innerHTML='';
        document.getElementById("output-class-two").innerHTML='';
    }
    document.getElementById("output-player-background").innerHTML=player.background;
}

function refreshSubrace() {
    if (document.getElementById("subrace-dropdown").value === null || document.getElementById("subrace-dropdown").value === "") {
        player.subrace = 'none';
        player.fullRace = player.race;
    } else {
        player.subrace = document.getElementById("subrace-dropdown").value;
        player.fullRace = player.race + ", " + player.subrace;
    }
}

const raceLangOne = document.getElementById("race-lang-one")
const raceLangOneOptions = document.getElementById("race-lang-one-drop")
const raceLangTwo = document.getElementById("race-lang-two")
const raceLangTwoOptions = document.getElementById("race-lang-two-drop")

const abyssal_i  = document.querySelectorAll(".language-abyssal")
const celestial_i  = document.querySelectorAll(".language-celestial")
const common_i = document.querySelectorAll(".language-common")
const daelkyr_i  = document.querySelectorAll(".language-daelkyr")
const deepSpeech_i  = document.querySelectorAll(".language-deep-speech")
const draconic_i = document.querySelectorAll(".language-draconic")
const dwarvish_i  = document.querySelectorAll(".language-dwarvish")
const elvish_i  = document.querySelectorAll(".language-elvish")
const gith_i = document.querySelectorAll(".language-gith")
const giant_i = document.querySelectorAll(".language-giant")
const gnomish_i  = document.querySelectorAll(".language-gnomish")
const goblin_i  = document.querySelectorAll(".language-goblin")
const halfling_i = document.querySelectorAll(".language-halfling")
const infernal_i = document.querySelectorAll(".language-infernal")
const kraul_i  = document.querySelectorAll(".language-kraul")
const leonin_i  = document.querySelectorAll(".language-leonin")
const loxodon_i = document.querySelectorAll(".language-loxodon")
const marquesian_i  = document.querySelectorAll(".language-marquesian")
const minotaur_i  = document.querySelectorAll(".language-minotaur")
const naush_i = document.querySelectorAll(".language-naush")
const orc_i = document.querySelectorAll(".language-orc")
const primordial_i  = document.querySelectorAll(".language-primordial")
const quori_i  = document.querySelectorAll(".language-quori")
const riedran_i = document.querySelectorAll(".language-riedran")
const sylvan_i  = document.querySelectorAll(".language-sylvan")
const undercommon_i  = document.querySelectorAll(".language-undercommon")
const vedalken_i = document.querySelectorAll(".language-vedalken")
const zemnian_i = document.querySelectorAll(".language-zemnian")

function setLanguagesFalse() {
    player.languages = [];
}

function showAllLanguages() {
    for (i=0; i< common_i.length; ++i) {
        common_i[i].classList.remove("hide-element")
    }
    for (i=0; i< draconic_i.length; ++i) {
        draconic_i[i].classList.remove("hide-element")
    }
    for (i=0; i< abyssal_i.length; ++i) {
        abyssal_i[i].classList.remove("hide-element")
    }
    for (i=0; i< celestial_i.length; ++i) {
        celestial_i[i].classList.remove("hide-element")
    }
    for (i=0; i< daelkyr_i.length; ++i) {
        daelkyr_i[i].classList.remove("hide-element")
    }
    for (i=0; i< deepSpeech_i.length; ++i) {
        deepSpeech_i[i].classList.remove("hide-element")
    }
    for (i=0; i< dwarvish_i.length; ++i) {
        dwarvish_i[i].classList.remove("hide-element")
    }
    for (i=0; i< elvish_i.length; ++i) {
        elvish_i[i].classList.remove("hide-element")
    }
    for (i=0; i< giant_i.length; ++i) {
        giant_i[i].classList.remove("hide-element")
    }
    for (i=0; i< gith_i.length; ++i) {
        gith_i[i].classList.remove("hide-element")
    }
    for (i=0; i< gnomish_i.length; ++i) {
        gnomish_i[i].classList.remove("hide-element")
    }
    for (i=0; i< goblin_i.length; ++i) {
        goblin_i[i].classList.remove("hide-element")
    }
    for (i=0; i< halfling_i.length; ++i) {
        halfling_i[i].classList.remove("hide-element")
    }
    for (i=0; i< infernal_i.length; ++i) {
        infernal_i[i].classList.remove("hide-element")
    }
    for (i=0; i< kraul_i.length; ++i) {
        kraul_i[i].classList.remove("hide-element")
    }
    for (i=0; i< leonin_i.length; ++i) {
        leonin_i[i].classList.remove("hide-element")
    }
    for (i=0; i< marquesian_i.length; ++i) {
        marquesian_i[i].classList.remove("hide-element")
    }
    for (i=0; i< minotaur_i.length; ++i) {
        minotaur_i[i].classList.remove("hide-element")
    }
    for (i=0; i< naush_i.length; ++i) {
        naush_i[i].classList.remove("hide-element")
    }
    for (i=0; i< orc_i.length; ++i) {
        orc_i[i].classList.remove("hide-element")
    }
    for (i=0; i< quori_i.length; ++i) {
        quori_i[i].classList.remove("hide-element")
    }
    for (i=0; i< riedran_i.length; ++i) {
        riedran_i[i].classList.remove("hide-element")
    }
    for (i=0; i< sylvan_i.length; ++i) {
        sylvan_i[i].classList.remove("hide-element")
    }
    for (i=0; i< undercommon_i.length; ++i) {
        undercommon_i[i].classList.remove("hide-element")
    }
    for (i=0; i< vedalken_i.length; ++i) {
        vedalken_i[i].classList.remove("hide-element")
    }
    for (i=0; i< zemnian_i.length; ++i) {
        zemnian_i[i].classList.remove("hide-element")
    }
}

function hideAppropriateLanguages() {
    showAllLanguages();
    if (player.languages.includes("Abyssal") === true) {
        for (i=0; i< abyssal_i.length; ++i) {abyssal_i[i].classList.add("hide-element")};};
    if (player.languages.includes("Celestial")=== true) {
            for (i=0; i< celestial_i.length; ++i) {celestial_i[i].classList.add("hide-element")};};
    if (player.languages.includes("Common") === true) {
            for (i=0; i< common_i.length; ++i) {common_i[i].classList.add("hide-element")};};
    if (player.languages.includes("Daelkyr") === true) {
            for (i=0; i< daelkyr_i.length; ++i) {daelkyr_i[i].classList.add("hide-element")};};
    if (player.languages.includes("Deepspeech") === true) {
            for (i=0; i< deepspeech_i.length; ++i) {deepspeech_i[i].classList.add("hide-element")};};
    if (player.languages.includes("Draconic") === true) {
            for (i=0; i< draconic_i.length; ++i) {draconic_i[i].classList.add("hide-element")};};
    if (player.languages.includes("Dwarvish")=== true) {
            for (i=0; i< dwarvish_i.length; ++i) {dwarvish_i[i].classList.add("hide-element")};};
    if (player.languages.includes("Elvish") === true) {
            for (i=0; i< elvish_i.length; ++i) {elvish_i[i].classList.add("hide-element")};};
    if (player.languages.includes("Giant") === true) {
            for (i=0; i< giant_i.length; ++i) {giant_i[i].classList.add("hide-element")};};
    if (player.languages.includes("Gith") === true) {
            for (i=0; i< gith_i.length; ++i) {gith_i[i].classList.add("hide-element")};};
    if (player.languages.includes("Gnomish") === true) {
            for (i=0; i< gnomish_i.length; ++i) {gnomish_i[i].classList.add("hide-element")};};
    if (player.languages.includes("Goblin") === true) {
            for (i=0; i< goblin_i.length; ++i) {goblin_i[i].classList.add("hide-element")};};
    if (player.languages.includes("Halfling") === true) {
            for (i=0; i< halfling_i.length; ++i) {halfling_i[i].classList.add("hide-element")};};
    if (player.languages.includes("Infernal") === true) {
            for (i=0; i< infernal_i.length; ++i) {infernal_i[i].classList.add("hide-element")};};
    if (player.languages.includes("Kraul") === true) {
            for (i=0; i< kraul_i.length; ++i) {kraul_i[i].classList.add("hide-element")};};
    if (player.languages.includes("Leonin") === true) {
            for (i=0; i< leonin_i.length; ++i) {leonin_i[i].classList.add("hide-element")};};
    if (player.languages.includes("Loxodon") === true) {
            for (i=0; i< loxodon_i.length; ++i) {loxodon_i[i].classList.add("hide-element")};};
    if (player.languages.includes("Marquesian") === true) {
            for (i=0; i< marquesian_i.length; ++i) {marquesian_i[i].classList.add("hide-element")};};
    if (player.languages.includes("Minotaur") === true) {
            for (i=0; i< minotaur_i.length; ++i) {minotaur_i[i].classList.add("hide-element")};};
    if (player.languages.includes("Naush")=== true) {
            for (i=0; i< naush_i.length; ++i) {naush_i[i].classList.add("hide-element")};};
    if (player.languages.includes("Orc") === true) {
            for (i=0; i< orc_i.length; ++i) {orc_i[i].classList.add("hide-element")};};
    if (player.languages.includes("Primordial") === true) {
            for (i=0; i< primordial_i.length; ++i) {primordial_i[i].classList.add("hide-element")};};
    if (player.languages.includes("Quori") === true) {
            for (i=0; i< quori_i.length; ++i) {quori_i[i].classList.add("hide-element")};};
    if (player.languages.includes("Riedran") === true) {
            for (i=0; i< riedran_i.length; ++i) {riedran_i[i].classList.add("hide-element")};};
    if (player.languages.includes("Sylvan") === true) {
            for (i=0; i< sylvan_i.length; ++i) {sylvan_i[i].classList.add("hide-element")};};
    if (player.languages.includes("Undercommon") === true) {
            for (i=0; i< undercommon_i.length; ++i) {undercommon_i[i].classList.add("hide-element")};};
    if (player.languages.includes("Vedalken") === true) {
            for (i=0; i< vedalken_i.length; ++i) {vedalken_i[i].classList.add("hide-element")};};
    if (player.languages.includes("Zemnian") === true) {
            for (i=0; i< zemnian_i.length; ++i) {zemnian_i[i].classList.add("hide-element")};};
}

const langList = document.getElementById("languages-list");

function raceLanguages() {
    raceLangOne.classList.add("collapse");
    raceLangTwo.classList.add("collapse");
    showAllLanguages();
    if (player.race === "Changeling") {
        player.languages.push("Common");
        raceLangOne.classList.remove("collapse");
        raceLangTwo.classList.remove("collapse");
    }
    else if (player.race === "Dragonborn") {
        player.languages.push("Common");
        player.languages.push("Draconic");
    }
    else if (player.race === "Dwarf") {
        player.languages.push("Common");
        player.languages.push("Dwarvish");
    }
    else if (player.race === "Elf") {
        player.languages.push("Common");
        player.languages.push("Elvish");
    }
    else if (player.race === "Genasi") {
        player.languages.push("Common");
        player.languages.push("Primordial");
    }
    else if (player.race === "Gnome") {
        player.languages.push("Common");
        player.languages.push("Gnomish");
    }
    else if (player.race === "Goliath") {
        player.languages.push("Common");
        player.languages.push("Giant");
    }
    else if (player.race === "Half-elf") {
        player.languages.push("Common");
        player.languages.push("Elvish");
        raceLangOne.classList.remove("collapse");
    }
    else if (player.race === "Half-orc") {
        player.common = true;
        player.languages.push("Common");
        player.languages.push("Orc");
    }
    else if (player.race === "Halfling") {
        player.languages.push("Common");
        player.languages.push("Halfling");
    }
    else if (player.race === "Human") {
        player.languages.push("Common");
        raceLangOne.classList.remove("collapse");
    }
    else if (player.race === "Kenku") {
        for (i=0; i< abyssal_i.length; ++i) {abyssal_i[i].classList.add("hide-element")};
        for (i=0; i< celestial_i.length; ++i) {celestial_i[i].classList.add("hide-element")};
        for (i=0; i< common_i.length; ++i) {common_i[i].classList.add("hide-element")};
        for (i=0; i< daelkyr_i.length; ++i) {daelkyr_i[i].classList.add("hide-element")};
        for (i=0; i< deepSpeech_i.length; ++i) {deepSpeech_i[i].classList.add("hide-element")};
        for (i=0; i< draconic_i.length; ++i) {draconic_i[i].classList.add("hide-element")};
        for (i=0; i< dwarvish_i.length; ++i) {dwarvish_i[i].classList.add("hide-element")};
        for (i=0; i< elvish_i.length; ++i) {elvish_i[i].classList.add("hide-element")};
        for (i=0; i< giant_i.length; ++i) {giant_i[i].classList.add("hide-element")};
        for (i=0; i< gith_i.length; ++i) {gith_i[i].classList.add("hide-element")};
        for (i=0; i< gnomish_i.length; ++i) {gnomish_i[i].classList.add("hide-element")};
        for (i=0; i< goblin_i.length; ++i) {goblin_i[i].classList.add("hide-element")};
        for (i=0; i< halfling_i.length; ++i) {halfling_i[i].classList.add("hide-element")};
        for (i=0; i< infernal_i.length; ++i) {infernal_i[i].classList.add("hide-element")};
        for (i=0; i< kraul_i.length; ++i) {kraul_i[i].classList.add("hide-element")};
        for (i=0; i< leonin_i.length; ++i) {leonin_i[i].classList.add("hide-element")};
        for (i=0; i< loxodon_i.length; ++i) {loxodon_i[i].classList.add("hide-element")};
        for (i=0; i< marquesian_i.length; ++i) {marquesian_i[i].classList.add("hide-element")};
        for (i=0; i< minotaur_i.length; ++i) {minotaur_i[i].classList.add("hide-element")};
        for (i=0; i< naush_i.length; ++i) {naush_i[i].classList.add("hide-element")};
        for (i=0; i< orc_i.length; ++i) {orc_i[i].classList.add("hide-element")};
        for (i=0; i< primordial_i.length; ++i) {primordial_i[i].classList.add("hide-element")};
        for (i=0; i< quori_i.length; ++i) {quori_i[i].classList.add("hide-element")};
        for (i=0; i< riedran_i.length; ++i) {riedran_i[i].classList.add("hide-element")};
        for (i=0; i< sylvan_i.length; ++i) {sylvan_i[i].classList.add("hide-element")};
        for (i=0; i< undercommon_i.length; ++i) {undercommon_i[i].classList.add("hide-element")};
        for (i=0; i< vedalken_i.length; ++i) {vedalken_i[i].classList.add("hide-element")};
        for (i=0; i< zemnian_i.length; ++i) {zemnian_i[i].classList.add("hide-element")};
    }
    else if (player.race === "Tabaxi") {
        player.common = true;
        player.languages.push("Common");
        raceLangOne.classList.remove("collapse");
    }
    else if (player.race === "Tiefling") {
        player.common = true;
        player.infernal = true;
        player.languages.push("Common");
        player.languages.push("Infernal");
    }
    else if (player.race === "Tortle") {
        player.common = true;
        player.languages.push("Common");
    }
    else if (player.race === "Warforged") {
        player.common = true;
        player.languages.push("Common");
        raceLangOne.classList.remove("collapse");
    }
    hideAppropriateLanguages();
}

function classLanguages() {
    if (player.class === 'Druid'){
    if (player.languages.includes("Druidic")) {} else {
        player.languages.push("Druidic");}}
}

function raceLanguageOneOptions() {
    if (raceLangOneOptions.value != "Pick Language") {
    player.languages.push(raceLangOneOptions.value);}
}

function raceLanguageTwoOptions() {
    if (raceLangTwoOptions.value != "Pick Language") {
        player.languages.push(raceLangTwoOptions.value);}
}

function pushLanguages () {
    for (i=0; i<player.languages.length; ++i) {
        var langKnown = document.createElement("li");
        langKnown.innerHTML = player.languages[i];
        langKnown.classList.add("list-group-item");
        langKnown.classList.add("skill-name");
        langKnown.classList.add("pt-0");
        langKnown.classList.add("pb-0");
        langKnown.classList.add("font-weight-light");
        langList.appendChild(langKnown)}
}

function refreshAllLanguages () {
    langList.innerHTML ="Languages";
    setLanguagesFalse();
    raceLanguages();
    classLanguages();
    raceLanguageOneOptions();
    raceLanguageTwoOptions();
    bgLanguageOneOptions();
    bgLanguageTwoOptions();
    pushLanguages ();
    hideAppropriateLanguages();
}

function showSubrace() {
    if (player.race === 'Dwarf') {
        subraceColumn.classList.remove("collapse");
        subraceDropdown.innerHTML = "";
        var makeSelection = document.createElement("option");
        makeSelection.innerHTML = "Pick Subrace";
        subraceDropdown.appendChild(makeSelection);

        var hillDwarfOption = document.createElement("option");
        hillDwarfOption.innerHTML = "Hill";
        subraceDropdown.appendChild(hillDwarfOption)

        var mtDwarfOption = document.createElement("option");
        mtDwarfOption.innerHTML = "Mountain";
        subraceDropdown.appendChild(mtDwarfOption)

    } else if (player.race === 'Elf') {
        subraceColumn.classList.remove("collapse");
        subraceDropdown.innerHTML = "";
        var makeSelection = document.createElement("option");
        makeSelection.innerHTML = "Pick Subrace";
        subraceDropdown.appendChild(makeSelection);

        var darkElfOption = document.createElement("option");
        darkElfOption.innerHTML = "Dark";
        subraceDropdown.appendChild(darkElfOption)

        var eladrinElfOption = document.createElement("option");
        eladrinElfOption.innerHTML = "Eladrin";
        subraceDropdown.appendChild(eladrinElfOption)

        var highElfOption = document.createElement("option");
        highElfOption.innerHTML = "High";
        subraceDropdown.appendChild(highElfOption)

        var woodElfOption = document.createElement("option");
        woodElfOption.innerHTML = "Wood";
        subraceDropdown.appendChild(woodElfOption)

    } else if (player.race === 'Genasi') {
        subraceColumn.classList.remove("collapse");
        subraceDropdown.innerHTML = "";
        var makeSelection = document.createElement("option");
        makeSelection.innerHTML = "Pick Subrace";
        subraceDropdown.appendChild(makeSelection);

        var airGenasiOption = document.createElement("option");
        airGenasiOption.innerHTML = "Air";
        subraceDropdown.appendChild(airGenasiOption)

        var earthGenasiOption = document.createElement("option");
        earthGenasiOption.innerHTML = "Earth";
        subraceDropdown.appendChild(earthGenasiOption)

        var fireGenasiOption = document.createElement("option");
        fireGenasiOption.innerHTML = "Fire";
        subraceDropdown.appendChild(fireGenasiOption)

        var waterGenasiOption = document.createElement("option");
        waterGenasiOption.innerHTML = "Water";
        subraceDropdown.appendChild(waterGenasiOption)

    } else if (player.race === 'Gnome') {
        subraceColumn.classList.remove("collapse");
        subraceDropdown.innerHTML = "";
        var makeSelection = document.createElement("option");
        makeSelection.innerHTML = "Pick Subrace";
        subraceDropdown.appendChild(makeSelection);

        var forestGnomeOption = document.createElement("option");
        forestGnomeOption.innerHTML = "Forest";
        subraceDropdown.appendChild(forestGnomeOption)

        var rockGnomeOption = document.createElement("option");
        rockGnomeOption.innerHTML = "Rock";
        subraceDropdown.appendChild(rockGnomeOption)
    } else if (player.race === 'Halfling') {
        subraceColumn.classList.remove("collapse");
        subraceDropdown.innerHTML = "";
        var makeSelection = document.createElement("option");
        makeSelection.innerHTML = "Pick Subrace";
        subraceDropdown.appendChild(makeSelection);

        var lightfootHalflingOption = document.createElement("option");
        lightfootHalflingOption.innerHTML = "Lightfoot";
        subraceDropdown.appendChild(lightfootHalflingOption)

        var stoutHalflingOption = document.createElement("option");
        stoutHalflingOption.innerHTML = "Stout";
        subraceDropdown.appendChild(stoutHalflingOption)
    } else {
        subraceDropdown.innerHTML="";
        var makeSelection = document.createElement("option");
        makeSelection.innerHTML = "Subrace";
        subraceDropdown.appendChild(makeSelection);
    }
}

function calcAbRaceBonus() {
    if (player.race === 'Changeling' || player.race === "Half-elf") {
        player.strRace = 0;player.dexRace = 0;player.conRace = 0;
        player.intRace = 0;player.wisRace = 0;player.chaRace = 2;
    } else if (player.race === 'Dragonborn') {
        player.strRace = 2;player.dexRace = 0;player.conRace = 0;
        player.intRace = 0;player.wisRace = 0;player.chaRace = 1;
    } else if (player.race === 'Dwarf' || player.race === 'Genasi' || player.race === 'Warforged') {
        player.strRace = 0;player.dexRace = 0;player.conRace = 2;
        player.intRace = 0;player.wisRace = 0;player.chaRace = 0;
    } else if (player.race === 'Elf' || player.race === 'Halfling') {
        player.strRace = 0;player.dexRace = 2;player.conRace = 0;
        player.intRace = 0;player.wisRace = 0;player.chaRace = 0;
    } else if (player.race === 'Gnome') {
        player.strRace = 0;player.dexRace = 0;player.conRace = 0;
        player.intRace = 2;player.wisRace = 0;player.chaRace = 0;
        if (player.subrace === 'Forest') {player.dexRace = 1} 
        else if (player.subrace === 'Rock') {player.conRace = 1};
    } else if (player.race === 'Half-orc') {
        player.strRace = 2;player.dexRace = 0;player.conRace = 1;
        player.intRace = 0;player.wisRace = 0;player.chaRace = 0;
    } else if (player.race === 'Human') {
        player.strRace = 1;player.dexRace = 1;player.conRace = 1;
        player.intRace = 1;player.wisRace = 1;player.chaRace = 1;
    } else if (player.race === 'Kenku') {
        player.strRace = 0; player.dexRace = 2;player.conRace = 0;
        player.intRace = 0;player.wisRace = 1;player.chaRace = 0;
    } else if (player.race === 'Tabaxi') {
        player.strRace = 0;player.dexRace = 2;player.conRace = 0;
        player.intRace = 0;player.wisRace = 0;player.chaRace = 1;
    } else if (player.race === 'Tiefling') {
        player.strRace = 0;player.dexRace = 0;player.conRace = 0;
        player.intRace = 1;player.wisRace = 0;player.chaRace = 2;
    } else if (player.race === 'Tortle') {
        player.strRace = 2;player.dexRace = 0;player.conRace = 0;
        player.intRace = 0;player.wisRace = 1;player.chaRace = 0;
    }
}

function refreshSkillScores() {
    var acrobatics = document.getElementById("acrobatics");
    var acrobaticsValue = Math.floor((Number(player.dex) - 10) / 2) + Number(player.acrobatics);
    let sign;
    if (acrobaticsValue > 0) {sign = "+"} else {sign = ""};
    acrobatics.innerHTML = sign + acrobaticsValue;
    
    var animalHandling = document.getElementById("animal-handling");
    var animalHandlingValue = Math.floor((Number(player.wis) - 10) / 2) + Number(player.animalHandling);
    if (animalHandlingValue > 0) {sign = "+"} else {sign = ""};
    animalHandling.innerHTML = sign + animalHandlingValue;
    
    var arcana = document.getElementById("arcana");
    var arcanaValue = Math.floor((Number(player.int) - 10) / 2) + Number(player.arcana);
    if (arcanaValue > 0) {sign = "+"} else {sign = ""};
    arcana.innerHTML = sign + arcanaValue;
    
    var athletics = document.getElementById("athletics");
    var athleticsValue = Math.floor((Number(player.str) - 10) / 2) + Number(player.athletics);
    if (athleticsValue > 0) {sign = "+"} else {sign = ""};
    athletics.innerHTML = sign + athleticsValue;
    
    var deception = document.getElementById("deception");
    var deceptionValue = Math.floor((Number(player.cha) - 10) / 2) + Number(player.deception);
    if (deceptionValue > 0) {sign = "+"} else {sign = ""};
    deception.innerHTML = sign + deceptionValue;
    
    var history = document.getElementById("history");
    var historyValue = Math.floor((Number(player.int) - 10) / 2) + Number(player.history);
    if (historyValue > 0) {sign = "+"} else {sign = ""};
    history.innerHTML = sign + historyValue;
    
    var insight = document.getElementById("insight");
    var insightValue = Math.floor((Number(player.wis) - 10) / 2) + Number(player.insight);
    if (insightValue > 0) {sign = "+"} else {sign = ""};
    insight.innerHTML = sign + insightValue;
    
    var intimidation = document.getElementById("intimidation");
    var intimidationValue = Math.floor((Number(player.cha) - 10) / 2) + Number(player.intimidation);
    if (intimidationValue > 0) {sign = "+"} else {sign = ""};
    intimidation.innerHTML = sign + intimidationValue;
    
    var investigation = document.getElementById("investigation");
    var investigationValue = Math.floor((Number(player.int) - 10) / 2) + Number(player.investigation);
    if (investigationValue > 0) {sign = "+"} else {sign = ""};
    investigation.innerHTML = sign + investigationValue;
    
    var medicine = document.getElementById("medicine");
    var medicineValue = Math.floor((Number(player.wis) - 10) / 2) + Number(player.medicine);
    if (medicineValue > 0) {sign = "+"} else {sign = ""};
    medicine.innerHTML = sign + medicineValue;
    
    var nature = document.getElementById("nature");
    var natureValue = Math.floor((Number(player.int) - 10) / 2) + Number(player.nature);
    if (natureValue > 0) {sign = "+"} else {sign = ""};
    nature.innerHTML = sign + natureValue;
    
    var perception = document.getElementById("perception");
    var perceptionValue = Math.floor((Number(player.wis) - 10) / 2) + Number(player.perception);
    if (perceptionValue > 0) {sign = "+"} else {sign = ""};
    perception.innerHTML = sign + perceptionValue;
    
    var performance = document.getElementById("performance");
    var performanceValue = Math.floor((Number(player.cha) - 10) / 2) + Number(player.performance);
    if (performanceValue > 0) {sign = "+"} else {sign = ""};
    performance.innerHTML = sign + performanceValue;
    
    var persuasion = document.getElementById("persuasion");
    var persuasionValue = Math.floor((Number(player.cha) - 10) / 2) + Number(player.persuasion);
    if (persuasionValue > 0) {sign = "+"} else {sign = ""};
    persuasion.innerHTML = sign + persuasionValue;
    
    var religion = document.getElementById("religion");
    var religionValue = Math.floor((Number(player.int) - 10) / 2) + Number(player.religion);
    if (religionValue > 0) {sign = "+"} else {sign = ""};
    religion.innerHTML = sign + religionValue;
    
    var sleightOfHand = document.getElementById("sleight-of-hand");
    var sleightOfHandValue = Math.floor((Number(player.dex) - 10) / 2) + Number(player.sleightOfHand);
    if (sleightOfHandValue > 0) {sign = "+"} else {sign = ""};
    sleightOfHand.innerHTML = sign + sleightOfHandValue;
    
    var stealth = document.getElementById("stealth");
    var stealthValue = Math.floor((Number(player.dex) - 10) / 2) + Number(player.stealth);
    if (stealthValue > 0) {sign = "+"} else {sign = ""};
    stealth.innerHTML = sign + stealthValue;
    
    var survival = document.getElementById("survival");
    var survivalValue = Math.floor((Number(player.wis) - 10) / 2) + Number(player.survival);
    if (survivalValue > 0) {sign = "+"} else {sign = ""};
    survival.innerHTML = sign + survivalValue;

}

function showSecondClass() {
    if (characterForm.multiclass.value === 'single') {
        document.getElementById("classTwoLevelsDropdown").innerHTML = "0";
        document.getElementById("class-two").classList.add("collapse");
        document.getElementById("class-two-levels").classList.add("collapse")
    }
    else {
        // document.getElementById("multiclass-form").classList.add("collapse")

        document.getElementById("class-two").classList.remove("collapse")
        document.getElementById("class-two-levels").classList.remove("collapse")
    }
}

function refreshAbScores() {
    baseStrength = document.getElementById("base-str").value;
    var finalStrength = document.getElementById("final-str");
    finalStrength.innerHTML = Number(baseStrength) + Number(player.strRace);
    player.str = Number(baseStrength) + Number(player.strRace);

    baseDex = document.getElementById("base-dex").value;
    var finalDex = document.getElementById("final-dex");
    finalDex.innerHTML = Number(baseDex) + Number(player.dexRace);
    player.dex = Number(baseDex) + Number(player.dexRace);

    baseConstitution = document.getElementById("base-con").value;
    var finalConstitution = document.getElementById("final-con");
    finalConstitution.innerHTML = Number(baseConstitution) + Number(player.conRace);
    player.con = Number(baseConstitution) + Number(player.conRace);

    baseIntel = document.getElementById("base-int").value;
    var finalIntel = document.getElementById("final-int");
    finalIntel.innerHTML = Number(baseIntel) + Number(player.intRace);
    player.int = Number(baseIntel) + Number(player.intRace);

    baseWisdom = document.getElementById("base-wis").value;
    var finalWisdom = document.getElementById("final-wis");
    finalWisdom.innerHTML = Number(baseWisdom) + Number(player.wisRace);
    player.wis = Number(baseWisdom) + Number(player.wisRace);

    baseCharisma = document.getElementById("base-cha").value;
    var finalCharisma = document.getElementById("final-cha");
    finalCharisma.innerHTML = Number(baseCharisma) + Number(player.chaRace);
    player.cha = Number(baseCharisma) + Number(player.chaRace);
}

const bgLangOne = document.getElementById("bg-lang-one")
const bgLangOneOptions = document.getElementById("bg-lang-one-drop")
const bgLangTwo = document.getElementById("bg-lang-two")
const bgLangTwoOptions = document.getElementById("bg-lang-two-drop")
const bgSkillOne = document.getElementById("bg-skill-one")
const bgSkillOneOptions = document.getElementById("bg-skill-one-drop")
const bgSkillTwo = document.getElementById("bg-skill-two")
const bgSkillTwoOptions = document.getElementById("bg-skill-two-drop")
const bgToolOne = document.getElementById("bg-tool-one")
const bgToolOneOptions = document.getElementById("bg-tool-one-drop")
const bgToolTwo = document.getElementById("bg-tool-two")
const bgToolTwoOptions = document.getElementById("bg-tool-two-drop")

function bgLanguageOneOptions() {
    if (bgLangOneOptions.value != "Pick Language") {
        player.languages.push(bgLangOneOptions.value) }
}

function bgLanguageTwoOptions() {
    if (bgLangTwoOptions.value != "Pick Language") {
        player.languages.push(bgLangTwoOptions.value) }
}

function applyBGSkillOne() {
    if (bgSkillOneOptions.value != "Pick Skill") {
        player.skillProficiencies.push(bgSkillOneOptions.value)
    }
}
function applyBGSkillTwo() {
    if (bgSkillTwoOptions.value != "Pick Skill") {
        player.skillProficiencies.push(bgSkillTwoOptions.value)
    }
}

function resetBackgrounds() {
    bgLangOne.classList.add("collapse");
    bgLangTwo.classList.add("collapse");
    bgSkillOne.classList.add("collapse");
    bgSkillTwo.classList.add("collapse");
    while (bgSkillOneOptions.firstChild) {bgSkillOneOptions.removeChild(bgSkillOneOptions.firstChild)};
    while (bgSkillTwoOptions.firstChild) {bgSkillTwoOptions.removeChild(bgSkillTwoOptions.firstChild)};
    while (bgToolOneOptions.firstChild) {bgToolOneOptions.removeChild(bgToolOneOptions.firstChild)};
    while (bgToolTwoOptions.firstChild) {bgToolTwoOptions.removeChild(bgToolTwoOptions.firstChild)};
    bgToolOne.classList.add("collapse");
    bgToolTwo.classList.add("collapse");
    player.skillProficiencies = [];
}

function showBackgroundOptions() {
    resetBackgrounds();
     if (player.background === 'Acolyte') {
         bgLangOne.classList.remove("collapse");
         bgLangTwo.classList.remove("collapse");
         player.skillProficiencies.push("Insight");
         player.skillProficiencies.push("Religion");
     } else if (player.background === 'Anthropologist') {
        bgLangOne.classList.remove("collapse");
        bgLangTwo.classList.remove("collapse");
        player.skillProficiencies.push("Insight");
        player.skillProficiencies.push("Religion");
    } else if (player.background === 'Archaeologist') {
        bgLangOne.classList.remove("collapse");
        bgToolOne.classList.remove("collapse");
        let bgTools = ["Pick a Tool","Cartographer's Tools", "Navigator's Tools"]
        for (i = 0; i < bgTools.length; i ++) {
            let toolOption = document.createElement("option");
            toolOption.innerHTML = bgTools[i]
            bgToolOneOptions.appendChild(toolOption)
        }
        player.skillProficiencies.push("History");
        player.skillProficiencies.push("Survival");
    } else if (player.background === 'Athlete') {
        bgLangOne.classList.remove("collapse");
        player.skillProficiencies.push("Acrobatics");
        player.skillProficiencies.push("Athletics");
        player.toolProficiencies.push("Land Vehicles");
    } else if (player.background === 'Charlatan') {
        player.skillProficiencies.push("Deception");
        player.skillProficiencies.push("Sleight of Hand");
        player.toolProficiencies.push("Disguise Kit");
        player.toolProficiencies.push("Forgery Kit");
    } else if (player.background === 'City Watch / Investigator') {
        bgLangOne.classList.remove("collapse");
        bgLangTwo.classList.remove("collapse");
        player.skillProficiencies.push("Athletics");
        player.skillProficiencies.push("Insight");
    } else if (player.background === 'Entertainer') {
        player.toolProficiencies.push("Disguise Kit");
        player.skillProficiencies.push("Acrobatics");
        player.skillProficiencies.push("Performance");
    } else if (player.background === 'Faction Agent') {
        bgLangOne.classList.remove("collapse");
        bgLangTwo.classList.remove("collapse");
        bgSkillOne.classList.remove("collapse")
        player.skillProficiencies.push("Insight");
    } else if (player.background === 'Far Traveler') {
        player.skillProficiencies.push("Insight");
        player.skillProficiencies.push("Perception");
        bgLangOne.classList.remove("collapse");
        bgToolOne.classList.remove("collapse");
        let bgTools = ["Pick a Tool"].concat(allInstruments.concat(gamingSets));
        for (i = 0; i < bgTools.length; i ++) {
            let toolOption = document.createElement("option");
            toolOption.innerHTML = bgTools[i]
            bgToolOneOptions.appendChild(toolOption)
        }
    } else if (player.background === 'Gladiator') {
        player.skillProficiencies.push("Insight");
        player.skillProficiencies.push("Perception");
        bgToolOne.classList.remove("collapse");
        let bgTools = ["Pick a Tool"].concat(allInstruments);
        for (i = 0; i < bgTools.length; i ++) {
            let toolOption = document.createElement("option");
            toolOption.innerHTML = bgTools[i]
            bgToolOneOptions.appendChild(toolOption)
        }
    } else if (player.background === 'Guild Artisan / Guild Merchant') {
        player.skillProficiencies.push("Insight");
        player.skillProficiencies.push("Persuasion");
        bgLangOneOptions.classList.remove("collapse");
        bgToolOne.classList.remove("collapse");
        let bgTools = ["Pick a Tool"].concat(artisansTools);
        for (i = 0; i < bgTools.length; i ++) {
            let toolOption = document.createElement("option");
            toolOption.innerHTML = bgTools[i]
            bgToolOneOptions.appendChild(toolOption)
        }
    } else if (player.background === 'Haunted One') {
        bgSkillOne.classList.remove("collapse");
        bgSkillTwo.classList.remove("collapse");
        let bgSkills = ["Pick a Skill", "Arcana", "Investigation", "Religion", "Survival"];

        for (i = 0; i < bgSkills.length; i++) {
            let skillOption = document.createElement("option");
            let skillOptionTwo = document.createElement("option");
            skillOption.innerHTML = bgSkills[i];
            skillOptionTwo.innerHTML = bgSkills[i];
            bgSkillOneOptions.appendChild(skillOption)
            bgSkillTwoOptions.appendChild(skillOptionTwo)
        }

        bgLangOneOptions.classList.remove("collapse");
        bgToolOne.classList.remove("collapse");
        let bgTools = ["Pick a Tool"].concat(artisansTools);
        for (i = 0; i < bgTools.length; i++) {
            let toolOption = document.createElement("option");
            toolOption.innerHTML = bgTools[i];
            bgToolOneOptions.appendChild(toolOption);
        }
    }
}

const subclassOne = document.getElementById("subclass-one")
const subclassTwo = document.getElementById("subclass-two")
const subclassOneDrop = document.getElementById("subclass-one-drop")
const subclassTwoDrop = document.getElementById("subclass-two-drop")
const utilitiesList = document.getElementById("utilities-list")
const artificerSubclasses = document.querySelectorAll(".subclass-one-artificer")
const artificerSecondSubclasses = document.querySelectorAll(".subclass-two-artificer")
const barbarianSubclasses = document.querySelectorAll(".subclass-one-barbarian")
const barbarianSecondSubclasses = document.querySelectorAll(".subclass-two-barbarian")
const bardSubclasses = document.querySelectorAll(".subclass-one-bard")
const bardSecondSubclasses = document.querySelectorAll(".subclass-two-bard")
const clericSubclasses = document.querySelectorAll(".subclass-one-cleric")
const clericSecondSubclasses = document.querySelectorAll(".subclass-two-cleric")
const druidSubclasses = document.querySelectorAll(".subclass-one-druid")
const druidSecondSubclasses = document.querySelectorAll(".subclass-two-druid")

const fighterSubclasses = document.querySelectorAll(".subclass-one-fighter")
const fighterSecondSubclasses = document.querySelectorAll(".subclass-two-fighter")
const monkSubclasses = document.querySelectorAll(".subclass-one-monk")
const monkSecondSubclasses = document.querySelectorAll(".subclass-two-monk")
const paladinSubclasses = document.querySelectorAll(".subclass-one-paladin")
const paladinSecondSubclasses = document.querySelectorAll(".subclass-two-paladin")
const rangerSubclasses = document.querySelectorAll(".subclass-one-ranger")
const rangerSecondSubclasses = document.querySelectorAll(".subclass-two-ranger")
const rogueSubclasses = document.querySelectorAll(".subclass-one-rogue")
const rogueSecondSubclasses = document.querySelectorAll(".subclass-two-rogue")

const sorcererSubclasses = document.querySelectorAll(".subclass-one-sorcerer")
const sorcererSecondSubclasses = document.querySelectorAll(".subclass-two-sorcerer")
const warlockSubclasses = document.querySelectorAll(".subclass-one-warlock")
const warlockSecondSubclasses = document.querySelectorAll(".subclass-two-warlock")
const wizardSubclasses = document.querySelectorAll(".subclass-one-wizard")
const wizardSecondSubclasses = document.querySelectorAll(".subclass-two-wizard")

function applyArtificer() {
    if ((player.class === 'Artificer' && player.classLevels >= 1) || (player.secondClass === 'Artificer' && player.secondClassLevels >= 1)) {
        player.utilities.push("Magical Tinkering");
        player.utilities.push("Spellcasting (Artificer)");
    }
    if ((player.class === 'Artificer' && player.classLevels >= 2) || (player.secondClass === 'Artificer' && player.secondClassLevels >= 2)) {
        player.utilities.push("Infuse Items");
    }
    if ((player.class === 'Artificer' && player.classLevels >= 3) || (player.secondClass === 'Artificer' && player.secondClassLevels >= 3)) {
        player.utilities.push("Right Tool for the Job");
    }
    if (player.class === 'Artificer' && player.classLevels >= 3) {
        for (i=0; i< artificerSubclasses.length; ++i) {artificerSubclasses[i].classList.remove("hide-element")};
        subclassOne.classList.remove("collapse");
    }
    if (player.secondClass === 'Artificer' && player.secondClassLevels >= 3) {
        for (i=0; i< artificerSecondSubclasses.length; ++i) {artificerSecondSubclasses[i].classList.remove("hide-element")};
        subclassTwo.classList.remove("collapse");
    }
    if ((player.class === 'Artificer' && player.classLevels >= 6) || (player.secondClass === 'Artificer' && player.secondClassLevels >= 6)) {
        player.utilities.push("Tool Expertise");
    }
    if ((player.class === 'Artificer' && player.classLevels >= 7) || (player.secondClass === 'Artificer' && player.secondClassLevels >= 7)) {
        player.utilities.push("Flash of Genius");
    }
    if ((player.class === 'Artificer' && player.classLevels >= 10) || (player.secondClass === 'Artificer' && player.secondClassLevels >= 10)) {
        player.utilities.push("Magic Item Adept");
    }
    if ((player.class === 'Artificer' && player.classLevels >= 11) || (player.secondClass === 'Artificer' && player.secondClassLevels >= 11)) {
        player.utilities.push("Spell-Storing Item");
    }
    if ((player.class === 'Artificer' && player.classLevels >= 14) || (player.secondClass === 'Artificer' && player.secondClassLevels >= 14)) {
        player.utilities.push("Magic Item Savant");
    }
    if ((player.class === 'Artificer' && player.classLevels >= 18) || (player.secondClass === 'Artificer' && player.secondClassLevels >= 18)) {
        player.utilities.push("Magic Item Master");
    }
    if ((player.class === 'Artificer' && player.classLevels >= 20) || (player.secondClass === 'Artificer' && player.secondClassLevels >= 20)) {
        player.utilities.push("Soul of Artifice");
    }
}

function applyBarbarian() {
    if ((player.class === 'Barbarian' && player.classLevels >= 1) || (player.secondClass === 'Barbarian' && player.secondClassLevels >= 1)) {
        player.utilities.push("Rage");
        player.utilities.push("Unarmored Defense");
    }
    if ((player.class === 'Barbarian' && player.classLevels >= 2) || (player.secondClass === 'Barbarian' && player.secondClassLevels >= 2)) {
        player.utilities.push("Reckless Attack");
        player.utilities.push("Danger Sense");
    }
    if (player.class === 'Barbarian' && player.classLevels >= 3) {
        for (i=0; i< barbarianSubclasses.length; ++i) {barbarianSubclasses[i].classList.remove("hide-element")};
        subclassOne.classList.remove("collapse");
    }
    if (player.secondClass === 'Barbarian' && player.secondClassLevels >= 3) {
        for (i=0; i< barbarianSecondSubclasses.length; ++i) {barbarianSecondSubclasses[i].classList.remove("hide-element")};
        subclassTwo.classList.remove("collapse");
    }
    if ((player.class === 'Barbarian' && player.classLevels >= 5) || (player.secondClass === 'Barbarian' && player.secondClassLevels >= 5)) {
        player.utilities.push("Extra Attack");
        player.utilities.push("Fast Movement");
    }
    if ((player.class === 'Barbarian' && player.classLevels >= 7) || (player.secondClass === 'Barbarian' && player.secondClassLevels >= 7)) {
        player.utilities.push("Feral Instinct");
    }
    if ((player.class === 'Barbarian' && player.classLevels >= 9) || (player.secondClass === 'Barbarian' && player.secondClassLevels >= 9)) {
        player.utilities.push("Brutal Critical");
    }
    if ((player.class === 'Barbarian' && player.classLevels >= 11) || (player.secondClass === 'Barbarian' && player.secondClassLevels >= 11)) {
        player.utilities.push("Relentless Rage");
    }
    if ((player.class === 'Barbarian' && player.classLevels >= 13) || (player.secondClass === 'Barbarian' && player.secondClassLevels >= 13)) {
        player.utilities.push("Brutal Critical (x2)");
    }
    if ((player.class === 'Barbarian' && player.classLevels >= 15) || (player.secondClass === 'Barbarian' && player.secondClassLevels >= 15)) {
        player.utilities.push("Persistent Rage");
    }
    if ((player.class === 'Barbarian' && player.classLevels >= 17) || (player.secondClass === 'Barbarian' && player.secondClassLevels >= 17)) {
        player.utilities.push("Brutal Critical (x3)");
    }
    if ((player.class === 'Barbarian' && player.classLevels >= 18) || (player.secondClass === 'Barbarian' && player.secondClassLevels >= 18)) {
        player.utilities.push("Indomitable Might");
    }
    if ((player.class === 'Barbarian' && player.classLevels >= 20) || (player.secondClass === 'Barbarian' && player.secondClassLevels >= 20)) {
        player.utilities.push("Primal Champiion");
    }
}

function applyBard() {
    if ((player.class === 'Bard' && player.classLevels >= 1) || (player.secondClass === 'Bard' && player.secondClassLevels >= 1)) {
        player.utilities.push("Spellcasting (Bard)");
        player.utilities.push("Bardic Inspiration");
    }
    if ((player.class === 'Bard' && player.classLevels >= 2) || (player.secondClass === 'Bard' && player.secondClassLevels >= 2)) {
        player.utilities.push("Jack of All Trades");
        player.utilities.push("Song of Rest");
    }
    if (player.class === 'Bard' && player.classLevels >= 3) {
        for (i=0; i< bardSubclasses.length; ++i) {bardSubclasses[i].classList.remove("hide-element")};
        subclassOne.classList.remove("collapse");
    }
    if (player.secondClass === 'Bard' && player.secondClassLevels >= 3) {
        for (i=0; i< bardSecondSubclasses.length; ++i) {bardSecondSubclasses[i].classList.remove("hide-element")};
        subclassTwo.classList.remove("collapse");
    }
    if ((player.class === 'Bard' && player.classLevels >= 5) || (player.secondClass === 'Bard' && player.secondClassLevels >= 5)) {
        player.utilities.push("Font of Inspiration");
    }
    if ((player.class === 'Bard' && player.classLevels >= 6) || (player.secondClass === 'Bard' && player.secondClassLevels >= 6)) {
        player.utilities.push("Countercharm");
    }
    if ((player.class === 'Bard' && player.classLevels >= 10) || (player.secondClass === 'Bard' && player.secondClassLevels >= 10)) {
        player.utilities.push("Expertise (Bard)");
        player.utilities.push("Magical Secrets")
    }
    if ((player.class === 'Bard' && player.classLevels >= 14) || (player.secondClass === 'Bard' && player.secondClassLevels >= 14)) {
        player.utilities.push("Magical Secrets (x2)")
    }
    if ((player.class === 'Bard' && player.classLevels >= 18) || (player.secondClass === 'Bard' && player.secondClassLevels >= 18)) {;
        player.utilities.push("Magical Secrets (x3)")
    }
    if ((player.class === 'Bard' && player.classLevels >= 20) || (player.secondClass === 'Bard' && player.secondClassLevels >= 20)) {;
        player.utilities.push("Superior Inspiration")
    }
}

function applyCleric() {
    if ((player.class === 'Cleric' && player.classLevels >= 1) || 
        (player.secondClass === 'Cleric' && player.secondClassLevels >= 1)) {
        player.utilities.push("Spellcasting (Cleric)");
        player.utilities.push("Divine Domain");
    }
    if (player.class === 'Cleric' && player.classLevels >= 1) {
        for (i=0; i< clericSubclasses.length; ++i) {clericSubclasses[i].classList.remove("hide-element")};
        subclassOne.classList.remove("collapse");
    }
    if (player.secondClass === 'Cleric' && player.secondClassLevels >= 1) {
        for (i=0; i< clericSecondSubclasses.length; ++i) {clericSecondSubclasses[i].classList.remove("hide-element")};
        subclassTwo.classList.remove("collapse");
    }
    if ((player.class === 'Cleric' && player.classLevels >= 2) || 
        (player.secondClass === 'Cleric' && player.secondClassLevels >= 2)) {
        player.utilities.push("Channel Divinity");
    }
    if ((player.class === 'Cleric' && player.classLevels >= 5) || 
        (player.secondClass === 'Cleric' && player.secondClassLevels >= 5)) {
        player.utilities.push("Destroy Undead (Max CR 1/2)");
    }
    if ((player.class === 'Cleric' && player.classLevels >= 8) || 
        (player.secondClass === 'Cleric' && player.secondClassLevels >= 8)) {
        player.utilities.push("Destroy Undead (Max CR 1)");
    }
    if ((player.class === 'Cleric' && player.classLevels >= 10) || 
        (player.secondClass === 'Cleric' && player.secondClassLevels >= 10)) {
        player.utilities.push("Divine Intervention");
    }
    if ((player.class === 'Cleric' && player.classLevels >= 11) || 
        (player.secondClass === 'Cleric' && player.secondClassLevels >= 11)) {
        player.utilities.push("Destroy Undead (Max CR 2)");
    }
    if ((player.class === 'Cleric' && player.classLevels >= 14) || 
        (player.secondClass === 'Cleric' && player.secondClassLevels >= 14)) {
        player.utilities.push("Destroy Undead (Max CR 3)");
    }
    if ((player.class === 'Cleric' && player.classLevels >= 17) || 
        (player.secondClass === 'Cleric' && player.secondClassLevels >= 17)) {
        player.utilities.push("Destroy Undead (Max CR 4)");
    }
    if ((player.class === 'Cleric' && player.classLevels >= 20) || 
        (player.secondClass === 'Cleric' && player.secondClassLevels >= 20)) {
        player.utilities.push("Automatic Divine Intervention");
    }
}

function applyDruid() {
    if ((player.class === 'Druid' && player.classLevels >= 1) ||
        (player.secondClass === 'Druid' && player.secondClassLevels >= 1)) {
        player.utilities.push("Spellcasting (Druid)");
    }
    if ((player.class === 'Druid' && player.classLevels >= 2) ||
        (player.secondClass === 'Druid' && player.secondClassLevels >= 2)) {
        player.utilities.push("Wild Shape");
    }
    if (player.class === 'Druid' && player.classLevels >= 3) {
        for (i=0; i< druidSubclasses.length; ++i) {druidSubclasses[i].classList.remove("hide-element")};
        subclassOne.classList.remove("collapse");
    }
    if (player.secondClass === 'Druid' && player.secondClassLevels >= 3) {
        for (i=0; i< druidSecondSubclasses.length; ++i) {druidSecondSubclasses[i].classList.remove("hide-element")};
        subclassTwo.classList.remove("collapse");
    }
    if ((player.class === 'Druid' && player.classLevels >= 18) ||
        (player.secondClass === 'Druid' && player.secondClassLevels >= 18)) {
        player.utilities.push("Timeless Body");
        player.utilities.push("Beast Spells");
    }
    if ((player.class === 'Druid' && player.classLevels >= 20) ||
        (player.secondClass === 'Druid' && player.secondClassLevels >= 20)) {
        player.utilities.push("Unlimited Wild Shape");
        player.utilities.push("Enhanced Beast Spells");
    }
}

function applyFighter() {
    if ((player.class === 'Fighter' && player.classLevels >= 1) ||
        (player.secondClass === 'Fighter' && player.secondClassLevels >= 1)) {
        player.utilities.push("Fighting Style");
        player.utilities.push("Second Wind");
    }
    if ((player.class === 'Fighter' && player.classLevels >= 2) ||
        (player.secondClass === 'Fighter' && player.secondClassLevels >= 2)) {
        player.utilities.push("Action Surge");
    }
    if (player.class === 'Fighter' && player.classLevels >= 3) {
        for (i=0; i< fighterSubclasses.length; ++i) {fighterSubclasses[i].classList.remove("hide-element")};
        subclassOne.classList.remove("collapse");
    }
    if (player.secondClass === 'Fighter' && player.secondClassLevels >= 3) {
        for (i=0; i< fighterSecondSubclasses.length; ++i) {fighterSecondSubclasses[i].classList.remove("hide-element")};
        subclassTwo.classList.remove("collapse");
    }
    if ((player.class === 'Fighter' && player.classLevels >= 5 && player.classLevels < 11) ||
        (player.secondClass === 'Fighter' && 11 > player.secondClassLevels >= 5 && player.secondClassLevels < 11)) {
        player.utilities.push("Second Attack");
    }
    if ((player.class === 'Fighter' && player.classLevels >= 9  && player.classLevels < 13) ||
        (player.secondClass === 'Fighter' && player.secondClassLevels >= 9 && player.secondClassLevels < 13)) {
        player.utilities.push("Indomitable x1");
    }
    if ((player.class === 'Fighter' && player.classLevels >= 11 && player.classLevels < 20) ||
        (player.secondClass === 'Fighter' && player.secondClassLevels >= 11 && player.secondClassLevels < 20)) {
        for (i=0;i < player.utilities.length; i++) {if (player.utilities[i] === "Second Attack"){player.utilities.splice(i, 1);}}
        player.utilities.push("Third Attack");
    }
    if ((player.class === 'Fighter' && player.classLevels >= 13 && player.classLevels < 17) ||
        (player.secondClass === 'Fighter' && player.secondClassLevels >= 13 && player.secondClassLevels < 17)) {
        player.utilities.push("Indomitable x2");
    }
    if ((player.class === 'Fighter' && player.classLevels >= 17) ||
        (player.secondClass === 'Fighter' && player.secondClassLevels >= 17)) {
        player.utilities.push("Indomitable x3");
    }
    if ((player.class === 'Fighter' && player.classLevels >= 20) ||
        (player.secondClass === 'Fighter' && player.secondClassLevels >= 20)) {
        for (i=0;i < player.utilities.length; i++) {if (player.utilities[i] === "Third Attack"){player.utilities.splice(i, 1);}}
        player.utilities.push("Fourth Attack");
    }
}

function applyMonk() {
    if ((player.class === 'Monk' && player.classLevels >= 1) ||
        (player.secondClass === 'Monk' && player.secondClassLevels >= 1)) {
        player.utilities.push("Unarmored Defense");
        player.utilities.push("Martial Arts");
    }
    if ((player.class === 'Monk' && player.classLevels >= 2) ||
        (player.secondClass === 'Monk' && player.secondClassLevels >= 2)) {
        player.utilities.push("Flurry of Blows (Ki)");
        player.utilities.push("Patient Defense (Ki)");
        player.utilities.push("Step of the Wind (Ki)");
        if ((player.class === 'Monk' && player.classLevels < 6) ||
        (player.secondClass === 'Monk' && player.secondClassLevels < 6)) {
        player.utilities.push("Unarmored Movement (10ft)");}
    }
    if (player.class === 'Monk' && player.classLevels >= 3) {
        for (i=0; i< monkSubclasses.length; ++i) {monkSubclasses[i].classList.remove("hide-element")};
        subclassOne.classList.remove("collapse");
    }
    if (player.secondClass === 'Monk' && player.secondClassLevels >= 3) {
        for (i=0; i< monkSecondSubclasses.length; ++i) {monkSecondSubclasses[i].classList.remove("hide-element")};
        subclassTwo.classList.remove("collapse");
    }
    if ((player.class === 'Monk' && player.classLevels >= 3) ||
        (player.secondClass === 'Monk' && player.secondClassLevels >= 3)) {
        player.utilities.push("Defelect Missiles");
    }
    if ((player.class === 'Monk' && player.classLevels >= 4) ||
        (player.secondClass === 'Monk' && player.secondClassLevels >= 4)) {
        player.utilities.push("Slow Fall");
    }
    if ((player.class === 'Monk' && player.classLevels >= 5) ||
        (player.secondClass === 'Monk' && player.secondClassLevels >= 5)) {
        player.utilities.push("Stunning Strike (Ki)");
        player.utilities.push("Second Attack");
    }
    if ((player.class === 'Monk' && player.classLevels >= 6) ||
        (player.secondClass === 'Monk' && player.secondClassLevels >= 6)) {
        player.utilities.push("Ki-Empowered Strikes");
        if ((player.class === 'Monk' && player.classLevels < 10) ||
        (player.secondClass === 'Monk' && player.secondClassLevels < 10)) {
        player.utilities.push("Unarmored Movement (15ft)");}
    }
    if ((player.class === 'Monk' && player.classLevels >= 7) ||
        (player.secondClass === 'Monk' && player.secondClassLevels >= 7)) {
        player.utilities.push("Evasion");
        player.utilities.push("Stillness of Mind");
    }
    if ((player.class === 'Monk' && player.classLevels >= 9) ||
        (player.secondClass === 'Monk' && player.secondClassLevels >= 9)) {
        player.utilities.push("Unarmored Movement (vertical, liquids)");
    }
    if ((player.class === 'Monk' && player.classLevels >= 10) ||
        (player.secondClass === 'Monk' && player.secondClassLevels >= 10)) {
        player.utilities.push("Purity of Body");}
    if ((player.class === 'Monk' && player.classLevels < 14 && player.classLevels >= 10) ||
        (player.secondClass === 'Monk' && player.secondClassLevels < 14 && player.secondClassLevels >= 10)) {
        player.utilities.push("Unarmored Movement (20ft)");}
    if ((player.class === 'Monk' && player.classLevels >= 13) ||
        (player.secondClass === 'Monk' && player.secondClassLevels >= 13)) {
        player.utilities.push("Tongue of the Sun and Moon");
    }
    if ((player.class === 'Monk' && player.classLevels >= 14) ||
        (player.secondClass === 'Monk' && player.secondClassLevels >= 14)) {
        player.utilities.push("Diamond Soul (Ki)");
    }
    if ((player.class === 'Monk' && player.classLevels < 18 && player.classLevels >= 14) ||
        (player.secondClass === 'Monk' && player.secondClassLevels < 18 && player.secondClassLevels >= 14)) {
        player.utilities.push("Unarmored Movement (25ft)");}
    if ((player.class === 'Monk' && player.classLevels >= 15) ||
        (player.secondClass === 'Monk' && player.secondClassLevels >= 15)) {
        player.utilities.push("Timeless Body");
    }
    if ((player.class === 'Monk' && player.classLevels >= 18) ||
        (player.secondClass === 'Monk' && player.secondClassLevels >= 18)) {
        player.utilities.push("Empty Body");
        player.utilities.push("Unarmored Movement (30ft)");
    }
    if ((player.class === 'Monk' && player.classLevels >= 20) ||
        (player.secondClass === 'Monk' && player.secondClassLevels >= 20)) {
        player.utilities.push("Perfect Self");
    }
}

function applyClasses() {
    utilitiesList.innerHTML ="Player Utilities";
    player.utilities = [];
    // subclassOneDrop.innerHTML = '<option>Choose First Subclass</option> <div class="dropdown-menu" aria-labelledby="subclass-one-label">'
    // subclassTwoDrop.innerHTML = '<option>Choose First Subclass</option> <div class="dropdown-menu" aria-labelledby="subclass-one-label">'
    

    if (document.getElementById("classOneDropdown").value === 'Artificer' || document.getElementById("classTwoDropdown").value === 'Artificer') {applyArtificer()};
    if (document.getElementById("classOneDropdown").value === 'Barbarian' || document.getElementById("classTwoDropdown").value === 'Barbarian') {applyBarbarian()};
    if (document.getElementById("classOneDropdown").value === 'Bard' || document.getElementById("classTwoDropdown").value === 'Bard') {applyBard()};
    if (document.getElementById("classOneDropdown").value === 'Cleric' || document.getElementById("classTwoDropdown").value === 'Cleric') {applyCleric()};
    if (document.getElementById("classOneDropdown").value === 'Druid' || document.getElementById("classTwoDropdown").value === 'Druid') {applyDruid()};
    if (document.getElementById("classOneDropdown").value === 'Fighter' || document.getElementById("classTwoDropdown").value === 'Fighter') {applyFighter()};
    if (document.getElementById("classOneDropdown").value === 'Monk' || document.getElementById("classTwoDropdown").value === 'Monk') {applyMonk()};
    if (document.getElementById("classOneDropdown").value === 'Paladin' || document.getElementById("classTwoDropdown").value === 'Paladin') {applyPaladin()};
    if (document.getElementById("classOneDropdown").value === 'Ranger' || document.getElementById("classTwoDropdown").value === 'Ranger') {applyRanger()};
    if (document.getElementById("classOneDropdown").value === 'Rogue' || document.getElementById("classTwoDropdown").value === 'Rogue') {applyRogue()};
    if (document.getElementById("classOneDropdown").value === 'Sorcerer' || document.getElementById("classTwoDropdown").value === 'Sorcerer') {applySorcerer()};
    if (document.getElementById("classOneDropdown").value === 'Warlock' || document.getElementById("classTwoDropdown").value === 'Warlock') {applyWarlock()};
    if (document.getElementById("classOneDropdown").value === 'Wizard' || document.getElementById("classTwoDropdown").value === 'Wizard') {applyWizard()};


    // Pushing utility list to the page
    for (i=0; i<player.utilities.length; ++i) {
        var classTrait = document.createElement("li");
        classTrait.innerHTML = player.utilities[i];
        classTrait.classList.add("list-group-item");
        classTrait.classList.add("skill-name");
        classTrait.classList.add("pt-0");
        classTrait.classList.add("pb-0");
        classTrait.classList.add("font-weight-light");
        utilitiesList.appendChild(classTrait) }
}



function refreshEverything() {
    refreshCore();
    refreshSubrace();
    calcAbRaceBonus();
    refreshAbScores();
    refreshSkillScores();
    refreshAllLanguages();
}