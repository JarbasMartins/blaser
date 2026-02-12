export default function Header() {
    const navigation = [
        { label: 'Sobre Nós', href: '#about' },
        { label: 'Serviços', href: '#services' },
        { label: 'Contato', href: '#contact' },
    ];

    return (
        <header
            className="w-full z-50 border-b-2  text-zinc-50 border-transparent'} 
            transition-colors duration-200"
        >
            <div className="mx-auto px-4 py-2">
                <div className="flex items-center justify-between font-bebas">
                    <div className="shrink-0">
                        <h1 className="font-semibold text-4xl">
                            <a href="#hero">BLASER</a>
                        </h1>
                    </div>

                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-4">
                            {navigation.map(({ label, href }) => {
                                return (
                                    <li key={label} className="hover:-translate-y-0.5 hover:text-green-400 transition-transform duration-150">
                                        <a href={href}>{label}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
