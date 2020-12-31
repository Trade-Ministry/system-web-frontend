// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile.component';
import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './profile-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    ProfileComponent,
    TypographyComponent
  ]
})
export class ThemeModule { }
