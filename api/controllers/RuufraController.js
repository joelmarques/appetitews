/**
 * RuufraController
 *
 * @description :: Server-side logic for managing ruufras
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  all:function (req, res) {
     getCardapioSemanal(function(result){
       return res.json(result);
     });
   }

 };

 function getCardapioSemanal(callback){

	 var cardapio = {};

	 var cabecalhos = [];
	 cabecalhos[0] = 'CARDÁPIO SEMANAL ANALISADO NUTRICIONALMENTE RU/UFRA';
	 cabecalhos[1] = 'FEVEREIRO/2016';
	 cardapio.cabecalhos = cabecalhos;

	 var diasDaSemana = [];
	 var diaDaSemana = {};

	 //segunda-feira
	 diaDaSemana.dia = 'SEGUNDA (01/02)';
	 diaDaSemana.pratoPrincipal = 'PICADINHO COM OVOS/ SALADA MISTA';
	 diaDaSemana.acompanhamentos = 'ARROZ TEMPERADO/FEIJÃO JALO/ FAROFA';
	 diaDaSemana.sobremesa = 'MELANCIA';
   diaDaSemana.valorNutricional = '1.105,04cal/ 149,51g de carboidrato/ 58,08g de proteínas/ 28,38g de lipídios';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //terca-feira
	 diaDaSemana.dia = 'TERÇA (02/02)';
	 diaDaSemana.pratoPrincipal = 'FILÉ DE FRANGO NA CHAPA/SALADA CRUA';
	 diaDaSemana.acompanhamentos = 'MACARRÃO TEMPERADO/ FEIJÃO CARIOCA/ FAROFA';
	 diaDaSemana.sobremesa = 'MAÇÃ';
   diaDaSemana.valorNutricional = '809,93cal/ 91,38g de carboidrato/ 60,49g de proteínas/ 19,56g de lipídios';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //quarta-feira
	 diaDaSemana.dia = 'QUARTA (03/02)';
	 diaDaSemana.pratoPrincipal = 'GUISADO DE CARNE E LEGUMES';
   diaDaSemana.acompanhamentos = 'ARROZ BRANCO/ FEIJÃO RAJADO/ FARINHA';
	 diaDaSemana.sobremesa = 'MAMÃO';
   diaDaSemana.valorNutricional = '1.200,16cal/ 158,27g de carboidrato/ 66,04g de proteínas/ 35,94g de lipídios'
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //quinta-feira
	 diaDaSemana.dia = 'QUINTA (04/02)';
	 diaDaSemana.pratoPrincipal = 'BIFE DE PANELA/ LEGUMES NA CHAPA';
	 diaDaSemana.acompanhamentos = 'ARROZ TEMPERADO/ FEIJÃO PRETO/ FAROFA';
	 diaDaSemana.sobremesa = 'TANGERINA';
   diaDaSemana.valorNutricional = '1.018,93cal/ 128,7g de carboidrato/ 63,37g de proteínas/ 28,03g de lipídios'
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //sexta-feira
	 diaDaSemana.dia = 'SEXTA (05/02)';
	 diaDaSemana.pratoPrincipal = 'CHURRASQUINHO DE CARNE';
	 diaDaSemana.acompanhamentos = 'PURÊ DE LEGUMES/ MOLHO VINAGRETTI/ ARROZ TEMPERADO/ FEIJÃO CARIOCA/ FAROFA';
	 diaDaSemana.sobremesa = 'BANANA';
   diaDaSemana.valorNutricional = '1.227,09cal/ 157,22g de carboidrato/ 41g de proteínas/ 49,52g de lipídios';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //adiciona os dias da semana ao cardapio
	 cardapio.diasDaSemana = diasDaSemana;

	 callback(cardapio)

 }



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
