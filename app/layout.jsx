// global styles
import './global.css';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head />
      <body
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {children}
      </body>
    </html>
  );
}
