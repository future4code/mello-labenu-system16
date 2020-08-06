import moment from 'moment';

export function validateBirthDate(birthDate: string): void {
  if (typeof birthDate !== 'string') {
    throw new Error(`Erro! Tipo de dado inválido: ${typeof birthDate}
SOLUÇÃO: data de nascimento no formato DD/MM/AAAA em string`);
  }

  const birthday = moment(birthDate, 'DD/MM/YYYY', true);
  const today = moment();

  if (!birthday.isValid()) {
    throw new Error(`Erro! Data de nascimento inválida: ${birthDate}
SOLUÇÃO: data de nascimento no formato 'DD/MM/AAAA'`);
  }

  if (!today.subtract(18, 'years').isAfter(birthday)) {
    throw new Error(`Erro! Idade mínima de 18 anos para clientes.`);
  }

  if (today.isAfter(birthday.add(150, 'years'))) {
    throw new Error(`Erro! Idade máxima de 150 anos para clientes.`);
  }
}
