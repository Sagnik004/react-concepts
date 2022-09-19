const Dashboard = (props) => {
  const { user } = props;

  return (
    <section className="section">
      <h4>Hello, {user?.name}</h4>
    </section>
  );
};

export default Dashboard;
