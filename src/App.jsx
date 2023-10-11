import { Provider } from "react-redux";
import Navbar from "./Components/Navbar";
import UserDetails from "./Components/UserDetails";
import store from "./Store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <UserDetails />
      </Provider>
    </>
  );
};

export default App;
