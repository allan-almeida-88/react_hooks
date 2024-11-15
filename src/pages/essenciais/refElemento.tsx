import Botao from "@/components/template/Botao";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { IconArrowBack, IconArrowLeft } from "@tabler/icons-react";
import { useRef } from "react";

export default function RefElemento() {

    const referencia = useRef<any>()


    const apagar = () => {
        let texto = referencia.current.innerHTML
        let aux = texto.slice(0, texto.length -1)
        referencia.current.innerHTML = aux
    }

    const resetar = () => {
        referencia.current.innerText = 'Texto exemplo'
    }


    // const apagarCaractere = () => {
    //     let tag = document.getElementsByTagName('p')
    //     let manip = tag[0].innerHTML
    //     tag[0].innerHTML = manip.slice(0, tag[0].innerHTML.length - 1)
    // }

    return (
        <Pagina titulo="Referenciando elementos" subtitulo="Manipulando elemento da DOM">
            <p ref={referencia} className="text-gray-300 m-4 text-2xl">Texto exemplo</p>
            <Flex gap={5} center>
                <Botao 
                    tamanho="2xl" cor="bg-sky-500" icone={<IconArrowLeft/>}
                    // onClick={() => {apagarCaractere()}}
                    onClick={() => {apagar()}}
                />

                <Botao 
                    tamanho="2xl" cor="bg-sky-500" icone={<IconArrowBack/>}
                    // onClick={() => {apagarCaractere()}}
                    onClick={() => {resetar()}}
                />

            </Flex>
        </Pagina>
    )
}