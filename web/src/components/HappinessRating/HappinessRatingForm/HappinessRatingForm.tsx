import SaveIcon from '@mui/icons-material/Save'
import Button from '@mui/material/Button'
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useForm } from 'react-hook-form'
import { HappinessRating } from 'types/graphql'

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
  marginBottom: theme.spacing(3),
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

const HappinessRatingForm: React.FC<{
  onSave: ({ rating }: { rating: string }, id?: number) => void
  happinessRating?: HappinessRating
  loading?: boolean
  title?: string
}> = (props) => {
  const formMethods = useForm()
  const { register } = formMethods

  const onSubmit = (data: { rating: string }) => {
    props.onSave(data, props?.happinessRating?.id)
  }

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
          sx={{ my: { xs: 4, sm: 8, md: 12 } }}
        >
          {props?.title}
        </Typography>

        <Stack sx={{ height: 500, mt: 6 }} spacing={3} alignItems="center">
          <StyledSlider
            {...register('rating')}
            valueLabelDisplay="on"
            orientation="vertical"
            aria-label="Temperature"
            defaultValue={props?.happinessRating?.rating || 6}
            track={false}
            marks={marks}
            step={1}
            max={11}
            min={1}
          />

          <TextField
            {...register('description')}
            multiline
            sx={{ width: '100%', maxWidth: 'sm' }}
            rows={2}
            placeholder="Description (optional)"
            defaultValue={props?.happinessRating?.description}
          />

          <Button
            fullWidth
            disabled={props.loading}
            variant="contained"
            endIcon={<SaveIcon />}
            type="submit"
            size="large"
            sx={{ maxWidth: 'sm' }}
          >
            Save
          </Button>
        </Stack>
      </Form>
    </div>
  )
}

export default HappinessRatingForm
