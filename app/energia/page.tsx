import PaginaGraficos from "@/components/presentationPage";

export default function Page() {
    const graficos = [
        {
            imagen: "/components/images/beerpong1.jpg",
            titulo: "Beer Pong - Un análisis del pique de la pelota",
            descripcion: "Explora las leyes fundamentales del movimiento y la fuerza.",
        },
        {
            imagen: "/components/images/beerpong2.jpg",
            titulo: "Integrantes",
            descripcion: "Los integrantes de este proyecto son Marcos Costantino, Agustin Galie, Catalina Dumrauf y Thomas Mintzer.",
        },
    ];

    const secciones = [
        {
            titulo: "Explicación del Gráfico",
            texto: "Este gráfico muestra la relación entre diferentes variables físicas. Observa cómo cambian los valores a lo largo del tiempo o en relación con otras variables.",
        },
        {
            titulo: "Aplicaciones Prácticas",
            texto: "Entender estos gráficos es crucial para resolver problemas en física y comprender fenómenos del mundo real. Piensa en cómo podrías aplicar este conocimiento en situaciones cotidianas.",
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