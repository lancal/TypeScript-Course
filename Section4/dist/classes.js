"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employee = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employee.push(employee);
    }
    printEmployeeInf() {
        console.log(this.employee.length);
        console.log(this.employee);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    addEmployee(name) {
        if (name === 'test') {
            return;
        }
        this.employee.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    describe() {
        console.log(`Accounting Department (${this.id}): ${this.name}`);
    }
    printReport() {
        console.log(this.reports);
    }
}
const it = new ITDepartment('d1', ['Test']);
const employee1 = Department.createEmployee('TestEmployy');
console.log('employee1: ', employee1, Department.fiscalYear);
it.addEmployee('test1');
it.addEmployee('test2');
it.describe();
it.printEmployeeInf();
console.log(it);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
accounting.mostRecentReport = 'End Year Report';
accounting.addReport('Something were wrong....');
console.log(accounting.mostRecentReport);
accounting.printReport();
accounting.addEmployee('test');
accounting.addEmployee('testAccounting');
accounting.printEmployeeInf();
console.log(accounting);
//# sourceMappingURL=classes.js.map