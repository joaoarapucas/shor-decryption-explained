import { CardComFoto } from "../../../componentes/CardComFoto/CardComFoto"


export function PrincipaisCientistas(){

    const cientistas = [
        {
            foto: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Max_Planck_1933.jpg",
            titulo: "Max Planck",
            subtitulo: "Quantização da energia"
        },
        {
            foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Albert_Einstein_Head_cleaned.jpg/969px-Albert_Einstein_Head_cleaned.jpg",
            titulo: "Albert Einstein",
            subtitulo: "Efeito fotoelétrico"
        },{
            foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Niels_Bohr_-_LOC_-_ggbain_-_35303.jpg/250px-Niels_Bohr_-_LOC_-_ggbain_-_35303.jpg",
            titulo: "Niels Bohr",
            subtitulo: "Modelo atômico quântico"
        },{
            foto: "https://m.media-amazon.com/images/M/MV5BYzVmNTgwYTItOTgxNy00MGE5LTgyM2ItNGE3NmY1MzhlNmZhXkEyXkFqcGc@._V1_.jpg",
            titulo: "Werner Heisemberg",
            subtitulo: "Princípio da incerteza"
        },{
            foto: "https://fotos.web.sapo.io/i/B781738d5/21530330_r9D9d.jpeg",
            titulo: "Erwin Schrödinger",
            subtitulo: "Equação da onda"
        },
    ]

    return(
        <>
            {cientistas.map(c => (
                <CardComFoto img={c.foto} titulo={c.titulo} subtitulo={c.subtitulo}/>
            )) }
        </>
    )
}