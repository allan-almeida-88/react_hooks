import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { use, useEffect, useState } from "react";

export default function ContagemCaracteres() {
    const [qtdCaracteres, setQtdCaracteres] = useState(400)
    const [qtdRestante, setQtdRestante] = useState(qtdCaracteres)
    const [texto, setTexto] = useState("")

    useEffect(() => {
        
        let timer = setTimeout(() => {
            let contador
            if(qtdCaracteres > texto.length) {
                contador = qtdCaracteres - texto.length
            } else {
                contador = 0
            }
    
            setQtdRestante(contador)
        }, 1000)

        return () => {clearTimeout(timer);}
    }, [texto])

    return (
        <Pagina titulo="Contagem de caracteres" subtitulo="Usando o useEffect">
            <Display texto={`Quantidade total de caracteres ${qtdCaracteres}`} textoComplementar={`${qtdRestante} quantidade restante`} />
            <Flex center>
                <textarea value={texto} 
                    onInput={(e) => setTexto(e.currentTarget.value)} 
                    maxLength={qtdCaracteres} cols={200} rows={10} 
                    className={`border border-zinc-700 bg-zinc-700 text-white text-2xl w-3/5 h-72 roudend p-5`}
                    /> 
            </Flex>
        </Pagina>
    )
}