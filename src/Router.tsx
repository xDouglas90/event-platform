import { Route, Routes } from 'react-router-dom';

import { Event, Subscribe } from './pages';

export const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Subscribe />} />
        <Route path='/event' element={<Event />} />
        <Route path='/event/lesson/:slug' element={<Event />} />
    </Routes>
  );
}
