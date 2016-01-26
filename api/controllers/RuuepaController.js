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
	 cabecalhos[1] = 'CARDÁPIO SEMANAL - JANEIRO/2016';
   cabecalhos[2] = '4ª SEMANA';
	 cardapio.cabecalhos = cabecalhos;

	 var diasDaSemana = [];
	 var diaDaSemana = {};

	 //segunda-feira
	 diaDaSemana.dia = 'SEGUNDA (25/01)';
	 diaDaSemana.pratoPrincipal = 'Peito de frango grelhado/ Sopa de carne com legumes';
	 diaDaSemana.pratoVegetariano = 'Soja á jardineira';
	 diaDaSemana.acompanhamentos = 'Arroz com cenoura, feijão da colônia.';
	 diaDaSemana.saladas = 'Beterraba ao vapor';
	 diaDaSemana.sobremesa = 'Laranja';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //terca-feira
	 diaDaSemana.dia = 'TERÇA (26/01)';
	 diaDaSemana.pratoPrincipal = 'Escalopinho de carne Chinês';
	 diaDaSemana.pratoVegetariano = 'Bolinho de grão de bico';
	 diaDaSemana.acompanhamentos = 'Arroz branco, fuzili, feijão carioquinha c/ legumes.';
	 diaDaSemana.saladas = 'Salada verde';
	 diaDaSemana.sobremesa = 'Melancia';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //quarta-feira
	 diaDaSemana.dia = 'QUARTA (27/01)';
	 diaDaSemana.pratoPrincipal = 'Paleta Suína assada ao molho do Cheff';
	 diaDaSemana.pratoVegetariano = 'Torta de falso Siri';
	 diaDaSemana.acompanhamentos = 'Arroz branco, feijão da colônia.';
	 diaDaSemana.saladas = 'Beterraba ao vapor';
	 diaDaSemana.sobremesa = 'Manga';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //quinta-feira
	 diaDaSemana.dia = 'QUINTA (28/01)';
	 diaDaSemana.pratoPrincipal = 'Língua Assada de panela';
	 diaDaSemana.pratoVegetariano = 'Tempurá de legumes';
	 diaDaSemana.acompanhamentos = 'Arroz, feijão preto.';
	 diaDaSemana.saladas = 'Maionese de legumes';
	 diaDaSemana.sobremesa = 'Gelatina';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //sexta-feira
	 diaDaSemana.dia = 'SEXTA (29/01)';
	 diaDaSemana.pratoPrincipal = 'Maniçoba / Arroz com galinha / sopa de carne com legumes';
	 diaDaSemana.pratoVegetariano = 'Risoto de soja com lentilha';
	 diaDaSemana.acompanhamentos = 'Arroz branco e farofa';
	 diaDaSemana.saladas = 'Salada verde';
	 diaDaSemana.sobremesa = 'Laranja';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //adiciona os dias da semana ao cardapio
	 cardapio.diasDaSemana = diasDaSemana;

	 callback(cardapio)

 }
