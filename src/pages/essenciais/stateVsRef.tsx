import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useRef, useState } from "react";

export default function StateVsRef() {
    const [estado, setEstado] = useState(0)
    const referencia = useRef(0)

    const alterandoRef = () => {
        referencia.current = referencia.current + 1
    } 
    return (
        <Pagina titulo="useState Vs useRef" subtitulo="Utilizando useRef">
            <Display texto={`S+: ${estado} | R+: ${referencia.current}`}  />
            <Flex gap={5} center>
                <Botao texto="S+" onClick={() => setEstado(estado + 1)} cor="bg-blue-500"/>
                <Botao texto="R+" onClick={() => alterandoRef()} cor="bg-green-500"/>
            </Flex>
        </Pagina>
    )
}