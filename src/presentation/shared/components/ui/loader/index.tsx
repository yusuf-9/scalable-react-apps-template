export default function LoadingFallback() {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      fontSize: '1.2rem',
      color: 'var(--color-text-muted)'
    }}>
      Loading...
    </div>
  );
}

