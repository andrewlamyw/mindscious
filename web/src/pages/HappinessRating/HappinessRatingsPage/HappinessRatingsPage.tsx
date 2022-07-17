import { Head } from '@redwoodjs/web'

import HappinessRatingsCell from 'src/components/HappinessRating/HappinessRatingsCell'

const HappinessRatingsPage = () => {
  return (
    <>
      <Head>
        <title>Summary</title>
      </Head>

      <HappinessRatingsCell />
    </>
  )
}

export default HappinessRatingsPage
