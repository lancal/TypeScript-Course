// Code goes here!
type Admin =  {
    name: string,
    privileges: string[];
};

type Employee =  {
    name: string;
    startDate: Date;
};

//interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['created-server'],
    startDate: new Date()
};

type Combinale = string | number;
type Numeric = number | boolean;

type Universal = Combinale & Numeric;

function add(a: number, b:number): number;
function add(a: string, b:string): string;
function add(a: string, b:number): number;
function add(a: number, b:string): string;

function add(a: Combinale, b: Combinale) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b; 
}

const result = add('TEST', '1') as string;
result.split(' ');

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Nmae: ' + emp.name);
    if('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
    }
    if('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInformation(e1);

printEmployeeInformation({name: 'Manu',startDate: new Date()});

class Car {
    drive() {
        console.log('Driving a truck...');
    }
}

class Truck {
    drive(){
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo...', amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if( vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch(animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed: ', speed);
}

moveAnimal({type: 'bird',flyingSpeed: 10});

//const userInputElement = document.getElementById('user-input')!;

//const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

const userInputElement = document.getElementById('user-input');

if(userInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hi there!'
}  

interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
};


