const lineChartInit = (chartEl, seriesName, color, colorIndex, seriesData) => {
  // ["#7cb5ec", "#434348", "#90ed7d", "#f7a35c", "#8085e9", "#f15c80", "#e4d354", "#2b908f", "#f45b5b", "#91e8e1"]
  Highcharts.chart(chartEl, {
    chart: {
      zoomType: "x",
    },
    colors: [color],
    title: {
      text: "",
    },
    // subtitle: {
    //   text: "Sub title test",
    // },
    yAxis: {
      title: {
        text: "",
      },
    },
    xAxis: {
      labels: {
        // enabled: false,
      },
      categories: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
      ],
    },
    legend: {
      // enabled: false,
    },
    series: [
      {
        type: "area",
        name: seriesName,
        data: seriesData,
        label: {
          enabled: false,
        },
      },
    ],
    credits: {
      enabled: false,
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, Highcharts.getOptions().colors[colorIndex]],
            [
              1,
              Highcharts.color(Highcharts.getOptions().colors[colorIndex])
                .setOpacity(0)
                .get("rgba"),
            ],
          ],
        },
        marker: {
          radius: 2,
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1,
          },
        },
        threshold: null,
      },
    },
  });
};
