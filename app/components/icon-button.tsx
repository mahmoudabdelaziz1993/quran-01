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
            className={`rounded-full size-12hover:bg-zinc-300  dark:hover:bg-zinc-600 focus:outline-none focus:ring active:bg-zinc-500 ring-current  grid place-items-center [&>svg]:size-6 p-2 ${className}`}
            onClick={() => onClick()}
        >
            {children}
        </button>
    )
}