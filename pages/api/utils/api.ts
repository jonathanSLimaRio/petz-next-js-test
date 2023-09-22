export async function fetchAvailableTimes(date: string): Promise<string[]> {
  const res = await fetch('http://localhost:3000/api/scheduling/time', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ date }),
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch times: ${res.status}`);
  }

  return res.json();
}

export async function fetchAvailableDates(): Promise<string[]> {
  const res = await fetch('http://localhost:3000/api/scheduling/date');
  if (!res.ok) {
    throw new Error(`Failed to fetch dates: ${res.status}`);
  }

  return res.json();
}
