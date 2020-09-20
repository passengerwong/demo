export interface NavList {
    path: string;
    id: string;
    label: string;
    desc?: string;
}
const mainPageList: NavList[] = [
    {
        path: '/requestModules/index',
        id: '01',
        label: '接口测试模块'
    }
]
export default mainPageList;