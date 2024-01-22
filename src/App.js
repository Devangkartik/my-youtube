import './App.css';
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from 'react-redux';
import store  from "./utils/store.js";
import MainContainer from './components/MainContainer.js';
import WatchPage from './components/WatchPage.js';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const appRouter = createBrowserRouter([{
  path : "/",
  element : <Body/>,
  children : [
    {
      path : "/",
      element : <MainContainer/>
    },
    {
      path : "/watch",
      element : <WatchPage/>
    }
  ]
}])
function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <Head/>
        <RouterProvider router = {appRouter} />





        {/* 
        *Head
        *Body
           *SideBar
              *MenuIteams
           *MainContainer
               *ButtonList
               *VideoContainer
                     *Video-Card
                
        */}
      </div>
    </Provider>
  );
}

export default App;
