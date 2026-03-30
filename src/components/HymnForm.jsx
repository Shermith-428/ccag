import { useState } from 'react';
import { parseHymnText } from '../utils/parseHymn';

const labels = { songCode: 'Song Code', songName: 'Song Name', key: 'Key' };
const t = (k) => labels[k] ?? k;

export default function HymnForm({ onSave, onClose, existing }) {
  const [code, setCode] = useState(existing?.code ?? '');
  const [name, setName] = useState(existing?.name ?? '');
  const [key, setKey]   = useState(existing?.key ?? 'C');
  const [raw, setRaw]   = useState('');
  const [error, setError] = useState('');

  function handleSave() {
    if (!code.trim() || !name.trim()) { setError('Code and name are required.'); return; }
    let content = existing?.content ?? [];
    if (raw.trim()) {
      content = parseHymnText(raw);
      if (!content.length) { setError('Could not parse content. Check your text format.'); return; }
    }
    if (!content.length) { setError('Please paste the chord sheet content.'); return; }
    onSave({ code: code.trim().toUpperCase(), name: name.trim(), key: key.trim() || 'C', content });
  }

  return (
    <div className="overlay flex items-start justify-center p-4 pt-10">
      <div className="glass w-full max-w-2xl fade-up">
        {/* Header */}
        <div className="px-6 py-4 flex items-center justify-between" style={{ borderBottom: '1px solid var(--border)' }}>
          <div>
            <h2 className="text-white font-semibold">{existing ? 'Edit Hymn' : 'Add New Hymn'}</h2>
            <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>
              {existing ? 'Update details or paste new content to replace.' : 'Fill in details and paste the chord sheet text.'}
            </p>
          </div>
          <button onClick={onClose} className="btn btn-secondary btn-icon">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M1 1l12 12M13 1L1 13"/>
            </svg>
          </button>
        </div>

        <div className="p-6 flex flex-col gap-4">
          {error && (
            <div className="px-4 py-3 rounded-lg text-sm text-red-400"
              style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
              {error}
            </div>
          )}

          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-xs font-medium mb-1.5 block" style={{ color: 'var(--muted2)' }}>{t('songCode')}</label>
              <input value={code} onChange={e => setCode(e.target.value)} placeholder="C-018" className="inp" />
            </div>
            <div className="flex-[2]">
              <label className="text-xs font-medium mb-1.5 block" style={{ color: 'var(--muted2)' }}>{t('songName')}</label>
              <input value={name} onChange={e => setName(e.target.value)} placeholder="Thanks & Praise" className="inp" />
            </div>
            <div className="w-20">
              <label className="text-xs font-medium mb-1.5 block" style={{ color: 'var(--muted2)' }}>{t('key')}</label>
              <input value={key} onChange={e => setKey(e.target.value)} placeholder="Bb" className="inp" />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium mb-1.5 block" style={{ color: 'var(--muted2)' }}>
              Chord Sheet Text {existing && <span style={{ color: 'var(--muted)' }}>(leave blank to keep existing)</span>}
            </label>
            <textarea value={raw} onChange={e => setRaw(e.target.value)} rows={14}
              placeholder={"Verse\nBb  Eb/G\nWe are here together To lift our hearts as one\nBb  Eb\nWe're in our Father's presence His spirit is with us\n\nChorus\nF  Gm\nAnd His mercy we can never contain"}
              className="inp" style={{ resize: 'vertical', fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', lineHeight: 1.6 }} />
          </div>

          <div className="flex gap-2 pt-1">
            <button onClick={handleSave} className="btn btn-primary">Save Hymn</button>
            <button onClick={onClose} className="btn btn-secondary">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}
