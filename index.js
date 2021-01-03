var mymap;
var marker;

var api_key = "at_Em8MqaDJNgXnynu0CnqFNFsJL4PtS";
$(".btn").click(function(){
    var ip = $("#myText").val();
    $(function () {
        $.ajax({
            url: "https://geo.ipify.org/api/v1",
            data: {apiKey: api_key, ipAddress: ip},
            success: function(data) {
                $(".ip-address").html(data.ip);
                $(".location").html(data.location.country + " " + data.location.region + " " + data.location.city);
                $(".timezone").html(data.location.timezone);
                $(".isp").html(data.isp);

                var latitude=data.location.lat;
                var longitude=data.location.lng;

                mymap = L.map('map').setView([data.location.lat, data.location.lng], 13);
                marker = L.marker([data.location.lat, data.location.lng]).addTo(mymap);

                L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2FydGlrYXlkMjMiLCJhIjoiY2tqZnIxM29lM29xczJybnFrNW95dTJzdiJ9.GOTc1nDQ3ts7T42FvbbH4g', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'pk.eyJ1Ijoia2FydGlrYXlkMjMiLCJhIjoiY2tqZnIxM29lM29xczJybnFrNW95dTJzdiJ9.GOTc1nDQ3ts7T42FvbbH4g'
                }).addTo(mymap);
            }
        });
     });
    
});



