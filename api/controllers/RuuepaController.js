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
   cabecalhos[2] = '1ª SEMANA';
	 cardapio.cabecalhos = cabecalhos;

	 var diasDaSemana = [];
	 var diaDaSemana = {};

	 //segunda-feira
	 diaDaSemana.dia = 'SEGUNDA (01/02)';
	 diaDaSemana.pratoPrincipal = 'Fricassê de frango';
	 diaDaSemana.pratoVegetariano = 'Kibe de soja no forno';
	 diaDaSemana.acompanhamentos = 'Arroz com cenoura, feijão da colônia.';
	 diaDaSemana.saladas = 'Repolho, couve, e cenoura refogados';
	 diaDaSemana.sobremesa = 'Laranja';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //terca-feira
	 diaDaSemana.dia = 'TERÇA (02/02)';
	 diaDaSemana.pratoPrincipal = 'Almondegas ao sugo';
	 diaDaSemana.pratoVegetariano = 'Berinjela a dorê';
	 diaDaSemana.acompanhamentos = 'Arroz branco, feijão carioquinha com legumes.';
	 diaDaSemana.saladas = 'Salada verde';
	 diaDaSemana.sobremesa = 'Melancia';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //quarta-feira
	 diaDaSemana.dia = 'QUARTA (03/02)';
	 diaDaSemana.pratoPrincipal = 'Dobradinha';
	 diaDaSemana.pratoVegetariano = 'Hamburg de legumes à parmegiana';
	 diaDaSemana.acompanhamentos = 'Arroz branco e feijão carioca';
	 diaDaSemana.saladas = 'Chuchu, couve, cenoura, repolho, azeitona e ovos';
	 diaDaSemana.sobremesa = 'Manga';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //quinta-feira
	 diaDaSemana.dia = 'QUINTA (04/02)';
	 diaDaSemana.pratoPrincipal = 'Coxa e sobrecoxa ao tempero do Cheff';
	 diaDaSemana.pratoVegetariano = 'Panqueca de soja';
	 diaDaSemana.acompanhamentos = 'Arroz branco, feijão carioca';
	 diaDaSemana.saladas = 'Purê de batata';
	 diaDaSemana.sobremesa = 'Gelatina';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //sexta-feira
	 diaDaSemana.dia = 'SEXTA (05/02)';
	 diaDaSemana.pratoPrincipal = 'oscana ao forno / Churrasquinho suíno';
	 diaDaSemana.pratoVegetariano = 'Bife  de chuchu á milanesa';
	 diaDaSemana.acompanhamentos = 'Arroz, feijão preto.';
	 diaDaSemana.saladas = 'Salada verde';
	 diaDaSemana.sobremesa = 'Laranja';
	 diasDaSemana.push(diaDaSemana);
	 diaDaSemana = {};

	 //adiciona os dias da semana ao cardapio
	 cardapio.diasDaSemana = diasDaSemana;

	 callback(cardapio)

 }
