import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', loadChildren: () => import('./lazy').then(m => m.LazyModule)},
      // @ts-ignore
      {path: 'mfe1-lazy', loadChildren: () => import('mfe1/lazyModule').then(m => m.LazyModule)},
      // @ts-ignore
      {path: 'mfe1-lazy-second', loadChildren: () => import('mfe1/lazySecondModule').then(m => m.LazySecondModule)},
    ])
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
