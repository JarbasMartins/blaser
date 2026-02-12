import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import { MessageSquare, Mail, User, Send } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="w-full min-h-screen bg-green-50 flex items-center">
            <div className="w-full max-w-7xl mx-auto px-4 lg:px-0 py-8 lg:py-12 space-y-8">
                <div className="flex flex-col items-center">
                    <h2 className="text-4xl md:text-6xl tracking-tight font-bebas">
                        ENTRE EM <span className="text-green-400">CONTATO</span>
                    </h2>
                    <div className="h-1 w-24 bg-green-400" />
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                    <form className="flex flex-1 flex-col gap-5 bg-zinc-950 p-8 rounded-3xl border border-zinc-950">
                        <div>
                            <h3 className="text-2xl font-bold text-white">Envie uma mensagem</h3>
                            <p className="text-zinc-400 mt-2">Preencha o formulário e retornaremos em breve.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <Input label="Nome" type="text" icon={<User size={18} />} placeholder="Seu nome" required />
                            <Input label="Email" type="email" icon={<Mail size={18} />} placeholder="seu@email.com" required />
                        </div>

                        <Textarea label="Mensagem" icon={<MessageSquare size={18} />} placeholder="Conte-nos os detalhes..." required />

                        <button
                            type="submit"
                            className="group cursor-pointer relative flex items-center justify-center gap-2 bg-white text-white font-semibold py-4 px-6 rounded-xl overflow-hidden transition-transform active:scale-[0.98]"
                        >
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
                            <span>Enviar Mensagem</span>
                            <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </button>
                    </form>

                    <div className="w-full flex-1 h-75 md:h-100 lg:h-auto overflow-hidden rounded-3xl border border-zinc-200 shadow-xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d938.4848923755059!2d-41.717141833424805!3d-19.800159389858965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sus!4v1770659606876!5m2!1spt-BR!2sus"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full pointer-events-none lg:pointer-events-auto"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
