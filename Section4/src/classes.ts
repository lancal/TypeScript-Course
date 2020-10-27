// Code goes here!
abstract class Department {
    static fiscalYear = 2020;
    // private readonly id : string;
    // private name: string;
    protected employee: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
    }

    static createEmployee(name:string) {
        return {name:name};
    }

    abstract describe(this: Department):void;

    addEmployee(employee: string) {
        //validation, etc
        // this.id = 'd2';
        this.employee.push(employee);
    }

    printEmployeeInf(){
        console.log(this.employee.length);
        console.log(this.employee)
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id,'IT');
        this.admins = admins;
    }

    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    private static instance: AccountingDepartment;

    get mostRecentReport(){
        if(this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(value: string) {
        if(!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id,'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance(){
        if(AccountingDepartment.instance){

            return this.instance;
        }
        this.instance = new AccountingDepartment('d2',[]);
        return this.instance;
    }

    addEmployee(name:string) {
        if(name === 'test'){
            return;
        }
        this.employee.push(name);
    }

    addReport(text: string){
        this.reports.push(text);
        this.lastReport = text;
    }

    describe() {
        console.log(`Accounting Department (${this.id}): ${this.name}`);
    }

    printReport(){
        console.log(this.reports);
    }
}

const it = new ITDepartment('d1',['Test']);

const employee1 = Department.createEmployee('TestEmployy');
console.log('employee1: ', employee1, Department.fiscalYear);

it.addEmployee('test1');
it.addEmployee('test2');

//depto.employee[2] = 'test3';

it.describe();

it.printEmployeeInf();

// const deptoCopy = {name: 'Dummy', describe: depto.describe};

// deptoCopy.describe();

console.log(it);

// const accounting = new AccountingDepartment('d2', []);

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting,accounting2);

accounting.mostRecentReport = 'End Year Report';

accounting.addReport('Something were wrong....');

console.log(accounting.mostRecentReport);

accounting.printReport();

accounting.addEmployee('test');
accounting.addEmployee('testAccounting');

accounting.printEmployeeInf();

console.log(accounting);