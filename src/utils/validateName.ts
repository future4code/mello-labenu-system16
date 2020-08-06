export function validateName(name: string): void {
  if (typeof name !== 'string') {
    throw new Error(`Erro! Tipo de dado inválido: ${typeof name}
SOLUÇÃO: nome em string.`);
  }

  const nameArray = name.split(' ');

  if (nameArray.length < 2) {
    throw new Error(`Erro! Nome completo inválido: ${name}
SOLUÇÃO: Nome e Sobrenome obrigatórios, ambos com no mínimo 3 letras.`);
  }

  const firstName = nameArray[0];
  const lastName = nameArray.slice(1).join(' ');

  if (firstName.length < 3 || lastName.length < 3) {
    throw new Error(`Erro! Nome completo inválido: ${lastName}
SOLUÇÃO: Nome e Sobrenome obrigatórios, ambos com no mínimo 3 letras.`);
  }
}
