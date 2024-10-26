import Navbar from "./User/Navbar";

type Props = {
  children: React.ReactNode;
};

const UserLayout: React.FC<Props> = (props) => {
  return (
    <>
      <main className="w-full">
        <Navbar></Navbar>
        <div>{props.children}</div>
      </main>
    </>
  );
};

export default UserLayout;
