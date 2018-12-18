//1
//a boolean
//a string
//an array
//an object
//an object
//an object

// take it easy
//1
const rainbow = ["red", "orange", "yellow", "green", "blue", "purple"];

//2
console.log(rainbow[4]);

//3
const dillon = {
    food: "calamari",
    hobby: "Disc golf",
    town: "Boulder",
    datatype: "boolean"
};

//4
console.log(dillon.hobby);

// crazy object
const crazyObject = {
    taco: [{
            meat: 'steak',
            cheese: ['panela', 'queso', 'chihuahua']
        },
        {
            meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
        },
    ],
    larry: {
        nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
        quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
        characters: [{
                name: "Jeff",
                occupation: "manager"
            },
            {
                name: "funkhauser",
                occupation: "tv dude"
            },
            {
                name: "susie",
                occupation: "jeffs wife",
                favourtieHobby: "Swearing at Larry and Jeff"
            },
        ]
    }
}

console.log(crazyObject.taco[1].salsa[5]);
console.log(crazyObject.larry.quotes[0]);
console.log(crazyObject.larry.characters[2].favourtieHobby);
console.log(crazyObject.larry.nicknames[1]);
console.log(crazyObject.larry.characters[1]);