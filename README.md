# App

GymPass style app.

# RFs (Requisitos funcionais)

- [X] Deve ser possivel se cadastrar;
- [ ] Deve ser possivel se autenticar;
- [ ] Deve ser possivel obter o perfil de um usuário logado;
- [ ] Deve ser possivel obter o numero de check-ins realizados pelo usuário logado;
- [ ] Deve ser possivel o usuario obter seu historico de check-ins;
- [ ] Deve ser possivel o usuario buscar academias proximas;
- [ ] Deve ser possivel o usuario buscar academias pelo nome;
- [ ] Deve ser possivel o usuario realizar check-in em uma academia;
- [ ] Deve ser possivel validar o check-in de um usuario;
- [ ] Deve ser possivel cadastrar uma academia;

## RNs (Regras de Negocio)

- [X] O usuario não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuario não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuario não pode fazer o check-in se não estiver perto (100m) da academia;
- [ ] O check-in so pode ser validado até 20 minutos após criado;
- [ ] O check-in so pode ser validade por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNF (Requisitos não-funcionais)

- [X] A senha do usuário precisa estar criptografada;
- [X] Os dados da aplicação precisam estar persistidos em um banco de PostgresSQL;
- [ ] Todas lista de dados precisa estar paginadas com 20 itens por pagina;
- [ ] O usuario deve ser identificado por um JWT