import { Navbar } from "~/components/Navbar";
import { Footer } from "./home";
import { InfiniteMovingCards } from "~/components/InfiniteMoving";
import { useEffect } from "react";
import getBasicMetaTags from "~/utils/getBasicMetaTags";

export const meta = () =>
  getBasicMetaTags({
    title: "Libros de Diseño UI",
    description: "Descubre los mejores libros de diseño de interfaces de usuario",
  });

const uiBooks = [
  {
    title: "Refactoring UI",
    image: "/assets/refactoring-ui.webp",
    description:
      "Una guía práctica para mejorar tus habilidades de diseño visual sin necesidad de ser un experto. Incluye tips concretos sobre tipografía, color, espaciado y jerarquía.",
    rank: 5,
    size: "large",
  },
  {
    title: "The Design of Everyday Things",
    image: "/assets/normal.webp",
    description:
      "Un clásico que explora los principios fundamentales del buen diseño. Aprende cómo los objetos cotidianos comunican su uso a través del diseño.",
    rank: 4.8,
    size: "medium",
  },
  {
    title: "Don't Make Me Think",
    image: "/assets/krug.webp",
    description:
      "Una guía esencial sobre usabilidad web. Aprende a diseñar interfaces intuitivas que los usuarios puedan navegar sin esfuerzo.",
    rank: 4.8,
  },
  {
    title: "Designing Interfaces",
    image: "/assets/designing-interfaces.webp",
    description:
      "Un catálogo exhaustivo de patrones de diseño de UI. Soluciones probadas para problemas comunes de diseño de interfaces.",
    rank: 4.6,
    size: "large",
  },
  {
    title: "Microcopy",
    image: "/assets/copy.webp",
    description:
      "Domina el arte del microcopy en interfaces digitales. Aprende cómo las palabras correctas mejoran la experiencia del usuario.",
    rank: 5,
    size: "medium",
  },
  {
    title: "The Elements of Typographic Style",
    image: "/assets/typo-elements.webp",
    description:
      "La biblia de la tipografía. Principios atemporales sobre el uso correcto de las fuentes en diseño.",
    rank: 4.9,
    size: "large",
  },
  {
    title: "Ortotipografía para diseñadores",
    image: "/assets/typo.webp",
    description:
      "Domina las reglas gramaticales y el uso correcto de signos de puntuación en tus diseños en español.",
    rank: 4.8,
  },
  {
    title: "Laws of UX",
    image: "/assets/laws.webp",
    description:
      "10 leyes psicológicas fundamentales que todo diseñador debe conocer para crear mejores interfaces de usuario.",
    rank: 4.8,
    size: "large",
  },
  {
    title: "Emotional Design",
    image: "/assets/emotional.webp",
    description:
      "Aprende cómo el diseño afecta las emociones humanas en tres niveles: visceral, conductual y reflexivo.",
    rank: 4.4,
    size: "extralarge",
  },
  {
    title: "Principles of UI Design",
    image: "/assets/b-ux.webp",
    description:
      "100 principios esenciales que todo diseñador de UI debe conocer. Cubre research, interfaz, experiencia y negocio.",
    rank: 4.8,
    size: "medium",
  },
  {
    title: "Design Systems Handbook",
    image: "/assets/system.webp",
    description:
      "Aprende a crear y mantener sistemas de diseño escalables que mantengan consistencia visual en productos digitales.",
    rank: 4.7,
    size: "medium",
  },
  {
    title: "Visual Grammar",
    image: "/assets/visual.webp",
    description:
      "Domina los principios visuales fundamentales: composición, contraste, balance y ritmo en el diseño de interfaces.",
    rank: 4.5,
  },
];

export default function Libros() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="bg-white overflow-hidden">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-16 lg:pt-40 px-4 md:px-[5%] xl:px-0">
        <div className="flex flex-col md:flex-row items-center justify-center gap-1 lg:gap-4 h-[112px]">
          <h2 className="text-4xl lg:text-7xl font-title text-center">
            Libros de Diseño UI
          </h2>
          <img
            className="w-16 lg:w-32 mt-0 lg:-mt-8"
            src="/cartel2.webp"
            alt="libros cartel"
          />
        </div>
        <p className="text-center text-lg lg:text-xl mt-6 text-gray-600 max-w-3xl mx-auto">
          Una colección curada de los mejores libros para aprender y dominar el diseño de interfaces de usuario
        </p>
      </div>

      <div className="mt-12 lg:mt-32">
        <h2 className="text-3xl lg:text-4xl font-title text-left max-w-7xl mx-auto mb-6 lg:mb-12 px-4 md:px-[5%] xl:px-0">
          Libros Esenciales
        </h2>
        <InfiniteMovingCards items={uiBooks} direction="left" speed="normal" />
      </div>

      <div className="mt-20 lg:mt-32 pb-32 px-4 md:px-[5%] xl:px-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-title mb-8">
            Por qué leer sobre diseño UI
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InfoCard
              title="Fundamentos sólidos"
              description="Los libros proporcionan una base teórica profunda que complementa la práctica del diseño de interfaces."
            />
            <InfoCard
              title="Mejores prácticas"
              description="Aprende de expertos reconocidos en la industria y descubre patrones de diseño probados."
            />
            <InfoCard
              title="Evolución constante"
              description="Mantente actualizado con las últimas tendencias y técnicas en diseño de interfaces de usuario."
            />
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

const InfoCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all">
      <h3 className="text-xl font-title mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
