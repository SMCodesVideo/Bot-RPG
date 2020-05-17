# DDL-RPG

### Bot Game RPG

- Motivo de criação:

    Aperfeiçoar o meu conhecimento no Vim.
- Objetivo:

    Acabar o projeto com um conhecimento do Vim treinado, e pronto para coloca-lo em projetos de produção sem desperdício de tempo.

- Inpiração:
    
    Minha inpiração foi um jogo bem legal que eu jogo faz alguns anos, acho ele bem interessante, acredito que ele aborda vários conceitos, o nome do jogo é Neko Meg, é um bot de discord que simula um jogo RPG e a qualidade do jogo é muito bom, aliás 100% brasileiro.

- Autor:

    **[SMCodes]**

    ###### **Projeto Open-Source**

## Como posso iniciar o bot?
- Primeiramente você deve configura-lo com suas credenciais.

    - Você precisará:

        - TOKEN de um bot
        - Escolher um prefixo padrão
        - Um servidor Banco de dados MongoDB
        - Definir um valor inicial de coins (de acordo a sua ecônomia)
        - Definir um valor inicial de leveis
    
    - Após isso você deve criar um arquivo chamado .env

        - Window: ```echo > .env```
        - Linux: ```touch .env```
        - Mac: ```touce .env```
    
    - Configuração do .env:
        ```js
        TOKEN={Token do seu bot}

        PREFIX={Algum prefixo de sua preferência}

        MONGO_DB={Link de conexão ao banco de dados}

        STARTER_COINS={Número de sua preferência (Recomendado = 100)}
            
        STARTER_LEVEL={Número de sua preferência (Recomendado = 5)}
        ```
        - Obs: Não coloque `{}` em seu arquivo apenas as chaves e valores

#### Após isso você já pode iniciar, estou desenvolvendo um sistema de configuração, bem facilitado para pessoas que não tem conhecimento técnico.

#### Próximas atualizações estão por vim, não deixem de seguir os videos do projeto.

Rede sociais:

- [YouTube](https://www.youtube.com/channel/UC0TyL90rVvMfO1aI_tzF9mA)