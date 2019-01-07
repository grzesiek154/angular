import { Component } from '@angular/core';


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
    //template: '<h2>John Doe</h2>'
})

export class UserComponent {
    //properties
    firstName:string;
    lastName:string;
    age:number;
    address;

    foo:any;
    hasKids:boolean;

    numberArray: number[];
    stringArray: string[];
    mixedArray: any[];
    myTuple: [string, boolean, number];
    unusable: void;
    u: undefined;
    n: null;

    //methods
    constructor() {
       this.firstName = 'Jan';
       this.lastName = 'Kowalski';
       this.age = 30;

       this.address = {
           street : 'Ustronie',
           city: 'Radom'
       }
       this.hasKids = true;
       this.mixedArray = [true, 2, 'asd'];
       this.myTuple = ['zxc', true, 12];

       console.log(this.addNumber(30,125));
    }

    sayHello() {
        console.log(`Hello ${this.firstName}`);
    }
    showAge() {
        return this.age;
    }

    addNumber(num1: number, num2: number): number {
        return num1 + num2;
    }
}