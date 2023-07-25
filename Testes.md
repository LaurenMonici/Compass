# **Planejamento de testes**

 - **Nome do projeto**
    - Testes ServeRest
      
 - **Resumo**
    - Realização de testes para garantir o funcionamento correto das rotas
      
 - **Integrantes**
    - Lauren
      
 - **Funcionalidades**
    - Testes de verbos
    - Testes no CRUD
    - Teste de endpoint
      
 - **Local de teste**
    - Postman
      
 - **Recursos**
    - Computador
    - Postman
    - acesso a internet
      
 - **Critérios**
    - Sem chamadas inexistentes
    - emails já utilizados serão barrados
    - sem cadastros de origem gmail e hotmail
    - email em padrão válido
      
 - **Casos de teste**
    - Criação de usuário
      - teste com campos em branco
    - chamada inexistente
    - criação com usuário já cadastrado
    - tentativa com senha de tamanho inferior
 - **Ferramentas**
    - Postman
    - jira
    
      
 - **Estratégia**
    - Seguir todas as rotas possíveis para cobrir toda e qualquer possibilidade
      
 - **Cenários**
    - Cadastro
      - cadastro com sucesso
      - email já em uso
      - campos em branco
      - email inválido
      - tentativas com senhas irregulares 
    - Atualização
      - atualização com sucesso
      - vendedor não cadastrado 
    - Exclusão
      - exclusão realizada
      - vendedor não cadastrado 
    - Chamadas
      - listagem completa
      - chamadas inexistentes
      
 - **Automação**
    - usuário sem
      - senha
      - nome
    - tentativa de cadastro com email já cadastrado
   ___________________________________________________
   # Sobre Melhorias e bugs
    - os emails categorizados como email e gmail são cadastrados normalmente, não há uma verificação para que seja proibido
    - nem sempre os email que passam são realmente válidos
    - não há verificações para as senhas
  
   ___________________________________________________

   # Email já utilizado
   
   ![image](https://github.com/LaurenMonici/Compass/assets/136503745/b48ef523-92bb-4d81-affb-8781a58e0327)

   # Password em branco
   
   ![image](https://github.com/LaurenMonici/Compass/assets/136503745/0e923595-4e36-42e2-89c7-d4528b6c568f)

   # Email em branco

   ![image](https://github.com/LaurenMonici/Compass/assets/136503745/d752a888-1f6e-4e65-9cbe-e4021ac5ce8a)

   # Fomato de email inválido

   ![image](https://github.com/LaurenMonici/Compass/assets/136503745/06816b6f-e889-46fd-8cce-927e7aa8c174)

   # Nome em branco
   
   ![image](https://github.com/LaurenMonici/Compass/assets/136503745/934a670e-00dd-47fe-accc-3a3e4bc2a096)

   # Login realizado

   ![image](https://github.com/LaurenMonici/Compass/assets/136503745/da03b39d-f05c-4387-802d-d6c2865bcd34)

   # Senha incorreta

   ![image](https://github.com/LaurenMonici/Compass/assets/136503745/169b24bb-2b55-4649-9b26-62568cc71456)






