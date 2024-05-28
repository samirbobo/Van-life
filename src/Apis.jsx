import { defer, redirect } from "react-router-dom";

const globalThrow = (message, response) => {
  throw {
    message: message,
    statusText: response.statusText,
    status: response.status,
  };
};

export const getVans = async () => {
  const response = await fetch("/api/vans");
  if (response.ok) {
    // const data = await response.json();
    const data = response.json();
    // دي فاينكشن جهزه من مكتبه رياكت روتر دوم بتستلم منك اسم البرموس الي بيكون رجعلك من الباك وبيحله ويديك الداتا جهزه للاستخدام
    // async and await تقدر تقول كدا طريقه جديده لجلب البيانات من الباك بدل طريقه
    // async and await وممكن برده تديها الداتا جهزها بعد فكها باستخدام
    return defer({ data });
  }
  globalThrow("Failed to fetch vans", response);
};

export const getVanById = async ({ params }) => {
  const { vanId } = params;
  const response = await fetch(`/api/vans/${vanId}`);
  if (response.ok) {
    const data = response.json();
    // return data;
    return defer({ data });
  }
  globalThrow("There is no data for this van", response);
};

export const getHostVans = async () => {
  const response = await fetch("/api/host/vans");
  if (response.ok) {
    const data = response.json();
    // return data.vans;
    return defer({ data });
  }
  globalThrow("Failed to fetch Host Vans", response);
};

export const getHostVanById = async ({ params }) => {
  const { vanId } = params;
  const response = await fetch(`/api/host/vans/${vanId}`);
  if (response.ok) {
    const data = response.json();
    // return data;
    return defer({ data });
  }
  globalThrow("There is no data for this van", response);
};

export const loginUser = async (formData) => {
  const response = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(formData),
  });
  const data = await response.json();

  if (!response.ok) {
    globalThrow(data.message, response);
  }
  return data;
};

const vaildation = (email, password) => {
  // Validation logic
  const validEmail = /^[a-zA-Z][a-zA-Z0-9]*@gmail.com$/;
  let emailError = null;
  let passwordError = null;

  if (
    email.split("@")[0].length < 4 || // The number of letters in the name must be at least 4
    [...new Set(email.split("@")[0])].length <= 1 || // Test whether this name is a duplicate or a real name
    !validEmail.test(email) // Test whether the entire email contains the correct general form or not
  ) {
    emailError = true;
  }

  if (password.length < 6) {
    passwordError = true;
  }

  if (emailError || passwordError) {
    return { emailError, passwordError };
  }

  return null;
};

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  if (vaildation(email, password)) return vaildation(email, password);

  try {
    await loginUser({ email, password });
    localStorage.setItem("loggedIn", true);
    return redirect("/host");
  } catch (error) {
    console.log(error);
    return { loginError: "Invalid Email or Password." };
  }
};

export function loginLoader({ request }) {
  return new URL(request.url).searchParams.get("message");
}
