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

export async function getVan(id) {
  try {
    const { data } = await axios.get(`/api/vans/${id}`);
    return {
      isSuccess: true,
      van: data.vans,
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

export async function getHostsAllVans() {
  try {
    const { data } = await axios.get('/api/host/vans');
    return {
      isSuccess: true,
      vans: data.vans,
    };
  } catch (error) {
    throw new Error({
      message: 'Failed to fetch host vans!',
      status: res.status,
      statusText: res.statusText,
      isSuccess: false,
    });
  }
}

export async function getHostsVan(id) {
  try {
    const { data } = await axios.get(`/api/host/vans/${id}`);
    return {
      isSuccess: true,
      van: data.vans,
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