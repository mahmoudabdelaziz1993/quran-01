export default function IconButton({
    children,
    onClick,
    className,

}: {
    children: React.ReactNode
    onClick: () => void
    className?: string
    label?: string
}) {
    return (
        <button
            className={`rounded-full size-12hover:bg-zinc-300 active:motion-scale-in-90 duration-75 transition-all ease-in-out  dark:hover:bg-zinc-600 focus:outline-none  active:bg-zinc-500 ring-current  grid place-items-center [&>svg]:size-6 p-3 ${className}`}
            onClick={() => onClick()}
        >
            {children}
        </button>
    )
}