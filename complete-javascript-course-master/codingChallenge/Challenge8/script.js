// Class Prototype
class Element {
    constructor(name, yearBuild) {
        this.name = name;
        this.yearBuild = yearBuild;
    }
}

// Class Park Prototype extending Element class
class Park extends Element {
    constructor(name,yearBuild, treeCount, parkArea) {
        super(name,yearBuild);
        this.treeCount = treeCount;
        this.parkArea = parkArea;
    }

    treeDensity(){
        const density = this.treeCount/this.parkArea;
        console.log(`Park ${this.name} has a tree density of ${density} trees per square km`);
    }
}

// Class Street Prototype extending Element class
class Street extends Element {
    constructor(name, yearBuild, length, streetSize) {
        super(name, yearBuild);
        this.length = length;
        //this.size = size || 'normal';
        // size === undefined ? this.size = 'normal' : this.size = size;
        if(streetSize === 'tiny' || 'small' || 'normal' || 'big' || 'huge') {
            this.streetSize = streetSize;
        } else {
            console.log(`Entered here`);
            this.streetSize = 'normal';
        }
    }
}


//Declare the parks
let park1 = new Park ('Green Park', 1965, 500, 10);
let park2 = new Park ('National Park', 1969, 1000, 10);
let park3 = new Park ('Oak Park', 1990, 900, 4);

//Adding parks to a MAP
let park = new Map();
park.set('park1',park1);
park.set('park2',park2);
park.set('park3',park3);

// Function for adding the sum of ages
let sumPark = 0;
park.forEach((key) => {
    sumPark += (new Date().getFullYear() - key.yearBuild);
});
const avgAge = sumPark/park.size;


// Final PARKS Reports
console.log(`---PARKS REPORT---`);
console.log(`Our ${park.size} parks have an average of ${avgAge}`);
park.forEach((key) => {
    key.treeDensity();
});
park.forEach((key) => {
    if(key.treeCount >= 1000){
        console.log(`${key.name} has more than 1000 trees.`);
    }
});



// Adding streets
let street1 = new Street('Ocean Avenue', 1999, 10, 'big');
let street2 = new Street('Evergreen Street',2008, 1.25, 'small');
let street3 = new Street('4th Street', 2015,6);
let street4 = new Street('Sunset Bulevard', 1992, 18,'huge');

console.log(street3);

//Adding streets to a MAP
let streets = new Map();
streets.set('street1',street1);
streets.set('street2',street2);
streets.set('street3',street3);
streets.set('street4',street4);

//Find total and avg
let streetTotal = 0;
streets.forEach((key) => {
    streetTotal += key.length;
});

const avgStreetLength = streetTotal/streets.size;
// Final Console Output
console.log(`---STREETS REPORT----`);
console.log(`Our ${streets.size} streets have a total length of ${streetTotal} km, with an average of ${avgStreetLength} km.`);
streets.forEach((key) => {
    console.log(`${key.name}, build in ${key.yearBuild}, is a ${key.streetSize} street`);
});