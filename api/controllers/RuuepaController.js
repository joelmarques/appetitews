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
	 cabecalhos[1] = 'CARDÁPIO SEMANAL - FEVEREIRO/2016';
   cabecalhos[2] = '3ª SEMANA';
	 cardapio.cabecalhos = cabecalhos;

	 var diasDaSemana = [];
	 var diaDaSemana = {};

	 //segunda-feira
	 diaDaSemana.dia = 'SEGUNDA (15/02)';
	 diaDaSemana.pratoPrincipal = 'Isca de frango';
	 diaDaSemana.pratoVegetariano = 'Hamburg de lentilha e aveia';
	 diaDaSemana.acompanhamentos = 'Arroz branco Feijão da colônia';
	 diaDaSemana.saladas = 'Beterraba ao vapor';
	 diaDaSemana.sobremesa = 'Laranja';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //terca-feira
	 diaDaSemana.dia = 'TERÇA (16/02)';
	 diaDaSemana.pratoPrincipal = 'Bife á milanesa';
	 diaDaSemana.pratoVegetariano = 'Polenta de soja';
	 diaDaSemana.acompanhamentos = 'Arroz branco Feijão carioca c/legumes';
	 diaDaSemana.saladas = 'Mix de vegetais c/gergelim';
	 diaDaSemana.sobremesa = 'Melancia';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //quarta-feira
	 diaDaSemana.dia = 'QUARTA (17/02)';
	 diaDaSemana.pratoPrincipal = 'Isca de fígado acebolada';
	 diaDaSemana.pratoVegetariano = 'Cuscuz de verdura';
	 diaDaSemana.acompanhamentos = 'Arroz branco e feijão carioca';
	 diaDaSemana.saladas = 'Legumes cozidos batata, cenoura,feijão verde e maxixe.';
	 diaDaSemana.sobremesa = 'Manga';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //quinta-feira
	 diaDaSemana.dia = 'QUINTA (18/02)';
	 diaDaSemana.pratoPrincipal = 'Escalopinho de frango chinês';
	 diaDaSemana.pratoVegetariano = 'Paella vegetariana';
	 diaDaSemana.acompanhamentos = 'Arroz branco, feijão carioca.';
	 diaDaSemana.saladas = 'Salada verde';
	 diaDaSemana.sobremesa = 'Gelatina';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //sexta-feira
	 diaDaSemana.dia = 'SEXTA (19/02)';
	 diaDaSemana.pratoPrincipal = 'Toscana assada';
	 diaDaSemana.pratoVegetariano = 'Bolinho de grão de bico';
	 diaDaSemana.acompanhamentos = 'Arroz, feijão preto.';
	 diaDaSemana.saladas = 'Couve á mineira';
	 diaDaSemana.sobremesa = 'Laranja';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //adiciona os dias da semana ao cardapio
	 cardapio.diasDaSemana = diasDaSemana;

   //adiciona a observacao
   cardapio.observacao = 'Obs.: Este cardápio poderá sofrer alterações.';

	 callback(cardapio)

 }
