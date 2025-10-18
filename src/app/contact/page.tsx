"use client";

import {
  Column,
  Heading,
  Text,
  Meta,
  Schema,
  Row,
  Input,
  Button,
  Icon,
  Textarea,
} from "@once-ui-system/core";
import { baseURL, contact, person } from "@/resources";
import React, { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, phone, message }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <Column maxWidth="m" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={contact.title}
        description={contact.description}
        path={contact.path}
        image={`/api/og/generate?title=${encodeURIComponent(contact.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${contact.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth minHeight="160" vertical="center" marginBottom="32">
        <Heading variant="display-strong-xl">
          {contact.label}
        </Heading>
        <Text variant="display-default-xs" onBackground="neutral-weak">
          {contact.description}
        </Text>
      </Column>
      <Column as="form" onSubmit={handleSubmit} fillWidth gap="m">
        <Input id="email" type="email" placeholder="E-posta adresiniz" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input id="phone" type="tel" placeholder="Telefon numaranız" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <Textarea id="message" placeholder="Mesajınız" value={message} onChange={(e) => setMessage(e.target.value)} required rows={6} />
        <Row fillWidth horizontal="end">
          <Button type="submit" variant="primary" disabled={status === 'loading'}>
            {status === 'loading' ? 'Gönderiliyor...' : 'Gönder'}
          </Button>
        </Row>
                {status === 'success' && 
          <Column background="success-alpha-weak" border="success-alpha-medium" radius="m" padding="l" gap="m" horizontal="center">
            <Icon name="checkCircle" onBackground="success-strong" size="l" />
            <Heading as="h3" variant="heading-strong-m">Başarılı!</Heading>
            <Text align="center">Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.</Text>
          </Column>
        }
        {status === 'error' && 
          <Column background="danger-alpha-weak" border="danger-alpha-medium" radius="m" padding="l" gap="m" horizontal="center">
            <Icon name="warning" onBackground="danger-strong" size="l" />
            <Heading as="h3" variant="heading-strong-m">Hata!</Heading>
            <Text align="center">Bir hata oluştu. Lütfen tekrar deneyin veya daha sonra bizimle iletişime geçin.</Text>
          </Column>
        }
      </Column>

      <Column fillWidth gap="m" paddingTop="xl">
        <Heading as="h2" variant="display-strong-l" align="center">Bize Ulaşın</Heading>
        <Text align="center" onBackground="neutral-weak">Aşağıdaki bilgilerden bize ulaşabilirsiniz.</Text>
        <Column gap="s" horizontal="center">
          <Text>Telefon: [Telefon numaranızı buraya ekleyin]</Text>
          <Text>E-posta: [E-posta adresinizi buraya ekleyin]</Text>
          <Text>Adres: [Adresinizi buraya ekleyin]</Text>
        </Column>
      </Column>
    </Column>
  );
}
