import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react' // Pour importer chakra ui

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider> {/* On créer un container chakra autour de notre app */}
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
