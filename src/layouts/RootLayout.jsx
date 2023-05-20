import { Outlet } from "react-router-dom" // Import de react router
import Navbar from "../components/Navbar"
import { Grid, GridItem } from "@chakra-ui/react"
import Sidebar from "../components/Sidebar"
export default function RootLayout() {
  return (
      <Grid templateColumns='repeat(6, 1fr)' bg="gray.50">  {/* Ici on créé une grille qui prend toute la page et qui contient 6 columns de taille égale */}
        <GridItem
          as='aside'
          colSpan={{ base: 6, lg: 2, xl: 1 }} // Précise que cet élément prend un nombre de column en fonctions de la taille de la fenetre (base,lg,xl sont des breakspoint prédéfinis dans chakra) */
          bg='green.500'
          minHeight={{ xl: '100vh'}}
          p={{ base: '20px', lg: '30px' }}  // On ajoute du responsive pour le padding
        > {/* On met les éléments dans une balise GridItem pour pouvoir y passer des props */}
          <Sidebar />
        </GridItem>
        <GridItem
        as='main'
        colSpan={{ base: 6, lg: 4, xl: 5 }}
        p='40px'
        >
          <Navbar />
          <Outlet />
        </GridItem>
      </Grid>
  )
}
