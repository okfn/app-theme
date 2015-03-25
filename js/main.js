(function($) {
  // disable ribbon clickthrough
  if ( $(document).width() > 767) { 
    $('.navbar .open-knowledge').click(function(e) {e.preventDefault();
  }); }
  
  // default class
  $('.navbar .open-knowledge').addClass('collapsed');
  
})(jQuery);


//APP Scripts

//Dashboard
var options = {
    scaleShowGridLines : true,
    scaleGridLineColor : "rgba(0,0,0,.05)",
    scaleGridLineWidth : 1,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: true,
    bezierCurve : true,
    bezierCurveTension : 0.4,
    pointDot : true,
    pointDotRadius : 4,
    pointDotStrokeWidth : 1,
    pointHitDetectionRadius : 20,
    datasetStroke : true,
    datasetStrokeWidth : 2,
    datasetFill : true
};
var data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: "Valid %",
                    fillColor: "rgba(122, 184, 0,0.2)",
                    strokeColor: "rgba(122, 184, 0,1)",
                    pointColor: "rgba(122, 184, 0,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(122, 184, 0,1)",
                    data: [35, 31, 29, 36, 46, 45, 51, 55, 61, 69, 58, 67]
                },
                {
                    label: "Invalid %",
                    fillColor: "rgba(119,119,119,0.2)",
                    strokeColor: "rgba(119,119,119,1)",
                    pointColor: "rgba(119,119,119,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(119,119,119,1)",
                    data: [65, 69, 71, 64, 54, 55, 49, 45, 39, 31, 42, 33]
                }
            ]
        };
var canvas = document.getElementById("lineChart");
var ctx = canvas.getContext("2d");
new Chart(ctx).Line(data, options);
