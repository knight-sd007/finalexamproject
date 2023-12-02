import React from "react";
import { Footer, Header } from "../Components";
import {
  Home,
  NotFound,
  Question1,
  Question2,
  Question3,
  Question4,
  Question5,
  Section2,
} from "../Pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <div className='pb-5'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='section1'>
            <Route path='' element={<Question1 />}></Route>
            <Route path='question2' element={<Question2 />}></Route>
            <Route path='question3' element={<Question3 />}></Route>
            <Route path='question4' element={<Question4 />}></Route>
            <Route path='question5' element={<Question5 />}></Route>
          </Route>
          <Route path='/section2' element={<Section2 />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
