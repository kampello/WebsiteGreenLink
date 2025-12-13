---
title: Cliente
sidebar_position: 2
---

# `classes/cliente.py`

## O que este módulo faz

Este ficheiro define a classe `Cliente`, que representa um utilizador do tipo **cliente** já autenticado no GreenLink.

A classe existe principalmente para:
- guardar a ligação à base de dados (`db`)
- guardar o nome do cliente (`nome`)
- mostrar um **menu** no terminal e ligar cada opção às funções em `tools/cliente_tools/...`

Ou seja: a classe `Cliente` é um “painel/controlador” — ela **chama** ferramentas, mas a lógica pesada fica nas tools.

---

## Classe `Cliente`

### `__init__(db_connection, nome)`

**Parâmetros**
- `db_connection` (`sqlite3.Connection`): ligação ativa ao SQLite
- `nome` (`str`): nome do cliente (usado para filtrar pedidos e mensagens)

**Atributos**
- `self.db` → guarda a conexão para passar às tools
- `self.nome` → identifica o cliente atual

---

## Método `menu()`

### O que faz
Mostra um menu interativo em loop e executa ações conforme a opção escolhida.

O loop termina apenas quando o utilizador escolhe `"0"`.

### Opções do menu (mapeamento real)

**1 — Ver produtos disponíveis**
- chama: `ver_produtos_disponiveis(self.db)`
- objetivo: mostrar produtos disponíveis para compra

**2 — Fazer um pedido**
- chama: `fazer_pedido(self.db, self.nome)`
- objetivo: criar um pedido associado a este cliente (`self.nome`)

**3 — Ver meus pedidos**
- chama: `ver_pedidos(self.db, self.nome)`
- objetivo: listar pedidos feitos pelo cliente atual

**4 — Enviar mensagem ao fornecedor**
- chama: `enviar_mensagem(self.db, self.nome)`
- objetivo: enviar mensagem (remetente = cliente)

**5 — Ver mensagens recebidas**
- chama: `ver_mensagens(self.db, self.nome)`
- objetivo: listar mensagens onde o destinatário é este cliente

**0 — Sair**
- faz `break` e termina o menu

### Validação
Se o utilizador digitar uma opção inválida, o menu mostra:
- `"Opção inválida, tente novamente."`

---

## Dependências deste módulo

Este ficheiro depende diretamente de:
- `tools.cliente_tools.pedidos` (produtos/pedidos)
- `tools.cliente_tools.comunicacao` (mensagens)

Se estas tools não existirem ou mudarem de nome, o menu deixa de funcionar.
