import InputFormatado from "@/components/template/InputFormatado";
import Pagina from "@/components/template/Pagina";
import useStateValidado from "@/data/hooks/useStateValidado";

export default function Senha() {
    function validaSenha(senha) {
        let correspondencia = senha.match(/[\d\S]{8,}/)
        return correspondencia?.[0].length === senha.length
    }
    const [senha, setSenha, senhaValida] = useStateValidado("", validaSenha,  )
    let borda;
    if(senha == '') {
        borda = 'border-none'
    } else if(senhaValida) {
        borda = 'border-green-600'
    } else if (!senhaValida) {
        borda = 'border-red-600'
    }

    return (
        <Pagina titulo="Validando senha" subtitulo="Usando o hook para validacao">
            <InputFormatado 
                valor={senha}
                onInput={(e) => setSenha(e.target.value)}
                label="senha"
                tipo="text"
                className={`${borda} border-4 w-30 flex`}
            />
        </Pagina>
    )
}