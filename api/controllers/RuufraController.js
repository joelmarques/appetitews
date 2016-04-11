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
	 cabecalhos[1] = 'MARÇO/2016';
	 cardapio.cabecalhos = cabecalhos;

	 var diasDaSemana = [];
	 var diaDaSemana = {};

	 //segunda-feira
	 diaDaSemana.dia = 'SEGUNDA (14/03)';
	 diaDaSemana.pratoPrincipal = 'PICADINHO COM OVOS/ SALADA MISTA';
	 diaDaSemana.acompanhamentos = 'ARROZ TEMP./FEIJÃO JALO/ FAROFA';
	 diaDaSemana.sobremesa = 'MELÃO';
   diaDaSemana.valorNutricional = 'Valor Nutricional: 1.105,04cal/ 149,51 g de carboidrato/ 58,08g de proteínas/ 28,38g de lipídios';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //terca-feira
	 diaDaSemana.dia = 'TERÇA (15/03)';
	 diaDaSemana.pratoPrincipal = 'BIFE NA CHAPA/PURÊ DE LEGUMES';
	 diaDaSemana.acompanhamentos = 'ARROZ TEMP./FEIJÃO CARIOCA/FAROFA';
	 diaDaSemana.sobremesa = 'MELANCIA';
   diaDaSemana.valorNutricional = 'Valor Nutricional: 1.178,9cal/ 133,06g de carboidrato/ 56,53g de proteínas/ 46,9g de lipídios';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //quarta-feira
	 diaDaSemana.dia = 'QUARTA (16/03)';
	 diaDaSemana.pratoPrincipal = 'CANJA/FRANGO ASSADO/SALADA CRUA';
   diaDaSemana.acompanhamentos = '/MACARRÃO TEMP./FEIJÃO JALO/FAROFA';
	 diaDaSemana.sobremesa = 'BANANA';
   diaDaSemana.valorNutricional = 'Valor Nutricional: 980,43cal/ 87,46g de carboidrato/ 68,55g de proteínas/ 36,3g de lipídios'
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //quinta-feira
	 diaDaSemana.dia = 'QUINTA (17/03)';
	 diaDaSemana.pratoPrincipal = 'BIFE DE FÍGADO/GRATINADO DE LEGUMES';
	 diaDaSemana.acompanhamentos = 'ARROZ  TEMPERADO/  FEIJÃO JALO FAROFA';
	 diaDaSemana.sobremesa = 'MAMÃO';
   diaDaSemana.valorNutricional = 'Valor Nutricional: 1.142,3cal/ 142,65 g de carboidrato/ 48,84 g de proteínas/ 42,2g de lipídios'
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //sexta-feira
	 diaDaSemana.dia = 'SEXTA (18/03)';
	 diaDaSemana.pratoPrincipal = 'FEIJOADA COMPLETA/ COUVE À MINEIRA/';
	 diaDaSemana.acompanhamentos = 'ARROZ BRANCO/ FAROFA';
	 diaDaSemana.sobremesa = 'LARANJA';
   diaDaSemana.valorNutricional = 'Valor Nutricional:2.593,41cal/ 220,65g de carboidrato/154,01g de proteínas/ 117,93g de lipídios';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //adiciona os dias da semana ao cardapio
	 cardapio.diasDaSemana = diasDaSemana;

   //adiciona a observacao
   cardapio.observacao = 'OBS: Cardápio sujeito à mudanças.';

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
