const errors = [
	{
		code: 101,
		message: 'Houve um problema interno, porfavor tente novamente mais tarde.'
	},
	{
		code: 102,
		message: 'Sua conta já está cadastrada em nosso sistema.'
	},
	{
		code: 103,
		message: 'Sub-comando não encontrado.'
	},
	{
		code: 104,
		message: 'Comando não existente.'
	}
];
module.exports = function getError(code) {
	const error = errors.find(err => err.code === code);
	if(!error) return {
		code: 404,
		message: 'Erro não encontrado'
	}
	return error;
}

