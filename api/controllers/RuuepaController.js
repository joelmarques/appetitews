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
	 cabecalhos[1] = '2ª SEMANA';
	 cardapio.cabecalhos = cabecalhos;

	 var diasDaSemana = [];
	 var diaDaSemana = {};

	 //segunda-feira
	 diaDaSemana.dia = 'SEGUNDA (11/01)';
	 diaDaSemana.pratoPrincipal = 'Filé de frango ao molho de limão Sciciliano / Sopa de carne com legumes';
	 diaDaSemana.pratoVegetariano = 'Soja a Jardineira';
	 diaDaSemana.acompanhamentos = 'Arroz, feijão colônia, fuzili';
	 diaDaSemana.saladas = 'Purê de Jerimun';
	 diaDaSemana.sobremesa = 'Laranja';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //terca-feira
	 diaDaSemana.dia = 'TERÇA (12/01)';
	 diaDaSemana.pratoPrincipal = 'Escalopinho ao molho Chatour Brian';
	 diaDaSemana.pratoVegetariano = 'Bolinho de Grão de Bico';
	 diaDaSemana.acompanhamentos = 'Arroz, feijão carioquinha';
	 diaDaSemana.saladas = 'Salada Verde';
	 diaDaSemana.sobremesa = 'manga';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //quarta-feira
	 diaDaSemana.dia = 'QUARTA (13/01)';
	 diaDaSemana.pratoPrincipal = 'Língua Assada de panela';
	 diaDaSemana.pratoVegetariano = 'Kibe de Soja';
	 diaDaSemana.acompanhamentos = 'Arroz, feijão carioquinha';
	 diaDaSemana.saladas = 'Maionese de legumes';
	 diaDaSemana.sobremesa = 'gelatina';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //quinta-feira
	 diaDaSemana.dia = 'QUINTA (14/01)';
	 diaDaSemana.pratoPrincipal = 'Coxa e sobrecoxa ao forno';
	 diaDaSemana.pratoVegetariano = 'Bife de Chuchu a dorê';
	 diaDaSemana.acompanhamentos = 'Arroz com cenoura e ervilha, feijão da colônia';
	 diaDaSemana.saladas = 'Salada Verde';
	 diaDaSemana.sobremesa = 'Melancia';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //sexta-feira
	 diaDaSemana.dia = 'SEXTA (15/01)';
	 diaDaSemana.pratoPrincipal = 'Pernil Suíno na chapa acebolada';
	 diaDaSemana.pratoVegetariano = 'Hamburguer de legumes a parmegiana';
	 diaDaSemana.acompanhamentos = 'Arroz, feijão preto';
	 diaDaSemana.saladas = 'Beterraba ao vapor';
	 diaDaSemana.sobremesa = 'Laranja';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //adiciona os dias da semana ao cardapio
	 cardapio.diasDaSemana = diasDaSemana;

	 callback(cardapio)

 }
