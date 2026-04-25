import { UserNameProvider } from "@/src/context/UserNameContext.js"
import { ToastProvider } from "@/src/context/ToastContext.js"
import { MultiplayerProvider } from "@/src/context/MultiplayerContext.js"
import Toast from "@/src/componen/toast/Toast"
import "nes.css/css/nes.min.css"
import "@/src/app/globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <ToastProvider>
          <UserNameProvider>
            <MultiplayerProvider>
              {children}
            </MultiplayerProvider>
          </UserNameProvider>
          <Toast />
        </ToastProvider>
      </body>
    </html>
  );
}
