
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component'

// Pipe Module
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
    declarations: [
        PagesComponent,
    ],
    exports: [
        DashboardComponent,

    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        PipesModule
    ]
})
export class PagesModule { }
