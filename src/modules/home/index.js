import mainRouter from '@/router'
import mainStore from '@/store'
import localRoutes from '../home/router'
import localStore from '../home/store'

mainStore.registerModule('home', localStore)
mainRouter.addRoutes(localRoutes)
