import bg from '@assets/bg.webp';
import Header from '@components/layout/Header';

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
            <div className="flex-1 flex items-end px-4 pb-2 z-10">
                <div className="max-w-4xl">
                    <h1 className="uppercase font-bebas text-4xl lg:text-6xl">
                        Conecte-se com a <span className="text-green-400">NATUREZA</span>
                    </h1>

                    <div className="flex items-center border-t-2 max-w-2xl border-t-zinc-50">
                        <p className="my-2 tracking-tighter font-montserrat text-justify text-[12px] md:text-base">
                            Tenho esperança de que um maior conhecimento do mar, que há milênios dá sabedoria ao homem, inspire mais uma vez os pensamentos e as ações daqueles que
                            preservarão o equilíbrio da natureza e permitirão a conservação da própria vida.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
