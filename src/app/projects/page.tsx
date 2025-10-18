import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL, about, person, projects } from "@/resources";
import { Projects } from "@/components/projects/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: projects.title,
    description: projects.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(projects.title)}`,
    path: projects.path,
  });
}

export default function ProjectsPage() {
  return (
    <Column maxWidth="m" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={projects.path}
        title={projects.title}
        description={projects.description}
        image={`/api/og/generate?title=${encodeURIComponent(projects.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth minHeight="160" vertical="center" marginBottom="32">
        <Heading variant="display-strong-xl">
          {projects.label}
        </Heading>
        <Text variant="display-default-xs" onBackground="neutral-weak">
          {projects.description}
        </Text>
      </Column>
      <Projects />
    </Column>
  );
}
