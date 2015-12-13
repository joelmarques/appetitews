var url = require('url');
var sys = require('sys');
var request = require('request');
var cheerio = require('cheerio');
var Base64 = require('js-base64').Base64;

var urlbase = "https://portal.ufra.edu.br/images/CAR._SEM._ANALISADO_RU_dez.pdf";

/**
 * RuufraController
 *
 * @description :: Server-side logic for managing ruufras
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	// all:function (req, res) {
	// 	getCardapioSemanal(function(result){
	// 		return res.json(result);
	// 	});
	// }


};


// var _ = require('underscore'),
//
// 		// JSON3 = require('json3'),
//     PDFParser = require('pdf2json');
//
// var pdfParser = new PDFParser();
//
// // Create a function to handle the pdf once it has been parsed.
// // In this case we cycle through all the pages and extraxt
// // All the text blocks and print them to console.
// // If you do `console.log(JSON.stringify(pdf))` you will
// // see how the parsed pdf is composed. Drill down into it
// // to find the data you are looking for.
// var _onPDFBinDataReady = function (pdf) {
//   console.log('Loaded pdf:\n');
// 	// console.log(JSON.stringify(pdf);
//
//   for (var i in pdf.data.Pages) {
//     var page = pdf.data.Pages[i];
//     for (var j in page.Texts) {
//       var text = page.Texts[j];
//       console.log(JSON.stringify(text.R[0].T));
//     }
//   }
// };
//
// // Create an error handling function
// var _onPDFBinDataError = function (error) {
//   console.log(error);
// };
//
// // Use underscore to bind the data ready function to the pdfParser
// // so that when the data ready event is emitted your function will
// // be called. As opposed to the example, I have used `this` instead
// // of `self` since self had no meaning in this context
// pdfParser.on('pdfParser_dataReady', _.bind(_onPDFBinDataReady, this));
//
// // Register error handling function
// pdfParser.on('pdfParser_dataError', _.bind(_onPDFBinDataError, this));
//
// // Construct the file path of the pdf
// var pdfFilePath = 'CAR._SEM._ANALISADO_RU_dez.pdf';
//
// // Load the pdf. When it is loaded your data ready function will be called.
// pdfParser.loadPDF(pdfFilePath);
