// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import HappinessRatingsLayout from 'src/layouts/HappinessRatingsLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Set wrap={HappinessRatingsLayout}>
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
