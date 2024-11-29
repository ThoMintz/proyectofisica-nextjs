import PaginaGraficos from "@/components/presentationPage";

export default function Page() {
    const graficos = [
        {
            imagen: "/images/posicionY-CL.png",
            titulo: "Posición en la componente Y en Caída Libre con rebotes",
            descripcion: "Por cada rebote describe una parábola",
        },
        {
            imagen: "/images/posicionY-TR.png",
            titulo: "Posición en la componente Y en Tiro Lateral",
            descripcion: "Al igual que en Caída Libre, describe una parábola",
        },
    ];
    const secciones = [
        {
            titulo: "Explicación del Gráfico CL",
            texto: "Este gráfico muestra la relación entre el tiempo y la posición en el eje Y, podemos ver que en cada rebote describe una parábola con un menor máximo que el anterior. Esto se debe a la pérdida de energía mecánica ocurrida en cada rebote.",
        },
        {
            titulo: "Explicación del Gráfico TR",
            texto: "Al igual que en el caso de Caída Libre, este gráfico muestra la relación entre el tiempo y la posición en el eje Y, describiendo una parábola",
        },
    ];

    return (
        <PaginaGraficos
            titulo="Análisis de la posición"
            graficos={graficos}
            secciones={secciones}
        />
    );
}