import { Redirect, routes } from '@redwoodjs/router'

const HomePage = () => <Redirect to={routes.happinessRatings()} />

export default HomePage
