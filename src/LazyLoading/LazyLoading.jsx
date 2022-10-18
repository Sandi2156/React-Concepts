import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));

function ErrorFallBack() {
	return <div>Error while lazy Loading</div>;
}

function LazyLoading() {
	return (
		<Router>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
			<Switch>
				<ErrorBoundary FallbackComponent={ErrorFallBack} onReset={() => {}}>
					<Suspense fallback={<div>...loading</div>}>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
					</Suspense>
				</ErrorBoundary>
			</Switch>
		</Router>
	);
}

export default LazyLoading;
