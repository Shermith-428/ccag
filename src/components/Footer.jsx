export default function Footer() {
  return (
    <footer className="page-content" style={{
      background: 'linear-gradient(135deg, #111d4a 0%, #162057 100%)',
      borderTop: '1px solid var(--border2)',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '8px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img src="/Last logo.png" alt="CCAG"
          style={{ width: '22px', height: '22px', borderRadius: '5px', background: '#fff', padding: '1px', objectFit: 'contain' }} />
        <span style={{ color: 'var(--muted2)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em' }}>CCAG</span>
        <span style={{ color: 'var(--muted)', fontSize: '11px' }}>Chord Sheet App</span>
      </div>

      <span style={{
        color: 'var(--accent)',
        fontSize: '10px',
        fontWeight: 700,
        fontStyle: 'italic',
        letterSpacing: '0.04em',
      }}>
        © Developed By Enosh
      </span>

      <span style={{ color: 'var(--muted)', fontSize: '11px' }}>
        {new Date().getFullYear()} · All rights reserved
      </span>
    </footer>
  );
}
