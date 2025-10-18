import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

const projects = [
  {
    slug: "proje-1",
    images: ["/pics/İç render.png"],
    title: "Modern ve Ferah İç Mekan",
    summary: "Geniş pencereleri, minimalist mobilyaları ve doğal ışık kullanımıyla ferah ve modern bir yaşam alanı sunan bu iç mekan projesi, konfor ve estetiği bir araya getiriyor.",
  },
  {
    slug: "proje-2",
    images: ["/pics/RENDER ÖN CEPHE.jpeg"],
    title: "Ön Cephe Tasarımı",
    summary: "Binanın kimliğini yansıtan modern ve şık bir ön cephe tasarımı. Ahşap ve betonun uyumuyla dikkat çeken bu proje, estetik ve fonksiyonelliği buluşturuyor.",
  },
  {
    slug: "proje-3",
    images: ["/pics/RENDER TEK CEPHE.jpeg"],
    title: "Minimalist Tek Cephe",
    summary: "Sade ve modern bir anlayışla tasarlanan bu tek cephe projesi, minimalist çizgileri ve net detaylarıyla öne çıkıyor.",
  },
  {
    slug: "proje-4",
    images: ["/pics/RENDER YAN CEPHE.jpeg"],
    title: "Estetik Yan Cephe",
    summary: "Binanın yan cephesinde kullanılan modern materyaller ve geometrik formlar, yapıya dinamik ve estetik bir görünüm kazandırıyor.",
  },
  {
    slug: "proje-5",
    images: ["/pics/tek cephe render.jpeg"],
    title: "Konut Projesi Ön Görünüm",
    summary: "Modern bir konut projesinin ön cephesini yansıtan bu render çalışması, projenin genel estetiği ve mimari anlayışı hakkında ipuçları veriyor.",
  },
];

export function Projects() {
  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {projects.map((project, index) => (
        <ProjectCard
          priority={index < 2}
          key={project.slug}
          href={`/projects/${project.slug}`}
          images={project.images}
          title={project.title}
          description={project.summary}
          content=""
          avatars={[]}
          link=""
        />
      ))}
    </Column>
  );
}
