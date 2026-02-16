import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';
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
            <div className="space-y-8 flex items-center justify-center flex-col max-w-7xl mx-auto">
                <div className="flex flex-col items-center">
                    <h2 className="text-4xl md:text-6xl tracking-tight font-bebas">
                        NOSSOS <span className="text-green-400">SERVIÇOS</span>
                    </h2>
                    <div className="h-1 w-24 bg-green-400 ml-0" />
                </div>
                <Carrousel items={DATA} />

                <div className="w-full mt-12">
                    <div className="relative overflow-hidden rounded-4xl bg-green-100/50 border border-green-200 p-8 md:p-14">
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-green-200/30 rounded-full blur-3xl -z-10" />
                        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl -z-10" />

                        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                            <div className="text-center lg:text-left space-y-4">
                                <h3 className="text-3xl md:text-4xl font-bebas tracking-wide uppercase text-zinc-900">Pronto para a sua próxima jornada?</h3>
                                <p className="text-zinc-600 text-lg max-w-xl font-light leading-relaxed">
                                    Personalizamos roteiros exclusivos para grupos, casais ou viajantes a solo. A aventura que procura começa com um simples clique.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0">
                                <a
                                    href="#contact"
                                    className="group flex items-center justify-center gap-3 px-10 py-5 bg-green-600 text-white rounded-2xl hover:bg-green-700 transition-all shadow-xl shadow-green-900/20 active:scale-95"
                                >
                                    <Calendar size={20} />
                                    <span className="font-semibold text-lg uppercase tracking-tight">Planejar Agora</span>
                                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                                </a>

                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 px-10 py-5 bg-white text-zinc-700 border border-zinc-200 rounded-2xl hover:bg-zinc-50 transition-all shadow-sm active:scale-95"
                                >
                                    <MessageCircle size={20} className="text-green-500" />
                                    <span className="font-semibold text-lg uppercase tracking-tight">Dúvidas?</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
