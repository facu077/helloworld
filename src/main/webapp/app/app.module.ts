import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { HelloWorldSharedModule } from 'app/shared/shared.module';
import { HelloWorldCoreModule } from 'app/core/core.module';
import { HelloWorldAppRoutingModule } from './app-routing.module';
import { HelloWorldHomeModule } from './home/home.module';
import { HelloWorldEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    HelloWorldSharedModule,
    HelloWorldCoreModule,
    HelloWorldHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    HelloWorldEntityModule,
    HelloWorldAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class HelloWorldAppModule {}
