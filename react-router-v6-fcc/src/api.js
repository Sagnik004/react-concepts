export async function getAllVans() {
  const res = await fetch('/api/vans');
  if (!res.ok) {
    throw new Error({
      message: 'Failed to fetch vans!',
      status: res.status,
      statusText: res.statusText,
    });
  }

  const data = await res.json();
  return data.vans;
}
