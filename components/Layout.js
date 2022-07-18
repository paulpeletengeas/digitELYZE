import {
  Image,
  Tabs,
  TabPanel,
  TabPanels,
  TabList,
  Tab,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

const Layout = ({ children }) => (
  <Box align="center">
    <Box>
      <Image
        src="/img"
        boxSize="200px"
        borderRadius="100px"
        objectFit="cover"
        alt="Image"
      />
    </Box>
    <Heading as="h2" size="2xl">
      {"Panel administrateur"}
    </Heading>
    <Tabs variant="soft-rounded" align="center">
      <TabList>
        <Tab _selected={{ color: "white", bg: "#7da1db" }}>utilisateurs</Tab>
        <Tab _selected={{ color: "white", bg: "#cb7ddb" }}>
          groupes parlemntaires
        </Tab>
        <Tab _selected={{ color: "white", bg: "#88db7d" }}>propositions</Tab>
        <Tab _selected={{ color: "white", bg: "#dbac7d" }}>thèmes</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>Ecrire sur soi ici</p>
        </TabPanel>
        <TabPanel>
          <p>Parler de mon experience ici</p>
        </TabPanel>
        <TabPanel>
          <p>Parler de mes projets ici</p>
        </TabPanel>
        <TabPanel>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Your email address</FormLabel>
            <Input id="email" type="email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="reason">Reason</FormLabel>
            <Input id="reason" type="reason" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="body">Body</FormLabel>
            <Input id="body" type="body" />
          </FormControl>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
);

export default Layout;
