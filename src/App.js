import { RouterProvider } from "react-router-dom";
import { router } from "./routers/Route/Route";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
