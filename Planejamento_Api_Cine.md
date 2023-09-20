# Objetivo
 - Verificar a funcionalidade correta do sistema, garantindo que usuários possam criar suas ter suas contas, vendo o catálogo de filmes e conseguindo seus tickets

# Escopo:
As rotas testadas serão
 - Movies
 - Tickets

# Ambiente de teste
Uma cópia do ambiente de produção, funcionando apenas em host local para não interferir no banco real, mantendo os dados de amostra.

# Critérios de aceitação

As respostas e resultados devem estar de acordo com o esperado.


# Casos de teste/Cenários
## Movies
|Casos de teste| Requisições| quantidade de usuários| Validação
| :-: | :-: | :-: | :-: |
|cadastro válido       | Post  | 0 | |
|cadastro inválido     | Post  | 0 | |
|Cadastro sem nome     | Post  | 0 | |
|Cadastro sem descrição| Post  | 0 | |
|Cadastro sem data     | Post  | 0 | |
|Cadastro sem exibições| Post  | 0 | |
|Busca de filmes       | Get   | 0 | |
|Busca de filmes por id| Get   | 0 | |
|Deletar filmes        | Delete| 0 | |
|alterar filmes        | Put   | 0 | |
  

## Tickets

|Casos de teste| Requisições| quantidade de usuários| Validação
| :-: | :-: | :-: | :-: |
|Criação de Ticket                           | Post  | 0 | |
|Criação de Ticket sem id do filme           | Post  | 0 | |
|Criação de Ticket sem id do usuário         | Post  | 0 | |
|Criação de Ticket sem ide do assento        | Post  | 0 | |
|Criação de Ticket sem valor                 | Post  | 0 | |
|Criação de Ticket sem dia e hora de exibição| Post  | 0 | |
|Listar tickets                              | Get   | 0 | |
|Busca de tickets por id                     | Get   | 0 | |
|Deletar tickets                             | Delete| 0 | |
|alterar tickets                             | Put   | 0 | |
 

## Ferramentas Utilizadas

|Ferramentas|
| :-: |
|Postman|
|Jira|
|K6|
|Ec2|
|Vs code|

## Bugs
|Requisição|Rota|Bug|
| :-: | :-: | :-: |
|Sem mensagem de ok                                       |Post  | Movie   | 
|Sem verificação se showtime                              |Post  | Movie   | 
|Sem mensagem de ok                                       |Delete| Movie   | 
|Documentação aponta 201, mas requisição apresenta 200    |Delete| Movie   | 
|Documentação aponta 201, mas requisição apresenta 200    |Put   | Movie   | 
|Ticket sem id do filme                                   |Post  | Tickets | 
| Ticket sem id do usuário                                |Post  | Tickets | 
|Ticket sem id de filme e usuário                         |Post  | Tickets |
|ao utilizar o Get na rota, a api cai e a requisição falha|Get   | Tickets |
|ao utilizar o Del na rota, a api cai e a requisição falha|Delete| Tickets |
|ao utilizar o Put na rota, a api cai e a requisição falha|Put   | Tickets |
||||

   

# Testes de Performance
Os testes serão realizados nas seguintes rodas: /movies e /tickets cobrindo os verbos GET, POST, DELETE e PUT.

## Volumetria
Quantidade máxima: ?????? usuários.


## Métricas
- Asserção de Duração: 2000ms.
- Reqs.
- FailRate.
- SuccessRate.


## Casos de Teste de Performance


| Caso de Teste | Requisição | Quantidade de Usuários |
| :-: | :-: | :-: |
| Login             | POST   | 0 |
| Cadastro de Filme | POST   | 0 |
| Listar Filmes     | GET    | 0 |
| Buscar Filme id   | GET    | 0 |
| Excluir Filme     | DELETE | 0 |
| Editar Filme      | PUT    | 0 |
| Criar Ticket      | POST   | 0 |
| Listar Tickets    | GET    | 0 |
| Buscar Tickets id | GET    | 0 |
| Excluir Ticket    | DELETE | 0 |
| Editar Tickets    | PUT    | 0 |
