// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import MainLayout from 'src/layouts/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/happiness-ratings/new" page={HappinessRatingNewHappinessRatingPage} name="newHappinessRating" />
        <Route path="/happiness-ratings/{id:Int}/edit" page={HappinessRatingEditHappinessRatingPage} name="editHappinessRating" />
        <Route path="/happiness-ratings/{id:Int}" page={HappinessRatingHappinessRatingPage} name="happinessRating" />
        <Route path="/happiness-ratings" page={HappinessRatingHappinessRatingsPage} name="happinessRatings" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
