# 🥦 GreenLink

**GreenLink** é uma aplicação desenvolvida em **Python** por

**Paulo Campello @kampello**

**Ricardo Cunha @ricardo6927**

**Gonçalo Maia @DrunkTurkey**

**David Vieira @a44120-droid**

com o objetivo de otimizar a gestão e comercialização de vegetais.
O sistema integra três níveis de utilizadores — **Administrador**, **Cliente** e **Fornecedor** — permitindo uma comunicação eficiente e uma gestão transparente de produtos, pedidos e stocks.

![Visão geral](pathname:/WebsiteGreenLink/img/comercio_vegetais.jpg)



---

## Funcionalidades

### Tools ⚒️

Ficheiro de funcionalidades de Utilizador:

* Fornecedor_Tools
* Cliente_Tools
* Administração_Tools

### Administrador 👨‍💼👩‍💼

* Gere contas de utilizadores (clientes e fornecedores)
* Adiciona, remove e atualiza produtos e stocks
* Supervisiona pedidos e o seu estado

### Cliente 🥦

* Regista-se e realiza login
* Efetua pedidos de vegetais
* Acompanha o estado de cada pedido (feito, pago, enviado, entregue)
* Comunica com o fornecedor

### Fornecedor

* Atualiza o stock dos produtos
* Consulta e gere pedidos recebidos
* Comunica com clientes e confirma entregas

---

* [x] Login
* [x] Dashboard Cliente / Fornecedor
* [x] Chat Cliente ↔ Fornecedor
* [x] Versão 0.5 🥳🥦

> [!NOTE]
> Esta estrutura ainda pode sofrer algumas mudanças...

```
GreenLink/
│
├── classes/
│   ├── admin.py
│   ├── cliente.py
│   └── fornecedor.py
│
├── tools/
│   ├── admin_tools/
│   ├── cliente_tools/
│   └── fornecedor_tools/
│   └── Toolbox.py
│
├── data/
│   └── greenlink.db
│   └── setup_db.py
│   └── insert_test_data.py
│
├── tests/
│   └── test_*.py
│
├── main.py
├── requirements.txt
├── README.md
└── .gitignore
```

---

## 🚀 Como correr o código (atualizado — passos exatos incluídos)

### **1. Pré‑requisitos**

* Python 3.10+ instalado
* `sqlite3` (incluído no Python)
* `pip` para instalar dependências

### **2. Clonar o repositório**

```bash
git clone https://github.com/kampello/GreenLink.git
cd GreenLink
```

### **3. Ambiente virtual (recomendado)**

```bash
python -m venv venv
# Windows:
venv\Scripts\activate
# macOS / Linux:
source venv/bin/activate
```

### **4. Instalar dependências**

> Se não houver `requirements.txt`, criaremos com as libs necessárias (ex.: `flask`, `rich`, etc.).

```bash
pip install -r requirements.txt
```

### **5. Inicializar base de dados**

```bash
python data/setup_db.py
```

### **6. Inserir dados de teste**

```bash
python data/insert_test_data.py
```

> Nota: os nomes exatos dos ficheiros são `setup_db.py` e `insert_test_data.py` dentro da pasta `data`.

### **7. Executar a aplicação**

```bash
python main.py
```

### **8. Testes (opcional)**

Se houver testes unitários use a branch `test`:

```bash
pip install pytest
pytest -q
```