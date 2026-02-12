import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('@org/muddy-code-dashboard-shell').then(((module) => module.MuddyCodeDashboardShellModule))
  },
  // {
  //   path: 'authorization',
  //   loadChildren: () =>
  //     import('@muddy-code-workspace/shell-main-container').then((module) => module.ShellMainContainerModule),
  // },
];
