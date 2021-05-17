import {useEffect, useState, useRef} from 'react'
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqResInterface';


export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    const paginaRef = useRef(1)

    useEffect(() => {
        cargarUsuarios()
    }, [])

    const cargarUsuarios = () => {
        reqResApi.get<ReqResListado>('/users', {params:{page: paginaRef.current}})
        .then(response => {
            setUsuarios(response.data.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const paginaSiguiente = () => {
        paginaRef.current ++
        cargarUsuarios()
    }

    const paginaAnterior = () => {
        if(paginaRef.current > 1){
            paginaRef.current --;
            cargarUsuarios()
        }
    }

    return{
        usuarios,
        paginaSiguiente,
        paginaAnterior
    }


}

