import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Category from './components/Category'
import Home from './components/Home'
import RecipeId from './components/RecipeId'
import SearchElement from './components/SearchElement'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:idMeal' element={<RecipeId />} />
          <Route path='/category/:name' element={<Category />} />
          <Route path='/search/:searchTerm' element={<SearchElement />} />
        </Routes>
      </Router>

    </>
  )
}

export default App