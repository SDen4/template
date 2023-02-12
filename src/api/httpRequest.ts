import { postObject } from 'utils/postObject';

export async function httpRequest(
  path: string,
  params?: { [key: string]: string | number },
): Promise<unknown> {
  let status = null;

  const allData = await fetch(
    `https://api.github.com/${path}`,
    params && postObject(params),
  )
    .then((res) => {
      status = res.status;

      return res.json();
    })
    .catch(() => {});

  if (status !== 200) throw new Error('Request error!');

  return allData;
}
