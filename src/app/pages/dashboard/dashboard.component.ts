import { Component, OnInit, AfterViewInit, Inject, NgZone, PLATFORM_ID, TemplateRef,ElementRef } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

//dropdown
import Selectr from "mobius1-selectr";
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit, AfterViewInit {
  selectTab(staticTabs: TabsetComponent, tabId: number) {
    staticTabs.tabs[tabId].active = true;
  }
  modalRef: BsModalRef ;
  modalRef2: BsModalRef;
  daerahData = [
    {'daerah':'Batu Pahat','negeri':'Johor'},
    {'daerah':'Pendang','negeri':'Kedah'},
    {'daerah':'Kota Bharu','negeri':'Kelantan'},
  ];

  private chart: am4charts.XYChart;
  
  constructor(@Inject(PLATFORM_ID) 
    private platformId, 
    private zone: NgZone, 
    private modalService: BsModalService) {   
  }
  ngOnInit() {
    this.getDaerah('all')
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
    this.closeFirstModal();
    this.modalRef2 = this.modalService.show(template, { class: 'gray modal-lg' });
    
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
    "country": "Permohonan Baru",
    "litres": 2000000
  }, {
    "country": "Permohonan Rayuan",
    "litres": 500000
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
  chart.padding(40, 40, 40, 40);

  chart.numberFormatter.bigNumberPrefixes = [
    { "number": 1e+3, "suffix": "K" },
    { "number": 1e+6, "suffix": "M" },
    { "number": 1e+9, "suffix": "B" }
  ];

  let label = chart.plotContainer.createChild(am4core.Label);
  label.x = am4core.percent(97);
  label.y = am4core.percent(95);
  label.horizontalCenter = "right";
  label.verticalCenter = "middle";
  label.dx = -15;
  label.fontSize = 50;

  let playButton = chart.plotContainer.createChild(am4core.PlayButton);
  playButton.x = am4core.percent(97);
  playButton.y = am4core.percent(95);
  playButton.dy = -2;
  playButton.verticalCenter = "middle";
  playButton.events.on("toggled", function(event) {
    if (event.target.isActive) {
      play();
    }
    else {
      stop();
    }
  })

  let stepDuration = 4000;

  let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.dataFields.category = "network";
  categoryAxis.renderer.minGridDistance = 1;
  categoryAxis.renderer.inversed = true;
  categoryAxis.renderer.grid.template.disabled = true;

  let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;
  valueAxis.rangeChangeEasing = am4core.ease.linear;
  valueAxis.rangeChangeDuration = stepDuration;
  valueAxis.extraMax = 0.1;

  let series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.categoryY = "network";
  series.dataFields.valueX = "MAU";
  series.tooltipText = "{valueX.value}"
  series.columns.template.strokeOpacity = 0;
  series.columns.template.column.cornerRadiusBottomRight = 5;
  series.columns.template.column.cornerRadiusTopRight = 5;
  series.interpolationDuration = stepDuration;
  series.interpolationEasing = am4core.ease.linear;

  let labelBullet = series.bullets.push(new am4charts.LabelBullet())
  labelBullet.label.horizontalCenter = "right";
  labelBullet.label.text = "{values.valueX.workingValue.formatNumber('#.0as')}";
  labelBullet.label.textAlign = "end";
  labelBullet.label.dx = -10;

  chart.zoomOutButton.disabled = true;

  // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
  series.columns.template.adapter.add("fill", function(fill, target){
    return chart.colors.getIndex(target.dataItem.index);
  });

  let year = 2018;
  label.text = year.toString();

  let interval;

  function play() {
    interval = setInterval(function(){
      nextYear();
    }, stepDuration)
    nextYear();
  }

  function stop() {
    if (interval) {
      clearInterval(interval);
    }
  }

  function nextYear() {
    year++

    if (year > 2020) {
      year = 2018;
    }

    let newData = allData[year];
    let itemsWithNonZero = 0;
    for (var i = 0; i < chart.data.length; i++) {
      chart.data[i].MAU = newData[i].MAU;
      if (chart.data[i].MAU > 0) {
        itemsWithNonZero++;
      }
    }

    if (year == 2018) {
      series.interpolationDuration = stepDuration / 4;
      valueAxis.rangeChangeDuration = stepDuration / 4;
    }
    else {
      series.interpolationDuration = stepDuration;
      valueAxis.rangeChangeDuration = stepDuration;
    }

    chart.invalidateRawData();
    label.text = year.toString();

    categoryAxis.zoom({ start: 0, end: itemsWithNonZero / categoryAxis.dataItems.length });
  }


  categoryAxis.sortBySeries = series;

  let allData = {
  
    "2018": [
      {
        "network": "Fasa 1",
        "MAU": 2000000
      },
      {
        "network": "Fasa 2",
        "MAU": 1500000
      },
      {
        "network": "Fasa 3",
        "MAU": 1200000
      }
    ],
    "2019": [
      {
        "network": "Fasa 1",
        "MAU": 1800000
      },
      {
        "network": "Fasa 2",
        "MAU": 1300000
      },
      {
        "network": "Fasa 3",
        "MAU": 1000000
      }
    ],
    "2020": [
      {
        "network": "Fasa 1",
        "MAU": 1500000
      },
      {
        "network": "Fasa 2",
        "MAU": 1000000
      },
      {
        "network": "Fasa 3",
        "MAU": 800000
      }
    ]
  }

  chart.data = JSON.parse(JSON.stringify(allData[year]));
  categoryAxis.zoom({ start: 0, end: 1 / chart.data.length });

  series.events.on("inited", function() {
    setTimeout(function() {
      playButton.isActive = true; // this starts interval
    }, 2000)
  })
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

  getDaerah(data){
    // let daerah = this.daerahData;
    // console.log(data);
    // this.daerahData = [];
    // daerah.forEach(function(qwe){
    //   if(data == 'all'){
    //     console.log(qwe)
    //     this.daerahData.push(qwe)
    //   }
    // })
    // console.log(this.daerahData)
  }

}