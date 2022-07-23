// 현재 폴더에 있는 모든 페이지를 import 한다
import Home from './Home';
import NotFound from './NotFound';

// import한 페이지를 Pages와 export에 모두 입력한다.
// 앞으로 다른 페이지/컴포넌트에서 현재 폴더의 파일을 불러올 때
// import { Home, NotFound } from '~/Board'로 명명하면 된다.
const Pages = {
    Home, NotFound, 
};

export default Pages;

export { Home, NotFound, };