import { useProfileMutation, useProfileUpdateMutation } from "api/api";
import { useAppSelector } from "api/hook";
import { Footer } from "components/Footer";
import { Nav } from "components/Nav";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IResponseProfil } from "type/Type";

export const UserRoute: React.FC = () => {
  const { token } = useAppSelector(({ reducer }) => reducer);
  const navigate = useNavigate();
  const [profilState, setProfilState] = useState<IResponseProfil>();
  const [open, setOpen] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [profile] = useProfileMutation();
  const [updateProfile] = useProfileUpdateMutation();
  const [refresh, setRefresh] = useState<number>(0);

  useEffect(() => {
    if (token) {
      profile(token).then((response) => {
        "data" in response && setProfilState(response.data);
      });
    } else {
      navigate("/");
    }
  }, [token, navigate, profile, refresh]);

  return (
    <>
      <Nav
        content={[
          { label: profilState?.body?.firstName, url: "" },
          { label: "Sign Out", url: "/" },
        ]}
      />
      <main className="main bg-dark">
        <div className="w-full flex items-center justify-center">
          <div className="flex flex-col gap-5 p-5 max-w-max items-center">
            <div className="flex flex-col text-4xl text-white font-bold">
              <span>Welcome back</span>
              <span>
                {profilState?.body?.firstName +
                  " " +
                  profilState?.body?.lastName +
                  "!"}
              </span>
            </div>
            {open ? (
              <div className="flex flex-col gap-3 w-[500px]">
                <div className="flex gap-3 h-8">
                  <input
                    className="ml-auto border-2 border-gray-900 border-opacity-20 rounded pl-3"
                    value={firstName}
                    placeholder={profilState?.body?.firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    className="mr-auto border-2 border-gray-900 border-opacity-20 rounded pl-3"
                    value={lastName}
                    placeholder={profilState?.body?.lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="flex gap-3 justify-center">
                  <button
                    className="edit-button"
                    onClick={() => {
                      console.log(firstName);
                      token &&
                        updateProfile({
                          token: token,
                          firstName: firstName,
                          lastName: lastName,
                        }).then(() => setRefresh(refresh + 1));
                    }}
                  >
                    Save
                  </button>
                  <button
                    className="edit-button"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button
                className="transaction-button"
                onClick={() => setOpen(true)}
              >
                Edit Name
              </button>
            )}
          </div>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
