# Como Deixar o ambiente praparado para os testes?
 - Iniciando com a instalação dos recursos necessários
   - [Visual Studio Code](https://code.visualstudio.com/download) é um editor de código fonte
   - [K6](https://k6.io/docs/get-started/installation/) é uma ferramenta de teste de carga
   - [Postman](https://www.postman.com/downloads/) é uma ferramenta de testes
   - [Java](https://www.java.com/pt-BR/download/ie_manual.jsp?locale=pt_BR)
   - [EC2](https://aws.amazon.com/pt/ec2/?trk=273714db-4e14-42ba-be75-e3e36c4bc786&sc_channel=ps&ef_id=Cj0KCQjwpc-oBhCGARIsAH6ote8FCqb2BPpzZmZZFXS_43aSGhqQ-3yZzwFYMIGakGMhwIJXSGPcQswaAlpuEALw_wcB:G:s&s_kwcid=AL!4422!3!589890540382!e!!g!!amazon%20ec2!16393914376!135045745338) é uma opção para os testes, mas estes podem acontecer localmente
   - Arquivos de código estarão disponíveis na branch [pb_CodCF](https://github.com/LaurenMonici/Compass/tree/pb_CodCF)


# Organização das pastas e sua funções
## pasta 1: Data
Dentro desta primeira pasta, devem ser criadas 2 sub-pastas, dynamic e static. e como o nome sugere, uma para testes dinâmicos e outra para estáticos.
 - **dynamic** - pasta onde será criado um arquivo .js, nomeado a sua preferência. Nester arquivo, o código será focado na criação de dados aléatórios em um novo arquivo onde essas informações estarão salvas. tudo isso utilizando o faker.
 - **static** - pasta onde será criado um arquivo que deve ser alterado manualmente a cada mudança.

## pasta 2: node_modules
É nessa pasta onde o Faker será instalado, Faker é a ferramenta para gerar dados aleatórios de uma área selecionada, como profissões, nomes, animais, etc.

## pasta 3: services
É nesta pasta onde estarão os arquivos baseRest e baseService
O arquivo baseRest é onde ocorre a definição dos verbos utilizados para teste na api: Post, Get, Get id, Put, Delete

## pasta 4: support
Dentro dessa pasta, existem 2 sub-pastas.
 - **base** - arquivos baseChecks, baseTest e constants.
Definindo checagens, "atalhos" e endpoints, respectivamente.
 - **config** - dentro há o arquivo enviroment, onde são definidos os tipos de teste e suas métrica(tempo e usuários)

## pasta 5: tests
Dento dessa pasta devem estar salvos os casos de testes, organizados de forma individual de acordo com sua própria percepção, podem ser criadas sub-pastas para rotas, verbos ou tipo de testes realizados na api, cada pessoa tem seu próprio critério no momento de escolher

## Html report
o report html é um falicitador de análise, um código simples e curto que gera um relatório visual e simplificado, uma posta pode ser criada para salvar esses reports, já que a cada teste o arquivo base é substituído.
