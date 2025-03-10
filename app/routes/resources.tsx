import { Navbar } from "~/components/Navbar";
import { Footer } from "./home";
import { InfiniteMovingCards } from "~/components/InfiniteMoving";
import getBasicMetaTags from "~/utils/getBasicMetatags";

export const meta = () =>
  getBasicMetaTags({
    title: "Resources",
    description: "Discover an interesting book, doc or course",
  });

const books = [
  {
    title: "Principles of UX",
    image: "/assets/b-ux.webp",
    description:
      "Conoce 100 principios UX que todo diseñador debe conocer, con respecto al research, ui, ux e incluso business.",
    rank: 4.8,
    size: "medium",
  },
  {
    title: "Visual Thinking",
    image: "/assets/visual.webp",
    description:
      "Apende a transimitir información de forma visual (técnicas de dibujo, estructuras, storytelling, etc).",
    rank: 4,
  },
  {
    title: "Lean UX",
    image: "/assets/lean.webp",
    description:
      "Aplicar algunos pasos de la metodología puede ser muy útil pero otros suenan útopicos por el nivel de madurez del área en muchas empresas e industrias.",
    rank: 4,
    size: "large",
  },
  {
    title: "The Design of Everyday Things",
    image: "/assets/normal.webp",
    description:
      "Apende a transimitir información de forma visual (técnicas de dibujo, estructiras, etc).",
    rank: 4.8,
  },
  {
    title: "Dont make me think",
    image: "/assets/krug.webp",
    description:
      "Un imperdible si quieres conocer las bases de una buena experiencia de usuario.",
    rank: 4.8,
  },
  {
    title: "Haz fácil lo imposible",
    image: "/assets/lean.webp",
    description:
      "Aprende a realizar pruebas de usuario, desde la estructura, herramientas, duración, guión, y más.",
    rank: 5,
  },
  {
    title: "Emotional design",
    image: "/assets/emotional.webp",
    description:
      "El ser humano toma decisiones con base en 3 niveles de procesamiento: visceral, conductual y reflexivo. En el libro concerás cómo funciona cada uno y cómo se relacionan con el diseño.",
    rank: 4.4,
    size: "extralarge",
  },
  {
    title: "El diseño como storytelling",
    image: "/assets/storytelling.webp",
    description:
      "Como seres humanos, nos encantan las historias, el libro te enseña cómo contarlas a través de productos o servicios.",
    rank: 4.8,
    size: "medium",
  },
  {
    title: "Microcopy",
    image: "/assets/copy.webp",
    description:
      "Muy útil si quieres aprender qué es el microcopy y qué lineamientos seguir para definir el copy de una interfaz digital.",
    rank: 5,
    size: "medium",
  },
  {
    title: "Experiencia de Usuario",
    image: "/assets/basics.webp",
    description:
      "Es un libro básico que te enseñá la definición de la experiencia de usuario y todos los conceptos básicos alrededor a ella.",
    rank: 4.8,
    size: "medium",
  },
  {
    title: "SCRUM",
    image: "/assets/scrum.webp",
    description:
      "Con él puedes aprender las bases de la metodología SCRUM y cómo aplicarla en tus proyectos.",
    rank: 4.8,
  },
  {
    title: "Design Sprint",
    image: "/assets/sprint.webp",
    description:
      "Te servirá para addentrarte en la metodología, su historia, algunos casos de éxito y el paso a paso para aplicarla.",
    rank: 4.8,
    size: "medium",
  },
  {
    title: "Ortotipografía para diseñadores",
    image: "/assets/typo.webp",
    description:
      "Aprende reglas gramaticales que no conocías y sobre todo, el uso correcto de signos de puntuación.",
    rank: 4.8,
  },
  {
    title: "Business Model Generation",
    image: "/assets/model.webp",
    description:
      "Este libro explora los distintos tipos de modelo de negocio (cómo son y cómo se aplican), además de mostrarte todo lo necesario para desarrollar el tuyo.",
    rank: 4.8,
    size: "large",
  },
  {
    title: "Más que diseño de experiencia",
    image: "/assets/esther.webp",
    description:
      "Te servirá para dar un recorrido rápido por el mundo de la experiencia de usuario. Desde los conceptos hasta procesos, metologías y ética. ",
    rank: 4.8,
    size: "large",
  },
  {
    title: "Laws UX",
    image: "/assets/laws.webp",
    description:
      "Te permite conocer de forma simple y práctica 10 leyes/reglas que te ayudarán a tomar decisiones al mapear y diseñar experiencias de usuario.",
    rank: 4.8,
    size: "large",
  },
];

const docs = [
  {
    title: "Jakob’s Ten Usability Heuristics",
    image: "https://i.imgur.com/uetu8B8.png",
    rank: 4.8,
    link: "https://firebasestorage.googleapis.com/v0/b/garden-66daa.appspot.com/o/NNg%20Jakobs%20Usability%20Heuristics.pdf?alt=media&token=4427e01f-2ee3-4d7e-8f74-d459b2ebd25e",
  },
  {
    title: "Design Systems Repository",
    image: "https://i.imgur.com/dllmOBM.png",
    description:
      "Apende a transimitir información de forma visual (técnicas de dibujo, estructiras, etc).",
    rank: 4.8,
    link: "https://www.brendago.design/resources#:~:text=Design%20Systems%20Repository-,Ver,-The%20Basics%20of",
  },
  {
    title: "The Basics of User Experience Design by IDEO",
    image: "https://i.imgur.com/qMJcq8U.png",
    description:
      "Apende a transimitir información de forma visual (técnicas de dibujo, estructiras, etc).",
    rank: 4.8,
    link: "https://www.free-ebooks.net/computer-internet/The-Basics-of-User-Experience-Design/pdf?dl&preview",
  },
  {
    title: "The field guide to Human Centered Design",
    image: "https://i.imgur.com/xGWtryB.png",
    description:
      "Apende a transimitir información de forma visual (técnicas de dibujo, estructiras, etc).",
    rank: 4.8,
    link: "https://www.designkit.org/resources/1.html",
  },
  {
    variant: "blog",
    title: "N/N Group",
    image: "https://i.imgur.com/c1cnvxV.png",
    description:
      "Apende a transimitir información de forma visual (técnicas de dibujo, estructiras, etc).",
    rank: 4.8,
    link: "https://www.nngroup.com/articles/",
  },
  {
    variant: "blog",
    title: "UX Planet",
    image: "https://i.imgur.com/TnJciqh.png",
    description:
      "Apende a transimitir información de forma visual (técnicas de dibujo, estructiras, etc).",
    rank: 4.8,
    link: "https://uxplanet.org/tagged/espa%C3%B1ol",
  },
  {
    variant: "blog",
    title: "UX Collective",
    image: "https://i.imgur.com/2JVshun.png",
    description:
      "Apende a transimitir información de forma visual (técnicas de dibujo, estructiras, etc).",
    rank: 4.8,
    link: "https://uxdesign.cc/",
  },
  {
    variant: "blog",
    title: "UI from mars",
    image: "https://i.imgur.com/dO4HsQz.png",
    description:
      "Apende a transimitir información de forma visual (técnicas de dibujo, estructiras, etc).",
    rank: 4.8,
    link: "https://www.uifrommars.com/blog/",
  },
  {
    variant: "blog",
    title: "UI matters",
    image: "https://i.imgur.com/x46ZXJI.png",
    description:
      "Apende a transimitir información de forma visual (técnicas de dibujo, estructiras, etc).",
    rank: 4.8,
    link: "https://www.uxmatters.com/top-articles.php",
  },
];
export default function Resources() {
  return (
    <section className="bg-white overflow-hidden">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 lg:pt-40 px-4 md:px-[5%] xl:px-0 ">
        <div className=" flex  items-center justify-center gap-0 lg:gap-4  h-[112px]">
          <h2 className="text-4xl lg:text-7xl font-title text-center  ">
            Discover an interesting
          </h2>
          <img className="w-16 lg:w-32 mt-0 lg:-mt-8 " src="/cartel2.webp" />
        </div>
      </div>
      <div>
        <h2 className="text-3xl lg:text-4xl font-title text-left max-w-7xl mx-auto mb-6 lg:mb-12 mt-12 lg:mt-32  px-4 md:px-[5%] xl:px-0 ">
          Books
        </h2>
        <InfiniteMovingCards items={books} direction="left" speed="normal" />
      </div>
      <div className="mt-12 lg:mt-20 px-4 md:px-[5%] xl:px-0">
        <h2 className="text-3xl lg:text-4xl font-title text-left max-w-7xl mx-auto mb-6 lg:mb-12  ">
          Blogs & Docs
        </h2>
        <InfiniteMovingCards
          items={docs}
          direction="left"
          speed="normal"
          type="doc"
        />
      </div>
      <div className="mt-12 lg:mt-20 px-4 md:px-[5%] xl:px-0">
        <h2 className="text-4xl font-title text-left max-w-7xl mx-auto mb-12  ">
          Cursos
        </h2>
      </div>
      <div className="flex gap-12 max-w-7xl mx-auto pb-32 overflow-y-scroll">
        <CourseCard
          title="Diseño de Interfaces"
          link="https://ui.fixtergeek.com/"
          image="https://i.imgur.com/fhHswAo.png"
        />
        <CourseCard
          title="Diseño de producto digital con Lean y UX"
          link="https://www.domestika.org/es/courses/1490-diseno-de-producto-digital-con-lean-y-ux"
          image="https://www.brendago.design/images/resources/curso-ux.png"
        />
        <CourseCard
          title="Certificado profesional de Diseño de experiencia del usuario (UX) de Google"
          link="https://grow.google/intl/es-419_us/certificates/ux-design/#?modal_active=none"
          image="https://i.imgur.com/hIOsTlw.png"
        />
      </div>

      <Footer />
    </section>
  );
}

const CourseCard = ({
  title,
  image,
  link,
}: {
  title: string;
  image: string;
  link: string;
}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="w-[260px] group pb-0  group">
        <div className="bg-gray-100 p-0 rounded-4xl relative">
          <img
            className="absolute -top-14  transition-all group-hover:-top-[86px] -left-20 scale-[40%] z-0 "
            src="/loader3.gif"
          />
          <img className="rounded-2xl w-full h-40 relative z-10" src={image} />
        </div>
        <h3 className="text-lg font-title text-center mt-3">{title}</h3>
      </div>
    </a>
  );
};
