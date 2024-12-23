import { IconForms, IconLetterCase, IconLock, IconMathGreater, IconMenu, IconNumber, IconNumbers, IconPin, IconUsers, IconWindow, IconX } from "@tabler/icons-react";
export const secoes = [
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
        aberta: false,
        itens: [
            {titulo: 'Modal', url: '/personalizados/modal', tag: 'useToggle', icone: <IconNumbers />},
            {titulo: 'Tamanho Janela', url: '/personalizados/tamanhoJanela', tag: 'useSizeWindow', icone: <IconWindow />},
            {titulo: 'Validando senha', url: '/personalizados/senha', tag: 'useStateValidado', icone: <IconLock />},
        ]
    },
    {
        titulo: "Contexto",
        aberta: false,
        itens: [
            {titulo: 'Loja', url: '/contexto/loja', tag: 'useContext', icone: <IconNumbers />},
            
        ]
    },
    {
        titulo: "Outros",
        aberta: true,
        itens: [
            {titulo: 'useMemo1', url: '/outros/memoizacao', tag: 'useMemo', icone: <IconPin />},
            {titulo: 'Memoizando funcoes', url: '/outros/memoizandoFuncoes', tag: 'useCallback', icone: <IconPin />},
            {titulo: 'Imperative Handle', url: '/outros/formularioImperativeHandle', tag: 'useImperativeHandle', icone: <IconForms />}
        ]
    }
];

export default secoes