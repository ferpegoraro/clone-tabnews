# Curso Dev - Projeto de Estudo

Este projeto documenta o processo de configuração de um ambiente de desenvolvimento com Node.js, NVM e React.

## Histórico de Comandos Executados

### 1. Diagnóstico do NVM

```bash
# Tentativa inicial de verificar versão do NVM (falhou)
nvm --version
# Resultado: zsh: command not found: nvm

# Verificação se diretório NVM existia
ls -la ~/.nvm
# Resultado: No such file or directory

# Verificação da versão do Node.js já instalada
node --version
# Resultado: v22.17.0
```

### 2. Instalação do NVM

```bash
# Instalação do NVM via script oficial
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Carregamento do NVM na sessão atual
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && nvm --version
# Resultado: 0.39.0
```

### 3. Configuração do NVM

```bash
# Visualização da ajuda do NVM
nvm --help

# Configuração do alias padrão para LTS Hydrogen
nvm alias default lts/hydrogen
# Resultado: default -> lts/hydrogen (-> v18.20.8)

# Tentativas de instalação usando .nvmrc (falharam inicialmente)
nvm install
# Resultado: No .nvmrc file found
```

### 4. Criação do package.json

```bash
# Criação do arquivo package.json (comando inferido baseado no conteúdo)
npm init
# ou
npm init -y
# Resultado: Criado package.json com configurações básicas do projeto
```

### 5. Instalação de Dependências React

```bash
# Instalação do React versão específica
npm i react@18.2.0
# Resultado: Instalado com warnings sobre peer dependencies

# Instalação do React DOM versão específica
npm i react-dom@18.2.0
# Resultado: Instalado com sucesso
```

## Arquivos de Configuração Criados

### .nvmrc

```
lts/hydrogen
```

Arquivo que especifica a versão do Node.js a ser usada pelo NVM neste projeto.

### .gitignore

```
node_modules
```

Arquivo que especifica quais arquivos/pastas o Git deve ignorar.

## Problemas Encontrados e Soluções

1. **NVM não instalado**: Resolvido instalando via script oficial
2. **Arquivo .nvmrc incorreto**: Criado arquivo correto com nome `.nvmrc` (com ponto)
3. **Dependências React**: Instaladas versões específicas para compatibilidade

## Próximos Passos

- [ ] Configurar repositório Git
- [ ] Conectar com GitHub
- [ ] Testar instalação do Node.js via NVM
- [ ] Resolver vulnerabilidades de segurança (`npm audit fix`)

## Comandos Úteis

```bash
# Verificar versão atual do Node
node --version

# Listar versões do Node instaladas via NVM
nvm list

# Instalar Node.js usando .nvmrc
nvm install

# Usar versão específica do Node
nvm use lts/hydrogen

# Verificar vulnerabilidades
npm audit

# Corrigir vulnerabilidades
npm audit fix
```

## Testes de API com curl

### Endpoint de Status

Foi criado um endpoint de status em `/api/status` que retorna um JSON simples. Os testes abaixo demonstram como acessar este endpoint usando curl:

```bash
# Requisição simples ao endpoint de status
curl http://localhost:3000/api/status
# Resultado: {"chave":"São acima da média"}

# Requisição com informações detalhadas (verbose)
curl http://localhost:3000/api/status -v
# Resultado: Mostra headers de requisição e resposta, além do corpo da resposta
```

O endpoint de status está configurado para retornar:

- Status HTTP: 200 OK
- Content-Type: application/json
- Corpo da resposta: `{"chave":"São acima da média"}`

Este endpoint serve como uma verificação básica para confirmar que a API está funcionando corretamente.

## Configuração do Docker

### Docker Compose

O projeto utiliza Docker para gerenciar a infraestrutura de desenvolvimento, especialmente o banco de dados PostgreSQL. Abaixo estão os comandos Docker utilizados:

```bash
# Verificar a versão do Docker instalada
docker --version
# Resultado: Docker version 28.3.2, build 578ccf6

# Iniciar os serviços definidos no arquivo compose.yaml (modo interativo)
docker compose up
# Resultado: Inicia o container do PostgreSQL 16 Alpine e mostra logs no terminal

# Iniciar os serviços em segundo plano (modo detached)
docker compose up -d
# Resultado: Inicia o container sem bloquear o terminal

# Listar containers em execução
docker ps
# Resultado: Mostra informações sobre os containers ativos
```

### Arquivo compose.yaml

O arquivo `compose.yaml` define os serviços necessários para o ambiente de desenvolvimento:

```yaml
services:
  database:
    image: "postgres:16-alpine"
    environment:
      POSTGRES_PASSWORD: "local_password"
```

Este arquivo configura:

- Um serviço chamado `database` usando a imagem oficial do PostgreSQL versão 16 com Alpine Linux

### Próximos passos para configuração do Docker

- [ ] Adicionar variáveis de ambiente para o PostgreSQL (usuário, senha, nome do banco)
- [ ] Configurar volumes para persistência de dados
- [ ] Definir portas para acesso ao banco de dados
- [ ] Integrar o serviço de banco de dados com a aplicação

### Comandos Docker úteis

#### Gerenciamento de containers

| Comando                               | Descrição                                                                         |
| ------------------------------------- | --------------------------------------------------------------------------------- |
| `docker compose up`                   | Rodar a imagem em um container                                                    |
| `docker compose up -d`                | Rodar a imagem em um container em segundo plano (detached)                        |
| `docker compose down`                 | Destruir o container                                                              |
| `docker compose up --force-recreate`  | Reconstruir o container (equivalente a um `compose down` seguido de `compose up`) |
| `docker compose -f [path/arquivo] up` | Subir a imagem a partir de um arquivo compose.yaml no caminho especificado        |

#### Monitoramento de containers

| Comando                           | Descrição                                        |
| --------------------------------- | ------------------------------------------------ |
| `docker ps`                       | Listar todos os containers em execução           |
| `docker ps -a`                    | Listar todos os containers, incluindo os parados |
| `docker logs [nome do container]` | Retornar os logs do container especificado       |

#### Conexão com PostgreSQL

| Comando                                                 | Descrição                                                      |
| ------------------------------------------------------- | -------------------------------------------------------------- |
| `psql --host=localhost --username=postgres --port=5432` | Conectar ao cliente psql do PostgreSQL (senha: local_password) |
