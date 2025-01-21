// anychart.onDocumentReady(function () {
//     anychart.data.loadJsonFile(
//       'https://gist.githubusercontent.com/shacheeswadia/47b28a4d061e415555f01f5ce48e9ae3/raw/0f7592a8048872db7b77ccd2df8907e61952a806/shippingDataInverted.json',
//       function (data) {

//         // set chart theme
//         anychart.theme('darkGlamour');

//         // sets map chart
//         var map = anychart.map();

//         // sets the global geodata
//         map.geoData('anychart.maps.world');

//         // sets chart title
//         map.title( 'Shipping ports across the globe');

//         // creates dataset from data
//         var portsDataSet = anychart.data.set(data).mapAs();

//        // helper function to create several series
//         var createSeries = function (name, data, color) {

//           // sets marker series and series settings
//           var series = map.marker(data);

//           series
//             .name(name)
//             .fill(color)
//             .stroke('none')
//             .type('circle')
//             .size(3)
//             .labels(false)
//             .selectionMode('none');

//           series
//             .legendItem()
//             .iconType('circle')
//             .iconFill(color);
//         };

//         // creates 5 series, filtering the data by the outflows at each port
//         createSeries(
//           'Up to 50',
//           portsDataSet.filter('outflows', filterFunction(0, 2000)),
//           '#D1FAE9'
//         );

//         // Enables map tooltip and sets settings for tooltip    
//         map
//           .tooltip() 
//           .useHtml(true)
//           .padding([8, 13, 10, 13])
//           .width(350)
//           .fontSize(12)
//           .fontColor('#e6e6e6')
//           .titleFormat(function () {
//             return this.getData('Name');
//           })
//           .format(function () {
//             return (
//               '<span style="color: #bfbfbf">Country: </span>'+
//               this.getData('Country') +
//               '<br/>' +
//               '<span style="color: #bfbfbf">Outflows: </span>' +
//               this.getData('outflows').toFixed(0)
//             );
//           });

//         // turns on the legend
//         map.legend(true);

//         // create zoom controls
//         var zoomController = anychart.ui.zoom();
//         zoomController.render(map);

//         // sets container id for the chart
//         map.container('world-map');

//         // initiates chart drawing
//         map.draw();
//       }
//     );
//   });

//   // helper filter function
//   function filterFunction(val1, val2) {
//     if (val2) {
//       return function (fieldVal) {
//         return val1 <= fieldVal && fieldVal < val2;
//       };
//     }
//     return function (fieldVal) {
//       return val1 <= fieldVal;
//     };
//   }


var markers = [
	{
		name: 'Palestine',
		coords: [31.5, 34.8],
	},
	{
		name: 'Russia',
		coords: [61, 105],
	},
	{
		name: 'Geenland',
		coords: [72, -42],
	},
	{
		name: 'Canada',
		coords: [56, -106],
	},
];

var map = new jsVectorMap({
	// world_merc, us_mill_en, us_merc_en,
	// us_lcc_en, us_aea_en, spain
	// russia, canada, iraq
	map: 'world',
	selector: '#map',
	backgroundColor: 'tranparent',
	draggable: true,
	zoomButtons: false,
	zoomOnScroll: false,
	zoomOnScrollSpeed: 3,
	labels: {
		markers: {
			render: function (index) {
				// return markers[index].name;
			}
		}
	},
	markers: markers,
	lineStyle: {
		stroke: '#808080',
		strokeWidth: 1,
		strokeLinecap: 'round'
	},
	markerStyle: {
		initial: {
			r: 7,
			fill: '#1351D8',
			fillOpacity: 1,
			stroke: '#FFF',
			strokeWidth: 5,
			strokeOpacity: .5
		},
		hover: {
			fill: '#8ea8ed',
			cursor: 'pointer'
		},
		selected: {
			fill: 'blue'
		},
		selectedHover: {}
	},
	markerLabelStyle: {
		initial: {
			fontFamily: 'Verdana',
			fontSize: 12,
			fontWeight: 500,
			cursor: 'default',
			fill: '#bababa'
		},
		hover: {
			cursor: 'pointer'
		},
		selected: {},
		selectedHover: {}
	}
})