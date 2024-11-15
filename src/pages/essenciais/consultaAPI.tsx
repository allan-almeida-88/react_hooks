import Pagina from "@/components/template/Pagina";
import { useEffect, useState } from "react";

export default function ConsultaApi() {
    const [url, SetUrl] = useState()

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(resp => resp.json())
            .then(obj => SetUrl(obj.message))
    
    }, [])

    return (
        <Pagina titulo="Requisição à API" subtitulo="Requirindo dados">
            <img className="max-w-sm" src={url}></img>
        </Pagina>
    )
}