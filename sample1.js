// CDA connnection details

var cdaBasUrl = 'http://localhost:8080'
	, cdaAuthenticationParams = '&userid=admin&password=password'
	/* authentication details must be only used for local development work */
	, cdaFullUrl = cdaBasUrl + '/pentaho/plugin/cda/api/doQuery?path='
	;

// Parse the date / time
var parseDate = d3.time.format("%d-%b-%y").parse;

d3.json(cdaFullUrl + '/public/Dashboards/Report/Quarterly-Report.cda&dataAccessId=qry_comments' + cdaAuthenticationParams, function(error, data) {
	
	if (error) return console.warn(error);
	
	// render the table
	tabulate('#table-comments', data.resultset, ["Date", "Comment"]);

});


d3.json(cdaFullUrl + '/public/Dashboards/Report/Quarterly-Report.cda&dataAccessId=qry_characteristics' + cdaAuthenticationParams, function(error, data) {

	if (error) return console.warn(error);

	// render the table
	tabulate('#table-characteristics', data.resultset, ["Key", "Value"]);

});


