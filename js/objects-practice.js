var cars = [
    {
        make: "Toyota",
        model: "Camry",
        features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
        owner: {
            name: "Jane Doe",
            age: 30
        }
    },
    {
        make: "Honda",
        model: "Accord",
        features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
        owner: {
            name: "John Doe",
            age: 31
        }
    }
];

console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
console.log("The owner of the second car is " + cars[1].owner.name + ".");

console.log("Here are all the features of all the cars:");
cars.forEach(function(car) {
    car.features.forEach(function(feature) {
        console.log(feature);
    });
});

console.log("Here are all the owner of all the cars:");
cars.forEach(function(car) {
    car.features.forEach(function(feature) {
        console.log(feature);
    });
});

// create a honk method on the car object
cars.honk = function () {
    alert("Honk! Honk!");
};

// honk the horn
//cars.honk();

// create a logMakeModel method on the car object
cars.logMakeModel = function () {
    //console.log("Car make/model is: " + this[0].make + " " + this[1].model);
};

// log the make/model
cars.logMakeModel();

function addBook(title, fName, lName, booksArr) {
    var obj = {
        title: title,
        author : {
            firstName: fName,
            lastName: lName
        }
    };

    booksArr.push(obj);
    return booksArr;
}

var books = [
    {
        title: "Garfield at Large: His First Book",
        author: {
            firstName: "Jim",
            lastName: "Davis"
        }
    },
    {
        title: "The Hunchback of Notre-Dame",
        author: {
            firstName: "Victor",
            lastName: "Hugo"
        }
    },
    {
        title: "1992 Information Please Sports Almanac",
        author: {
            firstName: "Mike",
            lastName: "Meserole"
        }
    },
    {
        title: "Life is Too Short",
        author: {
            firstName: "Mickey",
            lastName: "Rooney"
        }
    },
    {
        title: "How To Draw Manga",
        author: {
            firstName: "Katy",
            lastName: "Coope"
        }
    }, {
        title: "The Cosmic Serpent",
        author: {
            firstName: "Jeremy",
            lastName: "Narby"
        }
    }
];

addBook("The Art of War", "Sun", "Tsu", books);

books.forEach(function (book) {
    console.log(book);
});