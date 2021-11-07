import './App.css';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import NotFound from './pages/NotFound';
import { useRoutes } from 'react-router-dom';
import Page3 from './pages/Page3';

function App() {
  let element = useRoutes([
    // These are the same as the props you provide to <Route>
    { path: "/", element: <Page1 /> },
    { path: "page2", element: <Page2 /> },
    {
      path: "page3",
      element: <Page3 />,
      // Nested routes use a children property, which is also
      // the same as <Route>
      children: [
        { path: "page1", element: <Page1 /> },
        { path: "page2", element: <Page2 /> }
      ]
    },
    // Not found routes work as you'd expect
    { path: "*", element: <NotFound /> }
  ]);
console.log(element)
  // The returned element will render the entire element
  // hierarchy with all the appropriate context it needs
  return element;
}

export default App;
