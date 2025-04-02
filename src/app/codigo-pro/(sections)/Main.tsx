
export interface MainProps {
    children: React.ReactNode;
}

export default function Main({ children }: MainProps ) {
    return (
        <main className="bg-black text-white">
            {children}
        </main>
    )
}