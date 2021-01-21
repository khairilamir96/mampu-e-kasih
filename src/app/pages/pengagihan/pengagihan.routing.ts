import { Routes } from "@angular/router";

import { PengagihanComponent } from "./pengagihan.component";

export const PengagihanRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: PengagihanComponent
      }
    ]
  }
];
