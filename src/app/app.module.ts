import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    path: "algorithms",
    component: AlgorithmsComponent
}];

@NgModule({
    declarations: [
        AppComponent,
        AlgorithmsComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes, {})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
