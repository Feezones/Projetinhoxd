export class Cliente {
    nome!: string;
    sobrenome!: string;
    cpf!: string;
    email!: string;
    endereco!: string;
    senha!: string;
    confsenha!: string;
  
    constructor(
      nome: string,
      sobrenome: string,
      cpf: string,
      email: string,
      endereco: string,
      senha: string,
      confsenha: string
    ) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.cpf = cpf;
      this.email = email;
      this.endereco = endereco;
      this.senha = senha;
      this.confsenha = confsenha;
    }
  }
  