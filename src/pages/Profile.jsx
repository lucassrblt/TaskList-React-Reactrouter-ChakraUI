import { Tabs, TabPanels, TabList, Tab, TabPanel, List, ListItem, ListIcon } from '@chakra-ui/react';
import { EmailIcon, ChatIcon, StarIcon, CheckCircleIcon, WarningIcon } from "@chakra-ui/icons"

export default function Profile() {
  return (
    <Tabs mt="40px" p='20px' colorScheme='green' variant='soft-rounded'>
      <TabList>
        <Tab _selected={{ color: 'white', bg:'green.500'}}>Account Info</Tab> {/* Selected permet de modifier le design de la table lorsqu'elle est séléctionné */}
        <Tab  _selected={{ color: 'white', bg:'green.500'}}>Task History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel> {/* Chaque tab pannels est lié avec le tab par ordre de code */}
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email : lucasrblt@outlook.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
                Beginner Front-End Developer.
              </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Currently discovering Chakra UI and React Router and loving it.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
        <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Implement responsive design for the homepage
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Debug and fix the issue with form validation
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Integrate third-party API for data retrieval
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Optimize website performance by reducing page load time
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Refactor code to improve readability and maintainability
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Conduct unit tests for critical functionality
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
