type Data = {
    id: number,
    name: string,
    type: string,
    available: boolean
}

const Server = async () => {
    const url = await fetch("https://simple-books-api.glitch.me/books/")
    const data: Data[] = await url.json()
    return (
        <div>
            <div className="py-12 px-5 sm:px-[30px] md:px-[40px] lg:px-[50px]">
                <h1 className="mb-10 text-center text-3xl sm:text-[28px] md:text-[30px] font-bold text-black">SERVER SIDE</h1>
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                    {data.map((todo, index) => (
                        <div key={index} className="w-full bg-[white] shadow-lg p-5 rounded-lg hover:shadow-xl hover:scale-[1.05] transition">
                            <p className="text-xl font-[600] text-[#3d64b4] mb-[10px]">{todo.name}</p>
                            <p className="text-[gray] mb-2"><span className="font-bold">ID:</span> {todo.id}</p>
                            <p className="text-[gray] mb-2"><span className="font-bold">Type:</span> {todo.type}</p>
                            <p className={`${todo.available == true ? "text-[green]" : "text-[red]"} font-semibold`}>{todo.available == true ? "Available" : "Unavailable"}</p>
                            <p className={`text-right mt-[15px] ${todo.available == true ? "text-[red]" : "text-[green]"}`}>Read more...</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Server