import React, { lazy, Suspense, Fragment } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const Movies = lazy(() => import("./pages/Movies"));
const TvShows = lazy(() => import("./pages/Tv"));
const NewRealesed = lazy(() => import("./pages/NewRealesed"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Login = lazy(() => import("./pages/Login"));
const ProtectedRoute = lazy(() => import("./utils/protectedRoute"));

const Routes = () => {
  const location = useLocation();

  const SuspenseLoading = () => {
    return (
      <Fragment>
        <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
          <div className="text-muted font-size-xl text-center pt-3">
            Please wait while we load the live preview examples
            <span className="font-size-lg d-block text-dark">
              This live preview instance can be slower than a real production
              build!
            </span>
          </div>
        </div>
      </Fragment>
    );
  };
  return (
    <Suspense fallback={<SuspenseLoading />}>
      <Switch>
        
        <Route path="/login" component={Login} />
        <Route
          path={[
            "/",
            "/search/:terms",
            "/movies",
            "/tv",
            "/new",
            "/wishlist",
            "/login",
          ]}
        >
          <Switch location={location} key={location.pathname}>
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/search/:terms" component={Search} />
            <ProtectedRoute exact path="/movies" component={Movies} />
            <ProtectedRoute exact path="/tv" component={TvShows} />
            {/* <ProtectedRoute exact path="/new" component={NewRealesed} /> */}
            <ProtectedRoute exact path="/wishlist" component={Wishlist} />
          </Switch>
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
