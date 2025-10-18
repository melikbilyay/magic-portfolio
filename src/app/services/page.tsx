import {
  Column,
  Heading,
  Text,
  Meta,
  Schema,
  Grid,
  Icon,
  Row,
} from "@once-ui-system/core";
import { baseURL, services, person } from "@/resources";
import React from "react";
import { FaTruck, FaCube, FaIndustry, FaPaintRoller, FaGripHorizontal, FaTh, FaFlask, FaLayerGroup, FaSnowflake, FaWater } from 'react-icons/fa';

const servicesList = [
  {
    title: "HAZIR BETON",
    description: "Projelerinizin temelini sağlam atın. Yüksek dayanıklılık ve standartlara uygun hazır beton çözümlerimizle hizmetinizdeyiz.",
    icon: <FaTruck size={40} />,
  },
  {
    title: "YTONG GAZ BETON",
    description: "Hafif, dayanıklı ve yüksek ısı yalıtımı sağlayan Ytong gaz beton ürünleri ile modern ve enerji verimli yapılar inşa edin.",
    icon: <FaCube size={40} />,
  },
  {
    title: "PORTLAND ÇİMENTO",
    description: "Her türlü inşaat projesinde güvenle kullanabileceğiniz, yüksek mukavemetli ve kaliteli Portland çimento çeşitleri.",
    icon: <FaIndustry size={40} />,
  },
  {
    title: "ALÇI",
    description: "İç mekanlarda pürüzsüz ve estetik yüzeyler elde etmek için kullanılan, kolay uygulanabilen alçı ve alçı ürünleri.",
    icon: <FaPaintRoller size={40} />,
  },
  {
    title: "TUĞLA",
    description: "Geleneksel ve modern mimarinin vazgeçilmezi olan, farklı boyut ve özelliklerdeki tuğla çeşitlerimizle yapılarınıza değer katın.",
    icon: <FaGripHorizontal size={40} />,
  },
  {
    title: "BİMS",
    description: "Hafifliği ve yüksek yalıtım özellikleriyle öne çıkan bims bloklar, hem ekonomik hem de güvenli bir yapı malzemesidir.",
    icon: <FaTh size={40} />,
  },
  {
    title: "YAPI KİMYASALLARI",
    description: "Yapılarınızın ömrünü uzatan, su yalıtımından zemin kaplamalarına kadar geniş bir yelpazede yapı kimyasalları çözümleri.",
    icon: <FaFlask size={40} />,
  },
  {
    title: "BRİKET",
    description: "Bahçe duvarlarından istinat duvarlarına kadar birçok alanda kullanılabilen, sağlam ve ekonomik briket çeşitleri.",
    icon: <FaLayerGroup size={40} />,
  },
  {
    title: "EPS-XPS",
    description: "Binalarınızda etkin ısı yalıtımı sağlayan, enerji tasarrufu sunan ve çevre dostu EPS ve XPS yalıtım levhaları.",
    icon: <FaSnowflake size={40} />,
  },
  {
    title: "MEMBRAN",
    description: "Çatı ve temellerde su yalıtımı için kullanılan, uzun ömürlü ve güvenilir membran ürünlerimizle yapılarınızı koruma altına alın.",
    icon: <FaWater size={40} />,
  },
];

export async function generateMetadata() {
  return Meta.generate({
    title: services.title,
    description: services.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(services.title)}`,
    path: services.path,
  });
}

export default function Services() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={services.title}
        description={services.description}
        path={services.path}
        image={`/api/og/generate?title=${encodeURIComponent(services.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${services.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth minHeight="160" vertical="center" marginBottom="32">
        <Heading variant="display-strong-xl">
          {services.label}
        </Heading>
        <Text variant="display-default-xs" onBackground="neutral-weak">
          {services.description}
        </Text>
      </Column>
      <Grid fillWidth columns="3" s={{columns: "1"}} gap="l">
        {servicesList.map((service, index) => (
          <Column
            key={index}
            background="neutral-alpha-weak"
            radius="m"
            padding="l"
            gap="m"
            style={servicesList.length % 3 === 1 && index === servicesList.length - 1 ? { gridColumn: '2' } : {}}
          >
            <Row horizontal="center" paddingBottom="m">{service.icon}</Row>
            <Heading as="h3" variant="heading-strong-m" align="center">{service.title}</Heading>
            <Text align="center">{service.description}</Text>
          </Column>
        ))}
      </Grid>
    </Column>
  );
}
