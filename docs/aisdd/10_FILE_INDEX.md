# AISDD - 10_FILE_INDEX

Mapeamento estrutural de cada arquivo presente no repositório com sua exata responsabilidade funcional.

```
/
├── docs/
│   └── aisdd/                     # Documentação de rastreabilidade AISDD
│       ├── 01_PROJECT_RULES.md    # Contrato e regras operacionais
│       ├── 02_PRODUCT_SPEC.md     # Escopo do produto
│       ├── 03_ARCHITECTURE.md     # Padrões, fluxo e design system
│       ├── 04_CURRENT_STATE.md    # Progresso e checklists atuais
│       ├── 05_NEXT_TASK.md        # Planejamento do próximo ciclo
│       ├── 06_ACCEPTANCE_CHECKS.md# Sucesso da tarefa detalhado
│       ├── 07_DECISIONS_LOG.md    # Motivações de escolhas técnicas
│       ├── 08_HANDOFF.md          # Passagem de bastão técnico
│       ├── 09_KNOWN_ISSUES.md     # Bugs e limitações catalogadas
│       ├── 10_FILE_INDEX.md       # Este índice de arquivos
│       └── 11_TEST_CHECKLIST.md   # Roteiro de testes manuais
│
├── src/
│   ├── components/                # Componentes modulares reutilizáveis
│   │   ├── About.tsx              # Biografia e áreas operacionais
│   │   ├── AISDDSection.tsx       # Showcase iterativo das especificações
│   │   ├── Areas.tsx              # Grid interativo de áreas logísticas
│   │   ├── Contact.tsx            # Formulário de e-mail e atalhos
│   │   ├── Footer.tsx             # Rodapé com versão estável
│   │   ├── Header.tsx             # Menu de navegação superior responsivo
│   │   ├── Hero.tsx               # Introdução impactante com simulador de rotas
│   │   ├── Method.tsx             # Nossos passos de entrega operacional
│   │   ├── Projects.tsx           # Projetos em desenvolvimento com simulador de código
│   │   └── Stack.tsx              # Grid de badges tecnológicos parametrizados
│   │
│   ├── data/
│   │   └── portfolioData.ts       # A fonte imutável da verdade das informações
│   │
│   ├── App.tsx                    # Orquestrador estrutural de visualização única
│   ├── index.css                  # Inicializações globais do Tailwind CSS 4
│   └── main.tsx                   # Ponto de ancoragem estrito no DOM do navegador
│
├── index.html                     # HTML simples com indexação dinâmica de título
├── metadata.json                  # Metadados estruturais do applet
└── README.md                      # Instruções de configuração local e deploy no Cloudflare Pages
```
