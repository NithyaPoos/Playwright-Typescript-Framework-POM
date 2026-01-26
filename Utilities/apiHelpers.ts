export async function getUser(request:any, id:any) {
  const res = await request.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.json();
}
