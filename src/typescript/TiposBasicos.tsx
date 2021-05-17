
export const TiposBasicos = () => {


    const nombre: string = 'Teresa';
    const edad: number = 30;
    const estaActivo: boolean = true;
    const poderes: string[] = ['Velocidad', 'Volar', 'Respirar en el agua']
  

    return (
        <>
            <h3>Tipos básicos</h3>
            { nombre }, { edad }, { (estaActivo) ? 'Activo' : 'No está activo'}
            <br/>
            { poderes.join(', ') }
        </>
    )
}
