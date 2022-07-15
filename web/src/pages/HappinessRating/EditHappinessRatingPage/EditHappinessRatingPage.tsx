import EditHappinessRatingCell from 'src/components/HappinessRating/EditHappinessRatingCell'

type HappinessRatingPageProps = {
  id: number
}

const EditHappinessRatingPage = ({ id }: HappinessRatingPageProps) => {
  return <EditHappinessRatingCell id={id} />
}

export default EditHappinessRatingPage
