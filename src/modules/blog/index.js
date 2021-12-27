import mainRouter from '@/router'
import mainStore from '@/store'
import localRoutes from './router'
import localStore from './store'

mainStore.registerModule('blog', localStore)
mainRouter.addRoutes(localRoutes)
