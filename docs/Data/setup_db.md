---
title: setup_db
sidebar_position: 2
---

# `scripts/setup_db.py`

## O que este módulo faz

Este script cria (se ainda não existirem) as tabelas da base de dados SQLite (`data/greenlink.db`) usadas pela aplicação.

Ele define a estrutura inicial do sistema, incluindo utilizadores, produtos, pedidos, tickets e outros módulos (entregas, objetivos e mensagens). :contentReference[oaicite:1]{index=1}

---

## Ligação à base de dados

### O que faz
1. Liga à BD com `sqlite3.connect("data/greenlink.db")`
2. Cria cursor com `conn.cursor()`

### Base de dados
- `data/greenlink.db`

---

## Tabela: `utilizadores`

### Objetivo
Guardar utilizadores e o seu tipo (admin/cliente/fornecedor).

### Campos principais
- `id` (PK autoincrement)
- `nome`
- `tipo` com `CHECK(tipo IN ('admin','cliente','fornecedor'))`
- `senha`

### O que faz
Cria a tabela com `CREATE TABLE IF NOT EXISTS utilizadores (...)`.

---

## Tabela: `produtos`

### Objetivo
Guardar produtos disponíveis para compra/gestão de stock.

### Campos principais
- `id` (PK)
- `nome`
- `preco` (REAL)
- `stock` (INTEGER)

---

## Tabela: `pedidos`

### Objetivo
Registar compras de clientes (pedido por produto).

### Campos principais
- `cliente_id` (FK → `utilizadores.id`)
- `produto_id` (FK → `produtos.id`)
- `quantidade`
- `estado` com `CHECK(estado IN ('feito','pago','enviado','entregue'))`
  - default: `'feito'`

---

## Tabela: `tickets_produto`

### Objetivo
Registar tickets submetidos por fornecedores para criar/atualizar produtos.

### Campos principais
- `fornecedor` (texto)
- `produto` (texto)
- `preco`
- `stock`
- `status` (default `'pendente'`)

---

## Tabela: `entregas`

### Objetivo
Registar entregas associadas a pedidos.

### Campos principais
- `pedido_id` (FK → `pedidos.id`)
- `produto`
- `fornecedor`
- `supermercado`
- `data_prevista`
- `data_real` (opcional)
- `status` com `CHECK(status IN ('no prazo', 'atrasado'))`

---

## Tabela: `objetivos_mensais`

### Objetivo
Guardar objetivos e resultados mensais de produção/vendas/receita.

### Campos principais
- `mes`
- `objetivo_producao`, `objetivo_vendas`, `objetivo_receita`
- `realizado_producao`, `realizado_vendas`, `realizado_receita` (defaults 0)

---

## Tabela: `mensagens`

### Objetivo
Permitir mensagens entre utilizadores (remetente/destinatário).

### Campos principais
- `remetente`
- `destinatario`
- `mensagem`
- `data` (default `CURRENT_TIMESTAMP`)

---

## Saída do script

### O que faz
No final imprime:
- `"Base de dados criada com sucesso!"`


