import Main from './main/main';
import Page404 from '../components/404';
import NextPage from './next-page/next-page';
import About from './about/about';
import Home from './home/home';

/** 
 * 路由列表 
 * @description 自定义一个类似`vue-router`的列表作为路由管理
*/
const routeList = [
    {
        path: '/index',
        component: Main,
        children: [
            {
                name: 'home',
                path: '/index/home',
                component: Home,
            }, {
                name: 'about',
                path: '/index/about',
                component: About,
            }
        ]
    }, {
        path: '/next:id',
        component: NextPage
    }
];

// `404`一定要放在最后，当路由匹配不到的路径的时候就跳`404`的组件
routeList.push({
    path: '', 
    component: Page404
});

export default routeList;