export function validateEmail(email: string): void {
  if (typeof email !== 'string') {
    throw new Error(`Erro! Tipo de dado inválido: ${typeof email}
SOLUÇÃO: email no formato 'email@email.com' em string`);
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    throw new Error(`Erro! Email inválido: ${email}
SOLUCÃO: email no formato 'email@email.com'`);
  }
}
