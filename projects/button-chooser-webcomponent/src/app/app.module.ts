import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {createCustomElement} from '@angular/elements';
import {ButtonChooserModule} from '../../../button-chooser/src/lib/button-chooser.module';
import {ButtonChooserComponent} from '../../../button-chooser/src/lib/button-chooser.component';

@NgModule({
  declarations: [AppComponent],
  imports: [ BrowserModule, ButtonChooserModule ],
  entryComponents: [ AppComponent, ButtonChooserComponent ]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const appElement = createCustomElement(AppComponent, {
      injector: this.injector
    });
    customElements.define('my-first-angular-element', appElement);

    const bcElement = createCustomElement(ButtonChooserComponent, {
      injector: this.injector
    });
    customElements.define('ch-button-chooser-component', bcElement);
  }
}
