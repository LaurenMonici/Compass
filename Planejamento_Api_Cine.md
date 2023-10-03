# Objetivo
 - Verificar a funcionalidade correta do sistema, garantindo que usuários possam ver o catálogo de filmes e conseguindo seus tickets

# Escopo:
As rotas testadas serão
 - Movies
 - Tickets

# Mapa Mental da API

![image](https://github.com/LaurenMonici/Compass/assets/136503745/144c8262-a85e-4dbd-af16-01b4bb3ca545)


# Ambiente de teste
Uma cópia do ambiente de produção, funcionando apenas em host local para não interferir no banco real, mantendo os dados de amostra.
Utilização do EC2 para testes com maior carga

# Critérios de aceitação

As respostas e resultados devem estar de acordo com o esperado.


# Casos de teste Funcional
## Movies
|Casos de teste| Requisições| quantidade de usuários| Validação
| :-: | :-: | :-: | :-: |
|cadastro válido       | Post  | 1 | 🟢 |
|cadastro inválido     | Post  | 1 | 🟢 |
|Cadastro sem nome     | Post  | 1 | 🔴 |
|Cadastro sem descrição| Post  | 1 | 🔴 |
|Cadastro sem data     | Post  | 1 | 🔴 |
|Cadastro sem exibições| Post  | 1 | 🟢 |
|Busca de filmes       | Get   | 1 | 🟢 |
|Busca de filmes por id| Get   | 1 | 🟢 |
|Deletar filmes        | Delete| 1 | 🟢 |
|alterar filmes        | Put   | 1 | 🟢 |
  

## Tickets

|Casos de teste| Requisições| quantidade de usuários| Validação
| :-: | :-: | :-: | :-: |
|Criação de Ticket                           | Post  | 1 | 🟢 |
|Criação de Ticket sem id do filme           | Post  | 1 | 🔴 |
|Criação de Ticket sem id do usuário         | Post  | 1 | 🔴 |
|Criação de Ticket sem id do assento         | Post  | 1 | 🔴 |
|Criação de Ticket sem valor                 | Post  | 1 | 🔴 |
|Criação de Ticket sem dia e hora de exibição| Post  | 1 | 🔴 |
|Listar tickets                              | Get   | 1 | 🟢 |
|Busca de tickets por id                     | Get   | 1 | 🔴 |
|Deletar tickets                             | Delete| 1 | 🔴 |
|alterar tickets                             | Put   | 1 | 🔴 |
 

## Ferramentas Utilizadas

|Ferramentas|
| :-: |
|[Postman](https://www.postman.com/downloads/)|
|[Jira](https://www.atlassian.com/software/jira)|
|[K6](https://k6.io/docs/get-started/installation/)|
|Ec2|
|[Vs code](https://code.visualstudio.com/download)|

## Bugs e melhorias
|Bug ou melhoria|Requisição|Rota|Validação|
| :-: | :-: | :-: | :-: |
|Sem mensagem de ok                                       |Post  | Movie   | 🟡 |
|Sem verificação se showtime                              |Post  | Movie   | 🔴 |
|Sem mensagem de ok                                       |Delete| Movie   | 🟡 |
|Documentação aponta 201, mas requisição apresenta 200    |Delete| Movie   | 🔴 |
|Documentação aponta 201, mas requisição apresenta 200    |Put   | Movie   | 🔴 |
|Ticket sem id do filme                                   |Post  | Tickets | 🔴 |
|Ticket sem id do usuário                                 |Post  | Tickets | 🔴 |
|Ticket sem id de filme e usuário                         |Post  | Tickets | 🔴 |
|ao utilizar o Get id na rota                             |Get   | Tickets | 🔴 |
|ao utilizar o Del na rota                                |Delete| Tickets | 🔴 |
|ao utilizar o Put na rota                                |Put   | Tickets | 🔴 |
||||

   

# Testes de Performance
Os testes serão realizados nas seguintes rodas: /movies e /tickets cobrindo os verbos GET, POST, DELETE e PUT.

## Volumetria
Quantidade máxima: 2000 usuários.


## Métricas
- Asserção de Duração: 2000ms.
- Reqs.
- FailRate.
- SuccessRate.


## Casos de Teste de Performance


| Caso de Teste | Requisição | Smoke | Stress | Spike | Load |
| :-: | :-: | :-: | :-: | :-: | :-: |
| Login             | POST   | 1 | 2000 | 2000 | 1302 |
| Cadastro de Filme | POST   | 1 | 2000 | 2000 | 1302 |
| Listar Filmes     | GET    | 1 | 2000 | 2000 | 1302 |
| Buscar Filme id   | GET    | 1 | 2000 | 2000 | 1302 |
| Excluir Filme     | DELETE | 1 | 2000 | 2000 | 1302 | 
| Editar Filme      | PUT    | 1 | 2000 | 2000 | 1302 |
| Criar Ticket      | POST   | 1 | 2000 | 2000 | 1302 |
| Listar Tickets    | GET    | 1 | 2000 | 2000 | 1302 |
| Buscar Tickets id | GET    | - |   -  |  -   |  -   |
| Excluir Ticket    | DELETE | - |   -  |  -   |  -   |
| Editar Tickets    | PUT    | - |   -  |  -   |  -   |

Requisições sem valores: Cenários de teste onde a Api cai, não foi possível rodar testes funcionais ou de performance
