import {
  Column,
  Heading,
  Text,
  Meta,
  Schema,
  Grid,
  Row,
} from "@once-ui-system/core";
import { baseURL, gallery, person } from "@/resources";
import React from "react";

const videosList = [
  {
    src: "/videos/WhatsApp Video 2025-10-18 at 17.30.51.mp4",
    title: "Proje Alanı Drone Çekimi 1",
    description: "Haktan Teymur İnşaat'ın yeni projesinden havadan görüntüler.",
  },
  {
    src: "/videos/WhatsApp Video 2025-10-18 at 17.30.52.mp4",
    title: "Proje Alanı Drone Çekimi 2",
    description: "Gelişmekte olan projemizin farklı açılardan drone görüntüleri.",
  },
  {
    src: "/videos/WhatsApp Video 2025-10-18 at 17.30.53.mp4",
    title: "Proje Alanı Drone Çekimi 3",
    description: "İnşaat sürecindeki projemizin etkileyici hava çekimleri.",
  },
  {
    src: "/videos/WhatsApp Video 2025-10-18 at 17.30.55.mp4",
    title: "Proje Alanı Drone Çekimi 4",
    description: "Tamamlanmak üzere olan projemizin son drone görüntüleri.",
  },
];

export async function generateMetadata() {
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(gallery.title)}`,
    path: gallery.path,
  });
}

export default function Gallery() {
  const heroVideo = videosList[0];
  const remainingVideos = videosList.slice(1);

  return (
    <Column maxWidth="m" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={gallery.path}
        image={`/api/og/generate?title=${encodeURIComponent(gallery.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth minHeight="160" vertical="center" marginBottom="32">
        <Heading variant="display-strong-xl">
          {gallery.label}
        </Heading>
        <Text variant="display-default-xs" onBackground="neutral-weak">
          {gallery.description}
        </Text>
      </Column>

      {heroVideo && (
        <Column maxWidth="xs" marginBottom="l" background="neutral-alpha-weak" radius="m" padding="m" horizontal="center">
          <video autoPlay muted loop style={{ width: '100%', borderRadius: '8px' }}>
            <source src={heroVideo.src} type="video/mp4" />
            Tarayıcınız video etiketini desteklemiyor.
          </video>
        </Column>
      )}

      <Grid fillWidth columns="2" s={{columns: "1"}} gap="l">
        {remainingVideos.map((video, index) => (
          <Column key={index} background="neutral-alpha-weak" radius="m" padding="l" gap="m">
            <video autoPlay muted loop style={{ width: '100%', borderRadius: '8px' }}>
              <source src={video.src} type="video/mp4" />
              Tarayıcınız video etiketini desteklemiyor.
            </video>
          </Column>
        ))}
      </Grid>
    </Column>
  );
}
