# AISDD - 03_ARCHITECTURE

Este documento define os padrões arquiteturais, o fluxo de dados e os contratos de infraestrutura adotados no portfólio.

## 🏗️ Arquitetura Geral
O projeto é uma aplicação puramente estática baseada no padrão de **Single Page Application (SPA)**, garantindo velocidade incrível de carregamento e hospedagem barata ou gratuita em ambientes como Cloudflare Pages.

```
       [ Usuário Final / Browser ]
                     │
         Renders SPA (React 19)
                     │
      ┌──────────────┴──────────────┐
      ▼                             ▼
[ UI Components ]          [ portfolioData.ts ] (Estado Dinâmico)
- Header, Hero, About      - Textos, Configs, Links
- Projects, AISDD Panel    - Badges de Tecnologias
- Contact, Footer          - Passos do Método
```

## 📂 Organização Detalhada de Arquivos
O código segue o padrão estrito de componentização do React/TSX:
- `/src/data/portfolioData.ts`: A única fonte da verdade para dados brutos, links de contato editáveis e nomes.
- `/src/components/Header.tsx`: Navbar responsiva com comportamento transparente dinâmico no scroll.
- `/src/components/Hero.tsx`: Introdução impactante contendo o motor de simulação reativo de expedição e cargas.
- `/src/components/About.tsx`: Citações de Anderson e biografia estruturada de chão de pátio.
- `/src/components/Areas.tsx`: Cards de competências com tags técnicas.
- `/src/components/Projects.tsx`: Projetos em desenvolvimento com o "Playground Tático" para visualização de especificações da arquitetura simulada.
- `/src/components/AISDD.tsx`: Deck de playout iterativo dos 11 arquivos de especificações.
- `/src/components/Stack.tsx`: Grade inteligente com filtros rápidos de tecnologias aplicadas.
- `/src/components/Method.tsx`: Passo a passo detalhado de engenharia de software resiliente.
- `/src/components/Contact.tsx`: Formulário sem estado corporativo de email direto com recurso de clipboard do endereço bruto.
- `/src/components/Footer.tsx`: Encerramento, selo estável de versão e créditos rápidos.

## 🎨 Identidade Visual (Natural Tones)
O tema adotado é o **Natural Tones**:
- **Fundo:** Tons de cinza suaves e off-white (#F9FAFB, #FFFFFF).
- **Acentos:** Azul ciano/sky e verde-esmeralda aplicados cirurgicamente à marca visual, botões interativos e badges.
- **Tipografia:** Famílias sans-serif legíveis e modernas aliadas a blocos com fontes monoespaçadas (representando o lado técnico/dados de Anderson).
- **Efeitos:** Bordas bem delineadas, sombras suaves, micro-transições elegantes ao pairar em cartões de competências.
