import { createContext, useEffect, useState } from "react";
import secoesMenu from "../constants/secoesMenu";
import useBoolean from "../hooks/useBoolean";
import useTamanhoJanela from "../hooks/useTamanhoJanela";
import { useRouter } from "next/router";
import { MenuSecao } from "../models/MenuSecao";

const ContextoMenu = createContext({} as any)

export function MenuProvider(props) {
    const [mini, setToggleMini, ativoTrue, ativoFalse] = useBoolean(false);
    const [secoes, setSecoes] = useState<any>(secoesMenu)
    let tamanho = useTamanhoJanela();

    const router = useRouter();
    // const ativo = url === router.asPath;
    
    useEffect(() => {
        if((tamanho == 'md' || tamanho == 'sm') && mini == false) {
            ativoTrue()
        } 
        if((tamanho == 'lg' || tamanho == 'xl' || tamanho == 'xl2') && mini == true) {
            ativoFalse()
        }
    }, [tamanho])

    useEffect(() => {
        setSecoes(() => selecionarItem(router.asPath))
    }, [router.asPath])

    function alternarSecao(secaoSelecionada: MenuSecao) {
        let novasSecoes = secoes.map(secao => {
            if(secao.titulo == secaoSelecionada.titulo) {
                return {...secao, aberta: !secao.aberta}
            } else {
                return secao
            }
        })
        setSecoes(() => novasSecoes)
    }

    function selecionarItem(url:string) {
        let novasSecoes = secoes.map((secao) => {
            let novosItem = secao.itens.map(item=> {
                return {...item, selecionado: item.url == url}
            })
            return {...secao, itens: novosItem}
        })

        return novasSecoes
    }

    return (
        <ContextoMenu.Provider value={{secoes, mini, setToggleMini, alternarSecao}}>
            {props.children}
        </ContextoMenu.Provider>
    )
}


export default ContextoMenu