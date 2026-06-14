import {
  Sparkles,
  Workflow,
  Code2,
  BarChart3,
  Cloud,
  Bot,
  MessageSquare,
  Building2,
  Megaphone,
  Users,
  Database,
  GitBranch,
  Layers,
  Server,
  Shield,
  Rocket,
  DollarSign,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export interface HubTrend {
  name: string;
  icon: LucideIcon;
  description: string;
}

export interface HubGuide {
  title: string;
  description: string;
}

export interface HubStat {
  value: string;
  label: string;
}

export interface HubPodcast {
  title: string;
  duration: string;
  guest: string;
}

export interface HubVideo {
  title: string;
  duration: string;
}

export interface HubNews {
  title: string;
  source: string;
  date: string;
}

export interface Hub {
  slug: string;
  topicName: string; // matches BlogSidebar trending topic name
  title: string;
  subtitle: string;
  heroImage: string;
  category: string; // matches articles.category for cross-linking
  accentEmoji: string;
  trends: HubTrend[];
  guides: HubGuide[];
  videos: HubVideo[];
  podcasts: HubPodcast[];
  stats: HubStat[];
  news: HubNews[];
  cta: string;
}

export const hubs: Hub[] = [
  {
    slug: "inteligencia-artificial",
    topicName: "Inteligência Artificial",
    title: "Hub de Inteligência Artificial",
    subtitle:
      "Descubra como a Inteligência Artificial está transformando empresas, profissões e mercados em todo o mundo.",
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80",
    category: "IA",
    accentEmoji: "🤖",
    trends: [
      { name: "IA Generativa", icon: Sparkles, description: "Modelos multimodais redefinindo criação de conteúdo." },
      { name: "Agentes Inteligentes", icon: Bot, description: "Autonomia digital para tarefas complexas em escala." },
      { name: "IA Empresarial", icon: Building2, description: "Adoção corporativa madura com governança e ROI." },
      { name: "IA para Atendimento", icon: MessageSquare, description: "Suporte 24/7 com qualidade humana." },
      { name: "IA para Marketing", icon: Megaphone, description: "Personalização e previsão em tempo real." },
    ],
    guides: [
      { title: "O que é IA", description: "Fundamentos, tipos e aplicações práticas para iniciantes e gestores." },
      { title: "Como usar IA nos negócios", description: "Frameworks de adoção, casos de uso e métricas de retorno." },
      { title: "Ferramentas recomendadas", description: "Stack completo: LLMs, vetores, observabilidade e orquestração." },
    ],
    videos: [
      { title: "Construindo seu primeiro agente com MCP", duration: "12:34" },
      { title: "RAG na prática: arquitetura e armadilhas", duration: "18:02" },
      { title: "Fine-tuning vs Prompting: quando usar cada um", duration: "09:47" },
    ],
    podcasts: [
      { title: "O futuro do trabalho com agentes autônomos", duration: "42 min", guest: "Maria Esther" },
      { title: "Governança de IA em grandes empresas", duration: "55 min", guest: "Adriano Leal" },
      { title: "LLMs open-source: o ecossistema em 2026", duration: "38 min", guest: "Gabriel Sbrana" },
    ],
    stats: [
      { value: "78%", label: "Empresas usando IA generativa" },
      { value: "3.4x", label: "Aumento médio de produtividade" },
      { value: "US$ 1.3T", label: "Mercado global em 2026" },
      { value: "60%", label: "Redução em tickets de suporte" },
    ],
    news: [
      { title: "OpenAI lança nova geração de modelos de raciocínio", source: "TechCrunch", date: "13 Jun 2026" },
      { title: "Brasil aprova marco regulatório de IA", source: "Valor Econômico", date: "10 Jun 2026" },
      { title: "Google integra Gemini em todo o Workspace", source: "The Verge", date: "07 Jun 2026" },
    ],
    cta: "Implementar IA na minha empresa",
  },
  {
    slug: "automacao-empresarial",
    topicName: "Automação de Processos",
    title: "Hub de Automação Empresarial",
    subtitle:
      "Aprenda a eliminar tarefas manuais e aumentar a produtividade da sua empresa com automação inteligente.",
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80",
    category: "Automação",
    accentEmoji: "⚙️",
    trends: [
      { name: "Automação Comercial", icon: TrendingUp, description: "Pipeline de vendas com automação ponta a ponta." },
      { name: "CRM Inteligente", icon: Users, description: "CRMs com IA prevendo próximas ações e churn." },
      { name: "WhatsApp Automation", icon: MessageSquare, description: "Atendimento automatizado no canal preferido do brasileiro." },
      { name: "IA + Automação", icon: Bot, description: "Hiperautomação combinando RPA e LLMs." },
    ],
    guides: [
      { title: "Mapeando processos para automação", description: "Identifique candidatos ideais com alto ROI." },
      { title: "RPA do zero ao avançado", description: "Guia prático com UiPath, Power Automate e n8n." },
      { title: "Integrações corporativas", description: "Conectando ERP, CRM e ferramentas de comunicação." },
    ],
    videos: [
      { title: "Tutorial: automatizando notas fiscais com IA", duration: "15:21" },
      { title: "Dashboards executivos em tempo real", duration: "11:08" },
      { title: "n8n vs Zapier vs Make: comparativo prático", duration: "20:45" },
    ],
    podcasts: [
      { title: "O caso de hiperautomação que economizou R$ 5M", duration: "47 min", guest: "Marcelo Rezende" },
      { title: "Como medir ROI de automação", duration: "33 min", guest: "Adriano Leal" },
    ],
    stats: [
      { value: "70%", label: "Redução em tempo de processos" },
      { value: "12 meses", label: "Payback médio em projetos" },
      { value: "85%", label: "Erros operacionais eliminados" },
      { value: "4x", label: "Velocidade de execução" },
    ],
    news: [
      { title: "UiPath lança plataforma agentic 100% gerenciada", source: "ZDNet", date: "12 Jun 2026" },
      { title: "Mercado de RPA cresce 28% no Brasil", source: "Exame", date: "08 Jun 2026" },
      { title: "Microsoft Copilot Studio adiciona agentes autônomos", source: "Microsoft News", date: "05 Jun 2026" },
    ],
    cta: "Automatizar minha operação",
  },
  {
    slug: "react-typescript",
    topicName: "React & TypeScript",
    title: "Hub React & TypeScript",
    subtitle:
      "Conteúdo para desenvolvedores que buscam criar aplicações modernas, escaláveis e com excelente DX.",
    heroImage:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1920&q=80",
    category: "Dev",
    accentEmoji: "⚛️",
    trends: [
      { name: "React 19 + Server Components", icon: Layers, description: "RSC em produção e o novo compilador." },
      { name: "TypeScript 5.5+", icon: Code2, description: "Type-safe APIs, branded types e inference avançada." },
      { name: "Bun & Deno", icon: GitBranch, description: "Runtimes modernos desafiando Node.js." },
      { name: "Edge Computing", icon: Cloud, description: "Aplicações globalmente rápidas via edge." },
    ],
    guides: [
      { title: "Guia completo de React 19", description: "Hooks, Actions, Server Components e melhores práticas." },
      { title: "TypeScript avançado", description: "Generics, conditional types, infer e patterns reais." },
      { title: "Performance em React", description: "Profiling, memoização e renderização eficiente." },
    ],
    videos: [
      { title: "Migrando para React 19 sem dor", duration: "22:10" },
      { title: "TypeScript: 10 patterns que você precisa saber", duration: "16:33" },
      { title: "Construindo um design system com Tailwind + Radix", duration: "28:45" },
    ],
    podcasts: [
      { title: "Bun, Deno e o futuro do JavaScript", duration: "51 min", guest: "Adriano Leal" },
      { title: "Arquitetura frontend em times grandes", duration: "44 min", guest: "Gabriel Sbrana" },
    ],
    stats: [
      { value: "#1", label: "Framework mais usado (StateOfJS)" },
      { value: "92%", label: "Devs satisfeitos com TS" },
      { value: "3M+", label: "Downloads semanais React" },
      { value: "45%", label: "Apps com TS estrito" },
    ],
    news: [
      { title: "React Compiler entra em GA estável", source: "React Blog", date: "11 Jun 2026" },
      { title: "TypeScript 6.0 anuncia inference 40% mais rápida", source: "DevTo", date: "09 Jun 2026" },
      { title: "Vite 7 reduz tempo de build em 60%", source: "Vite Blog", date: "06 Jun 2026" },
    ],
    cta: "Conhecer soluções Focus Tech",
  },
  {
    slug: "startups-funding",
    topicName: "Startups & Funding",
    title: "Hub de Empreendedorismo e Investimentos",
    subtitle:
      "Tudo sobre captação de recursos, inovação e construção de negócios escaláveis no novo mercado de capital.",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80",
    category: "Startups",
    accentEmoji: "🚀",
    trends: [
      { name: "Eficiência de capital", icon: DollarSign, description: "Crescer com burn multiple abaixo de 2." },
      { name: "AI-first startups", icon: Sparkles, description: "Companies nascendo nativamente com IA no core." },
      { name: "Revenue-based financing", icon: TrendingUp, description: "Alternativas a equity para founders." },
      { name: "Global from day one", icon: Rocket, description: "Startups brasileiras nascendo internacionais." },
    ],
    guides: [
      { title: "Pitch deck que levanta rodada", description: "Estrutura, narrativa e métricas que investidores querem." },
      { title: "Term sheets sem armadilhas", description: "Cláusulas críticas: liquidation, anti-dilution e governance." },
      { title: "Construindo o time fundador", description: "Cofounders, equity split e cap table saudável." },
    ],
    videos: [
      { title: "Como fechei minha Series A em 2026", duration: "34:12" },
      { title: "PMF: sinais reais vs vanity metrics", duration: "19:50" },
      { title: "Entrevista com sócio da Kaszek Ventures", duration: "47:21" },
    ],
    podcasts: [
      { title: "O novo manual de captação", duration: "58 min", guest: "Gabriel Sbrana" },
      { title: "De zero a US$10M ARR em 24 meses", duration: "41 min", guest: "Founder convidado" },
    ],
    stats: [
      { value: "US$ 280B", label: "VC global em 2026" },
      { value: "110%+", label: "NRR exigido em Series A" },
      { value: "18 meses", label: "CAC payback máximo" },
      { value: "US$ 1M ARR", label: "Régua mínima Series A" },
    ],
    news: [
      { title: "Sequoia anuncia novo fundo de US$ 8B focado em IA", source: "Bloomberg", date: "13 Jun 2026" },
      { title: "Startups brasileiras captam R$ 12B no semestre", source: "Distrito", date: "10 Jun 2026" },
      { title: "a16z lidera rodada de US$ 200M em startup de agentes", source: "TechCrunch", date: "07 Jun 2026" },
    ],
    cta: "Escalar meu negócio",
  },
  {
    slug: "cloud-computing",
    topicName: "Cloud Computing",
    title: "Hub de Infraestrutura e Nuvem",
    subtitle:
      "Aprenda como empresas utilizam infraestrutura moderna para crescer com segurança, performance e escalabilidade.",
    heroImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",
    category: "Tecnologia",
    accentEmoji: "☁️",
    trends: [
      { name: "Multi-cloud", icon: Cloud, description: "Cargas distribuídas entre AWS, Azure e GCP." },
      { name: "FinOps", icon: DollarSign, description: "Otimização contínua de custos em nuvem." },
      { name: "Kubernetes maduro", icon: Server, description: "K8s gerenciado como padrão de produção." },
      { name: "Zero Trust", icon: Shield, description: "Segurança nativa em arquiteturas distribuídas." },
    ],
    guides: [
      { title: "Guias AWS", description: "EC2, S3, Lambda, RDS e arquiteturas de referência." },
      { title: "Guias Azure", description: "AKS, Functions, Cosmos DB e serviços enterprise." },
      { title: "Guias Google Cloud", description: "GKE, BigQuery, Cloud Run e Vertex AI." },
    ],
    videos: [
      { title: "Demo: deploy multi-região em 5 minutos", duration: "08:14" },
      { title: "Reduzindo custos cloud em 40%", duration: "17:32" },
      { title: "Observabilidade com OpenTelemetry", duration: "23:11" },
    ],
    podcasts: [
      { title: "FinOps na prática", duration: "39 min", guest: "Marcelo Rezende" },
      { title: "Kubernetes em escala: lições do mercado", duration: "52 min", guest: "Adriano Leal" },
    ],
    stats: [
      { value: "US$ 720B", label: "Gasto global em nuvem 2026" },
      { value: "94%", label: "Empresas em estratégia multi-cloud" },
      { value: "32%", label: "Redução média com FinOps" },
      { value: "5x", label: "Mais rápido deploy com IaC" },
    ],
    news: [
      { title: "AWS reduz preço de GPU para inferência em 35%", source: "AWS News", date: "12 Jun 2026" },
      { title: "Azure lidera adoção em setor financeiro", source: "Gartner", date: "09 Jun 2026" },
      { title: "Google Cloud anuncia regiões soberanas no Brasil", source: "Google Cloud Blog", date: "05 Jun 2026" },
    ],
    cta: "Modernizar minha infraestrutura",
  },
];

export const getHubBySlug = (slug: string) => hubs.find((h) => h.slug === slug);
export const getHubByTopicName = (name: string) =>
  hubs.find((h) => h.topicName === name);
