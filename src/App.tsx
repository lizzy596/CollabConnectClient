import React from 'react'
import { Routes, Route } from 'react-router-dom'
import publicRoutes from './Routing/publicRoutes'
import { QueryClient, QueryClientProvider } from 'react-query'


const queryClient = new QueryClient()

function App () {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.element />
              </route.layout>
            }
          />
        ))}
      </Routes>
    </QueryClientProvider>
  )
}

export default App