// Hicharts Theme
Highcharts.theme = {
 colors: ['#25aae1', '#1a7692', '#f19c1d', '#44a9a8', '#f20000', '#b3d88c'],
 chart: {
  backgroundColor: 'transparent',
  shadow: false,
  style: {
   fontFamily: "'proxima-nova','HelveticaNeue-Light', 'Helvetica Neue Light','Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif"
 },
 plotBorderColor: '#25aae1'
},
title: {
  style: {
   color: '#25aae1',
   textTransform: 'uppercase',
   fontSize: '20px'
 }
},
subtitle: {
  style: {
   color: '#25aae1',
   textTransform: 'uppercase'
 }
},
xAxis: {
  gridLineColor: '#25aae1',
  labels: {
   style: {
    color: '#25aae1'
  }
},
lineColor: '#25aae1',
minorGridLineColor: '#25aae1',
tickColor: '#25aae1',
title: {
 style: {
  color: '#25aae1'
}
}
},
yAxis: {
  gridLineColor: '#25aae1',
  labels: {
   style: {
    color: '#25aae1'
  }
},
lineColor: '#25aae1',
minorGridLineColor: '#25aae1',
tickColor: '#25aae1',
tickWidth: 1,
title: {
 style: {
  color: '#25aae1'
}
}
},
tooltip: {
  backgroundColor: 'rgba(50,50,50, 0.85)',
  style: {
   color: '#F0F0F0',
 }
},
plotOptions: {
  series: {
   dataLabels: {
    color: '#333'
  },
  marker: {
    lineColor: '#333'
  }
},
boxplot: {
 fillColor: '#505053'
},
candlestick: {
 lineColor: 'white'
},
errorbar: {
 color: 'white'
}
},
legend: {
  itemStyle: {
   color: '#25aae1'
 },
 itemHoverStyle: {
   color: '#FFF'
 },
 itemHiddenStyle: {
   color: '#606063'
 }
},
credits: {
  style: {
   color: '#25aae1'
 }
},
labels: {
  style: {
   color: '#25aae1'
 }
},

drilldown: {
  activeAxisLabelStyle: {
   color: '#F0F0F3'
 },
 activeDataLabelStyle: {
   color: '#F0F0F3'
 }
},

navigation: {
  buttonOptions: {
   symbolStroke: '#DDDDDD',
   theme: {
    fill: '#505053'
  }
}
},

   // scroll charts
   rangeSelector: {
    buttonTheme: {
     fill: '#505053',
     stroke: '#000000',
     style: {
      color: '#CCC'
    },
    states: {
      hover: {
       fill: '#707073',
       stroke: '#000000',
       style: {
        color: 'white'
      }
    },
    select: {
     fill: '#000003',
     stroke: '#000000',
     style: {
      color: 'white'
    }
  }
}
},
inputBoxBorderColor: '#505053',
inputStyle: {
 backgroundColor: '#333',
 color: 'silver'
},
labelStyle: {
 color: 'silver'
}
},

navigator: {
  handles: {
   backgroundColor: '#666',
   borderColor: '#AAA'
 },
 outlineColor: '#CCC',
 maskFill: 'rgba(255,255,255,0.1)',
 series: {
   color: '#7798BF',
   lineColor: '#A6C7ED'
 },
 xAxis: {
   gridLineColor: '#505053'
 }
},

scrollbar: {
  barBackgroundColor: '#808083',
  barBorderColor: '#808083',
  buttonArrowColor: '#CCC',
  buttonBackgroundColor: '#606063',
  buttonBorderColor: '#606063',
  rifleColor: '#FFF',
  trackBackgroundColor: '#404043',
  trackBorderColor: '#404043'
},

   // special colors for some of the
   legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
   background2: '#505053',
   dataLabelsColor: '#B0B0B3',
   textColor: '#C0C0C0',
   contrastTextColor: '#F0F0F3',
   maskColor: 'rgba(255,255,255,0.3)'
 };
// Apply the theme
Highcharts.setOptions(Highcharts.theme);
Highcharts.setOptions({
  lang: {
    numericSymbols: ['Th', 'M', 'B', 'T']
  }
});


// CHARTS BEGIN HERE-- THEME HAS BEEN APPLIED

$('#chart1').highcharts({
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Total Transit Investment'
  },
  subtitle: {
    enabled: false,
  },
  xAxis: {
    categories: ['Federal', 'State', 'Local'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      enabled: false,
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valuePrefix: ' $'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: false
      }
    }
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Total Dollars Invested',
    data: [187615662, 11179827, 40082209]
  }]
});

// // // // // // // // // // // 

$('#chart2').highcharts({
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Federal Investment per Person'
  },
  subtitle: {
    enabled: false,
  },
  xAxis: {
    categories: ['GA', 'FL', 'NC', 'KY', 'TN', 'SC', 'MS', 'AL'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      enabled: false,
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valuePrefix: ' $'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: false
      }
    }
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Dollars Invested per Resident',
    data: [19.37, 16.87, 15.22, 13.09, 12.74, 7.56, 7.43, 7.02]
  }]
});

// // // // // // // // // // // 

$('#chart3').highcharts({
  chart: {
    type: 'bar'
  },
  title: {
    text: 'State Investment per Person'
  },
  subtitle: {
    enabled: false,
  },
  xAxis: {
    categories: ['National Average', 'FL', 'NC', 'TN', 'Regional Average', 'SC', 'GA', 'KY', 'MS', 'AL'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      enabled: false,
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valuePrefix: ' $'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: false
      }
    }
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Dollars Invested per Resident',
    data: [35.66, 9.87, 5.63, 5.10, 4.85, 1.52, 1.15, 1.06, .60, .03]
  }]
});

// // // // // // // // // // // 

$('#chart4').highcharts({
  chart: {
    type: 'bar'
  },
  title: {
    text: 'State Investment per Federal Dollar'
  },
  subtitle: {
    enabled: false,
  },
  xAxis: {
    categories: ['National Average', 'FL', 'NC', 'TN', 'Regional Average', 'SC', 'GA', 'KY', 'MS', 'AL'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      enabled: false,
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valuePrefix: ' $'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: false
      }
    }
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Dollars Invested per Resident',
    data: [0.99, 0.59, 0.40, 0.37, 0.34, 0.20, 0.08, 0.08, 0.06, 0.00]
  }]
});

// // // // // // // // // // // 

$('#chart5').highcharts({
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Local Investment per Person'
  },
  subtitle: {
    enabled: false,
  },
  xAxis: {
    categories: ['National Average', 'FL', 'Regional Average', 'NC', 'KY', 'TN', 'AL', 'GA', 'MS', 'SC'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      enabled: false,
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valuePrefix: ' $'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: false
      }
    }
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Total Dollars Invested',
    data: [35.80, 33.67, 16.89, 16.69, 14.23, 12.65, 7.31, 4.14, 3.35, 2.67]
  }]
});

// // // // // // // // // // // 

$('#chart6').highcharts({
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Local Investment per State Dollar'
  },
  subtitle: {
    enabled: false,
  },
  xAxis: {
    categories: ['National Average', 'KY', 'MS', 'GA', 'Regional Average', 'FL', 'NC', 'TN', 'SC'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      enabled: false,
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valuePrefix: ' $'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: false
      }
    }
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Dollars Invested Per Resident',
    data: [244.16, 13.37, 5.63, 3.59, 3.48, 3.41, 2.96, 2.48, 1.75]
  }]
});

// // // // // // // // // // // 

$('#chart7').highcharts({
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    shadow: false
  },
  title: {
    text: 'Georgia Transit Spending Breakdown'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.y:.0f}%</b>'
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        style: {
          textShadow: false,
        }
      }
    }
  },
  series: [{
    type: 'pie',
    name: 'Trade Flows',
    data: [
    ['Federal',           45.46],
    ['State',              2.71],
    ['Local',              9.71],
    ['Passenger Revenue', 42.12],
    ]
  }]
});

$('#chart8').highcharts({
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    shadow: false
  },
  title: {
    text: 'Number of Container Ship Calls by Region, 2013'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>${point.y:.0f}</b>'
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        style: {
          textShadow: false,
        }
      }
    }
  },
  series: [{
    type: 'pie',
    name: 'Trade Flows',
    data: [
    ['Federal',           24],
    ['State',             24],
    ['Local',             24],
    ['Passenger Revenue', 28],
    ]
  }]
});

// // // // // // // // // // // 
 