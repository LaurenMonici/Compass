## **Sprint 1**                                                                        
**Dia 1 - Utilização do git**
Instalação do git
->Criação do readme.md
->Comandos do git (init, add, commit, etc)

_____________________________________________________________________________________________________________________________________________________________________

**Dia 2 - Sobre método SCRUM**
### [SCRUM](https://github.com/LaurenMonici/GitSprints/issues/1)
->Oficializado na década de 90
->Responde bem á mudanças
->Indivíduo e interação
->Produto que funciona
->Colaboração com cliente
->Comunicação equipe x cliente
     Buscam sempre entregar o projeto o mais fiel possivel aos desejos do cliente, por isso são realizadas as sprints, para que o processo realizado esteja de acordo e que a pŕoxima etapa receba os cuidados necessários para alcançar as escolhas do cliente.

O método tradicional
->Planejamento
->Muita documentação
->Dificuldade em mudanças
->Projetos entregues e não geram a satisfação esperada
     O planejamento feito logo no início do projeto faz com que todo o processo seja definido muito antes e siga de forma engessada até o final. mudanças não fazem parte do planejamento e podem gerar muitos atrasos, que atrapalharão todo o decorrer do projeto, e ao final, como não ouve muita inteação com o cliente para terem um feedback, muitas vezes o cliente não gosta/aprova o projeto já finalizado, então pede mudanças, que fara com que as equipes envolvidas tenham que se manter no projeto até sua real conclusão.

Pq projetos falham?
->Cliente indeciso, não sabem o que escolher ou as funcionalidades desejadas.
->Alteração de requisitos
->Entendimento cliente x equipe
->Mudança do processo de negócio. 

   Mesmo com as informações dadas, onde aparentemente o SCRUM seria "melhor", nos é mostrado que não existe nenhum método que seja melhor do que outro em um contexto geral, apenas um que se encaixa melhor com o projeto em questão.
   Muito optam pelo método SCRUM em projetos "caóticos", onde não se sabe muito da base do projeto e nem sobre as futuras opçoes e mudanças, então o método auxilia na organização dessas informações.

_____________________________________________________________________________________________________________________________________________________________________

Dia 3 - Sobre teste e QA
-> A area de tecnologia cresce mais a cada ano.
->é uma área que gera pressão nos trabalhadores
->exige estudo constante por conta das inúmeras mudanças, evoluçoes e tipos de tecnologia
->são muitas vagas espalhadas pelo mundo todo
->é uma área sem preconceitos
->idade não é relevante, o interesse está no conhecimento e capacidade relacionado á area
->inúmeros cargos com niveis e/ou especializaçoes diferentes
->todos devem relizar testesm, já que cada um tem um ponto de vistas diferente
perfil profissional de Qa
soft skill
habilidade pessoal
->motivação, persistena, curiosidade, gostar de aprender, perfccionista,detalhista, resiliencia, foco em solução, organização,priorização.
->saber se comunicar com diferentes tipos de pessoas, interpretação é importante, aprender a comunicar erros. criar boas relações para que a comunicação seja tranquila

-> negociar é importante. relaço ganh-ganha
prazos e recursos
empatia
reuniões são de extrema importância
saber ajudar e pedir ajuda
time trabalha junto
saber dar e receber feedback
o time contrata e o time demite


Hard skills
-> é o basico para se ter um emprego. conhecimento de SO, pacote office, interpretação, teste manual e automatizado.
info - como reproduzir o defeito e como encontrar o defeito novamente
acompanhar defeitos - teste de confirmação, confirma-se se o bug acabou
teste de regressão - testar desde o inicio

tecnicas de teste
quantos testes tem?
quais testes são mais relevantes

débito técnico
inevitável
o problema não é a duvida, é não resolver ela, não conseguir planos e não resolve-lo
manter ritmo     o conhecimento(ferramentas) expira, reconhecimento não

a história dos testes
 iniciado com uma máquina mecanica para soma, onde Ada tanana encontrou um defeito no maquinário
 história de Alan Turing
 - a origem da expressão bug com a mulher testando o Mark 2
 - grandes nomes brasileiros na área de teste de software
 - importancia dos teste e danos do bug
 - prejuizo financeiro - é recuperável
 - prejuizo de imagem - danos maiores e de longo prazo
 - bugs afetam a segurança do governp
 - bugs afetam meio ambiente, como não desligar luzes e motores, ou gastarem mais recursos durante o trabalho

os 7 fundamentos do software istqb 
-teste demonstra a presença de defeitos, mas nunca a ausência
mesmo que o defeito não apareça, não significa que não exista, não é uma prova que o código seja perfeito

teste exaustivo não é possivel
testar tudo não é viaivel
testes são realizados de acordo com risco e prioridade

teste antecipado
iniciar preferencialmente os teste logo ao inicio
focar em objetivos definidos
regra 10 de myers - o erro é multiplicado por 10 a cada etapa passada. quanto mais cedo o defeito for achado, mais barato é sua identificação e correção

agrupamento de defeitos
pequenos módulos podem ter muitos defeitos, divididos de forma irregular, um modulo com 2 e outro com 20


paradoxo do pesticida
teste já realizado diversas vezes não acha mais defeitos. por isso tem que ser atualizado, então devem ser alterados para trabalhar com áreas diferentes do software e encontrar outros erros.

teste depende de contexto
sem risco, sem testes
o software de piloto automático temk muito mais testes que um softwarede informação de um quiosque em um shopping


a ilusão da ausencia de erros
um software sem defeitos não ajuda se não é o pedido/expectativa/necessidade do usuario

divergencia entre teste e QA
teste melhora o produto
QA melhora o processso

erro, defeito e falha
erro é o engano
defeiros derivam do erro, é o encontrar o erro do outro. é preferivel chamar de ocorrencia
ao rodar o codigo com defeito, gera uma falha
falhas causam insatisfação com a qualidade.

tipos de teste - ISO 25010
è padrão, um exemplo de como deveria ser.
muitos pré requisitos necessarios para um padrão, exige qualidade
se divide em 8 caracteristicas

AF - adequação funcional
é o cumpriomentos das funcionalidades
é o unico teste de negócio/funcional
completo - tudo deve ser com as escolhas certas
correçaõ -  os resultados devem estar corretos.
apropriado - resultado correto, mas apresentado em uma forma "errada"

usabilidade


compatibilidade
coexistencia - não atrapalhar outros programas, mas não deixar ser atrapalhado
interoperabilidade - facilidade de comunicação
confiança
maturidade - perceber e prevenir a falha antes de acontecer
disponibilidade - manter-se a disposição dos usuarios
o resultado passado não garante o futuro
tolerancia a falha - perceber e compensar a falha em tempo real

recuperabilidade
depois da falha deve recuperse dela
eficiência
comportamento em relação ao tempo,a cada segundo passado se perde grande quantidade de acessos
utilização de recursos - é melhor um software que exija melhoria do que um que não use os recusros disponiveis para ele.
capacidade - atender transações de ususarios

manutenção
ser organizado em módulos facilita mudanças
reusabilidade - estrutura básica que possa ser utilizada em diversas outras partes, para diversas pessosa
analisabilidade - facilidade para entender
testabilidade - facilidade para que qualquer profissional o faça
moificabilidade - facilidade de mudar um elemento e o resto do codigo se mante o mesmo em funcionamento

portabilidade
capacidade de funcionar em diverso sistemas operacionais
adaptabilidade - facilidade pra se adequar a qualquer formato
instalabilidade - facilidade em ligar e desligar recursos
substituibilidade - facilidade de analisar e optar por uma evolução/melhora no produto

segurança
confidenciabilidade - informações "sigilosas"
integridade - registro de alterações e apenas por pessoas autorizadas
não repudio - ibnformações para evitar fraude
responsabilidade - prestação de contas
autenticidade - garantir que foi a pessoa quem fez a ação, rastrear e verificar se foi real.

teste manual x teste automatzado
existem demandas apenas para o teste manual, mas também existm para automçaõ, em alguins caso o manual não é uma possibilidade, e outros em que a automação é um trablho desnecessário

teste tradiciona x teste ágil
apenas via os erros em momentos separados
agil - fazer parte do processo e saber sobre antes mesmo de realmente testar

como gerar qualidade no produto
requisito
confiança
identificação de defieto
tomada de decisão
redução de risco
conformidade

dia 5 - 
teste dinâmico e teste estático
execução e avaliação
depuração é a coreção dos eros
eficácia é o resultasdo e eficienacia é o modo
o teste só aumente a qualidade
quando defeitos são encontrado e corrigidos
verificção de conformidade dos equisitos funcionais
requisitos não funcionais (confiabilidade, usabilidade etc)
qualidade custa menos
reduz retrabalho - custo de manutençaõ e chamados de suporte
+ qualidade = produção veloz = +produtividade
tecnicas aplicadas com nivel e nos pontos certos geram entregas menos problemáticas
planejamento - analise - modelagem -implementação - execução - conclusão
