// Socket give this array
var LastDaySales_value = [
    {
        "id": 1,
        "value": 11000,
		"country": "Երևան"
    },
    {
        "id": 2,
        "value": 28000,
		"country": "Գյումրի"
    },
    {
        "id": 3,
        "value": 27000,
		"country": "Վանաձոր"
    },
    {
        "id": 4,
        "value": 30000,
		"country": "Արարատ"
    },
    {
        "id": 5,
        "value": 45000,
		"country": "Աբովյան"
    },
    {
        "id": 6,
        "value": 23000,
		"country": "Հրազդան"
	},
	{
        "id": 7,
        "value": 17000,
		"country": "Կապան"
	},
	{
        "id": 8,
        "value": 26000,
		"country": "Արտաշատ"
	},
	{
        "id": 9,
        "value": 38000,
		"country": "Սևան"
	},
	{
        "id": 10,
        "value": 42000,
		"country": "Իջևան"
	},
	{
        "id": 11,
        "value": 40000,
		"country": "Չարենցավան"
	},
	{
        "id": 12,
        "value": 40100,
		"country": "Սիսյան"
	}
];
var colors = ["#E03141","#FFB946","#2ED47A","#008CA9","#7163CA","#615B51","#A2E96A","#DF5E5E","#4C5862"];

window.onload = function () {
	// Now Year in first digrames--------------------------------------------
	jQuery('.dateNowGS').text(new Date().getFullYear());

    // Touch slider Sale diskr----------------------------------
    {
    	jQuery("#content-slider").lightSlider({
             loop:true,
             keyPress:true,
             item: 4,
             pager: false,
             controls: false,
             slideMargin: 5,
             autoWidth: true
         });
    }
	// Digrames --------------------------------------------------------
	// lastDaySales
	{
		var lastDaySalesArrayValue = [];
		for(var i in LastDaySales_value){
			var obj = {
				x: LastDaySales_value[i]["id"],
				y: LastDaySales_value[i]["value"]
			};
			lastDaySalesArrayValue[i] = obj;
		}
		try {
			var chart = new CanvasJS.Chart("LastDaySales", {
	        animationEnabled: true,
	        interactivityEnabled: true,  
	        axisY: {
	            suffix: "$",
	            gridThickness: 1,
	            tickColor: "#D3D8DD",
	            gridColor: "#D3D8DD",
	            gridDashType: "longDash",
	            lineColor: "transparent",
	            labelFontFamily: "'Poppins', sans-serif",
	            labelFontColor: "#4C5862",
	            labelFontSize: 11
	        },
	        axisX: {
	            interval:1,
	            gridThickness: 1,
	            tickColor: "#D3D8DD",
	            gridColor: "#D3D8DD",
	            gridDashType: "longDash",
	            lineColor: "transparent",
	            labelFontFamily: "'Poppins', sans-serif",
	            labelFontColor: "#4C5862",
	            labelFontSize: 11
	        },
	        data: [{
	            type: "splineArea",
	            lineColor: "#109CF1",
	            color: "rgba(16, 156, 241, .4)",
	            dataPoints:lastDaySalesArrayValue
	        	}]
	        });
	    	chart.render();
		} catch(e) {
			console.log(e);
		}
		
	}

	// SalesByStations
	{
		var LastDaySales_valueArray = [];
		for(var i in LastDaySales_value){
			var obj = {        
					type: "column",
					showInLegend: true, 
					legendText: LastDaySales_value[i]["country"],
					legendMarkerType: "circle",
					dataPoints: [{ x: LastDaySales_value[i]["id"], y: LastDaySales_value[i]["value"] }]
			};
			LastDaySales_valueArray[i] = obj;
		}
		try {
			CanvasJS.addColorSet("SalesByStations", colors);
			var chart2 = new CanvasJS.Chart("SalesByStations", {
		        animationEnabled: true,
		        axisY: {
		            suffix: "$",
		            gridThickness: 1,
		            tickColor: "#D3D8DD",
		            gridColor: "#D3D8DD",
		            gridDashType: "longDash",
		            lineColor: "transparent",
		            labelFontFamily: "'Poppins', sans-serif",
		            labelFontColor: "#4C5862",
		            labelFontSize: 11
		        },
		        axisX: {
		            interval:2,
		            gridThickness: 1,
		            tickColor: "#D3D8DD",
		            gridColor: "#D3D8DD",
		            gridDashType: "longDash",
		            lineColor: "transparent",
		            labelFontFamily: "'Poppins', sans-serif",
		            labelFontColor: "transparent",
		            labelFontSize: 11
		        },
		        legend :{
		            verticalAlign: "center",
		            horizontalAlign: "right"
		        },
		        data: LastDaySales_valueArray 
		    });
		    chart2.render();
		} catch(e) {
			console.log(e);
		}
			
	}

	// SalesByStations
	{
		var LastDaySales_valueArray2 = [];
		for(var i in LastDaySales_value){
			var obj = {        
					type: "column",
					showInLegend: true, 
					legendText: LastDaySales_value[i]["country"],
					legendMarkerType: "circle",
					dataPoints: [{ x: LastDaySales_value[i]["id"], y: LastDaySales_value[i]["value"] }]
			};
			LastDaySales_valueArray2[i] = obj;
		}

		try {
			CanvasJS.addColorSet("SalesByStations2", colors);
			var chart3 = new CanvasJS.Chart("SalesByStations2", {
		        animationEnabled: true,
		        axisY: {
		            suffix: "$",
		            gridThickness: 1,
		            tickColor: "#D3D8DD",
		            gridColor: "#D3D8DD",
		            gridDashType: "longDash",
		            lineColor: "transparent",
		            labelFontFamily: "'Poppins', sans-serif",
		            labelFontColor: "#4C5862",
		            labelFontSize: 11
		        },
		        axisX: {
		            interval:2,
		            gridThickness: 1,
		            tickColor: "#D3D8DD",
		            gridColor: "#D3D8DD",
		            gridDashType: "longDash",
		            lineColor: "transparent",
		            labelFontFamily: "'Poppins', sans-serif",
		            labelFontColor: "transparent",
		            labelFontSize: 11
		        },
		        legend :{
		            verticalAlign: "center",
		            horizontalAlign: "right"
		        },
		        data: LastDaySales_valueArray2 
		    });
		    chart3.render();
		} catch(e) {
			console.log(e);
		}
	}

	// SalesByStations
	{
		var LastDaySales_valueArray3 = [];
		for(var i in LastDaySales_value){
			var obj = {        
					type: "column",
					showInLegend: true, 
					legendText: LastDaySales_value[i]["country"],
					legendMarkerType: "circle",
					dataPoints: [{ x: LastDaySales_value[i]["id"], y: LastDaySales_value[i]["value"] }]
			};
			LastDaySales_valueArray3[i] = obj;
		}

		try {
			CanvasJS.addColorSet("SalesByStations3", colors);
			var chart4 = new CanvasJS.Chart("SalesByStations3", {
		        animationEnabled: true,
		        axisY: {
		            suffix: "$",
		            gridThickness: 1,
		            tickColor: "#D3D8DD",
		            gridColor: "#D3D8DD",
		            gridDashType: "longDash",
		            lineColor: "transparent",
		            labelFontFamily: "'Poppins', sans-serif",
		            labelFontColor: "#4C5862",
		            labelFontSize: 11
		        },
		        axisX: {
		            interval:2,
		            gridThickness: 1,
		            tickColor: "#D3D8DD",
		            gridColor: "#D3D8DD",
		            gridDashType: "longDash",
		            lineColor: "transparent",
		            labelFontFamily: "'Poppins', sans-serif",
		            labelFontColor: "transparent",
		            labelFontSize: 11
		        },
		        legend :{
		            verticalAlign: "center",
		            horizontalAlign: "right"
		        },
		        data: LastDaySales_valueArray3 
		    });
		    chart4.render();
		} catch(e) {
			console.log(e);
		}
	}
}
