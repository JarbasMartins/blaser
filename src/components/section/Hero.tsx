import bg from '@assets/bg.webp';
import Header from '@components/layout/Header';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section id="hero" className="relative h-svh flex flex-col text-zinc-50 overflow-hidden">
            <Header />

            <img
                src={bg}
                alt="Paisagem natural deslumbrante."
                loading="eager"
                fetchPriority="high"
                width="1920"
                height="1080"
                className="fixed inset-0 w-full h-full object-cover -z-10"
            />
            <div className="fixed inset-0 bg-black/40 -z-10" />

            <div className="flex-1 flex items-end px-4 pb-4 z-10 w-full max-w-7xl">
                <div className="max-w-3xl space-y-4">
                    <h1 className="uppercase font-bebas text-4xl sm:text-6xl md:text-7xl lg:text-9xl  tracking-tight">
                        Conecte-se com a<span className="text-transparent bg-clip-text bg-linear-to-br from-green-300 via-green-500 to-emerald-700 drop-shadow-lg"> Natureza</span>
                    </h1>

                    <p className="text-sm sm:text-lg md:text-xl text-justify md:text-left max-w-2xl text-zinc-50 font-montserrat leading-relaxed">
                        Fuja da rotina e descubra paisagens intocadas. Vivências guiadas para quem busca presença, aventura e respeito ao ambiente natural.
                    </p>

                    <div className="flex gap-3">
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3
                                       text-sm sm:text-base font-medium text-black bg-white rounded-lg
                                       hover:bg-zinc-200 transition-all"
                        >
                            Agendar aventura
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </a>

                        <a
                            href="#services"
                            className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3 text-sm sm:text-base font-medium text-white border-2 border-white/40 rounded-lg hover:bg-white/10 transition-colors"
                        >
                            Ver roteiros
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
