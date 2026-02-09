import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    icon?: React.ReactNode;
}

export default function Textarea({ label, icon, className = '', ...props }: TextareaProps) {
    return (
        <div className={className}>
            <label className="block mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">{label}</label>
            <div className="relative group">
                {icon && (
                    <div className="absolute top-3 left-0 flex items-start pl-3 pointer-events-none text-zinc-400 group-focus-within:text-emerald-500 transition-colors">
                        {icon}
                    </div>
                )}
                <textarea
                    {...props}
                    className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 block pl-10 p-3 outline-none transition-all duration-200 resize-y dark:bg-zinc-900/50 dark:border-zinc-800 dark:placeholder-zinc-500 dark:text-white dark:focus:ring-emerald-500/20"
                />
            </div>
        </div>
    );
}
