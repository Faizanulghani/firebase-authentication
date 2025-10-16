const Header = () => {
  return (
    <nav className="flex justify-between p-4 border-b">
      <div className="flex gap-2 items-center">
        <img src="/logo.jpg" className="h-9" alt="" />
        <h1 className="font-bold">My App</h1>
      </div>
      <button className="bg-black text-white px-3 py-2 rounded-full">
        Login
      </button>
    </nav>
  );
};

export default Header;
