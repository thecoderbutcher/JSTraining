const layout = ({children}:{ children:React.ReactNode }) => {
    return (
        <main className="relative transition-all duration-1000 bg-green-500">
            {children}
        </main>
    )
}

export default layout