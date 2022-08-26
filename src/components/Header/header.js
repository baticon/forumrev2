import style from "./header.module.css";

const Header = () => {
  const userAuthorized = sessionStorage.getItem("ACCESS_TOKEN");
  return (
    <div className={style.Header}>
      <div className={style.container}>
        <span>Batyrbek's Reddit clone</span>

        {!userAuthorized ? (
          <div className={style.HeaderNavElements}>
            {" "}
            <a href="/login" className={style.HeaderAuthBtn}>
              Login
            </a>
            <a href="/registration" className={style.HeaderRegBtn}>
              Sign Up
            </a>{" "}
          </div>
        ) : (
          <div className={style.HeaderNavElements}>
            <a href="/notReady" className={style.HeaderAuthBtn}>
              Profile
            </a>
            <a
              href="/"
              className={style.HeaderRegBtn}
              onClick={(e) => {
                e.preventDefault();
                sessionStorage.clear();
                window.location.reload();
              }}
            >
              Exit
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
