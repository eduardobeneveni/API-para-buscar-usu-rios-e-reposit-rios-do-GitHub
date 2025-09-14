API que busca dados de usuários e repositórios do GitHub. A API é de acesso público e não requer autenticação.

Pré-requisitos
Para utilizar esta API, o servidor Node.js (server.js) deve estar em execução. Rodando localmente, a URL base será: http://localhost:3000

Buscar Perfil do Usuário
Retorna o perfil público completo de um usuário do GitHub.

Método: GET

Endpoint: /api/usuario/:username

Parâmetros da URL
username (obrigatório): O nome de usuário do GitHub que você deseja pesquisar.

Exemplo de Requisição:

http://localhost:3000/api/usuario/eduardobeneveni
Exemplo de Resposta de Sucesso (Status 200 OK)
A resposta será um objeto JSON com os dados do perfil do usuário, retornados diretamente da API do GitHub.
