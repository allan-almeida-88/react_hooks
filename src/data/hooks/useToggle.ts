import { useState } from "react";

export default function useToggle(valor?: boolean) {
    const [estado, setEstado] = useState(valor ?? false)

    const alterandoEstado = () => {
        setEstado(!estado)
    }

    return [estado, alterandoEstado];
}