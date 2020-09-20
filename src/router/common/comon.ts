import { RoutesParams } from '../index.d'
import loadable from '@loadable/component'

const getCommonRoutes = (): RoutesParams[] => (
    [
        {
            path: '/',
            component: loadable(() => import('@pages/mainPage/index')),
            exact: true
        }
    ]
);
export default getCommonRoutes();
