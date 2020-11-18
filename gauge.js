let opts = {
    angle: 0, // The span of the gauge arc
    lineWidth: 0.44, // The line thickness
    radiusScale: 0.83, // Relative radius
    pointer: {
        length: 0.6, // // Relative to gauge radius
        strokeWidth: 0.035, // The thickness
        color: "#000000", // Fill color
    },
    limitMax: false, // If false, max value increases automatically if value > maxValue
    limitMin: false, // If true, the min value of the gauge will be fixed
    colorStart: "#6FADCF", // Colors
    colorStop: "#8FC0DA", // just experiment with them
    strokeColor: "#E0E0E0", // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true, // High resolution support
};

let target = document.querySelector("#gauge"); // your canvas element

let gaugeChart = new Gauge(target).setOptions(opts); // create sexy gauge!
gaugeChart.maxValue = 3000; // set max gauge value
gaugeChart.setMinValue(0); // Prefer setter over gauge.minValue = 0
gaugeChart.animationSpeed = 32; // set animation speed (32 is default value)
gaugeChart.set(1250); // set actual value
