import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLoginMutation } from "api/api";
import { useAppDispatch } from "api/hook";
import { setEmailReducer, setPasswordReducer, setToken } from "api/reducer";
import { Footer } from "components/Footer";
import { Nav } from "components/Nav";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SigninRoute: React.FC = () => {
  const dispatch = useAppDispatch();
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  return (
    <>
      <Nav content={[{ label: "Sign in", url: "/signin" }]} />
      <main className="main mt-0 flex justify-center items-center bg-dark">
        <section className="sign-in-content">
          <div className="flex flex-col gap-5">
            <FontAwesomeIcon icon={faUserCircle} className="bg-cover h-6" />
            <span className="text-2xl font-bold">Sign In</span>
          </div>
          <form
            className="mt-5 flex flex-col"
            onSubmit={(e) => {
              e.preventDefault();
              login({ email: email, password: password })
                .unwrap()
                .then((payload) => {
                  payload.body &&
                    dispatch(setToken(payload.body?.token)) &&
                    dispatch(setEmailReducer(email)) &&
                    dispatch(setPasswordReducer(password)) &&
                    navigate("/user");
                })
                .catch((error) => setError(error.data.message));
            }}
          >
            <div className="input-wrapper">
              <label htmlFor="username" className="font-bold">
                Username
              </label>
              <input
                className="border-2 border-gray-900 border-opacity-25 rounded"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password" className="font-bold">
                Password
              </label>
              <input
                type="password"
                className="border-2 border-gray-900 border-opacity-25 rounded"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" className="opacity-40" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {error && <span className="text-red-500">{error}</span>}
            <button
              type="submit"
              className="w-full transaction-button self-center cursor-pointer mt-5 hover:underline"
            >
              Sign In
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};
