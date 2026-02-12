import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@org/muddy-code-wms-shell').then(((module) => module.MuddyCodeWmsShellModule))
  },
];
