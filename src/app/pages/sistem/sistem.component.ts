import { Component, OnInit, AfterViewInit, Inject, NgZone, PLATFORM_ID, TemplateRef } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

//dropdown
import Selectr from "mobius1-selectr";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox"
}
@Component({
  selector: "app-sistem",
  templateUrl: "sistem.component.html"
})
export class SistemComponent implements OnInit, AfterViewInit {


  private chart: am4charts.XYChart;
  
  //ngxdatatables
  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      userid: "34567",
      name: "amar",
      email: "amar@gmail.com",
      joined: "26/02/2020",
      usertype: "Admin",
      status : '<span class="badge badge-pill badge-success text-uppercase">Active</span>'
    },
    {
      userid: "38867",
      name: "amrr",
      email: "amir@gmail.com",
      joined: "29/02/2020",
      usertype: "Staff",
      status : '<span class="badge badge-pill badge-danger text-uppercase">Inactive</span>'
    },
    {
      userid: "45112",
      name: "abu",
      email: "abu@gmail.com",
      joined: "26/02/2020",
      usertype: "Staff",
      status : '<span class="badge badge-pill badge-success text-uppercase">Active</span>'
    },
    {
      userid: "34567",
      name: "ali",
      email: "ali@gmail.com",
      joined: "1/02/2020",
      usertype: "Admin",
      status : '<span class="badge badge-pill badge-danger text-uppercase">Inactive</span>'
    },
    {
      userid: "34567",
      name: "ain",
      email: "ain@gmail.com",
      joined: "8/02/2020",
      usertype: "Admin",
      status : '<span class="badge badge-pill badge-danger text-uppercase">Inactive</span>'
    },
    {
      userid: "34567",
      name: "mas",
      email: "mas@gmail.com",
      joined: "7/02/2020",
      usertype: "Admin",
      status : '<span class="badge badge-pill badge-success text-uppercase">Active</span>'
    }
  ];
  SelectionType = SelectionType;

  constructor(@Inject(PLATFORM_ID) 
    private platformId, 
    private zone: NgZone ) { 
      this.temp = this.rows.map((prop, key) => {
        return {
          ...prop,
          id: key
        };
      });  
  }
  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function(d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }
  onActivate(event) {
    this.activeRow = event.row;
  }
  
  ngOnInit() {
    var selectr: any = document.getElementById('selectr1');
    var options = {};
    // var optionsMultiple = {multiple: true};
    var selectorDefault = new Selectr(selectr, options);
    }
    
  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }


  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);
      // Themes end
      
      // Create chart instance
      let chart = am4core.create("chartdiv", am4charts.XYChart);
      
      // Export
      chart.exporting.menu = new am4core.ExportMenu();
      
      // Data for both series
      let data = [ {
        "year": "Jan",
        "income": 23.5,
        "expenses": 21.1
      }, {
        "year": "Feb",
        "income": 26.2,
        "expenses": 30.5
      }, {
        "year": "Mac",
        "income": 30.1,
        "expenses": 34.9
      }, {
        "year": "Apr",
        "income": 29.5,
        "expenses": 31.1
      }, {
        "year": "Mei",
        "income": 30.6,
        "expenses": 28.2,
        "lineDash": "5,5",
      }, {
        "year": "Jul",
        "income": 29.5,
        "expenses": 31.1
      },
      {
        "year": "Aug",
        "income": 29.5,
        "expenses": 31.1
      },
      {
        "year": "Sep",
        "income": 30.1,
        "expenses": 34.9
      },
      {
        "year": "Okt",
        "income": 23.5,
        "expenses": 21.1
      },
      {
        "year": "Jun",
        "income": 29.5,
        "expenses": 31.1
      },
      {
        "year": "Nov",
        "income": 29.5,
        "expenses": 31.1
      },
      {
        "year": "Dis",
        "income": 29.5,
        "expenses": 31.1
      }
       ];
      
      /* Create axes */
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "year";
      categoryAxis.renderer.minGridDistance = 30;
      
      /* Create value axis */
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      
      /* Create series */
      let columnSeries = chart.series.push(new am4charts.ColumnSeries());
      columnSeries.name = "Income";
      columnSeries.dataFields.valueY = "income";
      columnSeries.dataFields.categoryX = "year";
      
      columnSeries.columns.template.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
      columnSeries.columns.template.propertyFields.fillOpacity = "fillOpacity";
      columnSeries.columns.template.propertyFields.stroke = "stroke";
      columnSeries.columns.template.propertyFields.strokeWidth = "strokeWidth";
      columnSeries.columns.template.propertyFields.strokeDasharray = "columnDash";
      columnSeries.tooltip.label.textAlign = "middle";
      
      let lineSeries = chart.series.push(new am4charts.LineSeries());
      lineSeries.name = "Expenses";
      lineSeries.dataFields.valueY = "expenses";
      lineSeries.dataFields.categoryX = "year";
      
      lineSeries.stroke = am4core.color("#fdd400");
      lineSeries.strokeWidth = 3;
      lineSeries.propertyFields.strokeDasharray = "lineDash";
      lineSeries.tooltip.label.textAlign = "middle";
      
      let bullet = lineSeries.bullets.push(new am4charts.Bullet());
      bullet.fill = am4core.color("#fdd400"); // tooltips grab fill from parent by default
      bullet.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
      let circle = bullet.createChild(am4core.Circle);
      circle.radius = 4;
      circle.fill = am4core.color("#fff");
      circle.strokeWidth = 3;
      
      chart.data = data;
      });

  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }



}