## Example on how to use CSS to create a PDF report

### Setup

1. Install the latest version of the Pentaho BA-Server / BI-Server, PhantomJS and WeasyPrint on your PC.
2. Upload the `pentaho-solutions/Report` folder to the Pentaho BA Server. It has to reside in following folder on the server: `/public/Dashboards`.
3. Follow info outlined in [this blogpost](). To preprocess the HTML run `phantomjs phantomjs-preprocess-html.js > output.html`. To generate the PDF, run `python -m weasyprint.navigator`, open your favourite web browser with following URL `localhost:5000` and enter the full file path of `output.html` into the input field. 