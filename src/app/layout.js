import { UserNameProvider } from "@/src/context/UserNameContext.js"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
    </head>
      <body>
        <UserNameProvider> {/* Envuelve tu aplicación con el proveedor */}
          {children}
        </UserNameProvider>
      </body>
    </html>
  );
}