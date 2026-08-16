# www.cleversouza.com — marca pessoal e arquitetura do site

Atualização: 13 de agosto de 2026.

## 1. Decisão estratégica

- Marca principal: Clever Souza.
- Identidade pessoal: Cleverson Batista de Souza.
- Natureza: marca pessoal de longo prazo.
- Primeira frente ativa: massoterapia em Curitiba.
- Conversão global: contato institucional.
- Conversão da massoterapia: contato específico de atendimento, condicionado a canal confirmado.
- Regra de expansão: novas frentes só entram no menu quando possuírem conteúdo real.

A página inicial não posiciona massoterapia como atividade central. A massoterapia
foi concentrada em `/massoterapia` e em páginas complementares preservadas.

## 2. Arquitetura publicada

| Página | URL | Função |
|---|---|---|
| Início | `/` | Apresentar a marca Clever Souza |
| Sobre | `/sobre` | Explicar identidade, finalidade e princípios |
| Conteúdos de massoterapia | `/massoterapia/conteudo` | Hub editorial da área de massoterapia |
| Massoterapia | `/massoterapia` | Landing page da primeira frente ativa |
| Contato | `/contato` | Apresentar o canal oficial confirmado |
| Massoterapia local | `/massoterapia-curitiba` | Preservar intenção comercial local |
| Técnicas | `/servicos` | Preservar explicações e autoridade da URL existente |
| Privacidade | `/politica-de-privacidade` | Transparência e LGPD |
| Termos | `/termos-de-uso` | Regras do site |
| Aviso de Saúde | `/aviso-de-saude` | Limites editoriais e segurança |
| 404 | rota inexistente | Recuperação e `noindex` |

Artigos atuais:

1. `/massoterapia/conteudo/massagem-relaxante-como-funciona-e-cuidados`
2. `/massoterapia/conteudo/shiatsu-como-funciona-e-cuidados`
3. `/massoterapia/conteudo/tui-na-como-funciona-e-cuidados`
4. `/massoterapia/conteudo/reflexologia-podal-beneficios-limites-e-cuidados`
5. `/massoterapia/conteudo/thai-massage-como-funciona-e-cuidados`
6. `/massoterapia/conteudo/quick-massage-como-funciona`

As rotas legadas de `/conteudos` são redirecionadas permanentemente para as
rotas correspondentes em `/massoterapia/conteudo`.

## 3. Identidade visual

Conceito oficial: **Eixo Vivo**.

Arquivos utilizados:

- `logo-horizontal-principal.svg`: cabeçalho desktop claro;
- `logo-mobile-simplificada.svg`: cabeçalho mobile;
- `simbolo-clever-souza.svg`: larguras estreitas e área institucional;
- `logo-horizontal-branca.svg`: rodapé escuro;
- `simbolo-clever-souza-metalico.svg`: detalhe pontual do hero;
- `logo-vertical.svg`: página Sobre;
- `favicon.svg`, PNGs 16/32/48 e ícones 180/192/512.

Os arquivos foram copiados sem redesenho e conferidos pelos hashes do manifesto
do pacote. Todos os elementos de imagem possuem dimensões declaradas no HTML.

Tokens principais:

| Token | Valor |
|---|---|
| Azul profundo | `#071A33` |
| Azul principal | `#0B4F8A` |
| Azul aço | `#2778AE` |
| Azul mineral | `#2E8BC0` |
| Ciano frio | `#70D8E8` |
| Prata azulada | `#B9DCEB` |
| Violeta azulada | `#555ED6` |
| Grafite | `#17212B` |
| Fundo | `#F8FAFC` |
| Superfície | `#FFFFFF` |
| Fundo sutil | `#EEF4F8` |
| Texto | `#071A33` |
| Texto secundário | `#526273` |
| Borda | `#D7E3EC` |

Tipografia: `Manrope, Inter, system-ui, sans-serif`, com fallback sem dependência
externa.

## 4. Componentes criados ou reorganizados

- cabeçalho institucional com versões oficiais da logo;
- navegação global sem o item “Serviços”;
- menu mobile com área de toque, Escape, clique externo, bloqueio de rolagem e
  ciclo de foco;
- hero institucional da marca;
- seção de finalidade e princípios;
- card da primeira frente ativa;
- hub editorial geral;
- landing page completa de massoterapia;
- rodapé institucional;
- página de contato com separação entre marca e massoterapia;
- imagens Open Graph contextualizadas por página em 1200 × 630;
- 404 com `noindex`.

## 5. SEO

- title padrão: `Clever Souza | Site oficial`;
- home focada na entidade Clever Souza;
- `/massoterapia` com title `Massoterapia em Curitiba | Clever Souza`;
- SEO local limitado à área de massoterapia;
- canonicals individuais preservados;
- sitemap e robots preservados;
- metadados Open Graph e Twitter atualizados;
- um único H1 em todas as rotas;
- breadcrumbs mantidos;
- dados globais `Person` e `WebSite` sem aplicar massoterapia à home;
- dados `Service` e `FAQPage` na área de massoterapia;
- dados `Article` e breadcrumbs nos artigos.

Canonicals, Open Graph, sitemap, robots e referências técnicas usam
`https://www.cleversouza.com` como domínio oficial.

## 6. Analytics

O site continua enviando eventos para `window.dataLayer` quando ela existir.
Não havia tag GA4, GTM nem variável de ambiente de mensuração ativa no projeto
ou na hospedagem; portanto, nenhuma integração funcional foi removida.

Eventos globais:

- `view_home`;
- `view_about`;
- `view_contents`;
- `view_contact`;
- `click_contact`;
- `select_brand_front`;
- `scroll_75`.

Eventos de massoterapia:

- `view_massotherapy`;
- `view_massotherapy_services`;
- `select_massotherapy_service`;
- `view_massotherapy_article`;
- `click_massotherapy_whatsapp`.

## 7. Preservação

- código-base Vinext, lockfile e scripts de build;
- HTTPS e publicação existente no Sites;
- todas as páginas, artigos, textos úteis e fontes de saúde;
- sitemap, robots, canonicals e metadados;
- estrutura de eventos existente, com nomenclatura reorganizada;
- políticas legais e aviso de saúde;
- controle de acesso atual do projeto.

## 8. Validação realizada

- build de produção e artefato Sites aprovados;
- lint aprovado sem erros;
- testes de HTML renderizado aprovados;
- 16 rotas públicas com status 200;
- rota inexistente com status 404;
- um H1 em todas as páginas;
- canonicals individuais verificados;
- ausência de overflow horizontal no desktop;
- logos oficiais carregadas;
- home sem massoterapia no H1;
- massoterapia ativa somente em sua frente;
- navegação visual e console do navegador verificados;
- nenhuma exceção de aplicação observada.

Breakpoints implementados no CSS:

- 320, 360, 375 e 390 px;
- 768 px;
- 1024 px;
- 1440 px.

## 9. Pendências reais

Prioridade alta:

- concluir ou revisar a configuração externa do domínio raiz `cleversouza.com`,
  que ainda não aparece com o mesmo estado ativo de `www.cleversouza.com`;
- confirmar a propriedade de `https://www.cleversouza.com` no Search Console,
  caso isso ainda não tenha sido feito.

Prioridade média:

- fornecer o identificador GA4 ou GTM, caso a mensuração deva ser ativada;
- fotografia profissional de Cleverson;
- fotografia real do ambiente de atendimento;
- endereço, disponibilidade, duração e valores, se houver decisão de publicá-los;
- formações e certificações verificadas;
- redes sociais e Perfil da Empresa no Google confirmados.

Nenhum dado ausente foi inventado. Componentes que dependem de informações não
confirmadas permanecem ocultos.
