import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

var misc: any = {
  sidebar_mini_active: true
};

export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  path?: string;
  title?: string;
  type?: string;
}
//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "ni-calendar-grid-58 text-red"
  },
  {
    path: "/examples",
    title: "Examples",
    type: "sub",
    icontype: "ni-ungroup text-orange",
    collapse: "examples",
    isCollapsed: true,
    children: [
      { path: "pricing", title: "Pricing", type: "link" },
      { path: "login", title: "Login", type: "link" },
      { path: "register", title: "Register", type: "link" },
      { path: "lock", title: "Lock", type: "link" },
      { path: "timeline", title: "Timeline", type: "link" },
      { path: "profile", title: "Profile", type: "link" }
    ]
  },
  {
    path: "/forms",
    title: "Forms",
    type: "sub",
    icontype: "ni-single-copy-04 text-pink",
    collapse: "forms",
    isCollapsed: true,
    children: [
      { path: "elements", title: "Elements", type: "link" },
      { path: "components", title: "Components", type: "link" },
      { path: "validation", title: "Validation", type: "link" }
    ]
  },
  {
    path: "/tables",
    title: "Tables",
    type: "sub",
    icontype: "ni-align-left-2 text-default",
    collapse: "tables",
    isCollapsed: true,
    children: [
      { path: "tables", title: "Tables", type: "link" },
      { path: "sortable", title: "Sortable", type: "link" },
      { path: "ngx-datatable", title: "Ngx Datatable", type: "link" }
    ]
  },
  {
    path: "/calendar",
    title: "Calendar",
    type: "link",
    icontype: "ni-calendar-grid-58 text-red"
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe(event => {
      this.isCollapsed = true;
    });
  }
  onMouseEnterSidenav() {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.add("g-sidenav-show");
    }
  }
  onMouseLeaveSidenav() {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-show");
    }
  }
  minimizeSidebar() {
    const sidenavToggler = document.getElementsByClassName(
      "sidenav-toggler"
    )[0];
    const body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("g-sidenav-pinned")) {
      misc.sidebar_mini_active = true;
    } else {
      misc.sidebar_mini_active = false;
    }
    if (misc.sidebar_mini_active === true) {
      body.classList.remove("g-sidenav-pinned");
      body.classList.add("g-sidenav-hidden");
      sidenavToggler.classList.remove("active");
      misc.sidebar_mini_active = false;
    } else {
      body.classList.add("g-sidenav-pinned");
      body.classList.remove("g-sidenav-hidden");
      sidenavToggler.classList.add("active");
      misc.sidebar_mini_active = true;
    }
  }
}