import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@org/muddy-code-pms-shell').then(((module) => module.MuddyCodePmsShellModule))
  },
];
