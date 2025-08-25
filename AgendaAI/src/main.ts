import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'
import { routes } from './app/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),   // ✅ Router disponível para inject()
    provideHttpClient()      // ✅ HttpClient disponível para inject()
  ]
}
