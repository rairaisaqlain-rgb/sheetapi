const rows = [{ id: 1, status: 'demo', note: 'Replace with sheet reader' }];

export function handle(req) {
  if (req === 'GET /v1/rows') return { ok: true, rows };
  return { ok: false, error: 'not_found' };
}

console.log(JSON.stringify(handle('GET /v1/rows')));
