const Navbar = ({ websiteName, ulList }) => {
  const lista = ulList.map();

  return (
    <nav>
      <div>
        <h1>{websiteName}</h1>
      </div>
      <ul>{lista}</ul>
    </nav>
  );
};
export default Navbar;
