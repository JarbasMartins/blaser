import type { LucideIcon } from 'lucide-react';

interface ButtonProps {
    label?: string;
    onClick?: () => void;
    className?: string;
    icon?: LucideIcon;
    iconClassName?: string;
}

export default function Button({ label, onClick, className, icon: Icon, iconClassName = '' }: ButtonProps) {
    const isIconOnly = Icon && !label;
    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center gap-1 bg-zinc-50 text-zinc-950 font-bebas text-base cursor-pointer hover:bg-green-200 transition-colors active:scale-95
                ${isIconOnly ? 'p-2 rounded-full aspect-square' : 'px-4 py-2 rounded-full'} ${className}`}
        >
            {label && <span>{label}</span>}
            {Icon && <Icon size={20} className={`${iconClassName}`} />}
        </button>
    );
}
