import { useEffect, useState } from "react"
import { Header } from "../Header/Header"
import axios from "axios"
import {Cards} from "../Cards/Cards"

const AllMangas = () => {
    const [mangas, setMangas] = useState([])
    useEffect(() => {
        axios.get('/api/mangas')
            .then((response) => {
                setMangas(response.data)
            })
            .catch((error) => {
                console.error('Error al obtener los datos del servidor', error);
            });
    }, [])
    return(
        <>
            <Header/>
            <h2>Mangas Recientes</h2>
            <main>
                <Cards mangas={mangas}/>
            </main>
        </>
    )
}
export {AllMangas}