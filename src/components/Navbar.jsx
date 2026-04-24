import { useState } from 'react';
import { useAdmin } from '../context/AdminContext';

const NAV = [
  { label: 'Hymns',     value: 'hymns',     icon: '♪' },
  { label: 'Setlists',  value: 'setlists',  icon: '≡' },
  { label: 'Favorites', value: 'favorites', icon: '★' },
];

export default function Navbar({ page, setPage }) {
  const { isAdmin, login, logout } = useAdmin();
  const [showLogin, setShowLogin] = useState(false);
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');

  function handleLogin(e) {
    e.preventDefault();
    if (login(pass)) { setShowLogin(false); setPass(''); setErr(''); }
    else setErr('Incorrect password.');
  }

  const activeStyle = {
    background: 'rgba(220,121,58,0.18)',
    color: '#DC793A',
    border: '1px solid rgba(220,121,58,0.4)',
    boxShadow: '0 0 14px rgba(220,121,58,0.25)',
  };
  const inactiveStyle = {
    background: 'transparent',
    color: 'var(--muted2)',
    border: '1px solid transparent',
  };

  return (
    <>
      {/* ── Desktop top nav (≥ 1024px) ── */}
      <nav className="hidden lg:block sticky top-0 z-40"
        style={{ background: 'rgba(26,26,28,0.97)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border2)', position: 'relative' }}>
        <div className="nav-glow" />
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px', width: '100%' }} className="h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <img src="/Last logo.png" alt="CCAG Logo"
              className="rounded-xl object-contain"
              style={{ width: '38px', height: '38px', background: '#fff', padding: '2px' }} />
            <div className="flex flex-col leading-none">
              <span className="font-black text-white" style={{ letterSpacing: '0.15em', fontSize: '15px' }}>CCAG</span>
              <span style={{ color: 'var(--muted2)', fontSize: '10px', letterSpacing: '0.08em' }}>CHORD SHEET APP</span>
            </div>
          </div>
          {/* Nav pill */}
          <div className="flex items-center gap-1 p-1 rounded-xl" style={{ background: 'var(--surface2)', border: '1px solid var(--border)' }}>
            {NAV.map(n => (
              <button key={n.value} onClick={() => setPage(n.value)}
                className="btn btn-sm" style={page === n.value ? activeStyle : inactiveStyle}>
                <span>{n.icon}</span><span>{n.label}</span>
              </button>
            ))}
          </div>
          {/* Right */}
          <div className="flex items-center gap-2 shrink-0">
            {isAdmin ? (
              <>
                <span className="badge badge-green">● Admin</span>
                <button onClick={logout} className="btn btn-ghost btn-sm">Sign out</button>
              </>
            ) : (
              <button onClick={() => setShowLogin(true)} className="btn btn-ghost btn-sm">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                Admin
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* ── Tablet + Phone top bar (< 1024px) ── */}
      <div className="lg:hidden sticky top-0 z-40 flex items-center justify-between"
        style={{ background: 'rgba(26,26,28,0.97)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border2)', height: 'clamp(48px, 8vh, 64px)', padding: '0 24px' }}>
        <div className="flex items-center gap-2.5">
          <img src="/Last logo.png" alt="CCAG Logo"
            className="rounded-lg object-contain"
            style={{ width: '34px', height: '34px', background: '#fff', padding: '2px' }} />
          <div className="flex flex-col leading-none">
            <span className="font-black text-white" style={{ letterSpacing: '0.15em', fontSize: '14px' }}>CCAG</span>
            <span className="hidden md:block" style={{ color: 'var(--muted2)', fontSize: '10px', letterSpacing: '0.06em' }}>CHORD SHEET APP</span>
          </div>
        </div>
        {isAdmin ? (
          <div className="flex items-center gap-2">
            <span className="badge badge-green">● Admin</span>
            <button onClick={logout} className="btn btn-ghost btn-xs md:btn-sm">Sign out</button>
          </div>
        ) : (
          <button onClick={() => setShowLogin(true)} className="btn btn-ghost btn-xs md:btn-sm">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            Admin
          </button>
        )}
      </div>

      {/* ── Bottom nav: tablet + phone (< 1024px) ── */}
      <div className="lg:hidden bottom-nav">
        {NAV.map(n => (
          <button key={n.value} onClick={() => setPage(n.value)}
            className={`bottom-nav-item ${page === n.value ? 'active' : ''}`}>
            <span className="nav-icon" style={{ color: page === n.value ? 'var(--accent)' : 'var(--muted)' }}>{n.icon}</span>
            <span className="nav-label" style={{ color: page === n.value ? 'var(--accent)' : 'var(--muted)' }}>{n.label}</span>
          </button>
        ))}
      </div>

      {/* ── Admin login modal ── */}
      {showLogin && (
        <div className="overlay flex items-center justify-center p-4">
          <div className="fade-up w-full max-w-sm"
            style={{ background: 'var(--surface)', border: '1px solid var(--border3)', borderRadius: '20px', boxShadow: '0 0 60px rgba(106,46,42,0.15), 0 32px 64px rgba(0,0,0,0.6)' }}>
            <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent, var(--accent), var(--accent2), transparent)', borderRadius: '20px 20px 0 0' }} />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(106,46,42,0.15)', border: '1px solid var(--border3)' }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-base">Admin Access</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--muted2)' }}>CCAG Chord Sheet App</p>
                </div>
              </div>
              <form onSubmit={handleLogin} className="flex flex-col gap-3">
                <input type="password" value={pass} onChange={e => setPass(e.target.value)}
                  placeholder="Enter admin password" autoFocus className="inp" />
                {err && (
                  <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs"
                    style={{ background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)', color: 'var(--red)' }}>
                    ✕ {err}
                  </div>
                )}
                <div className="flex gap-2 mt-1">
                  <button type="submit" className="btn btn-primary flex-1">Sign in</button>
                  <button type="button" onClick={() => { setShowLogin(false); setErr(''); setPass(''); }}
                    className="btn btn-secondary">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
