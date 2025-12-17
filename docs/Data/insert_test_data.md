---
title: insert_test_data
sidebar_position: 1
---

# `scripts/insert_test_data.py`

## O que este módulo faz

Este script insere **dados de teste** na base de dados SQLite (`data/greenlink.db`) para facilitar o desenvolvimento.

Inclui:
- utilizadores (admin, cliente, fornecedor)
- produtos iniciais
- tickets de produto (feitos e pendentes)
- pedidos simulados (cliente comprando produtos)

⚠️ Destina-se a **ambiente de testes/dev**, não a produção. :contentReference[oaicite:0]{index=0}

---

## Ligação à base de dados

### O que faz
1. Abre ligação com `sqlite3.connect("data/greenlink.db")`
2. Cria cursor com `conn.cursor()`

### Base de dados
- `data/greenlink.db`

---

## Inserção: utilizadores

### Objetivo
Criar utilizadores base para testar permissões/fluxos.

### O que faz
Insere 3 utilizadores na tabela `utilizadores` via `executemany`:

- `("admin", "admin", "1234")`
- `("paul", "cliente", "123")`
- `("camp", "fornecedor", "123")`

### Tabela usada
- `utilizadores`

---

## Inserção: produtos

### Objetivo
Garantir produtos iniciais para testes de compra/stock.

### O que faz
Insere produtos na tabela `produtos`:

- Brócolos (2.5, stock 100)
- Cenouras (1.2, stock 200)
- Alfaces (1.8, stock 150)

### Tabela usada
- `produtos`

---

## Inserção: tickets de produto

### Objetivo
Simular pedidos de fornecedores (tickets) para aprovação/gestão.

### O que faz
Cria tickets na tabela `tickets_produto`:
- 1 com `status = "feito"`
- 1 com `status = "pendente"`

Exemplos no script:
- Brócolos → feito
- Tomates → pendente

### Tabela usada
- `tickets_produto`

---

## Inserção: pedidos (compras)

### Objetivo
Simular compras feitas por um cliente.

### O que faz
Insere pedidos na tabela `pedidos` com:
- `cliente_id`
- `produto_id`
- `quantidade`
- `estado`

No script, o cliente (id 2) compra:
- 10 unidades do produto 1
- 5 unidades do produto 3

### Tabela usada
- `pedidos`

---

## Finalização

### O que faz
1. `conn.commit()` para guardar os dados
2. `conn.close()` para fechar a ligação
3. Imprime: `"Dados de teste inseridos com sucesso!"`


### Nota da equipa
este ficheiro é apenas de exemplo sendo assim não é essencial porem para adiconar novos utilizadores nessecita de um admin, coisa que sem correr este codigo fica complicado