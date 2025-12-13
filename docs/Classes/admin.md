---
title: Admin
sidebar_position: 4
---

# `classes/admin.py`

## O que este módulo faz

Este ficheiro define a classe `Admin`, responsável pelo painel de administração do sistema.

O Admin:
- gere utilizadores
- gere produtos
- aprova/nega tickets
- acompanha entregas
- define e consulta objetivos mensais

Tal como as outras classes, `Admin` funciona como controlador:
- recebe a ligação `db`
- mostra menu
- chama funções dos módulos em `tools/admin_tools/...`

---

## Classe `Admin`

### `__init__(db_connection)`

**Parâmetro**
- `db_connection` (`sqlite3.Connection`): ligação ativa à base de dados

**Atributo**
- `self.db` (guardado para ser usado em todas as ações)

---

## Método `menu()`

### O que faz
Executa o painel do administrador em loop.

**Detalhe importante:** antes de mostrar o menu, ele chama sempre:

- `self.verificar_tickets_pendentes()`

Ou seja, a cada ciclo ele verifica se existem tickets pendentes e mostra essa informação.

### Opções do menu (mapeamento real)

**1 — Criar utilizador**
- chama: `self.criar_utilizador()` → `criar_utilizador(self.db)`

**2 — Apagar utilizador**
- chama: `self.apagar_utilizador()` → `apagar_utilizador(self.db)`

**3 — Pesquisar utilizador**
- chama: `self.pesquisar_utilizador()` → `pesquisar_utilizador(self.db)`

**4 — Adicionar produto**
- chama: `self.adicionar_produto()` → `adicionar_produto(self.db)`

**5 — Remover produto**
- chama: `self.remover_produto()` → `remover_produto(self.db)`

**6 — Ver stock**
- chama: `self.ver_stock()` → `ver_stock(self.db)`

**7 — Ver informações de produtos**
- chama: `self.ver_informacoes_produtos()` → `ver_informacoes_produtos(self.db)`

**8 — Aprovar / Negar Ticket**
- chama: `self.aprovar_ticket()` → `aprovar_ticket(self.db)`

**9 — Acompanhar Entrega**
- chama: `self.ver_entregas()` → `ver_entregas(self.db)`

**10 — Objetivos Mensais**
- chama: `self.ver_objetivos()` → `ver_objetivos(self.db)`

**11 — Definir Objetivos Mensais**
- chama: `self.definir_objetivos()` → `definir_objetivos(self.db)`

**0 — Sair**
- termina o menu

### Validação
Se a opção for inválida, mostra `"Opção inválida, tente novamente."`

---

## Outros métodos (wrapper)

A maioria dos métodos do `Admin` são “wrappers”:
eles existem para chamar uma função externa passando `self.db`.

Exemplos:
- `criar_utilizador()` → chama `criar_utilizador(self.db)`
- `ver_entregas()` → chama `ver_entregas(self.db)`

---

## Dependências deste módulo

Importa e depende de:
- `tools.admin_tools.user_manager`
- `tools.admin_tools.product_manager` (inclui: `verificar_tickets_pendentes`, `aprovar_ticket`, etc.)
- `tools.admin_tools.delivery_manager`
- `tools.admin_tools.goals_manager`
