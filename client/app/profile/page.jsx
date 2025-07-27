import { cookies } from 'next/headers';

export async function page() {
  const cookieStore = cookies();
  const token = cookieStore.get('token'); // replace 'token' with your cookie name

  console.log(token?.value); // this is the actual value of the cookie
  return (
    <div>div</div>
  )
}

export default page