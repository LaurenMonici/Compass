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

   # Teste de email já utilizado
   
   ![image](https://github.com/LaurenMonici/Compass/assets/136503745/b48ef523-92bb-4d81-affb-8781a58e0327)

