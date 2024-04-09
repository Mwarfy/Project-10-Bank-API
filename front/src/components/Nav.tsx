import { faSignOut, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import argentBank from "img/argentBankLogo.png";
import { INav } from "type/Type";

export const Nav: React.FC<{ content: INav[] }> = ({ content }) => {
  return (
    <nav className="main-nav bg-white">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image  my-2 h-12"
          src={argentBank}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div className="flex gap-5 items-center">
        {content.map((data, i) => (
          <a
            className="main-nav-item flex gap-1 items-center"
            href={data.url}
            key={i}
          >
            <FontAwesomeIcon
              icon={i === 0 ? faUserCircle : faSignOut}
              className="bg-cover"
              fontSize={i === 0 ? 20 : 15}
            />
            <span>{data.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};
