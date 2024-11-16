import { IconLetterCase, IconLock, IconMathGreater, IconMenu, IconNumber, IconNumbers, IconUsers, IconWindow, IconX } from "@tabler/icons-react";
import { MenuItem } from "../../data/models/MenuItem";
import { MenuSecao } from "../../data/models/MenuSecao";
import Logo from "./Logo";
import MenuPrincipalItem from "./MenuPrincipalItem";
import MenuPrincipalSecao from "./MenuPrincipalSecao";
import Flex from "./Flex";

export default function MenuPrincipal() {
    const secoes = [
        {
            titulo: "Essenciais",
            aberta: false,
            itens: [
                {titulo: 'Contador', url: '/essenciais/contador', tag: 'useState', icone: <IconNumbers />},
                {titulo: 'Votacao', url: '/essenciais/votacao', tag: 'useState', icone: <IconUsers />},
                {titulo: 'Consumindo API', url: '/essenciais/consultaAPI', tag: 'useEffect', icone: <IconUsers />},
                {titulo: 'Maior número', url: '/essenciais/maior', tag: 'useEffect', icone: <IconMathGreater />},
                {titulo: 'Qtd de caracteres', url: '/essenciais/contagemCaracteres', tag: 'useEffect', icone: <IconLetterCase />},
                {titulo: 'useState Vs useRef', url: '/essenciais/stateVsRef', tag: 'useRef', icone: <IconLetterCase />},
                {titulo: 'Manipulando dom useRef', url: '/essenciais/refElemento', tag: 'useRef', icone: <IconLetterCase />},
                {titulo: 'Qtd de caracteres', url: '/essenciais/contagemCaracteresRef', tag: 'useRef', icone: <IconLetterCase />},
            ],
        },
        {
            titulo: "Personalizados",
            aberta: true,
            itens: [
                {titulo: 'Modal', url: '/personalizados/modal', tag: 'useToggle', icone: <IconNumbers />},
                {titulo: 'Tamanho Janela', url: '/personalizados/tamanhoJanela', tag: 'useSizeWindow', icone: <IconWindow />},
                {titulo: 'Validando senha', url: '/personalizados/senha', tag: 'useStateValidado', icone: <IconLock />},
            ]
        },
    ];
    const mini = false;
    function renderizarSecoes() {
        return secoes.map((secao: MenuSecao) => (
            <MenuPrincipalSecao key={secao.titulo} titulo={secao.titulo} mini={mini} aberta={secao.aberta}>
                {renderizarItens(secao)}
            </MenuPrincipalSecao>
        ));
    }

    function renderizarItens(secao: MenuSecao) {
        return secao.itens.map((item: MenuItem) => (
            <MenuPrincipalItem
                key={`${item.titulo}-${item.tag}`}
                icone={item.icone}
                titulo={item.titulo}
                tag={item.tag}
                url={item.url}
                mini={mini}
            />
        ));
    }

    return (
        <aside
            className={`
            flex flex-col overflow-y-scroll overflow-x-hidden
            bg-black shadow-md shadow-zinc-800
            scrollbar-thumb-zinc-700 scrollbar-track-zinc-800 
            scrollbar-thin
            ${mini ? "items-center w-[130px]" : "w-[370px]"}
        `}
        >
            <Flex center className="m-7">
                {!mini && <Logo />}
            </Flex>
            <nav className="flex flex-col gap-4 m-7">{renderizarSecoes()}</nav>
        </aside>
    );
}
