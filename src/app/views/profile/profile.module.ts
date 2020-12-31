// Angular
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ProfileComponent } from './profile.component';
import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './profile-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  declarations: [
    ProfileComponent,
    TypographyComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ThemeModule { }
