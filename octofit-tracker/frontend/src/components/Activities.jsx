import ResourceView from './ResourceView.jsx'

const activitiesEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

function Activities() {
  return (
    <ResourceView
      title="Activities"
      summary="Recent logged workouts from the activity tracking API."
      endpoint={activitiesEndpoint}
      columns={[
        { key: 'type', label: 'Type' },
        { key: 'userId', label: 'User' },
        { key: 'teamId', label: 'Team' },
        { key: 'durationMinutes', label: 'Minutes' },
        { key: 'calories', label: 'Calories' },
      ]}
    />
  )
}

export default Activities