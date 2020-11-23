export async function imageRequest(callback, pageNumber, imagesLimit) {
// eslint-disable-next-line
  const BASE_URL = `https://picsum.photos/v2/list?page=${pageNumber}&limit=${imagesLimit}`;
  const response = await fetch(`${BASE_URL}`);

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  const images = await response.json();

  callback(images);
}

export const defaultImgSource = id => `https://picsum.photos/id/${id}/270/230`;

export const bigImgSource = id => `https://picsum.photos/id/${id}/900/850`;
