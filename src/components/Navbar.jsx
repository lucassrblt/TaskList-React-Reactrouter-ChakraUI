import { UnlockIcon } from "@chakra-ui/icons";
import { Flex, Box, Heading, Button, Text, Spacer, HStack, useToast, Avatar } from "@chakra-ui/react";

export default function Navbar () {
    const toast = useToast()

    const showToast = () => { {/* Fonctions permettant de créer un petit overlay */}
        toast({
            title: 'Logged out',
            description: 'Successfully logged out',
            duration: 3000,
            isClosable: true, // Ajoute ou non un croix sur l'overlay
            status: 'success', // Change le background color en vert
            position: 'top',
            icon: <UnlockIcon></UnlockIcon>
        })
    }



    return (
        <Flex as="nav" mb='40px' p='10px' alignItems='center'> {/* Ici on utilise un élément flex pour utiliser les felxbox mais on le transmet comme un élément nav */}
            <Heading as="h1">Lucas's Tasks</Heading> {/* Ici on utilise l'élément heading qui se transmet comme un h2 mais on mle transforme en h1 */}
            <Spacer /> {/* Permet de créer un espace entre les différents composants */}

        <HStack spacing='20px'> {/* Permet de créer un conteneur qui empile les enfants horizontalement, puis on leur ajoute un spacing */}
            <Avatar src="/img/IMG_1026.JPG"/>
            <Text>lucasrblt@outlook.com</Text>
            <Button colorScheme="red" onClick={showToast}>Logout</Button> {/* Créer un composant boutton prédéfini par chakra, colorscheme est une propriété de chakra qui permet d'utiliser des couleurs prédéfini avec un hover et un onclick */}
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