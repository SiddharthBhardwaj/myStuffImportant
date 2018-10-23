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
    constructor(name, yearBuild, length, size) {
        super(name, yearBuild);
        this.length = length;
        //this.size = size || 'normal';
        // size === undefined ? this.size = 'normal' : this.size = size;
        if(name === 'tiny' || 'small' || 'normal' || 'big' || 'huge') {
            this.name = name;
        } else {
            this.name = 'normal';
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
