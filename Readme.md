**Sprint 2**

### **dia 1**       

 - **Sobre o report de bugs.**
   - Gerenciamento de projetos
   - DoR -Defininition of Ready
   - DoD - Definition of Done

### **Curso de análise de requisitos**
 - Example mapping – técnica pra identificar coisas ocultas na história do usuário
Conceito dos 3 amigos, que são 3 aspectos (não necessariamente precisam ser 3 pessoas)
 - Cliente
 - Desenvolvedor
 - Testador

**Como trabalhar com example mapping**
 - Selecionar uma história para ser desmembrada, onde tem um tempo limite para essa quebra ser realizada.
 -  Metodologia das cores (exemplo)
    -  amarelo – é a história
    - azul – Critérios, regras
    - verde – exemplos – contexto, ação, resultado esperado
    - rosa  - questionamentos
Quadro com cartões 



>**Atividades complementares**
### **significado dos diferentes status code de API REST**
 - Respostas de informação (100 - 199)
 - Respostas de sucesso (200 - 299)
 - Redirecionamentos (300 - 399)
 - Erros do cliente (400 - 499)
 - Erros do servidor (500 - 599)

o que fazer para reportar bugs com eficiência
   - Resumo
   - Descrição
   - Passos para reproduzir
   - Evidências de validação

**Assim, outros optam por inserir ainda mais informações, como:**
   - Quem reportou
   - Descrição resumida
   - Descrição detalhada
   - Data em que o defeito foi descoberto
   - Gravidade
   - Status

 <img src="https://pt.smartsheet.com/sites/default/files/IC-Bug-Report-Form-Template-57399_PT.png" width="600" />

________________________________________________________
### **Dia 2 - Testes Estáticos (Swagger)**

 - Métodos para entender a documentação do Swagger
   - O que é Swagger?
   - Como ler um código de API?


_______________________________________________________
### **Dia 3 - Tipos de erros, validações e boas práticas nos testes de API**
 - Quais validações devem ser feitas em uma api?
 - Como validar status de uma api?
    - Com a resposta status 200 ok, sem erro
    - Em caso de envio com erro, retorna 400, não encontrado, o que mostra um erro
    - Algumas ações exigem permissão

Header – parte da requisição que vai ser enviada par o servidor, onde vão informações técnicas
Body – 


**Boas práticas pra teste de API**
 - Primeiro deve-se entender o projeto
    - Teste funcional
    - Teste não funcional
    - Teste estrutural
    - Teste de segurança são importantes

**APIs REST**
Swagger não armazena regras de negócio, mas dados em relação a interface

**EM GRUPO**
A api é um garçom, vc pede e a api te guia o pedido de acordo com a solicitação, se estiver disponível.
Criar historias e cenários, e a partir dos cenários, realizar os testes, muito planejamento antes de inciar testes

_______________________________________________________
### **Dia 4 - Planejamento de testes**
 - Quais são os focos do teste?
 - Será utilizada a estratégia da pirâmide?
 - Terão dependências externas
 - Como vai ser distribuído ao software
 - Que teste será aplicado
 - Quais os cenários essenciais
 - Quais cenários podem ser automatizados

**Como organizar os testes?**

**Nome do projeto** – é o resumo do resumo, apresenta o nome da ação (usabilidade, ex), tem o intuito de auxiliar na busca, sendo direto em sua função. Em que ponto do projeto e qual o projeto
**Resumo** – explicação dos testes, usar o planejamento e resumir. Apresenta-se a hipótese e o teste
Pessoas envolvidas no teste – Precisa-se de informações do publico alvo, assim como também saber quem participa do teste e até recrutar usuários pra realizar ainda mais testes.

**Funcionalidade** – o que vai ser testado, relacionado coma análise do teste, todos tem que saber o que será e o que não será testado.

**Local dos testes** – é necessário um local específico? Será laboratório? Ambiente de uso emulado?
Recursos necessários -  o que será necessário? Tem relação com a implementação. Quais recursos serão necessários? Será preciso uma sala especial? Alguma infraestrutura necessária? Alguns software? Algum script? Dinheiro?

**Critérios usados** – modelagem do testes, quantidade dos testes, quais critérios para um teste ser válido ou não. Como os testes serão divididos entra as pessoas, será necessário entrevistar usuários? Quais tarefas o usuário vai fazer?

**Riscos** – dependendo do local e da necessidade(como energia e internet) será necessário voltar aos recursos necessários para inserir mais recursos relacionados a esse problema

**Como os resultados serão divulgados** – Relatório de defeitos, de resultados dos testes, será gerado um novo documento?

**Cronograma** – quando as atividades serão realizadas? Data de início e fim, devem ser respeitadas, assim evitam ainda mais atrasos. Serve para monitorar projeto

**Plano de testes**

[Artigo sobre o tema](https://www.devmedia.com.br/plano-de-teste-um-mapa-essencial-para-teste-de-software/13824#:~:text=De%20que%20trata,desenvolvimento%20de%20software.)

É uma a atividade essencial para todo e qualquer projeto, funciona como um mapa, e sem ele ou algo similar, não se saberia os “caminhos” certos para chegar á conclusão do projeto.
O plano usa três atividades principais
 - Definição de um cronograma de atividades – estabelece as atividades e a ordem de execução
 - Fazer alocação de recursos – quem vai realizar as atividades e quais ferramentas vão ser usadas
 - Definir marcos de projeto – estabelece as milestones a ser alcançadas com intuito de acompanhar.
Planejamento vem acompanhado da atividade de monitorar e supervisionar, para avaliar o progresso e ver se está de acordo com os conformes. Em resumo. Quão bem o projeto está correndo?

     Dentro do contexto de software, será necessária a documentação, plano de projeto, requisitos e plano de teste. e o plano de teste é um documento ou mapa no qual se definem escopo e objetivos, além de requisitos, estratégias e recursos a serem empregados nas atividades de testes de software.
   
**Teste de Software**

   Teste de software é uma das atividades do processo de desenvolvimento de sistema de software que visa executar um programa de modo sistemático com o objetivo de encontrar falhas. Perceba que isto requer verificação e validação de software. Nesse sentido, definir quando as atividades de verificação e validação iniciam e terminam, como os atributos de qualidade serão avaliados e como os releases do software serão controlados, são questões que devem ser acompanhadas ao longo do processo de software.
     
   Além de encontrar falhas, testes objetivam aumentar a confiabilidade de um sistema de software, isto é, aumentar a probabilidade de que um sistema continuará funcionando sem falhas durante um período de tempo.
     
Embora seja desejável testar um sistema por completo, deve-se ter em mente que a atividade de teste assegura apenas encontrar falhas se ela(s) existirem, mas não asseguram sua ausência. Portanto, as atividades devem ser disciplinadas a fim de identificar a maioria dos erros existentes. Note que realizar os testes de software implica em responder às questões:

1. Quais atributos da qualidade deverão ser testados?
2. Quem realizará os testes?
3. Quais recursos serão utilizados?
4. Quais as dependências entre os atributos de qualidade?
5. Quais as dependências entre as atividades de desenvolvimento?
6. Como o processo e a qualidade do sistema de software serão acompanhados?


**Em outras palavras**, um plano de teste deve definir:
1. Os itens a serem testados: o escopo e objetivos do plano devem ser estabelecidos no início do projeto.
2. Atividades e recursos a serem empregados: as estratégias de testes e recursos utilizados devem ser definidos, bem como toda e qualquer restrição imposta sobre as atividades e/ou recursos.
3. Os tipos de testes a serem realizados e ferramentas empregadas: os tipos de testes e a ordem cronológica de sua ocorrência são estabelecidos no plano.
4. Critérios para avaliar os resultados obtidos: métricas devem ser definidas para acompanhar os resultados alcançados.
 
     O planejamento é necessário a fim de antecipar o que pode ocorrer e, portanto, provisionar os recursos necessários nos momentos adequados. Isto significa coordenar o processo de teste de modo a perseguir a meta de qualidade do produto (sistema de software).
[Tabela com os itens de um plano de testes](https://www.devmedia.com.br/plano-de-teste-um-mapa-essencial-para-teste-de-software/13824#:~:text=de%20uma%20institui%C3%A7%C3%A3o.-,Itens%20de%20um%20Plano%20de%20Teste,-Conte%C3%BAdo)
