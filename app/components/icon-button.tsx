export default function IconButton({
    children,
    onClick,
    className,
    label
}: {
    children: React.ReactNode
    onClick: () => void
    className?: string
    label?: string
}) {
    return (
        <button
            className={`p-2 [&_svg]:size-4 rounded-full text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 ${className}`}
            onClick={() => onClick()}
        >
            {label && <span className="sr-only">{label}</span>}
            {children}
        </button>
    )
}