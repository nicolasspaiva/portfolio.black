import {
    ArrowsClockwise,
    ArrowsLeftRight,
    Brain,
    Checks,
    FileText,
    Function,
    GitPullRequest,
    GithubLogo,
    Kanban,
    Table,
    TestTube,
    Toolbox,
    type Icon,
} from '@phosphor-icons/react';
import { BRAND_PATH, TECH_BRAND } from '../constants/brandIcons';
import { ICON } from '../constants/ui';

/**
 * Ícone semântico para o que não tem marca própria — ou cuja marca não passa
 * nos dois testes de `brandIcons.ts` (legível a 16px, única na lista).
 *
 * Cloud Functions, Vertex AI e Genkit caem aqui não por falta de logo, mas
 * porque repetiriam a marca do GCP e a do Firestore no mesmo cartão.
 */
const CONCEPT_ICON: Record<string, Icon> = {
    'APIs REST': ArrowsLeftRight,
    'Cloud Functions': Function,
    SQL: Table,
    'Vertex AI': Brain,
    Genkit: Toolbox,
    Jest: TestTube,
    'Testing Library': Checks,
    'GitHub Actions': GithubLogo,
    Scrum: ArrowsClockwise,
    Kanban: Kanban,
    'Code review': GitPullRequest,
    'Technical docs': FileText,
};

/**
 * Marca da tecnologia, sempre monocromática: azul é o sinal único do sistema,
 * e vinte e sete logos coloridos virariam confete no meio dele.
 *
 * Decorativo — o nome da tecnologia está do lado, em texto.
 */
const TechIcon = ({ tech }: { tech: string }) => {
    const slug = TECH_BRAND[tech];

    if (slug) {
        return (
            <svg className="tech-mark" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d={BRAND_PATH[slug]} />
            </svg>
        );
    }

    const Concept = CONCEPT_ICON[tech];
    if (!Concept) return null;

    return <Concept className="tech-mark" size={ICON.md} weight="regular" aria-hidden="true" />;
};

export default TechIcon;
