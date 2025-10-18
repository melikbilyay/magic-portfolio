import { Row, Text } from "@once-ui-system/core";
import { person } from "@/resources";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row as="footer" fillWidth padding="l" horizontal="center">
      <Text variant="body-default-s" onBackground="neutral-weak">
        © {currentYear} {person.name}. Tüm hakları saklıdır.
      </Text>
    </Row>
  );
};
