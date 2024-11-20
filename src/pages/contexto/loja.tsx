import AdicionarProduto from "@/components/loja/AdicionarProduto";
import Carrinho from "@/components/loja/Carrinho";
import FinalizarCompra from "@/components/loja/FinalizarCompra";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { createContext, useState } from "react";

export let Contexto = createContext({} as any)

export default function Loja() {
    
    const [carrinho, setCarrinho] = useState<any>([])
    const obj = {carrinho, 
        setCarrinho, 
        total() {
            return carrinho.reduce((acc, produto) => acc + +produto.preco, 0);
            }
        }
    return (
        <Contexto.Provider value={obj}>
            <Pagina titulo="Loja" subtitulo="useContext">
                <Flex col gap={4}>
                    <Flex gap={4}>
                        <AdicionarProduto />
                        <FinalizarCompra />
                    </Flex>
                    <Carrinho />
                </Flex>
            </Pagina>
        </Contexto.Provider>
    )
}