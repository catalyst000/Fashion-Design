import { Box } from '@chakra-ui/react'
import React, { Suspense } from 'react';

// Lazy load the Hero component
const Hero = React.lazy(() => import('./Components/Hero'));

const App = () => {
  return (
    <Box w="100%" h="100vh" >
        {/* Your application components go here */}
        <Suspense fallback={<div>Loading...</div>}>
          <Hero />
        </Suspense>
        {/* Add more components as needed */}
    </Box>
  )
}

export default App
