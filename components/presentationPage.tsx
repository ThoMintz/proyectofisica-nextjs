'use client'

import {useState, useEffect} from 'react'
import Image from "next/image"
import {ChevronLeft, ChevronRight} from "lucide-react"

type GraficoItem = {
    imagen: string;
    titulo: string;
    descripcion: string;
}

type PaginaGraficosProps = {
    titulo: string;
    graficos: GraficoItem[];
    secciones : Secciones[];
}

type Secciones = {
    titulo : string,
    texto : string
}

export default function PaginaGraficos({titulo, graficos, secciones}: PaginaGraficosProps) {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % graficos.length)
        }, 5000) // Cambia de diapositiva cada 5 segundos

        return () => clearInterval(timer)
    }, [graficos.length])

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % graficos.length)
    }

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + graficos.length) % graficos.length)
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-gray-800 text-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold">{titulo}</h1>
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="relative w-full max-w-3xl mx-auto h-[400px] overflow-hidden rounded-lg shadow-lg">
                    {graficos.map((grafico, index) => (
                        <div
                            key={index}
                            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                                index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <Image
                                src={grafico.imagen}
                                alt={grafico.titulo}
                                layout="fill"
                                objectFit="contain"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                                <h2 className="text-xl font-bold mb-2">{grafico.titulo}</h2>
                                <p className="text-sm">{grafico.descripcion}</p>
                            </div>
                        </div>
                    ))}
                    <button
                        onClick={goToPrevSlide}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-gray-800 hover:bg-opacity-75 transition-all"
                        aria-label="Gráfico anterior"
                    >
                        <ChevronLeft size={24}/>
                    </button>
                    <button
                        onClick={goToNextSlide}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-gray-800 hover:bg-opacity-75 transition-all"
                        aria-label="Siguiente gráfico"
                    >
                        <ChevronRight size={24}/>
                    </button>
                </div>

                <div className="mt-8 flex flex-row items-center gap-6">
                    {secciones.map((seccion, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4 text-black">{seccion.titulo}</h2>
                            <p className="text-gray-600">{seccion.texto}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}