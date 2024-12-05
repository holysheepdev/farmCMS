import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { DatabaseControllerService } from './services/database-controller.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), DatabaseControllerService],
};
