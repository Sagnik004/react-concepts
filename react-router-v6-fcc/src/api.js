import axios from 'axios';

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function getAllVans() {
  try {
    await sleep(3000);
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
    await sleep(3000);
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
    await sleep(3000);
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
    await sleep(3000);
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

export async function loginUser(creds) {
  try {
    const res = await axios.post('/api/login', creds);
    return res.data;
  } catch (error) {
    throw {
      message: error.message,
      statusText: error.statusText,
      status: error.status,
    };
  }
}
