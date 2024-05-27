"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/store";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="pt-br">
        <title>teste</title>

        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>

      </html>
    </Provider>

  );
}
