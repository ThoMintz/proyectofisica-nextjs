import PaginaGraficos from "@/components/presentationPage";

export default function Page() {
    const graficos = [
        {
            imagen: "/images/energia-CL.png",
            titulo: "Energía Cinética, Potencial y Mecánica en Caída Libre con rebotes",
            descripcion: "",
        },
    ];

    const secciones = [
        {
            titulo: "Explicación del Gráfico",
            texto: "Este gráfico muestra la relación entre la energía cinética, potencial y mecánica en función del tiempo. Podemos apreciar que a cada rebote la energía mecánica se va perdiendo, esto ocurre debido a que el coeficiente de restitución produce un choque inelástico. A su vez, como toda la energía potencial se va transformando en cinética a medida que la pelota cae",
        },
    ];

    return (
        <PaginaGraficos
            titulo="Análisis de energía"
            graficos={graficos}
            secciones={secciones}
        />
    );
}