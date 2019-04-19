import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-comp',
  template: 'AppComponent <router-outlet></router-outlet>'
})
export class AppComponent { }

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: '',
      loadChildren: () => import('./lazy.module.ngfactory').then(m => m.LazyModuleNgFactory)
    }]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
