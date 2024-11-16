import Display from "@/components/template/Display";
import Pagina from "@/components/template/Pagina";
import useTamanhoJanela from "@/data/hooks/useTamanhoJanela";

export default function TamanhoJanela() {

    const tamanho = useTamanhoJanela();

    console.log(tamanho)
    return (
        <Pagina titulo="Qual é o tamanho da página?" subtitulo="usando um hook personalizado">
            <Display texto={`Tamanho da página ${tamanho}`}/>
            <div className={`
                w-40 h-40
                sm:bg-blue-500
                md:bg-pink-500
                lg:bg-green-500
                xl:bg-purple-500
                xl2:bg-orage-500
                `}></div>
        </Pagina>
    )
}