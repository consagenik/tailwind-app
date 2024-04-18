import './PageLoader.css'

interface PageLoaderProps {
  className?: string
}

export function PageLoader ({ className }: PageLoaderProps) {
  return (
    <div className="pageLoader">
      <div className="lds-grid">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}
