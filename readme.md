**Sprint 2**

>Obtive ajuda em algumas etapas, Andressa, David e Vitor me auxiliaram em alguns momentos e também discutimos sobre alguns assuntos durante a Sprint

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

**[Como organizar os testes?](https://github.com/LaurenMonici/Compass/issues/22#issue-1797187292)**

**[Plano de testes](https://github.com/LaurenMonici/Compass/issues/23#issue-1797191422)**

_______________________________________________________
### **Dia 5 - Cobertura de testes de APIs & Testes candidatos à automação**
 - Como dar cobertura completa ao back-end da aplicação
 - Usando Postman
 - Sem rotas
 - Fluxo de teste – criar usuário, adiciona item ao carrinho e finalizar compra
 - Não existe somente um fluxo


### **como medir a cobertura de testes de API REST**

 - **Cobertura de caminho (entrada)**

A análise é realizada pela quantidade de URI( URL + URN ( Nome do recurso )) que uma API possui (se for a mesma URI para métodos diferentes, considere-se apenas um).
O ideal é realizar ao menos uma requisição para verificar cada endpoint.
Suponha que a automação desta API tenha apenas 6 desses endpoints implementados, mas uma API possui 13 endpoints.
Para calcular a cobertura: quantidade de testes controlados / quantidade de endpoints na API REST.

![](https://miro.medium.com/v2/resize:fit:430/format:webp/1*UzlqnUIMKRiH92L1yEGhuA.png)

Então 46% dos testes de caminho estão cobertos pela automação.

 - **Cobertura do Operador (entrada)**

Confira a cobertura de testes de todos os métodos existentes na API REST (GET, POST, PUT, DELETE…).
Então, você deve verificar quais métodos da API foram cobertos pela automação de testes. Vamos supor que dezesseis métodos tiveram testes concluídos implementados.
Para calcular a cobertura: quantidade de operações da API estão automatizadas/ quantidade total de operações da API REST.

![](https://miro.medium.com/v2/resize:fit:410/format:webp/1*YhPNpXV-JimfE8S6Hu_ZEQ.png)

Então temos 84% dos testes de operações cobertos.

 - **Cobertura de Parâmetros (entrada)**

Verifique a cobertura de uma suíte de testes conforme os parâmetros existentes em cada método da API.
Para atingir 100% de cobertura de testes é necessário testar todos os parâmetros de entrada de cada operação pelo menos uma vez. Realizar a combinação de todos os parâmetros é desejável, mas não mantida necessária para chegar a 100% de cobertura.
Suponha que a API tenha um total de 5 parâmetros, e na automação da API os 5 parâmetros foram cobertos.
Quantidade total de parâmetros cobertos nas suítes de testes / quantidade total de parâmetros nos métodos da API.

![](https://miro.medium.com/v2/resize:fit:418/format:webp/1*vhNMozJFd8PzW4HyVqHLFw.png)


 - **Cobertura do valor do parâmetro (entrada)**

Confira a cobertura da suíte de testes de parâmetros booleanos e enum nas operações (se existirem).
Para calcular a cobertura:
Quantidade total de valores diferentes enviados / quantidade total de valores que podem assumir.
Para atingir 100% de cobertura cada parâmetro booleano e enum deve assumir todos os valores possíveis.

 - **Cobertura Content-Type (entrada e saída)**

Verifica a cobertura de testes automatizados onde o content-type está sendo exibido em cada endpoint, ou seja, se for demonstrado nas opções do content-type de envio application/json e um application/xml, então duas opções dos parâmetros de envio deveriam ser decks.
Para calcular a cobertura:
Quantidade total de content-type em cada operação coberta pela suíte de testes / Quantidade total de content-type em todas as operações da API.
Suponha uma API que possuía como operações POST, PUT, GET e DELETE. POST e PUT possuem cada um 2 opções de content-type, logo a API possui um total de 4 content-type a serem cobertos. A automação cobriu apenas uma opção, no POST e uma opção, no PUT.

![](https://miro.medium.com/v2/resize:fit:420/format:webp/1*A5X_sRtdJb2Ui0GoZad8Eg.png)

 - **Fluxo de operação (entrada)**

Este completou mede um conjunto de testes de acordo com as sequências de operações que são executadas.
Por exemplo:
Fluxo1: Post-Get(id)
Fluxo2: Post-Put
Fluxo3: pós-exclusão
Fluxo4: Post-Get (Consulta)
Se todos os fluxos estiverem implementados no teste concluído, então a API Rest está 100% coberta pela automação.
Porém se é possível criar 4 tipos de fluxos, mas sua automação possui apenas um, por exemplo, criação (Post) e consulta (Get id), então terá apenas 25% de cobertura.

![](https://miro.medium.com/v2/resize:fit:408/format:webp/1*pVocJbzt_kkPcFmlNS5peg.png)

 - **Cobertura do Corpo de Propriedades de Resposta (Saída)**

Este completou mede os parâmetros no corpo da resposta, então deve ser verificado se todas as propriedades da resposta estão cobertas pelo teste.
Para calcular a cobertura, deve-se dividir o número total de todas as propriedades de todos os objetos que podem ser obtidos na resposta da API, pelo número de propriedades da resposta que os testes estão cobrindo.

 - **Cobertura do Código de Status (Saída)**

É possível verificar quais códigos de status existentes em cada terminal estão cobertos pelos testes.
Suponha que a API tenha um total de 25 códigos de status, e na automação da API apenas 15 códigos de status foram cobertos.

 ![](https://miro.medium.com/v2/resize:fit:416/format:webp/1*_uTXDuESQ_495KDpQxIp3g.png)
 
Portanto, para atingir 100% da cobertura de testes, todos os códigos de status de cada operação devem estar implementados nos testes.
Realizar o levantamento dos critérios de cobertura é importante, pois te dá um norte para saber o quão efetivo os testes concluídos estão sendo. Será que todos os caminhos da sua API estão cobertos? Será que não é possível atingir 100% de cobertura de parâmetros de entrada dos métodos? Comente aí, o que você achou desta metodologia ou se você aplicaria e mostraria a cobertura de testes para o seu tempo.



________________________________________________________
### **Dia 6 - Introdução às atividades de análise de teste & Priorização em diferentes aplicações**

**Vídeo 1**
Profissional de QA – é responsável pela atividade que garante qualidade no processo de desenvolvimento.
Domínio da arquitetura dos projetos
Planejar estratégia de teste
Executar testes
Análise de pros e contras dos planos de teste
Análise e revisão de código
Catalogar, periciar e documentar evidências
Configurar e criar processos
Conhecimento técnico da infra
Análise e documentação de feedbacks
QA, QC e Tester são muito semelhantes
TDD 
BDD 
DDD

**Vídeo 2, 3, 4 e 5**
Qual o objetivo da minha aplicação – com isso eu consigo descobrir os fluxos prioritários, que nunca poderão deixar de ser executados.
Rotas de prioridade, é definido pelas ações que afetam o objetivo principal da aplicação
Priorizar não significa deixar de testar, mas sim definir aquele que irão gerar mais problemas.

>### **Atividade sobre priorização**
 - Apresentar a aplicação, segmento e objetivo do sistema
 - Elaborar listas de fluxos de validação prioritários no sistema escopo
 - Ordenar a lista de forma lógica, para a realização de fluxos completos na aplicação
    - Nome: Steam
    - Segmento: Distribuição de jogos digitais
    - Objetivo: realizar a venda dos mais variados jogos por meio de uma plataforma online
**Lista de fluxos:**
1.	Validar Login
2.	Validar cadastro
3.	Validar acesso aos jogos
4.	Validar o acionamento de itens no carrinho
5.	Acessar carrinho
6.	Inserir informações de pagamento
7.	Verificar meio de pagamento
8.	Confirmar venda
9.	Enviar chave de download
________________________________________________________
### **Dia 7 - Análise HTTP e API REST**

**Monte o mapa mental da API Serverest**


![image](https://github.com/LaurenMonici/Compass/assets/136503745/51c29d9c-b155-4b11-989d-e5f735adcaf5)

________________________________________________________
### **Dia 8 e 9 - Introdução ao Postman e início do processo de testes**

**Teste de email já utilizado**

![image](https://github.com/LaurenMonici/Compass/assets/136503745/65b5c85c-8a0b-4561-b652-03c913ec35d8)

**Cadastro com sucesso**

![image](https://github.com/LaurenMonici/Compass/assets/136503745/3aae18bd-da05-41c5-8237-8656fe0c1a5f)

**Teste com email em formato inválido**

![image](https://github.com/LaurenMonici/Compass/assets/136503745/79fc5607-1562-4644-afd3-204032f69e06)

**Teste de email em branco**

![image](https://github.com/LaurenMonici/Compass/assets/136503745/2f393851-4aee-4920-84db-103606721c78)


![image](https://github.com/LaurenMonici/Compass/assets/136503745/95bf37ce-1103-401d-869a-3d228cf8a164)

**Teste para Edit usuário**

![image](https://github.com/LaurenMonici/Compass/assets/136503745/822d244c-4649-439a-921a-a2be02de8290)

**Teste de busca de mercadoria por id**

![image](https://github.com/LaurenMonici/Compass/assets/136503745/c8613485-2b40-4905-ae70-928afcce0ff2)
