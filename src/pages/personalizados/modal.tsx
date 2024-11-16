import Botao from "@/components/template/Botao";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import useToggle from "@/data/hooks/useToggle";
import { IconX } from "@tabler/icons-react";

export default function Modal() {
    const [toggle , setToggle] = useToggle()
    return (
        <Pagina titulo="Hook personalizado" subtitulo="usando o hook useToggle">
            <Botao texto="Abrir" cor="bg-cyan-500" onClick={() => setToggle(true)}/>
            {toggle && (
                <Flex center col className={`w-80 h-80 bg-gray-500 text-white text-2xl p-4 m-4 rounded-md`}>
                    <Botao onClick={() => setToggle(false)} cor="bg-red-700" tamanho="xl" icone={<IconX />} />
                    <h1 className="mt-5">Click no X para fechar</h1>
                </Flex>
            )}
        </Pagina>
    )
}