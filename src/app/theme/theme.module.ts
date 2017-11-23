import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppTranslationModule } from '../app.translation.module';

import {    BaThemeConfig  } from './theme.config';
import {  BaThemeConfigProvider } from './theme.configProvider';

import {
  BaScrollPosition,
  BaSlimScroll,
  BaThemeRun
} from './directives';

import {
  //BaImageLoaderService,
  BaMenuService,
  BaThemePreloader,
  BaThemeSpinner
} from './services';
  
import {
    // BaAmChart,
     BaBackTop,
     //BaCard,
    
     //BaCheckbox,
     BaContentTop,
    // BaFullCalendar,
     BaMenuItem,
     BaMenu,
     BaMsgCenter,
     //BaMultiCheckbox,
     BaPageTop,
     //BaPictureUploader,
     BaSidebar,
     //BaFileUploader
   } from './components';

   const THEME_COMPONENTS = [
    //BaAmChart,
    BaBackTop,
    //BaCard,
    //BaCheckbox,
    BaContentTop,
    //BaFullCalendar,
    BaMenuItem,
    BaMenu,
    BaMsgCenter,
    //BaMultiCheckbox,
    BaPageTop,
    //BaPictureUploader,
    BaSidebar,
    //BaFileUploader
  ];

  const THEME_DIRECTIVES = [
    BaScrollPosition,
    BaSlimScroll,
    BaThemeRun,
    //BaCardBlur
  ];

  const THEME_SERVICES = [
    //BaImageLoaderService,
    BaThemePreloader,
    BaThemeSpinner,
    BaMenuService
  ];

  @NgModule({
    declarations: [
      //...NGA_PIPES,
      ...THEME_DIRECTIVES,
      ...THEME_COMPONENTS
    ],
    imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      AppTranslationModule
     //NgUploaderModule
    ],
    exports: [
     // ...NGA_PIPES,
      ...THEME_DIRECTIVES,
      ...THEME_COMPONENTS
    ]
  })
  export class ThemeModule {
    static forRoot(): ModuleWithProviders {
      return <ModuleWithProviders> {
        ngModule: ThemeModule,
        providers: [
          BaThemeConfigProvider,
          BaThemeConfig,
          //...NGA_VALIDATORS,
          ...THEME_SERVICES
        ],
      };
    }
}

