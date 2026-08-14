import { useEffect, useState } from 'react'

function normalizeItems(payload) {
  if (Array.isArray(payload)) {
    return payload
  }

  if (Array.isArray(payload?.results)) {
    return payload.results
  }

  if (Array.isArray(payload?.data)) {
    return payload.data
  }

  if (Array.isArray(payload?.items)) {
    return payload.items
  }

  return []
}

function ResourceView({ title, summary, endpoint, columns }) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false

    async function loadResource() {
      try {
        setStatus('loading')
        const response = await fetch(endpoint)

        if (!response.ok) {
          throw new Error(`Request failed with ${response.status}`)
        }

        const payload = await response.json()

        if (!ignore) {
          setItems(normalizeItems(payload))
          setStatus('loaded')
        }
      } catch (requestError) {
        if (!ignore) {
          setError(requestError instanceof Error ? requestError.message : 'Request failed')
          setStatus('error')
        }
      }
    }

    loadResource()

    return () => {
      ignore = true
    }
  }, [endpoint])

  return (
    <section className="resource-view">
      <header className="resource-header">
        <div>
          <p className="eyebrow">Live API View</p>
          <h1>{title}</h1>
          <p>{summary}</p>
        </div>
        <span className="record-count">{items.length} records</span>
      </header>

      {status === 'loading' && <p className="state-message">Loading data...</p>}
      {status === 'error' && <p className="state-message error">{error}</p>}

      {status === 'loaded' && (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.key}>{column.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.externalId ?? item.id ?? item.name}>
                  {columns.map((column) => (
                    <td key={column.key}>{column.render ? column.render(item) : item[column.key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default ResourceView