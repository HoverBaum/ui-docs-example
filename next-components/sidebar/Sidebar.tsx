import { Divider, Heading, List, ListItem } from '@chakra-ui/react';
import { allDocs, allPages } from 'contentlayer/generated';
import Link from 'next/link';

export const Sidebar = () => {
  return (
    <nav>
      <Heading size="md" mt={3} mb={4} fontWeight={600} color="taxdooBlue.800">
        Pages
      </Heading>

      <List spacing={2}>
        {allPages.map((page) => (
          <ListItem key={page._id} _hover={{ color: 'taxdooBlue.800' }}>
            <Link href={page.slug}>{page.title}</Link>
          </ListItem>
        ))}
      </List>

      <Divider mt={7} mb={7} />

      <Heading size="md" mt={3} mb={4} fontWeight={600} color="taxdooBlue.800">
        Components
      </Heading>

      <List spacing={2}>
        {allDocs.map((doc) => (
          <ListItem key={doc._id} _hover={{ color: 'taxdooBlue.800' }}>
            <Link href={doc.slug}>{doc.title}</Link>
          </ListItem>
        ))}
      </List>
    </nav>
  );
};
