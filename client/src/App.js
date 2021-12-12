import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Alert from "./components/layout/Alert";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import ProfileForm from "./components/profile-forms/ProfileForm";
import AddFavoritePlace from "./components/profile-forms/AddFavoritePlace";
import AddFavoriteProduct from "./components/profile-forms/AddFavoriteProduct";
import "./App.css";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute component={Dashboard} />}
          />
          <Route
            path="/create-profile"
            element={<PrivateRoute component={ProfileForm} />}
          />
          <Route
            path="/edit-profile"
            element={<PrivateRoute component={ProfileForm} />}
          />
          <Route
            path="/add-favorite-places"
            element={<PrivateRoute component={AddFavoritePlace} />}
          />
          <Route
            path="/add-favorite-products"
            element={<PrivateRoute component={AddFavoriteProduct} />}
          />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
