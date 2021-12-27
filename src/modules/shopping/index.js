import mainRouter from '@/router'
import mainStore from '@/store'
import localRoutes from './router'
import localStore from './store'

mainStore.registerModule('shopping', localStore)
mainRouter.addRoutes(localRoutes)
