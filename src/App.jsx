import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";

import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from "react-router-dom";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path='/'
			element={<MainLayout />}
		>
			<Route
				index
				element={<HomePage />}
			/>
		</Route>
	)
);

export default function App() {
	return <RouterProvider router={router} />;
}
