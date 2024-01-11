const Navbar = () => {
  return (
    <>
      <div className="navbar  bg-neutral text-neutral-content">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Kuli IT Tecno</a>
        </div>
        <div className="flex-none text-black">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://i.ibb.co/cJ8G4XP/profile.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;