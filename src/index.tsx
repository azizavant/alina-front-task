import React from 'react'
import { App } from './app/App'
import './app/style/index.css'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactLocation, Router } from '@tanstack/react-location'
import { routerConfig } from '@/app/providers/router'

// Обертки над приложением
const client = new QueryClient()
const location = new ReactLocation()

const container = document.getElementById('root')

if (container == null) {
  throw new Error('Контейнер root не найден. Не удалось вмонтировать реакт приложение')
}

const root = createRoot(container)

root.render(
  <Router location={location} routes={Object.values(routerConfig)}>
    <QueryClientProvider client={client}>
      <App/>
    </QueryClientProvider>
  </Router>
)
