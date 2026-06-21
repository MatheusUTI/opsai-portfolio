# AISDD - 07_DECISIONS_LOG

Este é um registro linear e imutável das maiores decisões técnicas e escolhas de design feitas durante a concepção deste repositório.

## 📜 Histórico de Decisões do Projeto

### DEC-001: Arquitetura Estática (SPA)
- **Data: 2026-06-21**
- **Escolha:** Decidido usar React puro estruturado em uma Single Page Application estática servida por Vite.
- **Razão:** Portabilidade extrema do portfólio. Anderson necessita demonstrar flexibilidade imediata de carregamento sem a complexidade de gerenciar servidores node locais em ambientes isolados de internet, além de zerar os custos mensais de servidores.

### DEC-002: Identidade Visual "Natural Tones"
- **Data: 2026-06-21**
- **Escolha:** Adotar tons sóbrios, cinzas, fundo predominantemente claro, combinados com ciano e verde-esmeralda pontuais.
- **Razão:** Desviar do padrão clichê futurista roxo/escuro ou preto hacker. O trabalho de Anderson lida com estradas físicas, faturamento de notas, caminhões e prazos reais. A paleta Natural Tones evoca seriedade corporativa e minimalismo moderno condizente com ambientes de transportadoras de cargas.

### DEC-003: Simuladores Interativos de Telemetria
- **Data: 2026-06-21**
- **Escolha:** Desenvolver painéis de simulação do faturamento TMS e scripts na Hero e Projetos.
- **Razão:** Portfólios de desenvolvedores em transição de carreira frequentemente pecam ao exibir apenas textos teóricos ou currículos em PDF. Ao ver em tempo real dados mutáveis de caminhões e trechos de códigos que mapeiam rotas em Kotlin, o visitante valida na hora a capacidade mecânica de engenharia operacional de Anderson.

### DEC-004: Padronização de Nomenclatura (AISDDSection)
- **Data: 2026-06-21**
- **Escolha:** Renomear o componente `AISDD.tsx` para `AISDDSection.tsx` e ajustar as dependências do `App.tsx`.
- **Razão:** Manter a consistência com a estrutura de nomenclatura recomendada nas especificações operacionais e no índice geral de arquivos, otimizando o acoplamento do sistema.

### DEC-005: Preparação para Cloudflare Pages e SEO Nativo
- **Data: 2026-06-21**
- **Escolha:** Adicionar metatags do portfólio diretamente no core do `index.html` (com `lang="pt-BR"`) e consolidar a documentação de build contínuo do Cloudflare Pages no `README.md`.
- **Razão:** Garantir o correto escaneamento e indexação pelos motores de busca (Google, Bing) e facilitar o setup de deploy imediato com build command e diretório padrão do Vite (`dist/`), sem necessidade de reconfiguração manual ou dependência de servidores web customizados.

