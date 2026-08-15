import ResourceView from './ResourceView.jsx'

const teamsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

function Teams() {
  return (
    <ResourceView
      title="Teams"
      summary="Training groups, coaches, and roster assignments."
      endpoint={teamsEndpoint}
      columns={[
        { key: 'name', label: 'Team' },
        { key: 'city', label: 'City' },
        { key: 'coach', label: 'Coach' },
        { key: 'members', label: 'Members', render: (team) => team.members?.join(', ') },
      ]}
    />
  )
}

export default Teams