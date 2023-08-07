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
