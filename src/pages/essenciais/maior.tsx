import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useEffect, useState } from "react";

export default function Maior() {

    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [maior, setMaior] = useState(0)

    const calcMaiorNumero = () => {
        return n1 > n2 ? n1 : n2
    }

    useEffect(() => {
        setMaior(calcMaiorNumero)
    }, [n1, n2])

    useEffect(() => {
        console.log(`N1: ${n1}, N2: ${n2}, Maior: ${maior}`)
    }, [n1, n2, maior])


    return (
        <Pagina>
            <Display texto={`Número 1: ${n1} | Número 2: ${n2}`} textoComplementar={`O Maior número é ${maior}`} />
            <Flex gap={5}>
                <Botao 
                    redondo 
                    tamanho="2xl" 
                    cor="bg-red-500" texto="N1"
                    onClick={() => setN1(n1 + 1)}
                />
                <Botao 
                    redondo 
                    tamanho="2xl" 
                    cor="bg-green-500" texto="N2"
                    onClick={() => setN2(n2 + 1)}
                />
            </Flex>
        </Pagina>
    );
}