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

function gaugeWithId(id, set = 1250, max = 3000, min = 0, animSpd = 32) {
    let target = document.querySelector(id); // your canvas element

    let gaugeChart = new Gauge(target).setOptions(opts); // create sexy gauge!
    gaugeChart.maxValue = max; // set max gauge value
    gaugeChart.setMinValue(min); // Prefer setter over gauge.minValue = 0
    gaugeChart.animationSpeed = animSpd; // set animation speed (32 is default value)
    gaugeChart.set(set); // set actual value
}

gaugeWithId("#gauge-1", 800);
gaugeWithId("#gauge-2", 1250);
gaugeWithId("#gauge-3", 1950);

while (true) {}
