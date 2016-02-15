var url = require('url');
var sys = require('sys');
var request = require('request');
var cheerio = require('cheerio');
var Base64 = require('js-base64').Base64;

var urlbase = "http://ru.ufpa.br/index.php?option=com_content&view=article&id=7";
/**
 * RuufpaController
 *
 * @description :: Server-side logic for managing ruufpas
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

						 var cardapio = {};
						 var cabecalhos = [];
						 var diasDaSemana = [];

						 $('table#wrap td#centro table').each(function(index, value) {

							 var padding = $(this).attr('cellpadding');

							 if (padding == -1) {//tabela com cabeçalho do cardapio

								 $(this).find('p').each(function(index, value) {
									 cabecalhos[index] = $(this).text();
								});
								 cardapio.cabecalhos = cabecalhos;
							 }

							 if (padding == 1) {//tabela do cardapio

								 $(this).find('tr').each(function(index, value) {

									 if (index > 0 && index < 6) {//de segunda a sexta

										var diaDaSemana = {};

										$(this).find('td').each(function(index, value) {//para cada dia

											if(index == 0) {//coluna 'Dia da Semana'
												diaDaSemana.dia = $(this).find('strong').text();
											}

											if(index == 1) {//coluna Almoco

												var almoco = {};
												almoco.prato = $(this).find('p').text();

												var acompanhamentos = [];

												$(this).find('li').each(function(index, value) {//para cada acompanhamento
													acompanhamentos[index] = $(this).text();
												});

												almoco.acompanhamentos = acompanhamentos;
												diaDaSemana.almoco = almoco;
											}

											if (index == 2) {//coluna jantar

												var jantar = {};
												jantar.prato = $(this).find('p').text();

												var acompanhamentos = [];

												$(this).find('li').each(function(index, value) {//para cada acompanhamento
													acompanhamentos[index] = $(this).text();
												});

												jantar.acompanhamentos = acompanhamentos;
												diaDaSemana.jantar = jantar;
												diasDaSemana.push(diaDaSemana);
												diaDaSemana = {};
											}

										});


									}//final sexta-feira

								});
								cardapio.diasDaSemana = diasDaSemana;
							 }
						 });

						 //adiciona a observacao
					   cardapio.observacao = 'Cardápio sujeito à alterações. Ajude o Meio Ambiente: traga seu copo ou sua caneca.';

						 callback(cardapio)
				 }
		 });
}
