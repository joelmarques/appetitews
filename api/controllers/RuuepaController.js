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
	 cabecalhos[0] = 'RESTAURANTE UNIVERSITÁRIO - CCSE/UEPA';
	 cabecalhos[1] = 'CARDÁPIO SEMANAL - Abril/2016';
   cabecalhos[2] = '1ª SEMANA';
	 cardapio.cabecalhos = cabecalhos;

	 var diasDaSemana = [];
	 var diaDaSemana = {};

	 //segunda-feira
	 diaDaSemana.dia = 'SEGUNDA (04/04)';
	 diaDaSemana.pratoPrincipal = 'Frango ao molho xadrez';
	 diaDaSemana.pratoVegetariano = 'Macarronada de Soja';
	 diaDaSemana.acompanhamentos = 'Arroz branco Feijão da colônia';
	 diaDaSemana.saladas = 'Abóbora refogada';
	 diaDaSemana.sobremesa = '';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //terca-feira
	 diaDaSemana.dia = 'TERÇA (05/04)';
	 diaDaSemana.pratoPrincipal = 'Kafta';
	 diaDaSemana.pratoVegetariano = 'Torta de Jambu';
	 diaDaSemana.acompanhamentos = 'Arroz branco, feijão preto';
	 diaDaSemana.saladas = 'Salada verde';
	 diaDaSemana.sobremesa = '';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //quarta-feira
	 diaDaSemana.dia = 'QUARTA (06/04)';
	 diaDaSemana.pratoPrincipal = 'Língua assada de panela';
	 diaDaSemana.pratoVegetariano = 'Quibe de Soja';
	 diaDaSemana.acompanhamentos = 'Arroz branco Feijão da colônia';
	 diaDaSemana.saladas = 'Purê de abóbora';
	 diaDaSemana.sobremesa = '';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //quinta-feira
	 diaDaSemana.dia = 'QUINTA (07/04)';
	 diaDaSemana.pratoPrincipal = 'Fricassê de frango';
	 diaDaSemana.pratoVegetariano = 'Ovos ao molho de tomate';
	 diaDaSemana.acompanhamentos = 'Arroz branco, feijão preto.';
	 diaDaSemana.saladas = 'Salada verde';
	 diaDaSemana.sobremesa = '';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //sexta-feira
	 diaDaSemana.dia = 'SEXTA (08/04)';
	 diaDaSemana.pratoPrincipal = 'Espetinho de calabresa ou espetinho suíno';
	 diaDaSemana.pratoVegetariano = 'Risoto de soja';
	 diaDaSemana.acompanhamentos = 'Arroz, feijão preto.';
	 diaDaSemana.saladas = 'Baião de dois';
	 diaDaSemana.sobremesa = '';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //adiciona os dias da semana ao cardapio
	 cardapio.diasDaSemana = diasDaSemana;

   //adiciona a observacao
   cardapio.observacao = '';

	 callback(cardapio)

 }
