import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import ApplicationComponent from './app/Application/application.component';


@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [
        ApplicationComponent, 
    ],
    bootstrap: [ApplicationComponent]
})

export class AppModule {}

