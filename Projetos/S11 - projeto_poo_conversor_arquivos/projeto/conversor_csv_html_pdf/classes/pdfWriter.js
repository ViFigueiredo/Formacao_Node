const pdf = require('html-pdf');

class pdfWriter {
    static WritePDF(filename, html) {
        pdf.create(html, {}).toFile(filename, (err) => { });
    }
}

module.exports = pdfWriter;