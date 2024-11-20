import InputComReferencia from "@/components/formulario/InputComReferencia";
import Botao from "@/components/template/Botao";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useRef } from "react";

export default function imperativeHandle() {
    const referencia = useRef<any>()

    function apagar() {
        referencia.current.apagar();
    }

    function padrao() {
        referencia.current.textoPadrao();
    }

    return (
        <Pagina titulo="Imperative Handle" subtitulo="Usando o useImperativeHandle">
            <Flex col>
                <InputComReferencia ref={referencia} label="Digite texto" valor="" tipo="text"></InputComReferencia>
                <Flex>
                    <Botao texto="Apagar" onClick={apagar}></Botao>
                    <Botao texto="Padrão" onClick={padrao}></Botao>
                </Flex>
            </Flex>
        </Pagina>
    )
}