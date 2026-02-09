import Carrousel from '@components/ui/Carrousel';
import imgTrail from '@assets/carrousel-1.webp';
import imgCamping from '@assets/carrousel-2.webp';
import imgReforestation from '@assets/carrousel-3.webp';

export default function Services() {
    const DATA = [
        {
            id: 1,
            content: {
                title: 'Trilhas Ecológicas',
                description:
                    'Vivências guiadas em ambientes naturais preservados. Nossas trilhas são projetadas não apenas como exercício físico, mas como uma meditação em movimento, estimulando a reconexão com o ritmo da natureza.',
                slogan: 'Caminhe, Respire, Conecte-se',
                features: [
                    'Guias especializados em fauna e flora local',
                    'Trilhas de níveis iniciante a avançado',
                    'Kit de primeiros socorros e segurança incluso',
                    'Paradas para banho de cachoeira e contemplação',
                ],
            },
            image: imgTrail,
        },
        {
            id: 2,
            content: {
                title: 'Acampamentos',
                description:
                    'Experiências imersivas ao ar livre que incentivam a convivência e a simplicidade. Desconecte-se da tecnologia e fortaleça os vínculos humanos ao redor da fogueira, com total segurança e estrutura necessária.',
                slogan: 'A Magia de Dormir sob as Estrelas',
                features: [
                    'Equipamentos de camping de alta performance',
                    'Alimentação rústica e orgânica inclusa',
                    'Atividades noturnas e observação astronômica',
                    'Treinamento de sobrevivência básica',
                ],
            },
            image: imgCamping,
        },
        {
            id: 3,
            content: {
                title: 'Reflorestamento',
                description:
                    'Ações práticas voltadas à recuperação de áreas degradadas. Participe ativamente do plantio consciente de espécies nativas, aprendendo sobre botânica e deixando um legado positivo para o planeta.',
                slogan: 'Plante o Futuro com Suas Mãos',
                features: [
                    'Workshop educativo sobre sementes nativas',
                    'Certificado de participação e plantio',
                    'Acompanhamento do crescimento das mudas',
                    'Contribuição direta para a fauna local',
                ],
            },
            image: imgReforestation,
        },
    ];

    return (
        <div id="services" className="h-auto px-4 py-8 w-full bg-green-50 text-zinc-950">
            <div className="space-y-8 flex items-center justify-center flex-col">
                <div className="flex flex-col items-center">
                    <h2 className="text-4xl md:text-6xl tracking-tight font-bebas">
                        NOSSOS <span className="text-green-400">SERVIÇOS</span>
                    </h2>
                    <div className="h-1 w-24 bg-green-400 ml-0" />
                </div>
                <Carrousel items={DATA} />
            </div>
        </div>
    );
}
