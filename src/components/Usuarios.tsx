// import {useEffect, useState, useRef} from 'react'
// import { reqResApi } from '../api/reqRes';
import { useUsuarios } from '../hooks/useUsuarios';
import { ReqResListado, Usuario } from '../interfaces/reqResInterface';

export const Usuarios = () => {

    const { usuarios, paginaAnterior, paginaSiguiente } = useUsuarios()

    // const [usuarios, setUsuarios] = useState<Usuario[]>([])

    // const paginaRef = useRef(1)

    // useEffect(() => {
    //     cargarUsuarios()
    // }, [])

    // const cargarUsuarios = () => {
    //     reqResApi.get<ReqResListado>('/users', {params:{page: paginaRef.current}})
    //     .then(response => {
    //         setUsuarios(response.data.data)
    //         paginaRef.current++;
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }

    const renderItem = (usuario: Usuario) => {
        return(
            <tr key={usuario.id.toString()}>
                <th>
                    <img src={usuario.avatar} alt={usuario.first_name} style={{width: 35, borderRadius: 100}}/>
                </th>
                <th>{usuario.first_name} {usuario.last_name}</th>
                <th>{usuario.email}</th>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios:</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map( renderItem )}
                    {/* {usuarios.map( usuario => renderItem(usuario))} */}
                </tbody>
            </table>
            <button className='btn btn-primary' onClick={paginaAnterior}>Anteriores</button>
            <button className='btn btn-primary' onClick={paginaSiguiente}>Siguientes</button>
        </>
    )
}
