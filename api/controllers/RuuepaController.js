/**
 * RuuepaController
 *
 * @description :: Server-side logic for managing ruuepas
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
	 cabecalhos[0] = 'CARDÁPIO SEMANAL MÊS: JANEIRO /2016 ';
	 cabecalhos[1] = '3ª SEMANA';
	 cardapio.cabecalhos = cabecalhos;

	 var diasDaSemana = [];
	 var diaDaSemana = {};

	 //segunda-feira
	 diaDaSemana.dia = 'SEGUNDA (18/01)';
	 diaDaSemana.pratoPrincipal = 'Frango ao  aroma de gengibre';
	 diaDaSemana.pratoVegetariano = 'Torta de legumes';
	 diaDaSemana.acompanhamentos = 'Arroz com cenoura, feijão da colônia/ sopa';
	 diaDaSemana.saladas = 'Purê de Jerimun';
	 diaDaSemana.sobremesa = 'Laranja';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //terca-feira
	 diaDaSemana.dia = 'TERÇA (19/01)';
	 diaDaSemana.pratoPrincipal = 'Bife a cavalo';
	 diaDaSemana.pratoVegetariano = 'Bife de Chuchu a dorê';
	 diaDaSemana.acompanhamentos = 'Arroz branco, feijão carioquinha c/ legumes';
	 diaDaSemana.saladas = 'Salada verde';
	 diaDaSemana.sobremesa = 'Melancia';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //quarta-feira
	 diaDaSemana.dia = 'QUARTA (20/01)';
	 diaDaSemana.pratoPrincipal = 'Dobradinha';
	 diaDaSemana.pratoVegetariano = 'Panqueca de Soja';
	 diaDaSemana.acompanhamentos = 'Arroz feijão da colônia';
	 diaDaSemana.saladas = 'Chuchu,couve, cenoura, repolho, azeitona, ovos.';
	 diaDaSemana.sobremesa = 'Manga';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //quinta-feira
	 diaDaSemana.dia = 'QUINTA (21/01)';
	 diaDaSemana.pratoPrincipal = 'Escalopinho de frango chinês';
	 diaDaSemana.pratoVegetariano = 'Berinjela recheada gratinada';
	 diaDaSemana.acompanhamentos = 'Yakimeche/ feijão da colônia';
	 diaDaSemana.saladas = 'Legumes Salteados no azeite';
	 diaDaSemana.sobremesa = 'Gelatina';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //sexta-feira
	 diaDaSemana.dia = 'SEXTA (22/01)';
	 diaDaSemana.pratoPrincipal = 'Pernil suíno acebolado/ toscana assada de forno';
	 diaDaSemana.pratoVegetariano = 'Fuzili vegetariano';
	 diaDaSemana.acompanhamentos = 'Arroz , feijão preto, farofa';
	 diaDaSemana.saladas = 'Beterraba ao vapor';
	 diaDaSemana.sobremesa = 'Laranja';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //adiciona os dias da semana ao cardapio
	 cardapio.diasDaSemana = diasDaSemana;

	 callback(cardapio)

 }
