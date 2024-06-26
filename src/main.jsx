import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Routes/routes.jsx";
import AuthProvider from "./providers/AuthProvider/AuthProvider.jsx";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import ConcernProvider from "./hooks/ConcernProvider.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ConcernProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      </ConcernProvider>
    </AuthProvider>
  </React.StrictMode>
);
