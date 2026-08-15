import ResourceView from './ResourceView.jsx'

const leaderboardEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

function Leaderboard() {
  return (
    <ResourceView
      title="Leaderboard"
      summary="Competitive standings across Octofit teams."
      endpoint={leaderboardEndpoint}
      columns={[
        { key: 'rank', label: 'Rank' },
        { key: 'userId', label: 'User' },
        { key: 'teamId', label: 'Team' },
        { key: 'points', label: 'Points' },
        { key: 'totalActivities', label: 'Activities' },
      ]}
    />
  )
}

export default Leaderboard