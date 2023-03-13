const data = [{
        "_id": "640b3dc1cb32cf18d9144992",
        "isActive": false,
        "age": 31,
        "eyeColor": "green",
        "name": "Olson Pickett",
        "gender": "male",
        "favoriteFruit": "banana"
    },
    {
        "_id": "640b3dc18cbc43655058bbaa",
        "isActive": false,
        "age": 34,
        "eyeColor": "green",
        "name": "Riddle Brooks",
        "gender": "male",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "640b3dc17660966a85b428df",
        "isActive": false,
        "age": 22,
        "eyeColor": "green",
        "name": "Marcia Medina",
        "gender": "female",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "640b3dc1e72dfe566a937978",
        "isActive": false,
        "age": 26,
        "eyeColor": "brown",
        "name": "Goodman Stark",
        "gender": "male",
        "favoriteFruit": "apple"
    },
    {
        "_id": "640b3dc19fb2af4b4cb20960",
        "isActive": true,
        "age": 33,
        "eyeColor": "brown",
        "name": "Tammy Wilkinson",
        "gender": "female",
        "favoriteFruit": "apple"
    },
    {
        "_id": "640b3dc1659ebc45b7b751ed",
        "isActive": true,
        "age": 36,
        "eyeColor": "blue",
        "name": "Knapp White",
        "gender": "male",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "640b3dc18cf6d6053bf1b2d3",
        "isActive": true,
        "age": 24,
        "eyeColor": "brown",
        "name": "Clarice Campbell",
        "gender": "female",
        "favoriteFruit": "banana"
    },
    {
        "_id": "640b3dc13b1c86e0dba8e433",
        "isActive": false,
        "age": 20,
        "eyeColor": "blue",
        "name": "Caldwell Delacruz",
        "gender": "male",
        "favoriteFruit": "banana"
    },
    {
        "_id": "640b3dc1d910c341226c2fbe",
        "isActive": false,
        "age": 30,
        "eyeColor": "green",
        "name": "Anderson Hoffman",
        "gender": "male",
        "favoriteFruit": "apple"
    },
    {
        "_id": "640b3dc11ca848baf54834c3",
        "isActive": true,
        "age": 21,
        "eyeColor": "blue",
        "name": "Hensley Bell",
        "gender": "male",
        "favoriteFruit": "apple"
    },
    {
        "_id": "640b3dc1fe2c1851547fb60b",
        "isActive": true,
        "age": 23,
        "eyeColor": "brown",
        "name": "Huffman Faulkner",
        "gender": "male",
        "favoriteFruit": "apple"
    },
    {
        "_id": "640b3dc18b5e20acbef7ebc7",
        "isActive": false,
        "age": 20,
        "eyeColor": "blue",
        "name": "Andrea Wull",
        "gender": "female",
        "favoriteFruit": "banana"
    }
];



// 1) print person yang suka buah apple dan warna mata nya biru
console.log("No. 1 -----------")
for (let i = 0; i < data.length; i++) {
    if (data[i].favoriteFruit === 'apple' && data[i].eyeColor === 'blue') {
        console.log(data[i])
    }
}
// 2) print berapa person yang age nya diatas 30
console.log("No. 2 -----------")
result = 0
for (let i = 0; i < data.length; i++) {
    if (data[i].age > 30) {
        result += 1
    }
}
console.log(result)


// 3) print person yang isActive true and gender nya female
console.log("No. 3 -----------")
for (let i = 0; i < data.length; i++) {
    if (data[i].isActive && data[i].gender === 'female') {
        console.log(data[i])
    }
}
// 4) print yang age nya diatas 30 atau dibawah 25 dan eyeColor nya blue
console.log("No. 4 -----------")
for (let i = 0; i < data.length; i++) {
    if ((data[i].age > 30 || data[i].age < 25) && data[i].eyeColor === 'blue') {
        console.log(data[i])
    }
}
// 5) print person yang mengandung huruf W di name nya
console.log("No. 5 -----------")
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].name.length; j++) {
        if (data[i].name[j].toUpperCase() === "W") {
            console.log(data[i])
        }
    }
}

// 6) print person isActive false dan gender nya male dan age nya diatas 25
console.log("No. 6 -----------")
for (let i = 0; i < data.length; i++) {
    if (!data[i].isActive && data[i].gender === 'male' && data[i].age > 25) {
        console.log(data[i])
    }
}

// 7) print person age nya dibawah 30 atau eyeColor brown dan favoritFruit nya banana
console.log("No. 7 -----------")
for (let i = 0; i < data.length; i++) {
    if ((data[i].age < 30 || data[i].eyeColor === 'brown') && data[i].favoriteFruit === 'banana') {
        console.log(data[i])
    }
}

// 8) print person gender male
console.log("No. 8 -----------")
for (let i = 0; i < data.length; i++) {
    if (data[i].gender === 'male') {
        console.log(data[i])
    }
}

// 9) print person eyeColor Blue
console.log("No. 9 -----------")
for (let i = 0; i < data.length; i++) {
    if (data[i].eyeColor === 'blue') {
        console.log(data[i])
    }
}

// 10) print person age diatas 30
console.log("No. 10 ----------")
for (let i = 0; i < data.length; i++) {
    if (data[i].age > 30) {
        console.log(data[i])
    }
}