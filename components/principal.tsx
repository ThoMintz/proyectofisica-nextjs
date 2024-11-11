'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Lightbulb, ChevronLeft, ChevronRight } from "lucide-react"

const temasCarrusel = [
    {
        imagen: "/images/beerpong1.jpg",
        titulo: "Beer Pong - Un análisis del pique de la pelota",
        descripcion: "Explora las leyes fundamentales del movimiento y la fuerza.",
        cta: "Aprender más",
        enlace: "/mecanica"
    },
    {
        imagen: "/images/beerpong2.jpg",
        titulo: "Integrantes",
        descripcion: "Los integrantes de este proyecto son Marcos Costantino, Agustin Galie, Catalina Dumrauf y Thomas Mintzer",
        cta: "Explorar",
        enlace: "/termodinamica"
    },
]

export default function PaginaFisica() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % temasCarrusel.length)
        }, 5000) // Cambia de diapositiva cada 5 segundos

        return () => clearInterval(timer)
    }, [])

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % temasCarrusel.length)
    }

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + temasCarrusel.length) % temasCarrusel.length)
    }

    return (
        <div className="min-h-screen bg-gray-100">

            <main>
                <div className="relative h-[600px] overflow-hidden">
                    {temasCarrusel.map((tema, index) => (
                        <div
                            key={index}
                            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                                index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <Image
                                src={tema.imagen}
                                alt={tema.titulo}
                                layout="fill"
                                objectFit="cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                                <div className="text-center text-white">
                                    <h2 className="text-4xl font-bold mb-4">{tema.titulo}</h2>
                                    <p className="text-xl mb-8">{tema.descripcion}</p>
                                    <Link href={tema.enlace} className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors">
                                        {tema.cta}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                    <button
                        onClick={goToPrevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-gray-800 hover:bg-opacity-75 transition-all"
                        aria-label="Diapositiva anterior"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={goToNextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-gray-800 hover:bg-opacity-75 transition-all"
                        aria-label="Siguiente diapositiva"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center">

                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                            <Lightbulb className="h-12 w-12 text-yellow-500 mb-4" />
                            <h2 className="text-xl font-semibold mb-2 text-black">Motivación detrás del estudio</h2>
                            <p className="text-gray-600 text-center mb-4">Practica con problemas desafiantes y aprende estrategias de resolución.</p>

                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}