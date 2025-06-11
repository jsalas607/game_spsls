import { UserNameProvider } from "@/src/context/UserNameContext.js"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserNameProvider> {/* Envuelve tu aplicación con el proveedor */}
          {children}
        </UserNameProvider>
      </body>
    </html>
  );
}