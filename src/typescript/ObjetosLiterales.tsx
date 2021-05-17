//INTERFACES
interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
    // direccion: {
    //     pais: string;
    //     casaNo: number;
    // }
}

interface Direccion{
    pais: string;
    casaNo: number;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Techi',
        edad: 30,
        direccion: {
            pais: 'España',
            casaNo: 615
        }
    }

    return (
        <>
            <h3>Objetos Literales</h3>
            {JSON.stringify(persona)}
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    )
}
