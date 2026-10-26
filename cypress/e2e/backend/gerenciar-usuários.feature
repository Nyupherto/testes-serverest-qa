# language: pt

Funcionalidade: Gerenciamento de usuários via API

  Cenário: Acessar informações de usuário não existente
    Dado que eu possuo o ID de um usuário não cadastrado
    Quando eu buscar pelas informações do usuário via API
    Então a requisição deve falhar com o código 400
    E o sistema deve avisar "Usuário não encontrado"