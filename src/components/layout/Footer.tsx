import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-green-700 text-zinc-50 py-12 px-4 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start">
                    <span className="font-bebas text-3xl text-white">
                        BLASER<span className="text-green-500">.</span>
                    </span>
                    <p className="text-xs font-montserrat mt-2">© 2025 Blaser Ecoturismo. Todos os direitos reservados.</p>
                </div>
                <div className="flex gap-6">
                    <Instagram className="transition-colors cursor-default" />
                    <Facebook className="transition-colors cursor-default" />
                    <Twitter className="transition-colors cursor-default" />
                </div>
            </div>
        </footer>
    );
}
