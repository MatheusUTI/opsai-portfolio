# OpsAI Portfolio 🚀

Portfólio pessoal e profissional de **Anderson Matheus Albuquerque**, projetado sob a metodologia **AISDD (AI Spec-Driven Development Framework)**. Apresenta sua expertise em logística operacional, automação, sistemas internos e desenvolvimento de software assistido por inteligência artificial.

## 🛠️ Tecnologias e Ferramentas

- **Frontend**: React 19, Vite 6, Tailwind CSS 4, Motion/React (animações), Lucide React (ícones).
- **Metodologia**: AISDD (AI Spec-Driven Development Framework).
- **Sem Backend / Sem banco de dados**: Rodando inteiramente no client-side para portabilidade máxima e custos de infraestrutura nulos.

---

## 🚀 Como Executar Localmente

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org) instalado (recomendado v18 ou superior).

### Instalação de Dependências
```bash
npm install
```

### Inicialização do Servidor de Desenvolvimento
```bash
npm run dev
```
O servidor será aberto por padrão em `http://localhost:3000`.

### Construção para Produção (Build)
```bash
npm run build
```
O comando acima compila todos os arquivos e gera a saída otimizada na pasta `/dist`.

---

## ☁️ Deploy no Cloudflare Pages

Este projeto foi otimizado e está 100% pronto para publicação estática contínua no **Cloudflare Pages** integrado ao repositório GitHub.

### Passo a Passo de Configuração

1. **Acesse** o painel da [Cloudflare](https://dash.cloudflare.com/) e navegue até **Workers & Pages** > **Pages** > **Create a project** > **Connect to Git**.
2. **Conecte** seu repositório do GitHub contendo este projeto.
3. No painel de configuração do build, preencha as seguintes configurações obrigatórias:
   - **Framework preset**: `Vite` (ou escolha `None` e insira os comandos abaixo)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: (mantenha em branco para usar a raiz do repositório)
   - **Production branch**: `main`
4. Clique em **Save and Deploy**.

A partir de agora, qualquer novo commit ou merge realizado na branch `main` disparará uma nova compilação e publicação automática.

---

## 🎯 Método AISDD

Este projeto utiliza e documenta o framework **AISDD** para controle técnico sob Inteligência Artificial. Toda as especificações persistentes podem ser encontradas sob a estrutura do diretório `/docs/aisdd/`.
