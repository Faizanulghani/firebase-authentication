import DashboardLayout from "../components/DashboardLayout";

const layout = ({ children }) => {
  return (
    <div>
      <DashboardLayout>{children}</DashboardLayout>
    </div>
  );
};

export default layout;
