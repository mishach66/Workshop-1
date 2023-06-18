//  Workshop 1

// --------------------   1   --------------------------
const arrNumb = [-15, 3, -27, 5, 11, 10, -21, 8, 4.2]
const positiveNumbs = arrNumb.filter(item => {
    if (item > 0 && Math.trunc(item) === item)
    return item
})

//const init = 0
const sum = positiveNumbs.reduce(
    (acc, curr) => acc + curr
    //,init
)
console.log(`sum is ${sum}`) // 37
// --------------------   1   --------------------------


// --------------------   2   --------------------------
const arrCity = ['Tbilisi', 'Kutaisi', 'Batumi', 'Kutaisi', 'Telavi', 'Rustavi', 'Tbilisi', 'kutaisi', 'Kutaisi']

const cityCount = arrCity.reduce((cityAcc, city) => {
        if (!cityAcc[city]) { //Square Bracket Notation Object Property Accessor
            cityAcc[city] = 1
            //console.log(cityAcc)
        } else {
            cityAcc[city]++
        }
        return cityAcc
    }
, {})

console.log(cityCount)
/*
{
    Batumi : 1
    Kutaisi : 3
    Rustavi : 1
    Tbilisi : 2
    Telavi : 1
    kutaisi : 1
}
*/
// --------------------   2   --------------------------


// --------------------   3   --------------------------
class Car {
    constructor(brand, model, speed = 0, motion = 'The car is not moving'){
        this.brand = brand
        this.model = model
        this.speed = speed
        this.motion = motion
    }
    
    showCar(){
        console.log(
            `
My Car:

brand - ${this.brand} 
model - ${this.model} 
speed - ${this.speed} 
motion - ${this.motion} 
            `
        )
    }

    check_motion () {
        console.log(`სიჩქარე - ${this.speed}`)
        //this.speed === 0 ? this.motion = 'მანქანა გაჩერებულია' : 'მანქანა მოძრაობს' // ეს არ მუშაობს (წერს, რომ მანქანა გაჩერებულია)
        if (this.speed === 0) {
            this.motion = 'მანქანა გაჩერებულია'
        } else {
            this.motion = 'მანქანა მოძრაობს'
        }
        console.log(`${this.motion}
        `)
    }

    accelerate (speed) {
        this.speed = speed
        console.log('accelerate')
        this.check_motion()
    }

    brake (speed) {
        if (speed >= this.speed)
            console.log(`brake
დამუხრუჭების სიჩქარე უნდა იყოს მიმდინარე სიჩქარეზე ნაკლები`)
        else {
            this.speed = speed
            console.log('brake')
        }
        this.check_motion()
    }

    emergency_brake (speed) {
        if (speed !== 0)
        console.log(`emergency brake
დამუხრუჭების სიჩქარე უნდა იყოს ნული`)
    else {
        this.speed = speed
        console.log('emergency brake')
    }
    this.check_motion()
    }

    status () {
        console.log(
            `
მანქანა ${this.brand} ${this.model} მოძრაობს ${this.speed} კმ/სთ სიჩქარით და სტატუსია: ${this.motion}
            `
        )
    }
}

const car = new Car('BWM', 'X6')
car.showCar()

car.check_motion()

car.accelerate(50)

car.brake(100)
car.brake(10)

car.status()

car.emergency_brake(5)
car.emergency_brake(0)

car.status()
// --------------------   3   --------------------------


// --------------------   4   --------------------------
function addAsync(first, second) {
    return new Promise((resolve, reject) => {
        if ( (typeof first === 'number' && typeof second === 'number')) {
            resolve('Success')
            console.log('Promise resolved')
        } else {
            reject('Error')
            console.log('Promise rejected')
        }
})
.then((res) => {
    console.log(res)
})
.catch((res) => {
    console.log(res)
})
}

addAsync()
addAsync(2)
addAsync(2, '4')
addAsync(null, 5)
addAsync(2, 4)
addAsync(0, 0)
// --------------------   4   --------------------------
