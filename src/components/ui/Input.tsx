interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    icon?: React.ReactNode;
}

export default function Input({ label, type, icon, className = '', ...props }: InputProps) {
    return (
        <div className={className}>
            <label className="block mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">{label}</label>
            <div className="relative group">
                {icon && (
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-400 group-focus-within:text-emerald-500 transition-colors">
                        {icon}
                    </div>
                )}
                <input
                    {...props}
                    type={type}
                    className="w-full bg-zinc-50 border-b border-b-zinc-400 text-zinc-900 text-sm  focus:ring-b-2 focus:ring-emerald-500/20 focus:border-emerald-500 block pl-10 p-3 outline-none transition-all duration-400 dark:bg-zinc-900/50 dark:border-zinc-800 dark:placeholder-zinc-500 dark:text-white dark:focus:ring-emerald-500/20"
                />
            </div>
        </div>
    );
}
