---
title: Fornecedor
sidebar_position: 3
---

# `classes/fornecedor.py`

## O que este módulo faz

Define a classe `Fornecedor`, que representa um utilizador do tipo **fornecedor** já autenticado.

Tal como o `Cliente`, esta classe funciona como “painel/menu”:
- guarda `db` e `nome`
- mostra menu
- chama funções em `tools/fornecedor_tools/...`

---

## Classe `Fornecedor`

### `__init__(db_connection, nome)`

**Parâmetros**
- `db_connection` (`sqlite3.Connection`): ligação ativa ao SQLite
- `nome` (`str`): nome do fornecedor (importante para registos e filtros)

**Atributos**
- `self.db`
- `self.nome`

---

## Método `menu()`

### O que faz
Apresenta o “Painel do Fornecedor” em loop e executa a ação correspondente.

### Opções do menu (mapeamento real)

**1 — Ver pedidos recebidos**
- chama: `ver_pedidos_recebidos(self.db, self.nome)`
- objetivo: mostrar pedidos dirigidos a este fornecedor

**2 — Atualizar stock**
- chama: `atualizar_stock(self.db)`
- objetivo: permitir alterações ao stock

**3 — Ver stock atual**
- chama: `ver_stock(self.db)`
- objetivo: listar stock

**4 — Enviar mensagem ao cliente**
- chama: `enviar_mensagem(self.db, self.nome)`
- objetivo: fornecedor envia mensagem (remetente = fornecedor)

**5 — Ver mensagens recebidas**
- chama: `ver_mensagens(self.db, self.nome)`
- objetivo: listar mensagens recebidas (destinatário = fornecedor)

**6 — Abrir ticket para adicionar produto**
- chama: `abrir_ticket_produto(self.db, self.nome)`
- objetivo: criar ticket pendente para o admin aprovar

**7 — Registar entrega**
- chama: `registar_entrega(self.db, self.nome)`
- objetivo: inserir registo de entrega com status (no prazo/atrasado)

**8 — Exportar relatório de vendas**
- chama: `exportar_relatorio_vendas(self.db, self.nome)`
- objetivo: gerar relatório agregado de vendas/receita

**0 — Sair**
- termina o loop

### Validação
Opção inválida → imprime `"Opção inválida, tente novamente."`

---

## Dependências deste módulo

Importa e depende de:
- `tools.fornecedor_tools.stock`
- `tools.fornecedor_tools.comunicacao`
- `tools.fornecedor_tools.delivery_actions`
- `tools.fornecedor_tools.exportar_relatorio`

Este módulo é o “hub” do fornecedor: ele não implementa a lógica, só orquestra as ferramentas.
