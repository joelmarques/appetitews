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
	 diaDaSemana.dia = 'SEGUNDA (18/01)';
	 diaDaSemana.pratoPrincipal = 'PICADINHO COM LEGUMES';
	 diaDaSemana.acompanhamentos = 'ARROZ TEMPERADO/FEIJÃO RAJADO/ FAROFA';
	 diaDaSemana.sobremesa = 'MELÃO';
   diaDaSemana.valorNutricional = '629,5 cal/ 130,66g de carboidrato/ 48,86g de proteínas/ 22,7g de lipídios';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //terca-feira
	 diaDaSemana.dia = 'TERÇA (19/01)';
	 diaDaSemana.pratoPrincipal = 'BIFE DE FÍGADO / GRATINADO DE LEGUMES';
	 diaDaSemana.acompanhamentos = 'ARROZ TEMPERADO/FEIJÃO JALO/FAROFA/';
	 diaDaSemana.sobremesa = 'LARANJA';
   diaDaSemana.valorNutricional = '1.142,3cal/ 142,65g de carboidrato/ 48,84g de proteínas/ 42,2g de lipídios';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //quarta-feira
	 diaDaSemana.dia = 'QUARTA (20/01)';
	 diaDaSemana.pratoPrincipal = 'CARNE ASSADA/SALADA MISTA 2 COM MAIONESE';
   diaDaSemana.acompanhamentos = 'ARROZ TEMPERADO/ FEIJÃO CARIOCA/ FAROFA/';
	 diaDaSemana.sobremesa = 'MAMÃO';
   diaDaSemana.valorNutricional = '1.072,3cal/ 132,01g de carboidrato/ 63,55g de proteínas/ 33,4g de lipídios'
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //quinta-feira
	 diaDaSemana.dia = 'QUINTA (21/01)';
	 diaDaSemana.pratoPrincipal = 'PEIXE ASSADO/PURÊ DE LEGUMES';
	 diaDaSemana.acompanhamentos = 'MOLHO  VINAGRETTI/ARROZ  TEMPERADO/ FEIJÃO  PRETO/ FAROFA/';
	 diaDaSemana.sobremesa = 'BANANA';
   diaDaSemana.valorNutricional = '856,7cal/ 135,37g de carboidrato/ 42,9g de proteínas/ 16,7g de lipídios'
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //sexta-feira
	 diaDaSemana.dia = 'SEXTA (22/01)';
	 diaDaSemana.pratoPrincipal = 'CANJA/ FRANGO ASSADO/SALADA CRUA';
	 diaDaSemana.acompanhamentos = 'MACARRÃO TEMPERADO/ FEIJÃO JALO/FAROFA/';
	 diaDaSemana.sobremesa = 'MELANCIA';
   diaDaSemana.valorNutricional = '980,43cal/ 87,46g de carboidrato/ 68,55g de proteínas/ 36,3g de lipídios';
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
