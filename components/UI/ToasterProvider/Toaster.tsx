"use client";

import { Toaster } from "react-hot-toast";

function ToasterProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,

        style: {
          background: "var(--foreground)",
          color: "var(--background)",
          fontSize: "16px",
          borderRadius: "4px",
          padding: "12px",
        },

        success: {
          iconTheme: {
            primary: "var(--accent)",
            secondary: "var(--primary-btn-text)",
          },
        },

        error: {
          iconTheme: {
            primary: "var(--small-accent)",
            secondary: "var(--primary-btn-text)",
          },
        },
      }}
    />
  );
}

export default ToasterProvider;
