import React from "react";
import { Box, Container, Heading, Text, Image, Button, VStack, HStack, Link, Icon, Divider } from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" pt={10}>
      <VStack spacing={5}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1518105570919-e342af1a8275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxHZW9yZ2UlMjBDbGludG9ufGVufDB8fHx8MTcxMDA4ODY3M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="George Clinton" />
        <Heading as="h1">George Clinton</Heading>
        <Text align="center" fontSize="xl">
          Music Producer | Funk Legend | Innovator
        </Text>
        <Text align="center" color="gray.600">
          Welcome to my personal space on the web. Here you can find information about my past work, upcoming projects, and ways to connect with me.
        </Text>

        <HStack spacing={4}>
          <Link href="mailto:george@example.com" isExternal>
            <Button leftIcon={<Icon as={FaEnvelope} />} colorScheme="teal" variant="solid">
              Email
            </Button>
          </Link>
          <Link href="https://github.com/georgeclinton" isExternal>
            <Button leftIcon={<Icon as={FaGithub} />} colorScheme="gray" variant="outline">
              GitHub
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/georgeclinton" isExternal>
            <Button leftIcon={<Icon as={FaLinkedin} />} colorScheme="blue" variant="outline">
              LinkedIn
            </Button>
          </Link>
          <Link href="https://twitter.com/georgeclinton" isExternal>
            <Button leftIcon={<Icon as={FaTwitter} />} colorScheme="twitter" variant="solid">
              Twitter
            </Button>
          </Link>
        </HStack>

        <Divider my={5} />

        <VStack spacing={3} align="start">
          <Heading as="h2" size="lg">
            About Me
          </Heading>
          <Text>I'm George Clinton, a pivotal figure in the development of funk music, working as a music producer, singer, and songwriter. I revolutionized the sound of funk with my bands Parliament and Funkadelic in the 1970s and early 1980s, and I continue to influence modern music to this day.</Text>
          <Text>My work blends elements of jazz, rock, and soul with futuristic concepts and production techniques, creating an unmistakable sound that moves both the body and the mind. I'm passionate about pushing the boundaries of music and art, and I remain active in both recording and performance.</Text>
        </VStack>

        <VStack spacing={3} align="start">
          <Heading as="h2" size="lg">
            Projects
          </Heading>
          <Text>Over the years, I've been involved in numerous projects, both as a solo artist and with my bands. My discography includes groundbreaking albums like "Mothership Connection," "One Nation Under a Groove," and "Computer Games."</Text>
          <Text>Recently, I've been exploring the intersection of music and technology, collaborating with a diverse range of artists and producers to create innovative sounds and experiences.</Text>
        </VStack>

        <VStack spacing={3} align="start">
          <Heading as="h2" size="lg">
            Get in Touch
          </Heading>
          <Text>Whether you're a fan, a fellow musician, or someone interested in collaboration, I'd love to hear from you. Feel free to reach out through any of the platforms linked above, or send me an email directly.</Text>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
