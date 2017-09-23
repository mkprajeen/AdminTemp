import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { ThemeModule } from '../theme/theme.module';
import { AppTranslationModule } from '../app.translation.module';

import { Pages } from './pages.component';

@NgModule({
  imports: [CommonModule, AppTranslationModule, ThemeModule,  routing],
  declarations: [Pages]
})
export class PagesModule {
}
