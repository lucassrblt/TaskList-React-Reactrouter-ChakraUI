import { Flex, Box, Heading, Button, Text, Spacer, HStack } from "@chakra-ui/react";

export default function Navbar () {
    return (
        <Flex as="nav" mb='40px' p='10px' alignItems='center'> {/* Ici on utilise un élément flex pour utiliser les felxbox mais on le transmet comme un élément nav */}
            <Heading as="h1">Dojo Tasks</Heading> {/* Ici on utilise l'élément heading qui se transmet comme un h2 mais on mle transforme en h1 */}
            <Spacer /> {/* Permet de créer un espace entre les différents composants */}

        <HStack spacing='20px'> {/* Permet de créer un conteneur qui empile les enfants horizontalement, puis on leur ajoute un spacing */}
            <Box bg='gray.200' p='10px'>M</Box>
            <Text>lucasrblt@outlook.com</Text>
            <Button colorScheme="green">Logout</Button> {/* Créer un composant boutton prédéfini par chakra, colorscheme est une propriété de chakra qui permet d'utiliser des couleurs prédéfini avec un hover et un onclick */}
        </HStack>
        </Flex>



        // <Flex justify='space-between' bg='gray.200' gap='2' wrap='wrap'> {/* Tous ce qui se trouve à l'intérieur devient un item flex, wrap et gap modifie le comportement si la fenetre se réduit */}
        //     <Box w='150px' h='50px' bg='red'>1</Box>
        //     <Box w='150px' h='50px' bg='blue'>2</Box>
        //     <Box w='150px' h='50px' flexGrow='1' bg='green'>3</Box> {/* Flexgrow permet de forcer la troisième box à prendre tout l'espace nécessaire */}
        //     <Box w='150px' h='50px' bg='yellow'>4</Box>
        // </Flex>
    )
}