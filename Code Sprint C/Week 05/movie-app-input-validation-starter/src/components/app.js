import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AddMoviePage from "../pages/add-movie-page";
import EditMoviePage from "../pages/edit-movie-page";
import AccountPage from "../pages/account-page";
import MoviesPage from "../pages/movies-page";
import NotFoundPage from "../pages/not-found-page";
import { auth } from "../data/firebase";
import useUser from "../hooks/use-user";
import Nav from "./nav";

function AuthenticatedRoute(props) {
  const { isAuthenticated, children, ...routeProps } = props;
  return <Route {...routeProps}>{isAuthenticated ? children : <Redirect to="/account" />}</Route>;
}

function App() {
  const [isLoading, error, user] = useUser(auth);
  const isAuthenticated = user !== null;

  if (error) console.error(error);
  if (isLoading) return null;

  return (
    <BrowserRouter>
      <Nav user={user} />

      <Switch>
        <Route path="/account">
          <AccountPage user={user} />
        </Route>

        <AuthenticatedRoute path="/" exact isAuthenticated={isAuthenticated}>
          <MoviesPage user={user} />
        </AuthenticatedRoute>

        <AuthenticatedRoute path="/add" isAuthenticated={isAuthenticated}>
          <AddMoviePage user={user} />
        </AuthenticatedRoute>

        <AuthenticatedRoute path="/edit/:id" isAuthenticated={isAuthenticated}>
          <EditMoviePage user={user} />
        </AuthenticatedRoute>

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
