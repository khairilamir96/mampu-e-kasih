import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from "ngx-bootstrap/modal";
import { TabsModule } from 'ngx-bootstrap/tabs';

import { RouterModule } from "@angular/router";
import { PresentationComponent } from "./presentation.component";
import { CalendarModule } from "../calendar/calendar.module";

@NgModule({
  declarations: [PresentationComponent],
  imports: [
    CommonModule,
    RouterModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    FormsModule,
    TabsModule.forRoot(),
    ReactiveFormsModule,
    CalendarModule  
  ]
})
export class PresentationModule {}
