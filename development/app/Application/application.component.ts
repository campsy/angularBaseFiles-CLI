import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app', 
    templateUrl: 'application.component.html', 
})
export default class ApplicationComponent {
    welcomeMessage:string;

    constructor(){
        this.welcomeMessage = "Hello!"
    }
}
