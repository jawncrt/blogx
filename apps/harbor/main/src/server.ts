// apps/harbor/main/src/server.ts

import { showRoutes } from 'hono/dev'
import { createApp } from 'honox/server'

const app = createApp()

showRoutes(app)

export default app
