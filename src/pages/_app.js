import Layout from "../components/layout/Layout";
import TasksProvider from "../context/tasksContext";
import { UserProvider } from "../context/userContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <TasksProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TasksProvider>
    </UserProvider>
  );
}

export default MyApp;
