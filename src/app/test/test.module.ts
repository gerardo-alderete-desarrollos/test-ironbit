import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ResultComponent } from './components/result/result.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent,
    ResultComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TestRoutingModule
  ]
})
export class TestModule { }
