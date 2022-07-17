import SaveIcon from '@mui/icons-material/Save'
import Button from '@mui/material/Button'
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { useForm } from 'react-hook-form'

import { useAuth } from '@redwoodjs/auth'
import { Form, FormError } from '@redwoodjs/forms'

const marks = [
  { value: 11, label: '' },
  { value: 10, label: '🤩 AWEzOME!!' },
  { value: 9, label: '' },
  { value: 8, label: '👍 Goooood~' },
  { value: 7, label: '' },
  { value: 6, label: '👌 Okok loh' },
  { value: 5, label: '' },
  { value: 4, label: '🙅‍♀️ NUt great...' },
  { value: 3, label: '' },
  { value: 2, label: "💆‍♂️ TerrRRible :'(" },
  { value: 1, label: '' },
]

const StyledSlider = styled(Slider)(({ theme }) => ({
  color: '#52af77',
  marginBottom: theme.spacing(5),
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
    paddingLeft: '1rem',
  },
})) as typeof Slider

const HappinessRatingForm = (props) => {
  const formMethods = useForm()
  const { register } = formMethods

  const onSubmit = (data) => {
    props.onSave(data, props?.happinessRating?.id)
  }

  const { currentUser, isAuthenticated } = useAuth()
  // const [rating, setRating] = React.useState<number>(6)

  // const handleSliderChange = (event: Event, newRating: number | number[]) => {
  //   setRating(newRating as number)
  // }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error} formMethods={formMethods}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Typography
          gutterBottom
          component="h1"
          variant="h4"
          align="center"
          sx={{ my: { xs: 2, sm: 4, md: 8, lg: 12 } }}
        >
          🙏 Hi {isAuthenticated ? currentUser.firstName : 'there'}, how are
          you?
        </Typography>

        <Stack sx={{ height: 400, mt: 6 }} spacing={1} alignItems="center">
          <StyledSlider
            {...register('rating')}
            valueLabelDisplay="on"
            orientation="vertical"
            aria-label="Temperature"
            defaultValue={6}
            // onChange={handleSliderChange}
            // value={rating}
            track={false}
            marks={marks}
            step={1}
            max={11}
            min={1}
          />

          <Button
            fullWidth
            disabled={props.loading}
            variant="contained"
            endIcon={<SaveIcon />}
            type="submit"
            size="large"
            sx={{ maxWidth: '25rem' }}
          >
            Save
          </Button>
        </Stack>
      </Form>
    </div>
  )
}

export default HappinessRatingForm
