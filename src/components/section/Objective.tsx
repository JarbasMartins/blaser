import DoodleAvatar from '@assets/plant.svg';
import { Globe, Leaf, Sun } from 'lucide-react';

export default function Objective() {
    const cards = [
        {
            title: 'Preservação',
            text: 'Atuar ativamente na recuperação de biomas degradados e proteção de nascentes.',
            icon: Globe,
        },
        {
            title: 'Consciência',
            text: 'Educar através da experiência, transformando turistas em defensores da natureza.',
            icon: Leaf,
        },
        {
            title: 'Bem-Estar',
            text: 'Provar que a saúde mental e física está intrinsecamente ligada ao tempo ao ar livre.',
            icon: Sun,
        },
    ];

    return (
        <div className="h-auto w-full bg-green-50 relative pb-10 overflow-hidden">
            <div className="flex items-center justify-between flex-col space-y-8 py-12 px-4 lg:px-0 max-w-7xl mx-auto z-10 relative">
                <h2 className="text-3xl md:text-6xl tracking-tight font-bebas text-center">
                    A natureza não precisa de mais vozes. <br />
                    Precisa de mais <span className="text-green-400 relative inline-block">consciência</span>.
                </h2>
                <img src={DoodleAvatar} alt="Avatar segurando planta" className="w-3/4 md:w-1/2 lg:w-2/5 drop-shadow-xl animate-float" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-3xl shadow-lg border-b-4 border-green-500 transition-transform duration-300 flex flex-col items-center text-center space-y-4 group"
                        >
                            <div className="p-4 bg-green-50 rounded-full text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                                <card.icon size={32} />
                            </div>
                            <h3 className="font-bebas text-3xl text-zinc-800">{card.title}</h3>
                            <p className="font-montserrat text-sm text-zinc-500 leading-relaxed">{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
