import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navigation = [
        { label: 'Sobre Nós', href: '#about' },
        { label: 'Serviços', href: '#services' },
        { label: 'Contato', href: '#contact' },
    ];

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                    scrolled ? 'bg-black/70 backdrop-blur-md border-b border-white/10' : 'bg-transparent border-b border-transparent'
                }`}
            >
                <div className="mx-auto px-4 py-3">
                    <div className="flex items-center justify-between font-bebas text-zinc-50">
                        <h1 className="text-3xl font-semibold tracking-wide">
                            <a href="#hero" onClick={() => setIsMenuOpen(false)}>
                                BLASER
                            </a>
                        </h1>

                        <nav className="hidden md:block">
                            <ul className="flex items-center gap-6 text-lg">
                                {navigation.map(({ label, href }) => (
                                    <li key={label} className="hover:text-green-400 transition-colors">
                                        <a href={href}>{label}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <button className="md:hidden focus:outline-none z-60" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}>
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </header>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-black/95 z-55 flex flex-col items-center justify-center md:hidden animate-in fade-in duration-300">
                    <button className="absolute top-4 right-4 text-zinc-50 focus:outline-none" onClick={() => setIsMenuOpen(false)} aria-label="Fechar menu">
                        <X size={32} />
                    </button>

                    <nav>
                        <ul className="flex flex-col items-center gap-6 text-2xl font-bebas">
                            {navigation.map(({ label, href }) => (
                                <li key={label} onClick={() => setIsMenuOpen(false)}>
                                    <a href={href} className="text-zinc-50 hover:text-green-400 transition-colors">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </>
    );
}
