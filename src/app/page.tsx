import {
  Heading,
  Text,
  Button,
  Column,
  Row,
  Schema,
  Meta,
  Carousel,
  Grid,
  Icon,
} from "@once-ui-system/core";
import { home, about, person, baseURL, services } from "@/resources";
import { FaTruck, FaCube, FaIndustry } from 'react-icons/fa';

const sliderImages = [
  "/pics/RENDER ÖN CEPHE.jpeg",
  "/pics/RENDER TEK CEPHE.jpeg",
  "/pics/RENDER YAN CEPHE.jpeg",
  "/pics/tek cephe render.jpeg",
];

const keyServices = [
  {
    title: "HAZIR BETON",
    icon: <FaTruck size={32} />,
  },
  {
    title: "YTONG GAZ BETON",
    icon: <FaCube size={32} />,
  },
  {
    title: "PORTLAND ÇİMENTO",
    icon: <FaIndustry size={32} />,
  },
];

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column fillWidth gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Row fillWidth style={{ height: 'calc(100vh - 80px)'}}>
        <Carousel
          fillWidth
          fillHeight
          items={sliderImages.map(image => ({ slide: image, alt: home.title }))}
          style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}
        />
        <Column 
          position="absolute" 
          fillWidth 
          fillHeight 
          horizontal="center" 
          vertical="center" 
          zIndex={1}
        >
          <Column 
            style={{ 
              background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)',
              backdropFilter: 'blur(10px)',
            }}
            padding="xl" 
            radius="l" 
            gap="m" 
            horizontal="center"
          >
            <Heading align="center" variant="display-strong-xl">{home.headline}</Heading>
            <Text align="center" variant="heading-default-xl">{home.subline}</Text>
          </Column>
        </Column>
      </Row>

      <Column maxWidth="m" gap="xl" padding="l" horizontal="center">
        <Row fillWidth vertical="center" gap="l" s={{direction: "column"}}>
          <Column flex={1} gap="m">
            <Heading as="h2" variant="display-strong-l">Haktan Teymur İnşaat</Heading>
            <Text onBackground="neutral-weak">Sağlam temeller, modern tasarımlar ve güvenilir yapılarla geleceği inşa ediyoruz. Haktan Teymur İnşaat olarak, her projede kaliteyi ve estetiği bir araya getiriyoruz.</Text>
            <Button href={about.path} variant="primary" size="l" arrowIcon>Hakkımızda Daha Fazla Bilgi</Button>
          </Column>
          <Column flex={1}>
            <img src="/pics/HT LOGO.PNG" alt="Haktan Teymur İnşaat Logo" style={{width: "100%", maxWidth: "300px", margin: "auto"}}/>
          </Column>
        </Row>

        <Column fillWidth gap="m" paddingTop="xl">
          <Heading as="h2" variant="display-strong-l" align="center">Ana Hizmetlerimiz</Heading>
          <Grid columns="3" s={{columns: "1"}} gap="l" paddingTop="l">
            {keyServices.map(service => (
              <Column key={service.title} background="neutral-alpha-weak" radius="m" padding="l" gap="m" horizontal="center">
                {service.icon}
                <Heading as="h3" variant="heading-strong-m">{service.title}</Heading>
              </Column>
            ))}
          </Grid>
          <Row fillWidth horizontal="center" paddingTop="l">
            <Button href={services.path} variant="secondary">Tüm Hizmetleri Gör</Button>
          </Row>
        </Column>

        <Column fillWidth background="brand-alpha-weak" radius="l" padding="xl" gap="m" horizontal="center" marginY="xl">
          <Heading as="h2" variant="display-strong-l">Bizimle İletişime Geçin</Heading>
          <Text align="center" onBackground="neutral-weak">Proje fikirlerinizi hayata geçirmek için buradayız. Teklif almak veya daha fazla bilgi edinmek için bizimle iletişime geçin.</Text>
          <Button href="/contact" variant="primary" size="l">İletişim</Button>
        </Column>
      </Column>
    </Column>
  );
}
