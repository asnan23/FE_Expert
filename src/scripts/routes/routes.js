import listResto from '../views/pages/list-resto';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': listResto, // default page
  '/main': listResto,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
