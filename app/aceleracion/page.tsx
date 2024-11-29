import PaginaGraficos from "@/components/presentationPage";

export default function Page() {
    const graficos = [
        {
            imagen: "/images/aceleracionY-CL.png",
            titulo: "Aceleración en la componente Y en Caída Libre con rebotes",
            descripcion: "",
        },
        {
            imagen: "/images/aceleracionY-TR.png",
            titulo: "Aceleración en la componente Y en Tiro Lateral",
            descripcion: "",
        },
    ];

    const secciones = [
        {
            titulo: "Explicación del Gráfico CL",
            texto: "Este gráfico muestra la relación entre la aceleración en el eje Y y el tiempo. Previo a cada rebote la aceleración ronda los -1000cm/s2 debido a que describre los tramos donde la pelota esta cayendo, por lo que este valor corresponde al de la gravedad. En los momentos dobde rebota la aceleración se dispara",
        },
        {
            titulo: "Explicación del Gráfico TR",
            texto: "Este gráfico muestra la relación entre la aceleración en el eje Y y el tiempo. Se comporta de igual forma que CL con la diferencia de que hay un único rebote",
        },
    ];

    return (
        <PaginaGraficos
            titulo="Análisis de aceleración"
            graficos={graficos}
            secciones={secciones}
        />
    );
}