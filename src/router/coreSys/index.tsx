import loadable from '@loadable/component';
// 核心系统路由
import { RoutesParams } from '../index.d';
const coreSysRoutes = (): RoutesParams[] => ([
    {
        path: '/test',
        component: loadable(() => import('@pages/test/index')),
        exact: true
    },
    {
        path: '/testSetup',
        component: loadable(() => import('@pages/testSetup/index')),
        exact: true
    },
    {
        path: '/one',
        children: [
            {
                path: '/one',
                redirect: '/one/coma'
            },
            {
                path: '/one/coma',
                component: loadable(() => import('@pages/comA/index')),
                exact: true
            },
            {
                path: '/one/comb',
                component: loadable(() => import('@pages/comB/index')),
                exact: true
            },
        ],
    }
])
export default coreSysRoutes();