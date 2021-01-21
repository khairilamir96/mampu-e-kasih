import { Routes } from "@angular/router";

import { SistemComponent } from "./sistem.component";

export const SistemRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: SistemComponent
      }
    ]
  }
];
