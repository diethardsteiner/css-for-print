// The table generation function
function tabulate(container, data, columns) {
	//var table = d3.select("body").append("table")
	var table = d3.select(container).append("table")
			//.attr("style", "margin-left: 250px"),
			.attr("class", "table table-striped"),
		thead = table.append("thead"),
		tbody = table.append("tbody")
		;

	// append the header row
	thead.append("tr")
		.selectAll("th")
		.data(columns)
		.enter()
		.append("th")
		.text(function(column) { return column; })
		;
		

	// create a row for each object in the data
	var rows = tbody.selectAll("tr")
		.data(data)
		.enter()
		.append("tr");

	// create a cell in each row for each column
	var cells = rows.selectAll("td")
		.data(function(row) {
			// MAP DATA FROM CDA STRUCTURE TO D3JS STRUCTURE
			return columns.map(function(column, i) {
				//return {column: column, value: row[column]};
				return {column: column, value: row[i]};
			});
		})
		.enter()
		.append("td")
		//.attr("style", "font-family: Courier") // sets the font style
			.html(function(d) { return d.value; });

	return table;
}