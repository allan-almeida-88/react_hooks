import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useRef, useState } from "react";

export default function ContagemCaracteres() {
    const [qtdCaracteres, setQtdCaracteres] = useState(400)
    const [qtdRestante, setQtdRestante] = useState(qtdCaracteres)
    
    const refText = useRef<any>()
    const contador = useRef<any>()

    console.log('Renderizado')

    const iniciarContado = () => {
        clearTimeout(contador.current)
        contador.current = setTimeout(() => {
            setQtdRestante( qtdCaracteres - refText.current.value.length)
        }, 1000);
     
    }

    return (
        <Pagina titulo="Contagem de caracteres" subtitulo="Usando o useRef">
            <Display texto={`Quantidade total de caracteres ${qtdCaracteres}`} textoComplementar={`${qtdRestante} quantidade restante`} />
            <Flex center>
                <textarea 
                    ref={refText}
                    onInput={iniciarContado}
                    maxLength={qtdCaracteres} cols={200} rows={10} 
                    className={`border border-zinc-700 bg-zinc-700 text-white text-2xl w-3/5 h-72 roudend p-5`}
                    /> 
            </Flex>
        </Pagina>
    )
}