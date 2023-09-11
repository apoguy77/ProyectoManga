const Cards = ({ mangas }) => {
    console.log(mangas)
    const pepito = mangas[3]
    return (
        <>
        <div>
            {pepito.title}
        </div>
        {
            mangas.map((manga) => (
                <div key={manga._id}>
                    <p>{manga.precio}</p>
                    <span>{manga.image}</span>
                    <span>{manga.descripcion}</span>
                    

                </div>
            ))
        }
        </>
    )
}
export { Cards }