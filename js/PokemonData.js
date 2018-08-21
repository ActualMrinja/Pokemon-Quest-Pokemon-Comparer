var pokemondata = [
    {Name:"Bulbasaur",Nov:"001",HP:125,Attack:75,Moves:[0,1,2,3],
Bingos:["Hit Healing +2%",	"Healing from K.O. +2%","Own Knockback Distance -10%","Healing per Wave +50%","Resistant to Poisoned +100%","Own Knockback Distance -20%","ATK of Grass Type Moves +20%","HP +550","Own Knockback Distance -30%"]
    },
    {Name:"Ivysaur",Nov:"002",HP:400,Attack:100,Moves:[0,1,2,3,4,5,6],
Bingos:["Hit Healing +2%",	"Healing from K.O. +2%","Own Knockback Distance -10%","Healing per Wave +40%","Resistant to Poisoned +100%","Own Knockback Distance -20%","ATK of Grass Type Moves +15%","HP +250","Own Knockback Distance -30%"]
    },
    {Name:"Venusaur",Nov:"003",HP:550,Attack:150,Moves:[0,1,2,3,4,5,6,7,8,9],
Bingos:["Hit Healing +2%",	"Healing from K.O. +2%","Own Knockback Distance -10%","Ice-Type Damage Taken -50%","Resistant to Poisoned +100%","Own Knockback Distance -20%","ATK of Grass Type Moves +10%","Fire-Type Damage Taken -50%","Own Knockback Distance -30%"]
    },
    {Name:"Charmander",Nov:"004",HP:75,Attack:125,Moves:[10,11,12,13],
Bingos:["Fire Type Moves Wait -5%","Critical Hit Rate +5%","Movement Speed +30%","ATK of Fire Type Moves +15%","Critical Hit Rate +20%","Resistant to Burn +100%","ATK of Fire Type Moves +20%","ATK +550","Movement Speed +40%"]
    },
    {Name:"Charmeleon",Nov:"005",HP:100,Attack:400,Moves:[10,11,12,13,14,15,16],
Bingos:["Fire Type Moves Wait -5%","Critical Hit Rate +5%","Movement Speed +30%","ATK of Fire Type Moves +10%","Critical Hit Rate +15%","Resistant to Burn +100%","ATK of Fire Type Moves +15%","ATK +250","Movement Speed +40%"]
    },
    {Name:"Charizard",Nov:"006",HP:200,Attack:600,Moves:[10,11,12,13,14,15,16,17,18,19],
Bingos:["Fire Type Moves Wait -5%","Critical Hit Rate +5%","Movement Speed +30%","ATK of Fire Type Moves +5%","Critical Hit Rate +10%","Resistant to Burn +100%","ATK of Fire Type Moves +10%","Critical Hit Rate +15%","Movement Speed +40%"]
    },
    {Name:"Squirtle",Nov:"007",HP:100,Attack:100,Moves:[20,21,22,3],
Bingos:["ATK of Water Type Moves +5%","Water Type Moves Wait -5%","Natural HP Healing +10%","ATK of Water Type Moves +10%","Water Type Moves Wait -20%","Own Knockback Distance -20%","ATK of Water Type Moves +20%","ATK +550","HP +550"]
    },
    {Name:"Wartortle",Nov:"008",HP:250,Attack:250,Moves:[20,21,22,3,23,24,25],
Bingos:["ATK of Water Type Moves +5%","Water Type Moves Wait -5%","Natural HP Healing +10%","ATK of Water Type Moves +10%","Water Type Moves Wait -15%","Own Knockback Distance -20%","ATK of Water Type Moves +15%","ATK +350","HP +350"]
    },
    {Name:"Blastoise",Nov:"009",HP:400,Attack:400,Moves:[20,21,22,3,23,24,25,26,27,28],
Bingos:["ATK of Water Type Moves +5%","Water Type Moves Wait -5%","Natural HP Healing +10%","ATK of Water Type Moves +10%","Water Type Moves Wait -10%","Own Knockback Distance -20%","ATK of Water Type Moves +10%","Water Type Moves Wait -15%","Own Knockback Distance -30%"]
    },
    {Name:"Caterpie",Nov:"010",HP:110,Attack:90,Moves:[3,4,29,30],
Bingos:["Movement Speed +30%","Resistant to ↓ Effects +10%","Hit Healing +2%","Movement Speed +40%","Resistant to ↓ Effects +20%","Hit Healing +3%","ATK +500","Wait for Standard Attacks -50%","HP +500"]
    },
    {Name:"Metapod",Nov:"011",HP:275,Attack:25,Moves:[3,4,29,30,31,32,33],
Bingos:["Taking Critical Hits Rate -10%","Resistant to ↓ Effects +20%","Healing per wave +30%","Taking Critical Hits Rate -20%","Resistant to ↓ Effects +30%","Healing per wave +30%","Resistant to Status Conditions +30%","Own Knockback Distance -40%","HP +450"]
    },
   {Name:"Butterfree",Nov:"012",HP:150,Attack:250,Moves:[3,4,29,30,31,32,33,34,35,36],
Bingos:["Movement Speed +30%","Resistant to ↓ Effects +10%","Healing from K.O +5%","Movement Speed +40%","Resistant to ↓ Effects +10%","Own Knockback Distance -10%","ATK +400","Own Knockback Distance -20%","HP +500"]
    },
    {Name:"Weedle",Nov:"013",HP:100,Attack:100,Moves:[3,37,29,30],
Bingos:["Movement Speed +30%","Critical Hit Damage +5%","Bug Type Moves Wait -5%","Movement Speed +40%","Resistant to Poisoned +100%","Healing from K.O. +5%","HP +500","Natural HP Healing +30%","ATK +500"]
    },
    {Name:"Kakuna",Nov:"014",HP:250,Attack:50,Moves:[3,37,29,30,31,32,33],
Bingos:["Own Knockback Distance -20%","Critical Hit Damage +5%","HP upon Recovery +10%","Own Knockback Distance -20%","Resistant to Poisoned +100%","HP upon Recovery +10%","Own Knockback Distance -50%","HP upon Recovery +20%","HP +450"]
    },
   {Name:"Beedrill",Nov:"015",HP:150,Attack:250,Moves:[3,37,29,30,31,32,33,38,39,40],
Bingos:["Movement Speed +30%","Critical Hit Damage +10%","Bug Type Moves Wait -5%","Movement Speed +40%","Resistant to Poisoned +100%","Critical Hit Rate +10%","ATK of Bug Type Moves +20%","Critical Hit Damage +40%","ATK +500"]
    },
    {Name:"Pidgey",Nov:"016",HP:100,Attack:100,Moves:[41,42,43,44],
Bingos:["Resistant to ↓ Effects +10%","Movement Speed + 30%","ATK of Flying Type Moves +5%","Resistant to ↓ Effects +20%","Movement Speed + 50%","Flying Type Moves Wait -15%","Resistant to DEF↓ +100%	","ATK +550","Attack of Flying Type Moves +20%"]
    },
    {Name:"Pidgeotto",Nov:"017",HP:250,Attack:250,Moves:[41,42,43,44,38,45,46],
Bingos:["Resistant to ↓ Effects +10%","Movement Speed + 30%","ATK of Flying Type Moves +5%","Resistant to ↓ Effects +20%","Movement Speed + 40%","Flying Type Moves Wait -10%","Resistant to DEF↓ +100%	","ATK +350","Attack of Flying Type Moves +15%"]
    },
   {Name:"Pidgeot",Nov:"018",HP:400,Attack:400,Moves:[41,42,43,44,38,45,46,47,48,49],
Bingos:["Resistant to ↓ Effects +10%","Movement Speed + 30%","ATK of Flying Type Moves +5%","Resistant to ↓ Effects +20%","Movement Speed + 30%","Flying Type Moves Wait -10%","Resistant to DEF↓ +100%	","Movement Speed + 40%","Attack of Flying Type Moves +10%"]
    },
    {Name:"Rattata",Nov:"019",HP:75,Attack:125,Moves:[3,4,10,50,51],
Bingos:["ATK of Normal Type Moves +5%","Movement Speed + 30%","Time to Recover -10%","ATK of Normal Type Moves +5%","Movement Speed +40%","Wait for Standard Attacks -30%","ATK +550","Movement Speed +50%","HP +600"]
    },
   {Name:"Raticate",Nov:"020",HP:150,Attack:450,Moves:[3,4,10,50,51,52,53,54,55,56],
Bingos:["ATK of Normal Type Moves +5%","Movement Speed + 30%","Time to Recover -10%","ATK of Normal Type Moves +5%","Movement Speed +30%","Wait for Standard Attacks -25%","ATK +200","Movement Speed +30%","HP +500"]
    },
     {Name:"Spearow",Nov:"021",HP:75,Attack:125,Moves:[4,39,57,58,59],
Bingos:["ATK of Flying Type Moves +5%","Critical Hits Rate +5%","Critical Hit Damage +10%","ATK of Flying Type Moves +15%","Critical Hit Rate +15%","Critical Hit Damage +15%","ATK +400","Critical Hit Rate 20%","Critical Hit Damage +25%"]
    },
   {Name:"Fearow",Nov:"022",HP:100,Attack:500,Moves:[4,39,57,58,59,36,42,60,61,62],
Bingos:["ATK of Flying Type Moves +5%","Critical Hits Rate +5%","Critical Hit Damage +10%","ATK of Flying Type Moves +10%","Critical Hit Rate +10%","Critical Hit Damage +15%","ATK of Flying Type Moves +30%","Critical Hit Rate 15%","Critical Hit Damage +25%"]
    },
    {Name:"Ekans",Nov:"023",HP:80,Attack:120,Moves:[37,46,58,63,64],
Bingos:["Time to Recover -10%","Resistant to ↓ Effects +10%","Healing per Wave +30%","HP upon Recovery +20%","Resistant to Poisoned +100%","Wait for Standard Attacks -25%","ATK +550","Resistant to ↓ Effects +20%","Wait for Standard Attacks -50%"]
    },
   {Name:"Arbok",Nov:"024",HP:150,Attack:450,Moves:[37,46,58,63,64,50,55,65,66,67],
Bingos:["Time to Recover -10%","Resistant to ↓ Effects +10%","Healing per Wave +25%","HP upon Recovery +10%","Resistant to Poisoned +100%","Wait for Standard Attacks -20%","ATK +200","Resistant to ↓ Effects +20%","Wait for Standard Attacks -30%"]
    },
    {Name:"Pikachu",Nov:"025",HP:70,Attack:130,Moves:[55,68,69,70,71,25],
Bingos:["Electric Type Moves Wait -5%","ATK of Electric Type Moves +5%","Movement Speed +30%","Resistant to Paralyzed +100%","ATK of Electric Type Moves +15%","Movement Speed +20%","Electric-Type Damage Taken -50%","ATK of Electric Type Moves +50%","ATK +550"]
    },
   {Name:"Raichu",Nov:"026",HP:150,Attack:450,Moves:[55,68,69,70,71,38,72,73,74,75,25],
Bingos:["Electric Type Moves Wait -5%","ATK of Electric Type Moves +5%","Movement Speed +30%","Resistant to Paralyzed +100%","ATK of Electric Type Moves +15%","Movement Speed +40%","Electric-Type Damage Taken -50%","Electric Type Moves Wait -20%","ATK +200"]
    },
    {Name:"Sandshrew",Nov:"027",HP:80,Attack:120,Moves:[10,15,76,77,78],
Bingos:["Taking Critical Hits Rate -10%","Critical Hit Damage +5%","Movement Speed +30%","Taking Critical Hits Rate -20%","Critical Hits Rate +15%","Movement Speed +50%","Taking Critical Hits Rate -30%","ATK +550","Movement Speed +50%"]
    },
   {Name:"Sandslash",Nov:"028",HP:150,Attack:350,Moves:[10,15,76,77,78,39,56,67,79,80],
Bingos:["Taking Critical Hits Rate -10%","Critical Hit Damage +5%","Movement Speed +30%","Taking Critical Hits Rate -20%","Critical Hits Rate +15%","Movement Speed +40%","Taking Critical Hits Rate -30%","ATK +300","Movement Speed +50%"]
    },
    {Name:"Nidoran♀",Nov:"029",HP:140,Attack:60,Moves:[46,51,57,81,85],
Bingos:["Poison Type Moves Wait -5%","Normal Type Moves Wait -5%","Resistant to ↓ Effects +10%","Poison Type Moves Wait -20%","Normal Type Moves Wait -20%","Resistant to Poisoned +100%","Poison Type Moves Wait -20%","Normal Type Moves Wait -20%","HP +500"]
    },
   {Name:"Nidorina",Nov:"030",HP:325,Attack:175,Moves:[46,51,57,81,82,83,37,85],
Bingos:["Poison Type Moves Wait -5%","Normal Type Moves Wait -5%","Resistant to ↓ Effects +10%","Poison Type Moves Wait -15%","Normal Type Moves Wait -15%","Resistant to Poisoned +100%","Poison Type Moves Wait -15%","Normal Type Moves Wait -15%","HP +300"]
    },
    {Name:"Nidoqueen",Nov:"031",HP:600,Attack:200,Moves:[46,51,57,81,82,83,37,65,79,84,85],
Bingos:["Poison Type Moves Wait -5%","Normal Type Moves Wait -5%","Resistant to ↓ Effects +10%","Poison Type Moves Wait -10%","Normal Type Moves Wait -10%","Resistant to Poisoned +100%","Poison Type Moves Wait -10%","Normal Type Moves Wait -10%","Resistant to ↓ Effects +20%"]
    },
    {Name:"Nidoran♂",Nov:"032",HP:60,Attack:140,Moves:[4,7,55,86,89],
Bingos:["Taking Critical Hits Rate -10%","ATK of Normal Type Moves +5%","Own Knockback Distance -10%","Resistant to Poisoned +100%","Critical Hit Damage +15%","Own Knockback Distance -20%","ATK +500","Critical Hit Rate +20%","Own Knockback Distance -30%"]
    },
   {Name:"Nidorino",Nov:"033",HP:175,Attack:325,Moves:[4,7,55,86,57,64,87,89],
Bingos:["Taking Critical Hits Rate -10%","ATK of Normal Type Moves +5%","Own Knockback Distance -10%","Resistant to Poisoned +100%","Critical Hit Damage +10%","Own Knockback Distance -20%","Normal Type Moves Wait -15%","Critical Hit Rate +15%","Own Knockback Distance -30%"]
    },
    {Name:"Nidoking",Nov:"034",HP:200,Attack:600,Moves:[4,7,55,86,57,64,87,54,67,88,89],
Bingos:["Taking Critical Hits Rate -10%","ATK of Normal Type Moves +5%","Own Knockback Distance -10%","Resistant to Poisoned +100%","Critical Hit Damage +5%","Own Knockback Distance -20%","Critical Hit Damage +10%","Critical Hit Rate +10%","Own Knockback Distance -30%"]
    },
    {Name:"Clefairy",Nov:"035",HP:120,Attack:80,Moves:[4,78,90,91,92],
Bingos:["Pokemon Size Change -10%","Normal Type Moves Wait -10%","Resistant to ↓ Effects +10%","Pokemon Size Change -15%","Normal Type Moves Wait -20%","Resistant to Poisoned +100%","Pokemon Size Change -15%","HP +500","Resistant to Burn +100%"]
    },
    {Name:"Clefable",Nov:"036",HP:450,Attack:250,Moves:[4,78,90,91,92,87,93,94,95,96],
Bingos:["Pokemon Size Change -10%","Normal Type Moves Wait -5%","Resistant to ↓ Effects +10%","Pokemon Size Change -15%","Normal Type Moves Wait -10%","Resistant to Poisoned +100%","Pokemon Size Change -25%","Resistant to Burn +100%","Resistant to ↓ Effects +40%"]
    },
     {Name:"Vulpix",Nov:"037",HP:110,Attack:90,Moves:[11,16,17,97,98],
Bingos:["Fire Type Moves Wait -5%","ATK of Fire Type Moves +5%","Fire-Type Damage Taken -25%","Fire Type Moves Wait -10%","ATK of Fire Type Moves +15%","Resistant to Burn +100%","Fire Type Moves Wait -20%","ATK of Fire Type Moves +20%","HP +500"]
    },
    {Name:"Ninetales",Nov:"038",HP:550,Attack:250,Moves:[11,16,17,97,98,9,19,48,99,100],
Bingos:["Fire Type Moves Wait -5%","ATK of Fire Type Moves +5%","Fire-Type Damage Taken -25%","Fire Type Moves Wait -10%","ATK of Fire Type Moves +10%","Resistant to Burn +100%","Fire Type Moves Wait -15%","ATK of Fire Type Moves +15%","Time to Recover -10%"]
    },
    {Name:"Jigglypuff",Nov:"039",HP:140,Attack:60,Moves:[4,78,85,91,101],
Bingos:["Time to Recover -10%","ATK of Normal Type Moves +5%","Normal Type Moves Wait -5%","Pokemon Size Change +25%","ATK of Normal Type Moves +20%","Normal Type Moves Wait -15%","Pokemon Size Change +25%","HP +500","Normal Type Moves Wait -20%"]
    },
    {Name:"Wigglytuff",Nov:"040",HP:450,Attack:150,Moves:[4,78,85,91,101,102,103,104,105,106],
Bingos:["Time to Recover -10%","ATK of Normal Type Moves +5%","Normal Type Moves Wait -5%","Pokemon Size Change +25%","ATK of Normal Type Moves +15%","Normal Type Moves Wait -10%","Pokemon Size Change +25%","Dragon-Type Damage Taken -50%","Normal Type Moves Wait -15%"]
    },
    {Name:"Zubat",Nov:"041",HP:80,Attack:120,Moves:[41,42,54,82,107],
Bingos:["Hit Healing +1%","Movement Speed +30%","Resistant to ↓ Effects +10%","Hit Healing +2%","Movement Speed +40%","Resistant to Poisoned +100%","Hit Healing +3%","Movement Speed +50%","ATK +550"]
    },
    {Name:"Golbat",Nov:"042",HP:200,Attack:400,Moves:[41,42,54,82,107,43,49,65,83,108],
Bingos:["Hit Healing +1%","Movement Speed +30%","Resistant to ↓ Effects +10%","Hit Healing +2%","Movement Speed +40%","Resistant to Poisoned +100%","Hit Healing +3%","Movement Speed +50%","ATK +250"]
    },
     {Name:"Oddish",Nov:"043",HP:75,Attack:125,Moves:[0,5,91,109],
Bingos:["ATK of Grass Type Moves +5%","Movement Speed +30%","Resistant to ↓ Effects +10%","ATK of Grass Type Moves +20%","Movement Speed +40%","Resistant to Poisoned +100%","ATK of Grass Type Moves +20%","Grass Type Moves Wait -10%","ATK +500"]
    },
    {Name:"Gloom",Nov:"044",HP:250,Attack:350,Moves:[0,5,91,109,2,97,110],
Bingos:["ATK of Grass Type Moves +5%","Movement Speed +30%","Resistant to ↓ Effects +10%","ATK of Grass Type Moves +15%","Movement Speed +40%","Resistant to Poisoned +100%","ATK of Grass Type Moves +15%","Grass Type Moves Wait -15%","ATK +250"]
    },
    {Name:"Vileplume",Nov:"045",HP:300,Attack:500,Moves:[0,5,91,109,2,97,110,8,9,79],
Bingos:["ATK of Grass Type Moves +5%","Movement Speed +30%","Resistant to ↓ Effects +10%","ATK of Grass Type Moves +10%","Movement Speed +40%","Resistant to Poisoned +100%","ATK of Grass Type Moves +10%","Grass Type Moves Wait -10%","Hit Healing +3%"]
    },
    {Name:"Paras",Nov:"046",HP:80,Attack:120,Moves:[5,6,34,92,109],
Bingos:["Healing per Wave +30%","Grass Type Moves Wait -5%","Time to Recover -10%","Healing per Wave +40%","Grass Type Moves Wait -15%","HP upon Recovery +20%","Natural HP Healing +15%","Grass Type Moves Wait -20%","ATK +550"]
    },
    {Name:"Parasect",Nov:"047",HP:200,Attack:500,Moves:[5,6,34,92,109,15,38,110,111,112],
Bingos:["Healing per Wave +20%","Grass Type Moves Wait -5%","Time to Recover -10%","Healing per Wave +30%","Grass Type Moves Wait -10%","HP upon Recovery +10%","Natural HP Healing +10%","Grass Type Moves Wait -15%","Critical Hit Rate +20%"]
    },
    {Name:"Venonat",Nov:"048",HP:120,Attack:80,Moves:[5,29,91,109,112],
Bingos:["Resistant to ↓ Effects +10%","Resistant to Status Conditions +10%","Taking Critical Hits Rate -10%","Resistant to ↓ Effects +20%","Resistant to Poisoned +100%","Taking Critical Hits Rate -20%","Resistant to ↓ Effects +30%","Resistant to Status Conditions +30%","ATK +600"]
    },
    {Name:"Venomoth",Nov:"049",HP:350,Attack:350,Moves:[5,29,91,109,112,35,38,41,82,94],
Bingos:["Resistant to ↓ Effects +10%","Resistant to Status Conditions +10%","Taking Critical Hits Rate -10%","Resistant to ↓ Effects +20%","Resistant to Poisoned +100%","Taking Critical Hits Rate -15%","Resistant to ↓ Effects +30%","Resistant to Status Conditions +20%","HP +350"]
    },
    {Name:"Diglett",Nov:"050",HP:60,Attack:140,Moves:[46,57,63,76,84],
Bingos:["Ground Type Moves Wait -5%","ATK of Ground Type Moves +5%","Movement Speed +30%","Ground Type Moves Wait -15%","ATK of Normal Type Moves +15%","Movement Speed +40%","ATK +500","ATK of Ground Type Moves +20%","Movement Speed +50%"]
    },
    {Name:"Dugtrio",Nov:"051",HP:100,Attack:600,Moves:[46,57,63,76,84,64,66,67,113,114],
Bingos:["Ground Type Moves Wait -5%","ATK of Ground Type Moves +5%","Movement Speed +30%","Ground Type Moves Wait -10%","ATK of Normal Type Moves +10%","Movement Speed +30%","Critical Hit Rate +20%","ATK of Ground Type Moves +15%","Movement Speed +40%"]
    },
    {Name:"Meowth",Nov:"052",HP:85,Attack:115,Moves:[10,36,54,56,57],
Bingos:["Normal Type Moves Wait -5%","Movement Speed +30%","Critical Hit Rate +5%","Normal Type Moves Wait -15%","Movement Speed +40%","Critical Hit Damage +5%","Normal Type Moves Wait -20%","Movement Speed +50%","ATK +550"]
    },
    {Name:"Persian",Nov:"053",HP:300,Attack:400,Moves:[10,36,54,56,57,80,98,106,108,115],
Bingos:["Normal Type Moves Wait -5%","Movement Speed +30%","Critical Hit Rate +5%","Normal Type Moves Wait -10%","Movement Speed +40%","Resistant to Paralyzed +100%","Normal Type Moves Wait -15%","Movement Speed +40%","ATK +250"]
    },
    {Name:"Psyduck",Nov:"054",HP:80,Attack:120,Moves:[21,87,92,99,116],
Bingos:["Water Type Moves Wait -5%","Psychic Type Moves Wait -5%","Movement Speed +30%","Water Type Moves Wait -10%","Psychic Type Moves Wait -10%","Movement Speed +30%","ATK +500","ATK of Psychic Type Moves +20%","Movement Speed +40%"]
    },
    {Name:"Golduck",Nov:"055",HP:200,Attack:500,Moves:[21,87,92,99,116,28,63,94,112,117],
Bingos:["Water Type Moves Wait -5%","Psychic Type Moves Wait -5%","Movement Speed +30%","Water Type Moves Wait -10%","Psychic Type Moves Wait -10%","Movement Speed +30%","ATK of Water Type Moves +25%","ATK of Psychic Type Moves +15%","Movement Speed +30%"]
    },
    {Name:"Mankey",Nov:"056",HP:60,Attack:140,Moves:[10,54,58,56,118],
Bingos:["Fighting Type Moves Wait -5%","ATK of Normal Type Moves +5%","Resistant to ↓ Effects +20%","Fighting Type Moves Wait -10%","ATK of Normal Type Moves +15%","Resistant to Asleep +100%","ATK +500","Normal Type Moves Wait -20%","Resistant to ↓ Effects +30%"]
    },
    {Name:"Primeape",Nov:"057",HP:150,Attack:550,Moves:[10,54,58,56,118,80,101,119,120,121],
Bingos:["Fighting Type Moves Wait -5%","ATK of Normal Type Moves +5%","Resistant to ↓ Effects +20%","Fighting Type Moves Wait -10%","ATK of Normal Type Moves +10%","Resistant to Asleep +100%","ATK of Fighting Type Moves +20%","Normal Type Moves Wait -15%","Resistant to ↓ Effects +30%"]
    },
    {Name:"Growlithe",Nov:"058",HP:80,Attack:120,Moves:[11,16,17,52,98],
Bingos:["Fire-Type Damage Taken -25%","Fire Type Moves Wait -5%","ATK of Fire Type Moves +5%","Resistant to Burn +100%","Fire Type Moves Wait -15%","ATK of Fire Type Moves +15%","ATK +500","Fire Type Moves Wait -20%","ATK of Fire Type Moves +20%"]
    },
    {Name:"Arcanine",Nov:"059",HP:350,Attack:450,Moves:[11,16,17,52,98,18,19,38,50,122],
Bingos:["Fire-Type Damage Taken -25%","Fire Type Moves Wait -5%","ATK of Fire Type Moves +5%","Resistant to Burn +100%","Fire Type Moves Wait -10%","ATK of Fire Type Moves +10%","Normal Type Moves Wait -15%","Fire Type Moves Wait -15%","ATK of Fire Type Moves +15%"]
    },
    {Name:"Poliwag",Nov:"060",HP:90,Attack:110,Moves:[20,23,25,115],
Bingos:["ATK of Water Type Moves +5%","Critical Hit Damage +5%","Movement Speed +30%","ATK of Water Type Moves +20%","Water Type Moves Wait -20%","Water-Type Damage Taken -25%","ATK of Water Type Moves +25%","ATK +550","HP +600"]
    },
    {Name:"Poliwhirl",Nov:"061",HP:350,Attack:350,Moves:[20,23,25,115,87,101,123],
Bingos:["ATK of Water Type Moves +5%","Critical Hit Damage +5%","Movement Speed +30%","ATK of Water Type Moves +15%","Water Type Moves Wait -15%","Water-Type Damage Taken -25%","ATK of Water Type Moves +20%","ATK +300","HP +300"]
    },
    {Name:"Poliwrath",Nov:"062",HP:350,Attack:450,Moves:[20,23,25,115,87,101,123,104,124,125],
Bingos:["ATK of Water Type Moves +5%","Critical Hit Damage +5%","Movement Speed +30%","ATK of Water Type Moves +10%","Water Type Moves Wait -10%","Water-Type Damage Taken -25%","ATK of Water Type Moves +15%","ATK of Fighting Type Moves +20%","Water Type Moves Wait -15%"]
    },
    {Name:"Abra",Nov:"063",HP:45,Attack:155,Moves:[91,92,112,126],
Bingos:["Psychic Type Moves Wait -5%","Resistant to ↓ Effects +10%","Movement Speed +30%","Psychic Type Moves Wait -20%","Resistant to Poisoned +100%","Movement Speed +40%","ATK of Psychic Type Moves +30%","Resistant to Burn +100%","ATK +550"]
    },
    {Name:"Kadabra",Nov:"064",HP:90,Attack:410,Moves:[91,92,112,126,94,96,127],
Bingos:["Psychic Type Moves Wait -5%","Resistant to ↓ Effects +10%","Movement Speed +30%","Psychic Type Moves Wait -15%","Resistant to Poisoned +100%","Movement Speed +40%","ATK of Psychic Type Moves +25%","Resistant to Burn +100%","ATK +250"]
    },
    {Name:"Alkazam",Nov:"065",HP:100,Attack:700,Moves:[91,92,112,126,94,96,127,128,129,130],
Bingos:["Psychic Type Moves Wait -5%","Resistant to ↓ Effects +10%","Movement Speed +30%","Psychic Type Moves Wait -10%","Resistant to Poisoned +100%","Movement Speed +40%","ATK of Psychic Type Moves +20%","Resistant to Burn +100%","Movement Speed +50%"]
    },
    {Name:"Machop",Nov:"066",HP:80,Attack:120,Moves:[86,118,123,131],
Bingos:["ATK of Fighting Type Moves +5%","Fighting Type Moves Wait -5%","Own Knockback Distance -10%","ATK of Fighting Type Moves +20%","Fighting Type Moves Wait -20%","Own Knockback Distance -20%","ATK of Fighting Type Moves +20%","Fighting Type Moves Wait -20%","ATK +450"]
    },
    {Name:"Machoke",Nov:"067",HP:200,Attack:500,Moves:[86,118,123,131,89,101,120],
Bingos:["ATK of Fighting Type Moves +5%","Fighting Type Moves Wait -5%","Own Knockback Distance -10%","ATK of Fighting Type Moves +15%","Fighting Type Moves Wait -15%","Own Knockback Distance -20%","ATK of Fighting Type Moves +15%","Fighting Type Moves Wait -15%","Critical Hit Rate +20%"]
    },
    {Name:"Machamp",Nov:"068",HP:250,Attack:550,Moves:[86,118,123,131,89,101,120,104,121,124],
Bingos:["ATK of Fighting Type Moves +5%","Fighting Type Moves Wait -5%","Own Knockback Distance -10%","ATK of Fighting Type Moves +10%","Fighting Type Moves Wait -10%","Own Knockback Distance -20%","ATK of Fighting Type Moves +10%","Fighting Type Moves Wait -10%","ATK of Normal Type Moves +20%"]
    },
    {Name:"Bellsprout",Nov:"069",HP:80,Attack:120,Moves:[1,65,110,132],
Bingos:["Grass Type Moves Wait -5%","ATK of Grass Type Moves +5%","Critical Hit Rate +5%","Resistant to Poisoned +100%","ATK of Grass Type Moves +20%","Critical Hit Rate +20%","ATK +550","ATK of Grass Type Moves +20%","Critical Hit Damage +20%"]
    },
    {Name:"Weepinbell",Nov:"070",HP:250,Attack:350,Moves:[1,65,110,132,2,109,133],
Bingos:["Grass Type Moves Wait -5%","ATK of Grass Type Moves +5%","Critical Hit Rate +5%","Resistant to Poisoned +100%","ATK of Grass Type Moves +15%","Critical Hit Rate +15%","ATK +300","ATK of Grass Type Moves +15%","Critical Hit Damage +15%"]
    },
    {Name:"Victrebel",Nov:"071",HP:300,Attack:500,Moves:[1,65,110,132,2,109,133,9,79,134],
Bingos:["Grass Type Moves Wait -5%","ATK of Grass Type Moves +5%","Critical Hit Rate +5%","Resistant to Poisoned +100%","ATK of Grass Type Moves +10%","Critical Hit Rate +10%","Grass Type Moves Wait -10%","ATK of Grass Type Moves +10%","Critical Hit Damage +10%"]
    },
    {Name:"Tentacool",Nov:"072",HP:90,Attack:110,Moves:[20,21,37,65,127],
Bingos:["Natural HP Healing +10%","Water Type Moves Wait - 5%","Resistant to ↓ Effects +20%","Resistant to ↓ Effects +30%","Water Type Moves Wait -15%","Resistant to Poisoned +100%","HP +500","Water Type Moves Wait -20%","Resistant to ↓ Effects +50%"]
    },
    {Name:"Tentacruel",Nov:"073",HP:550,Attack:150,Moves:[20,21,37,65,127,28,82,99,116,117],
Bingos:["Natural HP Healing +10%","Water Type Moves Wait - 5%","Resistant to ↓ Effects +20%","Resistant to ↓ Effects +30%","Water Type Moves Wait -10%","Resistant to Poisoned +100%","Natural HP Healing +20%","Water Type Moves Wait -15%","Resistant to ↓ Effects +50%"]
    },
    {Name:"Geodude",Nov:"074",HP:140,Attack:60,Moves:[3,32,76,115],
Bingos:["ATK of Normal Type Moves +5%","ATK of Ground Type Moves +5%","Own Knockback Distance -10%","ATK of Normal Type Moves +20%","ATK of Ground Type Moves +20%","Own Knockback Distance -20%","HP +550","ATK of Ground Type Moves +25%","Own Knockback Distance -30%"]
    },
    {Name:"Graveler",Nov:"075",HP:610,Attack:90,Moves:[3,32,76,115,78,84,135],
Bingos:["ATK of Normal Type Moves +5%","ATK of Ground Type Moves +5%","Own Knockback Distance -10%","ATK of Normal Type Moves +15%","ATK of Ground Type Moves +15%","Critical Hit Damage +20%","ATK +450","ATK of Ground Type Moves +20%","Own Knockback Distance -30%"]
    },
    {Name:"Golem",Nov:"076",HP:700,Attack:100,Moves:[3,32,76,115,78,84,135,67,136,137],
Bingos:["ATK of Normal Type Moves +5%","ATK of Ground Type Moves +5%","Own Knockback Distance -10%","ATK of Normal Type Moves +10%","ATK of Ground Type Moves +10%","Critical Hit Damage +20%","ATK of Normal Type Moves +20%","ATK of Ground Type Moves +15%","Own Knockback Distance -30%"]
    },
    {Name:"Ponyta",Nov:"077",HP:100,Attack:100,Moves:[12,17,38,105,138],
Bingos:["Fire Type Moves Wait -5%","ATK of Fire Type Moves +5%","Movement Speed +30%","Fire Type Moves Wait -15%","Resistant to Burn +100%","Movement Speed +40%","Fire Type Moves Wait -20%","Fire-Type Damage Taken -50%","ATK +500"]
    },
    {Name:"Rapidash",Nov:"078",HP:400,Attack:400,Moves:[12,17,38,105,138,18,19,52,88,100],
Bingos:["Fire Type Moves Wait -5%","ATK of Fire Type Moves +5%","Movement Speed +30%","Fire Type Moves Wait -10%","Resistant to Burn +100%","Movement Speed +40%","Fire Type Moves Wait -15%","Fire-Type Damage Taken -50%","ATK of Fire Type Moves +25%"]
    },
    {Name:"Slowpoke",Nov:"079",HP:130,Attack:70,Moves:[3,53,57,92,125],
Bingos:["Healing per Wave +30%","Time to Recover -10%","HP +100","Resistant to Confused +100%","HP upon Recovery +10%","HP +200","Healing per Wave +40%","Time to Recover -20%","HP +350"]
    },
    {Name:"Slowbro",Nov:"080",HP:650,Attack:150,Moves:[3,53,57,92,125,22,25,87,95,102],
Bingos:["Healing per Wave +20%","Time to Recover -10%","Taking Critical Hits Rate -25%","Resistant to Confused +100%","HP upon Recovery +10%","Taking Critical Hits Rate -25%","Healing per Wave +30%","Time to Recover -15%","Taking Critical Hits Rate -50%"]
    },
    {Name:"Magnemite",Nov:"081",HP:80,Attack:120,Moves:[31,74,82,139,140],
Bingos:["ATK of Electric Type Moves +5%","Electric Type Moves Wait -5%","Steel Type Moves Wait -10%","ATK of Electric Type Moves +15%","Electric Type Moves Wait -15%","Resistant to Poisoned +100%","Resistant to Paralyzed +100%","Steel Type Moves Wait -15%","ATK +500"]
    },
    {Name:"Magneton",Nov:"082",HP:300,Attack:400,Moves:[31,74,82,139,140,70,72,73,92,136],
Bingos:["ATK of Electric Type Moves +5%","Electric Type Moves Wait -5%","Steel Type Moves Wait -10%","ATK of Electric Type Moves +10%","Electric Type Moves Wait -10%","Resistant to Poisoned +100%","Resistant to Paralyzed +100%","Normal Type Moves Wait -10%","ATK of Electric Type Moves +30%"]
    },
    {Name:"Farfetch'd",Nov:"083",HP:350,Attack:350,Moves:[36,41,46,47,48,49,60,66,79,80],
Bingos:["Flying Type Moves Wait -10%","Critical Hit Rate +15%","Critical Hit Damage +10%","Flying Type Moves Wait -10%","Critical Hit Rate +10%","Critical Hit Damage +20%","Flying Type Moves Wait -15%","Critical Hit Rate +20%","ATK +300"]
    },
     {Name:"Doduo",Nov:"084",HP:80,Attack:120,Moves:[4,38,57,61,115],
Bingos:["Wait for Standard Attacks -20%","Flying Type Moves Wait -5%","Movement Speed +30%","Wait for Standard Attacks -30%","Flying Type Moves Wait -15%","Movement Speed +40%","Movement Speed +50%","Flying Type Moves Wait -20%","ATK +500"]
    },
    {Name:"Dodrio",Nov:"085",HP:200,Attack:500,Moves:[4,38,57,61,115,39,43,62,79,89],
Bingos:["Wait for Standard Attacks -20%","Flying Type Moves Wait -5%","Movement Speed +30%","Wait for Standard Attacks -25%","Flying Type Moves Wait -10%","Movement Speed +40%","Movement Speed +50%","Flying Type Moves Wait -15%","ATK of Normal Type Moves +30%"]
    },
     {Name:"Seel",Nov:"086",HP:110,Attack:90,Moves:[4,25,27,57,141],
Bingos:["Water Type Moves Wait -5%","ATK of Water Type Moves +5%","Resistant to Status Conditions +10%","Fire-Type Damage Taken -25%","Resistant to Status Conditions +30%","Ice-Type Damage Taken -25%","Fire-Type Damage Taken -25%","HP +550","Ice-Type Damage Taken -25%"]
    },
    {Name:"Dewgong",Nov:"087",HP:500,Attack:300,Moves:[4,25,27,57,141,24,26,102,133,142],
Bingos:["Water Type Moves Wait -5%","ATK of Water Type Moves +5%","Resistant to Status Conditions +10%","Fire-Type Damage Taken -25%","Resistant to Frozen 100%","Ice-Type Damage Taken -25%","Fire-Type Damage Taken -25%","Natural HP Healing +10%","Ice-Type Damage Taken -25%"]
    },
    {Name:"Grimer",Nov:"088",HP:110,Attack:90,Moves:[3,7,83,133,143],
Bingos:["Poison Type Moves Wait -5%","Natural HP Healing +10%","Pokemon Size Change -10%","Poison Type Moves Wait -15%","Pokemon Size Change -15%","Resistant to Poisoned +100%","Pokemon Size Change -25%","HP +550","Poison Type Moves Wait -20%"]
    },
    {Name:"Muk",Nov:"089",HP:650,Attack:150,Moves:[3,7,83,133,143,13,54,64,124,141],
Bingos:["Poison Type Moves Wait -5%","Natural HP Healing +10%","Pokemon Size Change -10%","Poison Type Moves Wait -10%","Pokemon Size Change -15%","Resistant to Poisoned +100%","Pokemon Size Change -25%","Natural HP Healing +20%","Poison Type Moves Wait -15%"]
    },
    {Name:"Shellder",Nov:"090",HP:120,Attack:80,Moves:[20,22,33,117,127],
Bingos:["Resistant to Status Conditions +10%","Taking Critical Hits Rate -25%","Movement Speed +30%","Resistant to Status Conditions +30%","Taking Critical Hits Rate -25%","Movement Speed +40%","Water Type Moves Wait -20%","Taking Critical Hits Rate -50%","HP +500"]
    },
    {Name:"Cloyster",Nov:"091",HP:575,Attack:225,Moves:[20,22,33,117,127,82,116,144,145,146],
Bingos:["Resistant to Status Conditions +10%","Taking Critical Hits Rate -25%","Movement Speed +30%","Resistant to Frozen +100%","Taking Critical Hits Rate -25%","Movement Speed +20%","Ice Type Moves Wait -15%","Taking Critical Hits Rate -50%","Resistant to Status Conditions +40%"]
    },
     {Name:"Gastly",Nov:"092",HP:50,Attack:150,Moves:[66,141,147,148],
Bingos:["Ghost Type Moves Wait -5%","ATK of Ghost Type Moves +5%","Normal Type Damage Taken -25%","ATK of Ghost Type Moves +20%","Resistant to Poisoned +100%","Fighting Type Damage Taken -25%","ATK +500","Ground Type Damage Taken -50%","Ghost Type Moves Wait -20%"]
    },
    {Name:"Haunter",Nov:"093",HP:125,Attack:575,Moves:[66,141,147,148,7,99,149],
Bingos:["Ghost Type Moves Wait -5%","ATK of Ghost Type Moves +5%","Normal Type Damage Taken -25%","ATK of Ghost Type Moves +15%","Resistant to Poisoned +100%","Fighting Type Damage Taken -25%","ATK of Ghost Type Moves +20%","Ground Type Damage Taken -50%","Ghost Type Moves Wait -15%"]
    },
    {Name:"Gengar",Nov:"094",HP:150,Attack:650,Moves:[66,141,147,148,7,99,149,8,100,129],
Bingos:["Ghost Type Moves Wait -5%","ATK of Ghost Type Moves +5%","Normal Type Damage Taken -25%","ATK of Ghost Type Moves +10%","Resistant to Poisoned +100%","Fighting Type Damage Taken -25%","ATK of Ghost Type Moves +15%","Normal-Type Damage Taken -25%","Ghost Type Moves Wait -10%"]
    },
     {Name:"Onix",Nov:"095",HP:600,Attack:100,Moves:[32,55,64,77,84,86,98,113,137,139],
Bingos:["ATK of Rock Type Moves +5%","Movement Speed +30%","Rock Type Moves Wait -5%","ATK of Rock Type Moves +15%","Movement Speed +40%","Rock Type Moves Wait -10%","ATK of Rock Type Moves +20%","Movement Speed +50%","Rock Type Moves Wait -15%"]
    },
     {Name:"Drowzee",Nov:"096",HP:120,Attack:80,Moves:[54,91,92,112,127],
Bingos:["Psychic Type Moves Wait -5%","Healing per Wave +30%","Resistant to ↓ Effects +10%","Healing per Wave +40%","Resistant to Asleep +100%","Psychic Type Moves Wait -15%","HP +600","Resistant to ↓ Effects +30%","Psychic Type Moves Wait -20%"]
    },
     {Name:"Hypno",Nov:"097",HP:500,Attack:200,Moves:[54,91,92,112,127,81,94,119,129,149],
Bingos:["Psychic Type Moves Wait -5%","Healing per Wave +20%","Resistant to ↓ Effects +10%","Healing per Wave +30%","Resistant to Asleep +100%","Psychic Type Moves Wait -10%","HP +250","Resistant to ↓ Effects +30%","Psychic Type Moves Wait -15%"]
    },
     {Name:"Krabby",Nov:"098",HP:70,Attack:130,Moves:[25,32,58,115,138],
Bingos:["ATK of Normal Type Moves +5%","Taking Critical Hits Rate -20%","Resistant to ↓ Effects +10%","ATK of Normal Type Moves +15%","Resistant to ↓ Effects +30%","Taking Critical Hits Rate -30%","Taking Critical Hits Rate -50%","Resistant to Damage Down +100%","ATK +500"]
    },
     {Name:"Kingler",Nov:"099",HP:100,Attack:600,Moves:[25,32,58,115,138,4,15,75,79,133],
Bingos:["ATK of Normal Type Moves +5%","Taking Critical Hits Rate -20%","Resistant to ↓ Effects +10%","ATK of Normal Type Moves +10%","Resistant to ↓ Effects +20%","Taking Critical Hits Rate -30%","Taking Critical Hits Rate -50%","Resistant to Damage Down +100%","ATK of Normal Type Moves +20%"]
    },
    {Name:"Voltorb",Nov:"100",HP:110,Attack:90,Moves:[3,54,68,78,135],
Bingos:["ATK of Normal Type Moves +5%","Normal Type Moves Wait -5%","Movement Speed +50%","Movement Speed +50%","ATK of Normal Type Moves +15%","Resistant to Paralyzed +100%","Movement Speed +100%","Normal Type Moves Wait -20%","ATK +700"]
    },
    {Name:"Electrode",Nov:"101",HP:400,Attack:300,Moves:[3,54,68,78,135,66,69,74,92,136],
Bingos:["ATK of Normal Type Moves +5%","Normal Type Moves Wait -5%","Movement Speed +50%","Movement Speed +50%","ATK of Normal Type Moves +10%","Resistant to Paralyzed +100%","Movement Speed +100%","Normal Type Moves Wait -10%","ATK +400"]
    },
    {Name:"Exeggcute",Nov:"102",HP:130,Attack:70,Moves:[2,6,65,91,94],
Bingos:["ATK of Grass Type Moves +5%","Grass Type Moves Wait -5%","Wait for Standard Attacks -20%","ATK of Grass Type Moves +15%","Grass Type Moves Wait -15%","Wait for Standard Attacks -25%","ATK +600","Grass Type Moves Wait -20%","Wait for Standard Attacks -30%"]
    },
    {Name:"Exeggutor",Nov:"103",HP:250,Attack:550,Moves:[2,6,65,91,94,9,109,110,138,150],
Bingos:["ATK of Grass Type Moves +5%","Grass Type Moves Wait -5%","Wait for Standard Attacks -15%","ATK of Grass Type Moves +15%","Grass Type Moves Wait -10%","Wait for Standard Attacks -15%","ATK of Psychic Type Moves +30%","Grass Type Moves Wait -15%","Psychic Type Moves Wait -15%"]
    },
    {Name:"Cubone",Nov:"104",HP:130,Attack:70,Moves:[51,57,58,77,151],
Bingos:["Taking Critical Hits Rate -20%","Electric-Type Damage Taken -10%","Ground Type Moves Wait -5%","ATK of Ground Type Moves +15%","Electric-Type Damage Taken -15%","Taking Critical Hits -30%","Electric-Type Damage Taken -30%","Taking Critical Hits -50%","ATK +550"]
    },
    {Name:"Marowak",Nov:"105",HP:525,Attack:175,Moves:[51,57,58,77,151,39,64,67,95,152],
Bingos:["Taking Critical Hits Rate -20%","Electric-Type Damage Taken -10%","Ground Type Moves Wait -5%","ATK of Ground Type Moves +10%","Electric-Type Damage Taken -15%","Taking Critical Hits -30%","Electric-Type Damage Taken -30%","Taking Critical Hits -50%","ATK +500"]
    },
    {Name:"Hitmonlee",Nov:"106",HP:50,Attack:650,Moves:[51,66,86,105,118,119,121,123,131,154],
Bingos:["ATK of Fighting Type Moves +5%","Fighting Type Moves Wait -5%","Movement Speed +30%","ATK of Fighting Type Moves +15%","Resistant to Paralyzed +100%","Critical Hit Damage +10%","ATK of Fighting Type Moves +20%","Fighting Type Moves Wait -20%","Critical Hit Rate +15%"]
    },
    {Name:"Hitmonchan",Nov:"107",HP:75,Attack:625,Moves:[13,86,101,104,121,124,125,153,155,156],
Bingos:["Critical Hit Damage +5%","Resistant to ↓ Effects +10%","Movement Speed +30%","Resistant To Status Conditions +20%","Critical Hit Rate +10%","Resistant to ↓ Effects +20%","Wait for Standard Attacks -75%","Critical Hit Damage +15%","ATK of Fighting Type Moves +20%"]
    },
     {Name:"Lickitung",Nov:"108",HP:600,Attack:100,Moves:[55,78,86,87,95,101,124,133,138,141],
Bingos:["ATK of Normal Type Moves +5%","Resistant to Status Conditions +10%","Resistant to ↓ Effects +10%","ATK of Normal Type Moves +15%","Resistant to Status Conditions +15%","Resistant to Confused +100%","ATK of Normal Type Moves +20%","Resistant to Status Conditions +25%","Resistant to ↓ Effects +30%"]
    },
     {Name:"Koffing",Nov:"109",HP:140,Attack:60,Moves:[16,65,135,148,157],
Bingos:["Poison Type Moves Wait -5%","Ground-Type Damage Taken -20%","ATK of Poison Type Moves +5%","Poison Type Moves Wait -15%","ATK of Poison Type Moves +15%","Resistant to Poisoned +100%","Ground-Type Damage Taken -30%","Poison Type Moves Wait -20%","ATK +550"]
    },
     {Name:"Weezing",Nov:"110",HP:450,Attack:350,Moves:[16,65,135,148,157,7,83,100,129,136],
Bingos:["Poison Type Moves Wait -5%","Ground-Type Damage Taken -20%","ATK of Poison Type Moves +5%","Poison Type Moves Wait -10%","ATK of Poison Type Moves +10%","Resistant to Poisoned +100%","Ground-Type Damage Taken -30%","Poison Type Moves Wait -15%","ATK of Poison Type Moves +20%"]
    },
     {Name:"Rhyhorn",Nov:"111",HP:120,Attack:80,Moves:[4,50,55,98,138],
Bingos:["Critical Hit Damage +5%","Own Knockback Distance -10%","Electric-Type Damage Taken -10%","Critical Hit Damage +15%","Electric-Type Damage Taken -15%","Own Knockback Distance -20%","Critical Hit Damage +20%","Electric-Type Damage Taken -25%","Own Knockback Distance -30%"]
    },
     {Name:"Rhydon",Nov:"112",HP:300,Attack:500,Moves:[4,50,55,98,138,67,86,88,137,158],
Bingos:["Critical Hit Damage +5%","Own Knockback Distance -10%","Electric-Type Damage Taken -10%","Critical Hit Damage +10%","Electric-Type Damage Taken -15%","Own Knockback Distance -20%","Critical Hit Damage +15%","Electric-Type Damage Taken -25%","Own Knockback Distance -30%"]
    },
     {Name:"Chansey",Nov:"113",HP:675,Attack:25,Moves:[4,85,86,92,93,97,101,103,115,150],
Bingos:["Normal Type Moves Wait -5%","Ghost-Type Damage Taken -10%","Resistant to Status Conditions +10%","Ghost-Type Damage Taken -15%","Resistant to Status Conditions +20%","Normal Type Moves Wait -10%","Critical Hit Rate +30%","Resistant to Status Conditions +30%","Pokemon Size Change -50%"]
    },
     {Name:"Tangela",Nov:"114",HP:400,Attack:300,Moves:[1,2,6,8,34,87,102,109,133,159],
Bingos:["Grass Type Moves Wait -5%","HP upon Recovery +10%","Natural HP Healing +10%","Grass Type Moves Wait -5%","Resistant to Status Conditions +50%","Healing per Wave +30%","Grass Type Moves Wait -5%","Resistant to Status Conditions +50%","Healing per Wave +40%"]
    },
     {Name:"Kangaskhan",Nov:"115",HP:350,Attack:350,Moves:[4,50,51,58,64,101,102,124,138,152],
Bingos:["ATK of Normal Type Moves +5%","Resistant to Status Conditions +10%","Own Knockback Distance -10%","ATK of Normal Type Moves +15%","Resistant to Status Conditions +15%","Own Knockback Distance -15%","ATK of Normal Type Moves +20%","Normal Type Moves Wait -15%","Own Knockback Distance -25%"]
    },
     {Name:"Horsea",Nov:"116",HP:90,Attack:110,Moves:[20,21,38,44,116],
Bingos:["Water Type Moves Wait -5%","ATK of Water Type Moves +5%","Critical Hit Damage +10%","Water Type Moves Wait -15%","ATK of Water Type Moves +15%","Critical Hit Damage +15%","ATK +600","Critical Hit Damage +25%","Water Type Moves Wait -20%"]
    },
     {Name:"Seadra",Nov:"117",HP:250,Attack:450,Moves:[20,21,38,44,116,28,117,139,160,161],
Bingos:["Water Type Moves Wait -5%","ATK of Water Type Moves +5%","Critical Hit Damage +10%","Water Type Moves Wait -10%","ATK of Water Type Moves +10%","Critical Hit Damage +15%","ATK of Water Type Moves +20%","Critical Hit Damage +25%","Water Type Moves Wait -15%"]
    },
     {Name:"Goldeen",Nov:"118",HP:70,Attack:130,Moves:[4,24,25,115,162],
Bingos:["ATK of Water Type Moves +5%","Normal Type Moves Wait -5%","Electric-Type Damage Taken -10%","ATK of Water Type Moves +15%","Resistant to Burn +100%","Electric-Type Damage Taken -20%","Water Type Moves Wait -20%","ATK +500","Electric-Type Damage Taken -30%"]
    },
     {Name:"Seaking",Nov:"119",HP:350,Attack:450,Moves:[4,24,25,115,162,23,38,82,88,105],
Bingos:["ATK of Water Type Moves +5%","Normal Type Moves Wait -5%","Electric-Type Damage Taken -10%","ATK of Water Type Moves +10%","Resistant to Burn +100%","Electric-Type Damage Taken -20%","Water Type Moves Wait -15%","ATK of Water Type Moves +20%","Electric-Type Damage Taken -30%"]
    },
    {Name:"Staryu",Nov:"120",HP:60,Attack:140,Moves:[44,91,116,117,139],
Bingos:["Water Type Moves Wait -5%","Ice Type Moves Wait -5%","Movement Speed +30%","Water Type Moves Wait -15%","Pokemon Size Change -10%","Movement Speed +40%","Water Type Moves Wait -20%","Pokemon Size Change -15%","ATK +500"]
    },
     {Name:"Starmie",Nov:"121",HP:150,Attack:650,Moves:[44,91,116,117,139,27,28,94,99,134],
Bingos:["Water Type Moves Wait -5%","Ice Type Moves Wait -5%","Movement Speed +30%","Water Type Moves Wait -10%","Pokemon Size Change -10%","Movement Speed +15%","Water Type Moves Wait -15%","Pokemon Size Change -15%","ATK of Water Type Moves +30%"]
    },
     {Name:"Mr.Mime",Nov:"122",HP:575,Attack:125,Moves:[54,90,92,94,97,108,119,127,149,159],
Bingos:["Psychic Type Moves Wait -5%","Resistant to ↓ Effects +10%","ATK of Psychic Type Moves +15%","Psychic Type Moves Wait -10%","Resistant to ↓ Effects +20%","ATK of Psychic Type Moves +20%","Psychic Type Moves Wait -15%","Dragon-Type Damage Taken -50%","ATK +500"]
    },
    {Name:"Scyther",Nov:"123",HP:100,Attack:700,Moves:[30,35,36,38,39,43,60,79,80,86],
Bingos:["ATK of Bug Type Moves +5%","Bug Type Moves Wait -5%","Movement Speed +30%","ATK of Bug Type Moves +15%","Bug Type Moves Wait -10%","Movement Speed +40%","Bug Type Moves Wait -15%","ATK of Bug Type Moves +20%","Movement Speed +50%"]
    },
    {Name:"Jynx",Nov:"124",HP:150,Attack:550,Moves:[27,85,91,94,103,112,117,119,142,163],
Bingos:["Fairy Type Moves Wait -5%","Psychic Type Moves Wait -5%","Ice Type Moves Wait -5%","ATK of Ice Type Moves +15%","ATK of Psychic Type Moves +15%","Resistant to Frozen +100%","Water-Type Damage Taken -50%","ATK of Ice Type Moves +20%","ATK of Psychic Type Moves +20%"]
    },
     {Name:"Electabuzz",Nov:"125",HP:300,Attack:400,Moves:[31,68,70,72,74,104,119,120,124,156],
Bingos:["ATK of Electric Type Moves +5%","Electric Type Moves Wait -5%","ATK of Fighting Type Moves +5%","ATK of Electric Type Moves +15%","Electric Type Moves Wait -10%","Resistant to Paralyzed +100%","ATK of Electric Type Moves +20%","Electric Type Moves Wait -15%","Resistant to Asleep +100%"]
    },
    {Name:"Magmar",Nov:"126",HP:175,Attack:525,Moves:[11,16,18,19,90,95,100,120,148,157],
Bingos:["ATK of Fire Type Moves +5%","Fire Type Moves Wait -5%","Wait for Standard Attacks -25%","ATK of Fire Type Moves +15%","Fire Type Moves Wait -10%","Resistant to Burn +100%","Critical Hit Damage +30%","ATK of Fire Type Moves +20%","Resistant to Asleep +100%"]
    },
     {Name:"Pinsir",Nov:"127",HP:75,Attack:725,Moves:[4,32,51,64,67,76,86,121,123,118],
Bingos:["Normal Type Moves Wait -5%","Critical Hit Damage +5%","ATK of Fighting Type Moves +5%","Normal Type Moves Wait -10%","Critical Hit Damage +10%","ATK of Fighting Type Moves +15%","Resistant to Damage Down +100%","Critical Hit Damage +15%","ATK of Fighting Type Moves +20%"]
    },
     {Name:"Tauros",Nov:"128",HP:100,Attack:600,Moves:[4,16,27,53,55,67,70,75,134,152],
Bingos:["Critical Hit Damage +5%","ATK of Normal Type Moves +15%","Movement Speed +30%","Critical Hit Damage +10%","Normal Type Moves Wait -15%","Critical Hit Rate +10%","ATK of Normal Type Moves +20%","Critical Hit Damage +15%","Wait for Standard Attacks -50%"]
    },
      {Name:"Magikarp",Nov:"129",HP:25,Attack:25,Moves:[3,105,115,162],
Bingos:["ATK of Normal Type Moves +5%","Movement Speed +50%","Normal Type Moves Wait -5%","Time to Recover -20%","Normal Type Moves Wait -20%","Movement Speed +50%","Time to Recover -25%","Pokemon Size Change +50%","Movement Speed +100%"]
    },
     {Name:"Gyarados",Nov:"130",HP:200,Attack:400,Moves:[3,105,115,162,23,50,54,134,152,160],
Bingos:["ATK of Normal Type Moves +5%","Movement Speed +30%","Normal Type Moves Wait -5%","Time to Recover -10%","Normal Type Moves Wait -10%","Movement Speed +30%","HP +500","ATK +300","Movement Speed +30%"]
    },
    {Name:"Lapras",Nov:"131",HP:650,Attack:150,Moves:[21,27,28,57,85,102,116,117,142,146,26],
Bingos:["Resistant to ↓ Effects +10%","Healing per Wave +20%","Own Knockback Distance -20%","Taking Critical Hits Rate -10%","Water-Type Damage Taken -20%","Resistant to Frozen +100%","Water-Type Damage Taken -30%","Natural HP Healing +10%","Resistant to ↓ Effects +20%"]
    },
    {Name:"Ditto",Nov:"132",HP:350,Attack:350,Moves:[164],
Bingos:["Critical hit Rate +10%","HP upon Recovery +10%","Movement Speed +50%","Resistant to Paralyzed +100%","Movement Speed +50%","Time to Recover -10%","Pokemon Size Change +50%","Critical Hit Damage +10%","Pokemon Size Change -25%"]
    },
     {Name:"Eevee",Nov:"133",HP:100,Attack:100,Moves:[4,57,76,97,115],
Bingos:["ATK of Normal Type Moves +5%","Normal Type Moves Wait -5%","Movement Speed +30%","HP upon Recovery +10%","ATK of Normal Type Moves +20%","Movement Speed +50%","ATK +550","ATK of Normal Type Moves +50%","HP +550"]
    },
     {Name:"Vaporeon",Nov:"134",HP:600,Attack:200,Moves:[4,57,76,97,115,21,23,26,28,143],
Bingos:["ATK of Normal Type Moves +5%","Time to Recover -10%","Movement Speed +30%","HP upon Recovery +10%","ATK of Water Type Moves +10%","Water-Type Damage Taken -25%","ATK of Water Type Moves +20%","Resistant to Status Conditions +30%","Water Type Moves Wait -15%"]
    },
    {Name:"Jolteon",Nov:"135",HP:250,Attack:550,Moves:[4,57,76,97,115,38,40,69,70,72],
Bingos:["ATK of Normal Type Moves +5%","Time to Recover -10%","Movement Speed +30%","HP upon Recovery +10%","ATK of Electric Type Moves +10%","Electric-Type Damage Taken -25%","ATK of Electric Type Moves +20%","Resistant to Paralyzed +100%","Electric Type Moves Wait -15%"]
    },
    {Name:"Flareon",Nov:"136",HP:200,Attack:600,Moves:[4,57,76,97,115,11,16,18,19,157],
Bingos:["ATK of Normal Type Moves +5%","Time to Recover -10%","Movement Speed +30%","HP upon Recovery +10%","ATK of Fire Type Moves +10%","Fire-Type Damage Taken -25%","ATK of Fire Type Moves +20%","Resistant to Burn +100%","Fire Type Moves Wait -15%"]
    },
     {Name:"Porygon",Nov:"137",HP:350,Attack:350,Moves:[16,38,55,62,70,112,117,128,129,134],
Bingos:["ATK of Normal Type Moves +5%","Movement Speed +30%","Resistant to Status Conditions +10%","ATK of Normal Type Moves +15%","Normal Type Moves Wait -10%","Resistant to Status Conditions +20%","ATK of Normal Type Moves +20%","ATK +350","HP +350"]
    },
     {Name:"Omanyte",Nov:"138",HP:140,Attack:60,Moves:[20,21,22,116,144],
Bingos:["Taking Critical Hits Rate -20%","Movement Speed +30%","Water Type Moves Wait -5%","Normal Type Moves Wait -20%","Movement Speed +40%","Taking Critical Hits Rate -30%","Taking Critical Hits Rate -50%","ATK +550","Movement Speed +50%"]
    },
     {Name:"Omastar",Nov:"139",HP:575,Attack:225,Moves:[20,21,22,116,144,28,82,117,137,145],
Bingos:["Taking Critical Hits Rate -20%","Movement Speed +30%","Water Type Moves Wait -5%","Water Type Moves Wait -10%","Movement Speed +40%","Taking Critical Hits Rate -30%","Taking Critical Hits Rate -50%","ATK of Water Type Moves +15%","Movement Speed +50%"]
    },
     {Name:"Kabuto",Nov:"140",HP:70,Attack:130,Moves:[22,23,24,25,140],
Bingos:["Taking Critical Hits Rate -20%","Movement Speed +30%","Water Type Moves Wait -5%","ATK of Water Type Moves +20%","Movement Speed +40%","Taking Critical Hits Rate -30%","Taking Critical Hits Rate -50%","ATK +550","Movement Speed +50%"]
    },
     {Name:"Kabutops",Nov:"141",HP:150,Attack:650,Moves:[22,23,24,25,140,39,64,77,79,80],
Bingos:["Taking Critical Hits Rate -20%","Movement Speed +30%","Water Type Moves Wait -5%","ATK of Water Type Moves +15%","Movement Speed +40%","Taking Critical Hits Rate -30%","Taking Critical Hits Rate -50%","ATK of Water Type Moves +15%","Movement Speed +50%"]
    },
     {Name:"Aerodactyl",Nov:"142",HP:125,Attack:675,Moves:[4,14,38,47,49,50,59,64,67,77],
Bingos:["Normal Type Moves Wait -5%","Movement Speed +30%","Resistant to ↓ Effects +10%","Flying Type Moves Wait -10%","Movement Speed +40%","Resistant to ↓ Effects +20%","Wait for Standard Attacks -50%","Resistant to status Conditions +30%","Movement Speed +50%"]
    },
      {Name:"Snorlax",Nov:"143",HP:650,Attack:150,Moves:[4,32,67,75,78,87,95,101,102,152,106],
Bingos:["Resistant to Poisoned +100%","Taking Critical Hits Rate -10%","Resistant to ↓ Effects +10%","Healing per Wave +25%","Ice-Type Damage Taken -50%","Fire-Type Damage Taken -50%","ATK +550","Own Knockback Distance -50%","Natural HP Healing +5%"]
    },
    {Name:"Articuno",Nov:"144",HP:600,Attack:400,Moves:[27,36,38,45,47,49,60,116,117,142],
Bingos:["Ice Type Moves Wait -5%","ATK of Ice Type Moves +5%","Critical Hit Damage +10%","ATK of Ice Type Moves +15%","Ice Type Moves Wait -10%","Resistant to Frozen +100%","ATK of Ice Type Moves +20%","Ice Type Moves Wait -15%","Critical Hit Damage +15%"]
    },
    {Name:"Zapdos",Nov:"145",HP:350,Attack:650,Moves:[38,47,49,61,68,70,72,74,92,140],
Bingos:["Electric Type Moves Wait -5%","ATK of Electric Type Moves +5%","Wait for Standard Attacks -20%","ATK of Electric Type Moves +15%","Electric Type Moves Wait -10%","Resistant to Paralyzed +100%","ATK of Electric Type Moves +20%","Electric Type Moves Wait -15%","Wait for Standard Attacks -30%"]
    },
    {Name:"Moltres",Nov:"146",HP:500,Attack:500,Moves:[11,12,16,19,47,48,49,58,100,157],
Bingos:["Fire Type Moves Wait -5%","ATK of Fire Type Moves +5%","Critical Hit Rate +10%","ATK of Fire Type Moves +15%","Fire Type Moves Wait -10%","Resistant to Burn +100%","ATK of Fire Type Moves +20%","Fire Type Moves Wait -15%","Critical Hit Rate +15%"]
    },
    {Name:"Dratini",Nov:"147",HP:80,Attack:120,Moves:[38,122,158,160],
Bingos:["ATK of Dragon Type Moves +5%","Dragon Type Moves Wait -5%","Own Knockback Distance -10%","HP upon Recovery +20%","Resistant to Status Conditions +30%","Own Knockback Distance -20%","ATK +450","Dragon Type Moves Wait -20%","HP +500"]
    },
    {Name:"Dragonair",Nov:"148",HP:300,Attack:400,Moves:[38,122,158,160,44,67,161],
Bingos:["ATK of Dragon Type Moves +5%","Dragon Type Moves Wait -5%","Own Knockback Distance -10%","HP upon Recovery +15%","Resistant to Status Conditions +20%","Own Knockback Distance -20%","ATK of Dragon Type Moves +25%","Dragon Type Moves Wait -15%","Natural HP Healing +10%"]
    },
    {Name:"Dragonite",Nov:"149",HP:400,Attack:500,Moves:[38,122,158,160,44,67,161,134,152,165],
Bingos:["ATK of Dragon Type Moves +5%","Dragon Type Moves Wait -5%","Own Knockback Distance -10%","HP upon Recovery +10%","Resistant to ↓ Effects +20%","Own Knockback Distance -20%","ATK of Dragon Type Moves +20%","Dragon Type Moves Wait -10%","ATK of Normal Type Moves +20%"]
    },
     {Name:"Mewtwo",Nov:"150",HP:550,Attack:750,Moves:[27,70,75,94,123,128,129,130,134,166],
Bingos:["Movement Speed +50%","Resistant to ↓ Effects +20%","Critical Hit Damage +20%","Critical Hit Rate +20%","Psychic Type Moves Wait -20%","Normal Type Moves Wait -20%","ATK of Psychic Type Moves +20%","ATK of Normal Type Moves +20%","Wait for Standard Attacks -50%"]
    },
    {Name:"Mew",Nov:"151",HP:650,Attack:650,Moves:[48,62,72,75,87,94,126,128,134,139],
Bingos:["Movement Speed +50%","Resistant to ↓ Effects +20%","Critical Hit Damage +20%","Critical Hit Rate +20%","Resistant to Status Conditions +20%","Time to Recover -20%","Psychic Type Moves Wait -20%","Own Knockback Distance -20%","Wait for Standard Attacks -50%"]
    }
  
]
