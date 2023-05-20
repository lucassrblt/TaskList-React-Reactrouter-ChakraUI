import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons"
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <List color='white' fontSize='1.2em' spacing={4}>
        <ListItem>
            <NavLink to='/'> {/* Navlink est un composant issue de React Router, to indique la redirection */}
                <ListIcon as={CalendarIcon} color="white"/>
                Dashboard
            </NavLink>
        </ListItem>
        <ListItem>
            <NavLink to='/create'> {/* Navlink est un composant issue de React Router, to indique la redirection */}
                <ListIcon as={EditIcon} color="white"/>
                New Task
            </NavLink>
        </ListItem>
        <ListItem>
            <NavLink to='/profile'> {/* Navlink est un composant issue de React Router, to indique la redirection */}
                <ListIcon as={AtSignIcon} color="white"/>
                Profile
            </NavLink>
        </ListItem>
    </List>
  )
}
