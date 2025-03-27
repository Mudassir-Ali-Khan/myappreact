import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mypage from './pages/Mypage';
import PracticePage from './pages/PracticePage';
import Cv from './pages/Cv'
import NewCV from './pages/Props/NewCV';
import PracticeConditionalRendering from './pages/ConditionalRendering/PracticeConditionalRendering';
import ListAndKeys from './pages/ListAndKeys/ListAndKeys';
import Events from './pages/Events/Events';
import DynamicRender from './pages/DynamicRender/DynamicRender';
import AvatarConverter from './pages/DynamicRender/AvatarConverter';
import Time from './pages/DynamicRender/Time';
import Todo from './pages/Todo/Todo';
import ApiCalling from './pages/APiCalling/ApiCalling';

function App() {
  return <>
    {/* <Mypage/> */}
    {/* <PracticePage /> */}
    {/* <Cv /> */}
    {/* <NewCV /> */}
    {/* <PracticeConditionalRendering /> */}
    {/* <ListAndKeys /> */}
    {/* <Events /> */}
    {/* <DynamicRender /> */}
    {/* <AvatarConverter /> */}
    {/* <Time/> */}
    {/* <Todo /> */}
    <ApiCalling />
  
  </>
}

export default App;