import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useState } from "react";

export default function Votacao() {
    const [dados, setDados] = useState({verde: 0, roxo: 0})

    function votosVerde() {
        setDados((dadosAtualizados) => {
            return {
                verde: dadosAtualizados.verde + 1,
                roxo: dadosAtualizados.roxo
            }
        })
    }

    function votosRoxo() {
        setDados((dadosAtualizados) => {
            return {
                verde: dadosAtualizados.verde,
                roxo: dadosAtualizados.roxo + 1
            }
        })
    }

    function zerarVotos() {
        setDados(() => {
            return {
                verde: 0,
                roxo: 0
            }
        })
    }
    return (
        <Pagina titulo="Votacao" subtitulo="Usando estado com Objeto">
            <Flex col center>
                <Display 
                    texto={'Qual é a melhor cor?'}
                    textoComplementar={`Verde: ${dados.verde} | Roxo: ${dados.roxo}`}
                />
                <Flex gap={5}>
                    <Botao texto="Verde" cor="bg-green-600" redondo tamanho="2xl" onClick={() => {votosVerde()}}></Botao>
                    <Botao texto="Roxo" cor="bg-purple-600" redondo tamanho="2xl" onClick={() => {votosRoxo()}}></Botao>
                </Flex>
            </Flex>
            <Botao texto="Zerar" cor="bg-gray-400" tamanho="lg" onClick={() => zerarVotos()}></Botao>
        </Pagina>
    )
}