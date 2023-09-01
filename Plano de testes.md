# Objetivo: 
 - Verificar a funcionalidade correta do sistema, garantindo que usuários possam criar suas contas, realizar login, ver carrinho, adicionar produtos a este, concluir compras e cancelar tudo.

# Escopo:
As funcionalidades testadas serão:
 - Cadastro de Usuário
 - Login
 - Visualização de produtos
 - adição de produtos ao carrinho e conclusão de compra.

# Ambiente de teste:
Uma cópia do ambiente de produção, funcionando apenas em host local para não interferir no banco real, mantendo os dados de amostra.

#Critérios de aceitação:

As respostas e resultados devem estar de acordo com o esperado.


#Casos de teste/Cenários
## - Cadastro
   - cadastro válido
   - cadastro inválido
     - Provedor gmail
     -	Provedor Hotmail
     -	User já usado
     -	User sem nome
     -	User sem email
     -	Usem sem campo nome
     -	User sem campo senha
     -	User sem campo email
     -	User sem campo adm
     -	User sem senha
     -	User ok
     -	Formato de email inválido
  

## - Login
   - Credenciais válidas
   - Credenciais inválidas


## - Produtos
   - Listar produtos
  - Cadastrar produtos
-	Busca por id
-	Alteração
-	Busca
-	Cadastro sem descrição
-	Cadastro erro descrição(com espaço apenas)
-	Produto sem nome
-	Cadastro ok


## -  Carrinho
  - Adicionar produto ao carrinho
  

## Ferramentas
 - Postman
 - Jira

# Testes de Performance
Os testes serão realizados nas seguintes rodas: /login, /usuarios e /produto, cobrindo os verbos GET, POST, DELETE e PUT.

## Volumetria
Quantidade máxima: 1000 usuários.
> OBS: Devido às limitações de hardware, foi testado 500 usuários para as requisições.

## Métricas
- Asserção de Duração: 2000ms.
- Reqs.
- FailRate.
- SuccessRate.


## Casos de Teste de Performance


| Caso de Teste | Requisição | Quantidade de Usuários |
| :-: | :-: | :-: |
| Login | POST | 500 |
| Cadastro de usuário | POST | 500 |
| Listar usuários | GET | 500 |
| Buscar usuário | GET | 500 |
| Excluir usuário | DELETE | 100 |
| Editar usuário | PUT | 1 |
| Cadastro de Produtos | POST | 10 |
| Listar Produtos | GET | 10 |
| Buscar Produtos | GET | 20 |
| Excluir Produto | DELETE | 100 |
| Editar Produto | PUT | 1 |
