# 📌 QR Code Generator API

API simples para geração de **QR Codes em PNG**, pronta para uso em produção via **Vercel**.

---

## 🚀 Endpoint

```
GET /
```

---

## 📥 Parâmetros (Query String)

| Parâmetro | Tipo   | Obrigatório | Descrição |
|----------|--------|-------------|----------|
| `text`   | string | ✅ Sim | Conteúdo a ser convertido em QR Code |
| `size`   | number | ❌ Não | Tamanho do QR Code em pixels (padrão: 300) |

---

## 📤 Resposta

- **Content-Type:** `image/png`
- **Status:** `200 OK`
- Retorna diretamente a imagem do QR Code (não retorna JSON)

---

## ✅ Exemplos de Uso

### Browser
```
https://qr-janselmon.vercel.app/?text=https://google.com
```

Com tamanho customizado:
```
https://qr-janselmon.vercel.app/?text=PIX123456&size=500
```

---

### HTML
```html
<img src="https://qr-janselmon.vercel.app/?text=PagamentoPIX&size=400" />
```

---

### JavaScript
```js
const img = document.createElement('img');
img.src = 'https://qr-janselmon.vercel.app/?text=Pedido123';
document.body.appendChild(img);
```
