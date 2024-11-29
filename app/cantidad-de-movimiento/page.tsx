import PaginaGraficos from "@/components/presentationPage";

export default function Page() {
    const graficos = [
        {
            imagen: "/images/cantMovimiento-CL.png",
            titulo: "Cantidad de movimiento en ambas componentes en Caída Libre con rebotes",
            descripcion: "",
        },
        {
            imagen: "/images/cantMovimiento-TR.png",
            titulo: "Cantidad de movimiento en ambas componentes en Tiro Lateral",
            descripcion: "",
        },
    ];

    const secciones = [
        {
            titulo: "Explicación del Gráficos de CL",
            texto: "Estos gráficos muestran la relación entre la cantidad de movimiento en el eje X y el tiempo, asi como el eje Y con el tiempo. Podemos obversvar que hay poca variación en la cantidad de movimiento en el eje X debido a que los cambios en cantidad de movmiento ocurren en el eje Y. Hay una correspondencia con la forma del gráfico de velocidad en Y",
        },
        {
            titulo: "Explicación de los Gráficos de TR",
            texto: "Estos gráficos muestran la relación entre la cantidad de movimiento en el eje X y el tiempo, asi como el eje Y con el tiempo. Tenemos un comportamiento similar al expresado en las gráficas de Caída libre con rebotes, sin embargo vale la pena aclarar que existe una mayor variación en la cantidad de movmiento en el eje X en este caso debido a que la pelota es lanzada de forma lateral.",
        },
    ];

    return (
        <PaginaGraficos
            titulo="Análisis de cantidad de movimiento"
            graficos={graficos}
            secciones={secciones}
        />
    );
}