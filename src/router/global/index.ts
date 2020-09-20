import loadable from '@loadable/component';
// 核心系统路由
import { RoutesParams } from '../index.d';

const glogalRoutes = (): RoutesParams[] => (
    [
        {
            path: '',
            component: loadable(() => import('@pages/notFound/index')),
            exact: true,
        }
    ]
)
export default glogalRoutes();
