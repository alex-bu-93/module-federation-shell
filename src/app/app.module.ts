import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'lazy', loadChildren: () => import('./lazy').then(m => m.LazyModule)},
      // @ts-ignore
      {path: 'mfe1', loadChildren: () => import('mfe1/Module').then(m => m.LazyModule)},
    ])
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
