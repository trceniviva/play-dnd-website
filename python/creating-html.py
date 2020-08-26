#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Aug  2 13:38:47 2020

@author: tceniviva
"""

classes = ['Artificer',
           'Barbarian',
           'Bard',
           'Cleric',
           'Druid',
           'Fighter',
           'Monk',
           'Paladin',
           'Ranger',
           'Rogue',
           'Sorcerer',
           'Warlock',
           'Wizard']

for x in classes:
    print("""<button class="dropdown-item" type="button" id="""+ '"' + x.lower() + '">' + x + "</button>")
    
    
races = ['Changeling','Dragonborn','Dwarf','Elf','Genasi','Gnome','Goliath',
         'Half-elf','Half-orc','Halfling','Human','Kenku','Tabaxi','Tiefling',
         'Tortle','Warforged']

for x in races:
    print("<option>"+x+"</option>")
    
for x in list(range(0, 21)):
    print("<option>"+str(x)+"</option>")

for x in races:
    print ('''else if (player.race === "'''+x+'''") {}''')

for x in races:
    print("""<button class="dropdown-item" type="button" id="""+ '"' + x.lower() + '">' + x + "</button>")
    
languages = ['Abyssal','Celestial','Common','Daelkyr','DeepSpeech','Draconic','Dwarvish','Elvish','Giant','Gith',
             'Gnomish','Goblin','Halfling','Infernal','Kraul','Leonin','Loxodon','Marquesian','Minotaur',
             'Naush','Orc','Primordial','Quori','Riedran','Sylvan','Undercommon','Vedalken','Zemnian']

for x in languages:
    print("""<option class="language-"""+x.lower()+"""">"""+x+"""</option>""")

for x in languages:
    print(x.lower().replace(" ","") + ": false,")
    
for x in languages:
    print('for (i=0; i< '+x.lower()+'_i.length; ++i) {'+x.lower()+'_i[i].classList.add("hide-element")};')

for x in languages:
    print("else if (raceLangOneOptions.value === '"+x+"') {player."+x.lower()+" = true}")
    
for x in languages:
    print("""if (player."""+x.lower()+"""=== true) {
        for (i=0; i< """+x.lower()+"""_i.length; ++i) {"""+x.lower()+"""_i[i].classList.add("hide-element")};};""")

bgs = ['Acolyte','Anthropologist','Archaeologist','Athlete',
       'Charlatan','City Watch / Investigator','Clan Crafter',
       'Cloistered Scholar','Courtier','Criminal / Spy','Entertainer',
       'Faction Agent','Far Traveler','Fisher','Folk Hero','Gladiator',
       'Guild Artisan / Guild Merchant','Haunted One','Hermit',
       'Inheritor','Knight','Knight of the Order','Marine','Mercenary Veteran',
       'Noble','Outlander','Pirate','Sage','Sailor','Shipwright','Smuggler',
       'Soldier','Urban Bounty Hunter','Urchin']

for x in bgs:
    print("<option>" + x + "</option>")

skills = ['acrobatics','animalHandling','arcana','athletics',
          'deception','history','insight','intimidation','investigation',
          'medicine','nature','perception','performance','persuasion',
          'religion','sleightOfHand','stealth','survival']

for x in artisans:
    small = x.lower().replace("'","").replace(" ","-")
    big = x
    print('''<div class="form-check">
          <input class="form-check-input artisans-toolbox" type = "checkbox" value="" id="{}" disabled>
          <label class="form-check-label" for="{}">{}</label>
          </div>'''.format(small, small, big))

for x in skills:
    print('''var '''+x+''' = document.getElementById("'''+x+'''");''')
    print('''var '''+x+'''Value = Math.floor((Number(player.SKILLTYPE) - 10) / 2) + Number(player.'''+x+''');''')
    print(x+'''.innerHTML = '''+x+'''Value;''')

for x in skills:
    print(x + ": false,")

langOptionsInBackgroundOne = ''
    
for x in languages:
    langOptionsInBackgroundOne = langOptionsInBackgroundOne + " " + '''var ''' + x.lower() + '''Option = document.createElement("option"); \n'''
    langOptionsInBackgroundOne = langOptionsInBackgroundOne + " " + x.lower() + '''Option.innerHTML = "''' + x + '''"; \n'''
    langOptionsInBackgroundOne = langOptionsInBackgroundOne + " " + '''bgOptionOne.appendChild('''+ x.lower() + 'Option); \n'
    
    langOptionsInBackgroundOne = langOptionsInBackgroundOne + " " + '''var ''' + x.lower() + '''OptionTwo = document.createElement("option"); \n'''
    langOptionsInBackgroundOne = langOptionsInBackgroundOne + " " + x.lower() + '''OptionTwo.innerHTML = "''' + x + '''"; \n'''
    langOptionsInBackgroundOne = langOptionsInBackgroundOne + " " + '''bgOptionTwo.appendChild('''+ x.lower() + 'OptionTwo); \n'
    
import pyperclip as clip

clip.copy(langOptionsInBackgroundOne)

str(languages).replace("'","")

artisans = ["Alchemist's Supplies",
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