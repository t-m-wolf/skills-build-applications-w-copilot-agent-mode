import ResourceView from './ResourceView.jsx'

const usersEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

function Users() {
  return (
    <ResourceView
      title="Users"
      summary="Athlete profiles and current training goals."
      endpoint={usersEndpoint}
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'teamId', label: 'Team' },
        { key: 'fitnessGoal', label: 'Goal' },
        { key: 'level', label: 'Level' },
      ]}
    />
  )
}

export default Users