import axios from 'axios';

export async function getAllVans() {
  try {
    const { data } = await axios.get('/api/vans');
    return {
      isSuccess: true,
      vans: data.vans,
    };
  } catch (error) {
    throw new Error({
      message: 'Failed to fetch vans!',
      status: res.status,
      statusText: res.statusText,
      isSuccess: false,
    });
  }
}
