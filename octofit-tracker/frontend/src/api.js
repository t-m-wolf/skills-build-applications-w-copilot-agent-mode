const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const browserHostname = window.location.hostname
const isCodespacesHost = browserHostname.endsWith('.app.github.dev')

const apiOrigin = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : isCodespacesHost
    ? `https://${browserHostname.replace('-5173.app.github.dev', '-8000.app.github.dev')}`
    : 'http://localhost:8000'

export function resourceEndpoint(resource) {
  return `${apiOrigin}/api/${resource}/`
}