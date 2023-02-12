export const postObject = (obj: { [key: string]: string | number }) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=uth-8',
    },
    body: JSON.stringify(obj),
  };
};
