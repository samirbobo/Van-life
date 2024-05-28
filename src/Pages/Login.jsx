import { useState } from "react";
import EyeIcon from "../components/EyeIcon";
import HideEyeIcon from "../components/HideEyeIcon";
import {
  Form,
  Link,
  Navigate,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";

export default function Login() {
  const message = useLoaderData();
  const loginError = useActionData();
  // useNavigation: post, put, delete تستخدم في معرفه كل التنقلات والاوامر الجاريه في الكومبونانت زي اوامر الابي ايه
  // وتحتوي علي اوبجيكت فيه بعض القيم ومنهم
  /* 
  navigation.state; 
    idle - There is no navigation pending. خامل لا يوجد اي تنقل
    submitting - A route action is being called due to a form submission using POST, PUT, PATCH, or DELETE في امر بيتم مع السيرفر
    loading - The loaders for the next routes are being called to render the next page التحميل - يتم استدعاء أدوات التحميل للمسارات التالية لعرض الصفحة التالية
  navigation.location;
  navigation.formData;
  navigation.json;
  navigation.text;
  navigation.formAction;
  navigation.formMethod;
  navigation.formEncType;
  */
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const loggedIn = localStorage.getItem("loggedIn");

  if (loggedIn) {
    return <Navigate to="/host" />;
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <section className="login-page container">
      <h2>Sign in to your account</h2>
      <Form method="post" replace>
        {message && <p className="invaild-mes">{message}</p>}
        {loginError?.loginError && (
          <p className="invaild-mes">Invaild Email or Password.</p>
        )}
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Example@gmail.com"
            required
          />
          {loginError?.emailError && (
            <p className="mes-error">Invalid email enter example@gmail.com</p>
          )}
        </label>
        <label>
          Password
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            required
          />
          {showPassword ? (
            <HideEyeIcon onClick={handleClickShowPassword} />
          ) : (
            <EyeIcon onClick={handleClickShowPassword} />
          )}
        </label>
        {loginError?.passwordError && (
          <p className="mes-error pass">Minimum 6 characters are required</p>
        )}
        {/* <p className="text-account">
          {"Don't"} have an account? <Link to="/register">Create one now</Link>
        </p> */}
        <button
          disabled={navigation.state !== "idle"}
          type="submit"
          className="submit"
        >
          {navigation.state !== "idle" ? (
            <div className="spinner"></div>
          ) : (
            "Log in"
          )}
        </button>
        <p style={{ paddingTop: "1rem", fontSize: "14px" }}>
          Use this email and password to experience the rest of the web site:
          <br />
          <strong>samir@gmail.com</strong>
          <br />
          <strong>123456</strong>
        </p>
      </Form>
    </section>
  );
}

/* 
ممكن ندمج بين الكود الي فوق والكود القديم عشان نعمل تبع وفلادياشن احسن للانبوتس وبعدها لما تكون صح نبعت المودل للخادم بشكل افضل بالطريقه الجديده

import { useState, useEffect } from "react";
import { Form, Link, Navigate, useActionData, useLoaderData, useNavigation } from "react-router-dom";
import EyeIcon from "../components/EyeIcon";
import HideEyeIcon from "../components/HideEyeIcon";

export default function Login() {
  const message = useLoaderData();
  const loginError = useActionData();
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const loggedIn = localStorage.getItem("loggedIn");

  if (loggedIn) {
    return <Navigate to="/host" />;
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const validate = () => {
    const { email, password } = formData;
    const validEmail = /^[a-zA-Z][a-zA-Z0-9]*@gmail.com$/;
    let isValid = true;
    if (
      email.split("@")[0].length < 4 || // The number of letters in the name must be at least 4
      [...new Set(email.split("@")[0])].length <= 1 || // Test whether this name is a duplicate or a real name
      !validEmail.test(email) // Test whether the entire email contains the correct general form or not
    ) {
      setEmailError(true);
      isValid = false;
    }
    if (password.length < 6) {
      setPasswordError(true);
      isValid = false;
    }
    return isValid;
  };

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
    if (name === "email") setEmailError(false);
    if (name === "password") setPasswordError(false);
  };

  const handleSubmit = (e) => {
    if (!validate()) {
      e.preventDefault();
    }
  };

  return (
    <section className="login-page container">
      <h2>Sign in to your account</h2>
      <Form method="post" replace onSubmit={handleSubmit}>
        {message && <p className="invaild-mes">{message}</p>}
        {loginError?.loginError && (
          <p className="invaild-mes">Invalid Email or Password.</p>
        )}
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Example@gmail.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {emailError && (
            <p className="mes-error">Invalid email. Enter example@gmail.com</p>
          )}
        </label>
        <label>
          Password
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {showPassword ? (
            <HideEyeIcon onClick={handleClickShowPassword} />
          ) : (
            <EyeIcon onClick={handleClickShowPassword} />
          )}
        </label>
        {passwordError && (
          <p className="mes-error pass">Minimum 6 characters are required</p>
        )}
        <p className="text-account">
          {"Don't"} have an account? <Link to="/register">Create one now</Link>
        </p>
        <button
          disabled={navigation.state !== "idle"}
          type="submit"
          className="submit"
        >
          {navigation.state !== "idle" ? (
            <div className="spinner"></div>
          ) : (
            "Log in"
          )}
        </button>
      </Form>
    </section>
  );
}

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  // Server-side validation can be included here if needed

  try {
    await loginUser({ email, password });
    localStorage.setItem("loggedIn", true);
    return redirect("/host");
  } catch (error) {
    console.log(error);
    return { loginError: "Invalid Email or Password." };
  }
};

*/
