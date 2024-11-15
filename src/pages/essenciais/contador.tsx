import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

export default function Contador() {
    // let count = 10;
    const [numero, setNumero] = useState(0)
    return (
        <Pagina titulo="Contador" subtitulo="Entendento o que é um estado">
            <Display texto={numero}></Display>
            <Flex gap={5}>
                <Botao 
                    redondo={true}
                    icone={<IconMinus size={40}/>}
                    tamanho={'2xl'}
                    cor="bg-blue-500"
                    onClick={() => {setNumero(numero - 1)}}
                ></Botao>
                <Botao 
                    redondo={true}
                    texto="0"
                    tamanho={'2xl'}
                    cor="bg-red-500"
                    onClick={() => {setNumero(0)}}
                ></Botao>
                <Botao 
                    redondo={true}
                    icone={<IconPlus size={40}/>}
                    tamanho={'2xl'}
                    cor="bg-green-500"
                    onClick={() => {setNumero(numero + 1)}}
                ></Botao>
                
            </Flex>
        </Pagina>
    )
}