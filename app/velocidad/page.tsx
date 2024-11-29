import PaginaGraficos from "@/components/presentationPage";

export default function Page() {
    const graficos = [
        {
            imagen: "/images/velocidadY-CL.png",
            titulo: "Velocidad en la componente Y en Caída Libre con rebotes",
            descripcion: "",
        },
        {
            imagen: "/images/velocidadY-TR.png",
            titulo: "Velocidad en la componente Y en Tiro Lateral",
            descripcion: "",
        },
    ];

    const secciones = [
        {
            titulo: "Explicación del Gráfico CL",
            texto: "Este gráfico muestra la relación entre la velocidad en el eje Y y el tiempo. Podemos ver que es la velocidad es descripta por una función lineal donde la velocidad va decreciendo a medida que la pelota va cayendo. En el momento del rebote esta velocidad se dispara en sentido positivo. A cada rebote va perdiendo velocidad debido a la pérdida de energía mecánica.",
        },
        {
            titulo: "Explicación del Gráfico TR",
            texto: "Este gráfico muestra la relación entre la velocidad en el eje Y y el tiempo. Se comporta de igual forma que CL con la diferencia de que hay un único rebote.",
        },
    ];

    return (
        <PaginaGraficos
            titulo="Análisis de la velocidad"
            graficos={graficos}
            secciones={secciones}
        />
    );
}