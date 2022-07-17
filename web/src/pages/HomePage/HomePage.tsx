import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import { useAuth } from '@redwoodjs/auth'

const marks = [
  { value: 11, label: '🤩 AWEEEZOME!!' },
  { value: 10, label: '' },
  { value: 9, label: '' },
  { value: 8, label: '👍 Gooooood~' },
  { value: 7, label: '' },
  { value: 6, label: '👌 Okok loh' },
  { value: 5, label: '' },
  { value: 4, label: '🙅‍♀️ NUt great...' },
  { value: 3, label: '' },
  { value: 2, label: '' },
  { value: 1, label: "💆‍♂️ TerrRRible :'(" },
]

const CustomSlider = styled(Slider)({
  color: '#52af77',
  width: '1rem',
  '& .MuiSlider-thumb': {
    height: 36,
    width: 36,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: '1.25rem',
    width: 40,
    height: 40,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(87%, -122%) rotate(-135deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(87%, -122%) rotate(-135deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(135deg)',
    },
  },
  '& .MuiSlider-markLabel': {
    fontSize: '1.25rem',
    left: '3.5rem',
  },
})

const HomePage = () => {
  const { currentUser, isAuthenticated } = useAuth()
  return (
    <>
      <Typography
        gutterBottom
        component="h1"
        variant="h4"
        align="center"
        sx={{ my: 2 }}
      >
        👋Hi {isAuthenticated ? currentUser.firstName : 'there'}, how are you?
        🤗
      </Typography>

      <Stack
        sx={{ height: 300, mt: 6 }}
        spacing={1}
        direction="row"
        justifyContent="center"
      >
        <CustomSlider
          valueLabelDisplay="on"
          defaultValue={6}
          orientation="vertical"
          aria-label="Temperature"
          marks={marks}
          step={1}
          max={11}
          min={1}
        />
      </Stack>
    </>
  )
}

export default HomePage
