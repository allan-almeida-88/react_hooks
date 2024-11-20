import { useState } from "react";

export default function useBoolean(valor?: boolean) {
    const [estado, setEstado] = useState(valor ?? false)

    const alterandoEstado = () => {
        setEstado(!estado)
    }

    function ativoTrue() {
        setEstado(true)
    }

    function ativoFalse() {
        setEstado(false)
    }

    const retorno:[boolena, ()=> void, ()=> void, ()=> void] = [estado, alterandoEstado, ativoTrue, ativoFalse]
    return retorno;
    // return [estado, alterandoEstado];
}