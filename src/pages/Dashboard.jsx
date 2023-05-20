import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Divider, Box, Card, CardBody, CardFooter, CardHeader, Container, Heading, SimpleGrid, Text, Flex, HStack, Button } from "@chakra-ui/react"; // Lorsque que l'on utilise un composant de chakra ui toujours l'importer
import { useLoaderData } from "react-router-dom"


export default function Dashboard() {

  const tasks = useLoaderData() // Ici on utilise une méthode de react router

  // const boxStyles = {
  //   p: '10px',
  //   bg: 'purple.400',
  //   color: 'white',
  //   m: "10px",
  //   textAlign: 'center',
  //   ':hover': { /* Pour appliquer un hover utilisation des guillemets et on ouvre un objet */
  //     bg: 'blue.400'
  //   }
  // }

  return (

    <SimpleGrid p='10px' columns={4} spacing={10} minChildWidth='300px'> {/* Accorde une valeur width minimal au box provoquant quand elles sont en dessous un changement d'emplacment, c'est plus responsive}
    {/* Simplegrid permet la création d'une grille et columns définit le nombre de colonne, spacing permet d'espacer les éléments entre eux, spacing{10} = 10* 4 40px */}
      {tasks && tasks.map(task => (
        <Card key={task.id} borderTop='8px' borderColor='green.400' bg='white'>
          <CardHeader>
            <Flex gap={5}>
              <Box w="50px" h='50px'>
                <Text>AV</Text>
              </Box>
              <Box>
                <Heading as='h3' size='sm'>{task.title}</Heading> {/* size sm correspond à une taille prédéfinit par chakra */}
                <Text>by {task.author}</Text>
              </Box>
            </Flex>
          </CardHeader>
          <CardBody color={"gray.500"}>
            <Text>{task.description}</Text>
          </CardBody>
            <Divider borderColor='gray.200' />
          <CardFooter>
            <HStack>
              <Button variant="ghost" leftIcon={<ViewIcon />}>Watch</Button> {/* ici on créer deux boutons définies automatiquement par chakra, on pass en props des icons */}
              <Button variant="ghost" leftIcon={<EditIcon />}>Comment</Button>
            </HStack>
          </CardFooter>
        </Card>
      ))} {/* Permet de check si tasks existe avant de map */}
    </SimpleGrid>



    // <Container as='header' maxWidth='4xl' py='20px'> {/* Créer un conatiner(semblable à l'élément body) qui centre ce qu'il entoure */} {/* Ici possible de passer un props comme as pour changer la nature du composant */}
    //     <Heading my="30px" p='10'>Chakra ui Component</Heading> {/* créer un h2 automatiquement, on passe également un my(margin top and bottom) de 30px et un p(padding) de 10px*/}
    //     <Text marginLeft='30px'> {/* Créer un texte automatiquement */}Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam hic reiciendis fugiat excepturi asperiores enim velit doloremque atque tempora consequuntur, mollitia inventore, commodi cum vitae dolore, quo exercitationem vel accusantium.
    //     Recusandae consequuntur officiis eaque labore impedit aliquid veritatis aliquam mollitia deserunt sit minus neque eos ea, minima maxime accusantium explicabo omnis nobis. Optio deleniti ut illo iste saepe laboriosam repellendus.
    //     Eos dicta deleniti maiores velit, laboriosam ipsa tenetur nesciunt. Nemo, facere incidunt quod tempora eos corrupti sint facilis sapiente nulla illo quo natus fugit. Id rem facere nesciunt ipsum saepe.
    //     Exercitationem repudiandae minus voluptates officia consequuntur deserunt quasi sed odit quas. Dolore, nihil optio! Provident est, culpa cumque minus soluta eveniet aut reprehenderit debitis voluptate repudiandae alias nobis. Ratione, illo.</Text>
    //     <Text ml='50px' color='blue' fontWeight='bold'> {/* Créer un texte automatiquement */}Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam hic reiciendis fugiat excepturi asperiores enim velit doloremque atque tempora consequuntur, mollitia inventore, commodi cum vitae dolore, quo exercitationem vel accusantium.
    //     Recusandae consequuntur officiis eaque labore impedit aliquid veritatis aliquam mollitia deserunt sit minus neque eos ea, minima maxime accusantium explicabo omnis nobis. Optio deleniti ut illo iste saepe laboriosam repellendus.
    //     Eos dicta deleniti maiores velit, laboriosam ipsa tenetur nesciunt. Nemo, facere incidunt quod tempora eos corrupti sint facilis sapiente nulla illo quo natus fugit. Id rem facere nesciunt ipsum saepe.
    //     Exercitationem repudiandae minus voluptates officia consequuntur deserunt quasi sed odit quas. Dolore, nihil optio! Provident est, culpa cumque minus soluta eveniet aut reprehenderit debitis voluptate repudiandae alias nobis. Ratione, illo.</Text>

    //     <Box my='30px' p='20px' bg='hotpink'>  {/* l'élément box est sembalble à une div */}
    //       <Text color='white'>This is a box</Text>
    //     </Box>

    //     <Box sx={boxStyles}> {/* sx est une propriété dans laquelle je passe un objet */}
    //       Hello Ninjas
    //     </Box>
    // </Container>
  )
}

export const tasksLoader = async () => { // Permet de récupérer les données et de simuler un appel a une api
  const res = await fetch(' http://localhost:3000/tasks')

  return res.json()
}
