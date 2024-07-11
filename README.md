# alura-aluraflix

Repositorio Base para desenvolvimento do Desafio AluraFlix do Challenge ONE Front end

## Pre-Requisitos

- Ter o Node instalado;
- Ter o pacote json-server instalado;

## Configuração

- Modificar a URL do fetch para a utilizada pelo json-server, caso necessário.
- Linha 22 do arquivo `aluraFlix/src/components/Edit/index.js`;
- Linha 20 e 50 do arquivo `aluraFlix/src/pages/Home/index.js`;
- Linha 26 do arquivo `aluraFlix/src/pages/NewVideo/index.js`;

## Execução

1. Em um terminal ative o json-server:

```
json-server --watch aluraFlix/public/db.json -p 8000
```

2. Acesse o [site](https://alura-aluraflix-coral.vercel.app/) ou ative a aplicação:

```
npm run dev
```

3. Pronto!
