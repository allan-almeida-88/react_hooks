import InputFormatado from "@/components/formulario/InputFormatado";
import BotaoMemoizado from "@/components/template/BotaoMemoizado";

import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useCallback, useState } from "react";

export default function() {
    const [qtd, setQtd] = useState(0)

    const finalizar = useCallback((e) => {
        e.preventDefault()
        window.alert('Compra finalizada')
        setQtd(0)
    }, [])
   
    return (
        <Pagina titulo="Memoizando funções" subtitulo="Usando useCallback">
            <Display texto={"Quantos produtos você quer?"} />
            <form>
                <Flex col center>
                    <InputFormatado valor={qtd} tipo="number"
                    onInput={(e) => setQtd(+e.target.value)}></InputFormatado>
                    <BotaoMemoizado texto="Confirmar" onClick={finalizar} ></BotaoMemoizado>
                </Flex>
            </form>

        </Pagina>
    )
}