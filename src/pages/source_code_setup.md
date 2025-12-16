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