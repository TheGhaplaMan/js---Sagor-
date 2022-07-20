export const get = async (url) => {
  const omuk = await fetch(url, {
    // const res = await fetch(
    //   `http://theghaplaman.herokuapp.com/api/v1/admin/${id}`,
    //   {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await omuk.json();
  return data;
};

export const post = async (url, formBody) => {
  const tomuk = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(formBody),
  });
  return tomuk;
};
