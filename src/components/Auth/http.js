export default async function HandleLogin(data) {
  const body = new URLSearchParams();
  body.append('username', data.username);
  body.append('password', data.password);

  const response = await fetch('http://localhost:8000/auth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: 'Login failed' }));
    throw new Error(error.detail);
  }

  const { access_token, user_id } = await response.json(); // ⬅️ Extract user_id too
  document.cookie = `access_token=${access_token}; path=/`;

  return { access_token, user_id }; // ⬅️ Return both
}




export async function HandleRegistration(data) {

    try {
        const response = await fetch('http://localhost:8000/auth/sign-up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("Registration failed");
        }
        console.log(data)
        const resData = await response.json();
        console.log(resData)
        console.log("Sent payload:", {
            username: [...data]


        });

    } catch (error) {
        console.log(error.message)

    }
}


