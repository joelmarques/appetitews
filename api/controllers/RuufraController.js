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
	 cabecalhos[1] = 'JANEIRO/2016';
	 cardapio.cabecalhos = cabecalhos;

	 var diasDaSemana = [];
	 var diaDaSemana = {};

	 //segunda-feira
	 diaDaSemana.dia = 'SEGUNDA (25/01)';
	 diaDaSemana.pratoPrincipal = 'PICADINHO COM MACARRÃO/SALADA CRUA';
	 diaDaSemana.acompanhamentos = 'FEIJÃO RAJADO/ FAROFA';
	 diaDaSemana.sobremesa = 'MELÃO';
   diaDaSemana.valorNutricional = '975,75 cal/ 85,2 g de carboidrato/ 48,74 g de proteínas/ 50,3 g de lipídios';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //terca-feira
	 diaDaSemana.dia = 'TERÇA (26/01)';
	 diaDaSemana.pratoPrincipal = 'BIFE NA CHAPA/SALADA MISTA';
	 diaDaSemana.acompanhamentos = 'ARROZ TEMPERADO/ FEIJÃO CARIOQUINHA/ FAROFA/';
	 diaDaSemana.sobremesa = 'PERA';
   diaDaSemana.valorNutricional = '1.178,9 cal/ 133,06 g de carboidrato/ 56,53 g de proteínas/ 46,9 g de lipídios';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //quarta-feira
	 diaDaSemana.dia = 'QUARTA (27/01)';
	 diaDaSemana.pratoPrincipal = 'GUISADO DE CARNE E LEGUMES';
   diaDaSemana.acompanhamentos = 'ARROZ BRANCO/FEIJÃO PRETO/ FARINHA';
	 diaDaSemana.sobremesa = 'BANANA';
   diaDaSemana.valorNutricional = '1.172,32 cal/ 149,35 g de carboidrato/ 65,44 g de proteínas/ 36,79 g de lipídios'
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //quinta-feira
	 diaDaSemana.dia = 'QUINTA (28/01)';
	 diaDaSemana.pratoPrincipal = 'CANJA/ FRANGO GUISADO';
	 diaDaSemana.acompanhamentos = 'PURÊ DE LEGUMES 3/ ARROZ TEMPERADO/ FEIJÃO JALO/FAROFA';
	 diaDaSemana.sobremesa = 'MAMÃO';
   diaDaSemana.valorNutricional = '1.192,43 cal/ 147,33 g de carboidrato/ 69,94 g de proteínas/ 36,47 g de lipídios'
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //sexta-feira
	 diaDaSemana.dia = 'SEXTA (29/01)';
	 diaDaSemana.pratoPrincipal = 'FEIJOADA COMPLETA/ COUVE À MINEIRA';
	 diaDaSemana.acompanhamentos = 'ARROZ BRANCO/ FAROFA';
	 diaDaSemana.sobremesa = 'LARANJA';
   diaDaSemana.valorNutricional = '2.593,41 cal/ 220,65 g de carboidrato/ 154,01 g de proteínas/ 117,93 g de lipídios';
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
