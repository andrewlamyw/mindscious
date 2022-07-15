import HappinessRatingCell from 'src/components/HappinessRating/HappinessRatingCell'

type HappinessRatingPageProps = {
  id: number
}

const HappinessRatingPage = ({ id }: HappinessRatingPageProps) => {
  return <HappinessRatingCell id={id} />
}

export default HappinessRatingPage
