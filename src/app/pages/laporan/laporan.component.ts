import { Component, OnInit, AfterViewInit, Inject, NgZone, PLATFORM_ID, TemplateRef,ElementRef,ViewChild } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

//dropdown
import Selectr from "mobius1-selectr";

@Component({
  selector: "app-laporan",
  templateUrl: "laporan.component.html"
})
export class LaporanComponent implements OnInit, AfterViewInit {

  modalRef: BsModalRef ;
  modalRef2: BsModalRef;
  modalRef3: BsModalRef;
  private chart: am4charts.XYChart;
  
  constructor(@Inject(PLATFORM_ID) 
    private platformId, 
    private zone: NgZone, 
    private modalService: BsModalService) {   
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
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }
  openModal2(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, { class: 'gray modal-lg' }); 
  }
  openModal3(template: TemplateRef<any>) {
    this.modalRef3 = this.modalService.show(template, { class: 'gray modal-lg' }); 
  }
  closeFirstModal() {
    if (!this.modalRef) {
      return;
    }

    this.modalRef.hide();
    this.modalRef = null;
  }
  closeModal(modalId?: number){
    this.modalService.hide(modalId);
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);
  // Themes end

  // Create chart instance
  let chart = am4core.create("chartdiv", am4charts.PieChart);

  // Add data
  chart.data = [ {
    "country": "Miskin Tegar (Bandar)",
    "litres": 1000
  }, {
    "country":"Miskin Tegar (Luar Bandar)",
    "litres": 1500
  }, {
    "country":"Miskin  (Luar Bandar)",
    "litres": 3000
  }, {
    "country":"Miskin  (Luar Bandar)",
    "litres": 5000
  } ];

  // Add and configure Series
  let pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "litres";
  pieSeries.dataFields.category = "country";
  pieSeries.slices.template.stroke = am4core.color("#fff");
  pieSeries.slices.template.strokeWidth = 2;
  pieSeries.slices.template.strokeOpacity = 1;

  // This creates initial animation
  pieSeries.hiddenState.properties.opacity = 1;
  pieSeries.hiddenState.properties.endAngle = -90;
  pieSeries.hiddenState.properties.startAngle = -90;
      });

      this.browserOnly(() => {
        am4core.useTheme(am4themes_animated);
  // Themes end

  // Create chart instance
  let chart = am4core.create("chartdiv1", am4charts.PieChart);

  // Add data
  chart.data = [ {
    "country": "Permohonan Dilulus",
    "litres": 1500000
  }, {
    "country": "Permohonan Ditolak",
    "litres": 500000
  }, {
    "country": "Verifikasi Dilulus",
    "litres": 1200000
  }, {
    "country": "Verifikasi Ditolak",
    "litres": 300000
  }, {
    "country": "Penyelia Lulus",
    "litres": 1000000
  }, {
    "country": "Penyelia Ditotal",
    "litres": 1200000
  } ];

  // Set inner radius
  chart.innerRadius = am4core.percent(50);

  // Add and configure Series
  let pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "litres";
  pieSeries.dataFields.category = "country";
  pieSeries.slices.template.stroke = am4core.color("#fff");
  pieSeries.slices.template.strokeWidth = 2;
  pieSeries.slices.template.strokeOpacity = 1;

  // This creates initial animation
  pieSeries.hiddenState.properties.opacity = 1;
  pieSeries.hiddenState.properties.endAngle = -90;
  pieSeries.hiddenState.properties.startAngle = -90;
      });


      this.browserOnly(() => {
        am4core.useTheme(am4themes_animated);
        // Themes end
        
        let chart = am4core.create("chartdiv2", am4charts.XYChart);
        
        chart.data = [{
         "country": "Johor",
         "visits": 2025
        }, {
         "country": "Kedah",
         "visits": 1882
        }, {
         "country": "Kelantan",
         "visits": 1809
        }, {
         "country": "Negeri Sembilan",
         "visits": 1322
        }, {
         "country": "Pahang",
         "visits": 1122
        }, {
         "country": "Perak",
         "visits": 1114
        }, {
         "country": "Perlis",
         "visits": 984
        }, {
         "country": "Selangor",
         "visits": 711
        }, {
         "country": "Terengganu",
         "visits": 665
        }, {
         "country": "Melaka",
         "visits": 580
        }, {
         "country": "Pulau Pinang",
         "visits": 443
        }, {
         "country": "Sabah",
         "visits": 441
        },
        {
          "country": "Sarawak",
          "visits": 441
         }
        ];
        
        chart.padding(40, 40, 40, 40);
        
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.minGridDistance = 60;
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.grid.template.disabled = true;
        
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;
        valueAxis.extraMax = 0.1;
        //valueAxis.rangeChangeEasing = am4core.ease.linear;
        //valueAxis.rangeChangeDuration = 1500;
        
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.categoryX = "country";
        series.dataFields.valueY = "visits";
        series.tooltipText = "{valueY.value}"
        series.columns.template.strokeOpacity = 0;
        series.columns.template.column.cornerRadiusTopRight = 10;
        series.columns.template.column.cornerRadiusTopLeft = 10;
        //series.interpolationDuration = 1500;
        //series.interpolationEasing = am4core.ease.linear;
        let labelBullet = series.bullets.push(new am4charts.LabelBullet());
        labelBullet.label.verticalCenter = "bottom";
        labelBullet.label.dy = -10;
        labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.')}";
        
        chart.zoomOutButton.disabled = true;
        
        // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
        series.columns.template.adapter.add("fill", function (fill, target) {
         return chart.colors.getIndex(target.dataItem.index);
        });
        
        setInterval(function () {
         am4core.array.each(chart.data, function (item) {
           item.visits += Math.round(Math.random() * 200 - 100);
           item.visits = Math.abs(item.visits);
         })
         chart.invalidateRawData();
        }, 2000)
        
        categoryAxis.sortBySeries = series;
      });
      this.browserOnly(() => {
        am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
let chart = am4core.create("chartdiv3", am4charts.XYChart);

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
  "year": "Jun",
  "income": 34.1,
  "expenses": 32.9,
  "strokeWidth": 1,
  "columnDash": "5,5",
  "fillOpacity": 0.2,
  "additional": "(projection)"
},
{
  "year": "Jul",
  "income": 34.1,
  "expenses": 32.9,
  "strokeWidth": 1,
  "columnDash": "5,5",
  "fillOpacity": 0.2,
  "additional": "(projection)"
},
{
  "year": "Aug",
  "income": 30.6,
  "expenses": 28.2,
  "lineDash": "5,5",
},
{
  "year": "Sep",
  "income": 26.2,
  "expenses": 30.5
},
{
  "year": "Okt",
  "income": 29.5,
  "expenses": 31.1
},
{
  "year": "Nov",
  "income": 34.1,
  "expenses": 32.9,
  "strokeWidth": 1,
  "columnDash": "5,5",
  "fillOpacity": 0.2,
  "additional": "(projection)"
},
{
  "year": "Dis",
  "income": 34.1,
  "expenses": 32.9,
  "strokeWidth": 1,
  "columnDash": "5,5",
  "fillOpacity": 0.2,
  "additional": "(projection)"
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