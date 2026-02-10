import bg from '@assets/bg.webp';
import Header from '@components/layout/Header';
import { Compass } from 'lucide-react';

export default function Hero() {
    return (
        <section id="hero" className="relative h-svh flex flex-col text-zinc-50 overflow-hidden">
            <Header />
            <img
                src={bg}
                alt="Paisagem."
                loading="eager"
                fetchPriority="high"
                width="1920"
                height="1080"
                className="fixed inset-0 w-full h-full object-center object-cover -z-10"
            />
            <div className="bg-black/40 h-full w-full inset-0 fixed -z-10"></div>
            <div className="flex-1 flex items-end px-4 pb-4 z-10 max-w-2xl">
                <div className="max-w-4xl">
                    <h1 className="uppercase font-bebas text-4xl lg:text-8xl">
                        Conecte-se com a<span className="text-transparent bg-clip-text bg-linear-to-br from-green-300 via-green-500 to-emerald-700 drop-shadow-lg"> NATUREZA</span>
                    </h1>

                    <div className="bg-green-950/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative overflow-hidden">
                        <Compass className="w-8 h-8 text-green-400 mb-4" />
                        <p className="text-sm md:text-base text-zinc-300 leading-relaxed text-justify font-serif italic">
                            "Tenho esperança de que um maior conhecimento do mar, que há milênios dá sabedoria ao homem, inspire mais uma vez os pensamentos e as ações daqueles que
                            preservarão o equilíbrio da natureza."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
