# Compile o Futuro

> Uma proposta conceitual de redesign da experiência institucional do DevClub.

## Demo

[Visualizar o projeto publicado](https://devclub-compile-o-futuro.vercel.app/)

## Visão geral

Projeto desenvolvido para o Desafio Full Stack DevClub 2026. A proposta transforma conceitos do universo de desenvolvimento em narrativa, interface e movimento, acompanhando a jornada de aprender, construir, conectar e publicar.

## Conceito

“Seu futuro não vem pronto. Você compila.” traduz a evolução profissional como um processo ativo: cada aprendizado adiciona repertório, cada projeto valida uma nova habilidade e cada publicação aproxima o próximo objetivo.

A linguagem developer-first leva referências de código, terminal, build e deploy para toda a experiência. Esses elementos não funcionam apenas como decoração; eles organizam a narrativa e conectam a identidade visual ao cotidiano de quem desenvolve software.

## Principais diferenciais

- Narrativa visual contínua;
- experiência responsiva;
- animações vinculadas ao scroll;
- arquitetura orientada a componentes;
- acessibilidade e suporte a reduced motion;
- links centralizados;
- identidade visual consistente;
- integração entre formações, comunidade, plataforma e suporte.

## Tecnologias

- React;
- Vite;
- JavaScript;
- CSS;
- GSAP;
- ScrollTrigger;
- Lucide React.

## Arquitetura

O projeto separa apresentação, conteúdo e comportamento para facilitar manutenção e evolução:

- `src/components`: componentes reutilizáveis de interface e layout;
- `src/components/sections`: seções que compõem a experiência completa da página;
- `src/data`: textos, listas, configurações e destinos de navegação centralizados;
- `src/hooks`: lógica de animação e integração com GSAP e ScrollTrigger;
- `src/styles`: estilos globais, tokens visuais e folhas específicas por seção;
- `assets`: imagens oficiais utilizadas pela interface;
- `public`: arquivos públicos servidos diretamente, como o favicon.

## Execução local

```bash
npm install
npm run dev
```

Para validar a qualidade e gerar a versão de produção:

```bash
npm run lint
npm run build
```

## Decisões de UX e acessibilidade

- Navegação operável por teclado;
- foco visível nos elementos interativos;
- áreas de toque adequadas para diferentes tamanhos de tela;
- contraste entre textos, superfícies e estados da interface;
- atributos ARIA aplicados para comunicar estrutura, estado e finalidade;
- suporte a `prefers-reduced-motion`, reduzindo movimentos quando solicitado pelo sistema.

## Status

- Interface concluída;
- URLs oficiais configuradas;
- deploy e Open Graph serão adicionados após a publicação.

## Autoria

Concebido e desenvolvido por Paulo Hashisaka para o Desafio Full Stack DevClub · 2026.

## Aviso

Projeto conceitual desenvolvido exclusivamente para o desafio seletivo. DevClub, sua marca e os materiais institucionais utilizados pertencem aos respectivos titulares.
