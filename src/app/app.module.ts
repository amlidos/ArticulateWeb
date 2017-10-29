import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NvD3Component } from 'ng2-nvd3';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GraphsComponent } from './graphs/graphs.component';
import { UserdataService } from './userdata.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

// import { mongoose } from 'mongoose';

@NgModule({
  declarations: [
    AppComponent, NvD3Component, WelcomeComponent, GraphsComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
    // mongoose
  ],
  providers: [UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
