export const setCloudinary = async (file: File) => {
  const formdata = new FormData();
  formdata.append('file', file);
  formdata.append('upload_preset', 'y4xqn6qe');
  formdata.append('api_key', '484587646852272');

  const requestOptions = {
    method: 'POST',
    body: formdata,
  };

  return fetch(
    'https://api.cloudinary.com/v1_1/dmqzwmwip/image/upload',
    requestOptions
  )
    .then((result) => result.json())
    .then((data) => {
      return data.url ? data.url : null;
    });
};
