var request = require('request');
var cheerio = require('cheerio');

var urlbase = "http://legiao.prefeitura.unicamp.br/cardapio.php";
/**
 * RuunicampController
 *
 * @description :: Server-side logic for managing ruunicamps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	all:function (req, res) {
		getCardapioSemanal(function(result){
			return res.json(result);
		});
	}

};

function getCardapioSemanal(callback) {

	request(urlbase, function(error, response, body) {
				 if (!error && response.statusCode == 200) {
						 $ = cheerio.load(body);

						 var conteudo = $('div#sistema_cardapio');

						 var cardapioDoDia = {};
						 cardapioDoDia.dia = conteudo.find('p.titulo').text();

						 var cardapios = [];

						 $('span.titulo_cardapio').each(function(index, value) {

							 var cardapio = {};
							 cardapio.titulo = $(this).text();
							 cardapios.push(cardapio);
						 });

						 $('table.fundo_cardapio').each(function(index, value) {
							 var itens = [];
							 $(this).find('td').each(function(index1, value1) {
								 itens[index1] = $(this).text();
							 });
							 cardapios[index].itens = itens;
						 });

						 cardapioDoDia.cardapios = cardapios;

						 callback(cardapioDoDia)
				 }
		 });
}
