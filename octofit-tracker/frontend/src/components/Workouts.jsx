import ResourceView from './ResourceView.jsx'

const workoutsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

function Workouts() {
  return (
    <ResourceView
      title="Workouts"
      summary="Suggested workouts matched to athlete focus areas."
      endpoint={workoutsEndpoint}
      columns={[
        { key: 'name', label: 'Workout' },
        { key: 'focus', label: 'Focus' },
        { key: 'difficulty', label: 'Difficulty' },
        { key: 'durationMinutes', label: 'Minutes' },
        { key: 'description', label: 'Description' },
      ]}
    />
  )
}

export default Workouts