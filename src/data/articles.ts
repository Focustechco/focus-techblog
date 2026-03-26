export interface Article {
  id: number;
  title: string;
  category: string;
  excerpt: string;
}

export const articles: Article[] = [
  { id: 1, title: "O Futuro da Automação com IA Generativa", category: "IA", excerpt: "Como modelos de linguagem estão transformando processos empresariais e criando novas oportunidades de negócio." },
  { id: 2, title: "5 Ferramentas Essenciais para Startups em 2025", category: "Startups", excerpt: "As tecnologias que toda startup precisa conhecer para escalar com eficiência e velocidade no mercado atual." },
  { id: 3, title: "Marketing Digital com Machine Learning", category: "Marketing", excerpt: "Estratégias avançadas de segmentação e personalização usando algoritmos de aprendizado de máquina." },
  { id: 4, title: "DevOps e a Cultura de Automação Contínua", category: "Automação", excerpt: "Pipelines inteligentes, deploys automatizados e a evolução do desenvolvimento ágil moderno." },
  { id: 5, title: "React 19: O Que Mudou e Por Que Importa", category: "Tecnologia", excerpt: "As principais mudanças do React 19 e como elas impactam o desenvolvimento frontend profissional." },
  { id: 6, title: "Como Estruturar um Time de Desenvolvimento", category: "Startups", excerpt: "Dicas práticas para montar e gerir equipes de dev de alta performance em startups de tecnologia." },
  { id: 7, title: "Segurança Cibernética na Era da IA", category: "Tecnologia", excerpt: "Novas ameaças e defesas inteligentes em um mundo cada vez mais conectado e dependente de dados." },
  { id: 8, title: "Automação de Processos com No-Code", category: "Automação", excerpt: "Plataformas no-code estão democratizando a automação. Entenda como aproveitar essa tendência." },
  { id: 9, title: "Growth Hacking para Produtos Digitais", category: "Marketing", excerpt: "Técnicas de crescimento acelerado que as maiores startups do mundo utilizam em seus produtos." },
  { id: 10, title: "Introdução ao Edge Computing", category: "Dev", excerpt: "Processamento na borda da rede: por que isso é importante para o futuro das aplicações web." },
  { id: 11, title: "Construindo APIs Escaláveis com Supabase", category: "Dev", excerpt: "Backend como serviço: como criar APIs robustas e escaláveis sem gerenciar infraestrutura." },
  { id: 12, title: "IA Conversacional e Atendimento ao Cliente", category: "IA", excerpt: "Chatbots inteligentes estão redefinindo o suporte ao cliente. Veja cases reais de implementação." },
];
