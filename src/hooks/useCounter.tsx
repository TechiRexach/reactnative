import { useState } from 'react'

export const useCounter = ( numeroInicial: number = 0 ) => {

    const [valor, setValor] = useState(numeroInicial)

    const acumular = (numero: number) => {
        setValor(valor + numero);
    }

    return {
        // valor: valor,
        // acumular: acumular

        valor,
        acumular
    }

}
