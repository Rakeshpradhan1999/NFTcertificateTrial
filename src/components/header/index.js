import "./header.css";

const Header = ({ account, loadWeb3 }) => {
  return (
    <>
      <div className="header-main-wrapper">
        <div className="header-inner-wrapper">
          <div className="header-links-wrapper">
            <ul>
              {/* style={{ color: "#c3e747" }} */}
              <button className="header-connect-button">CONNECT</button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
