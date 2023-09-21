Iniciando os testes

arquivos de atalhos são criados para que o código 'base' fique simplificado, e essas pastas estão nomeadas de acordo:

Dynamic - Pasta onde estarão mantidos os códigos que realizam cadastros serão gerados deforma aleatória utilizando o faker, assim como um arquivo onde todas as informações de cadastro estarão salvos separadamente e um outro arquivo onde apenas as informações necessárias para o login estarão separados


Suport/base - pasta onde estarão salvos os arquivos de 'atalho' são usados para que não ocorram repetições de código desnecessárias, como verificações de resposta e endpoints


Config - pasta onde o arquivo de tipos de teste estará salvo, também com o intuito de evitar repetições. cada tipo de teste é nomeado e aplicados nos testes de forma simples e rápida

Tests - Pasta onde todos os testes serão realizados, podendo criar subpastas para melhor organização, foram realizados testes smoke, de stress e de rampa.