type Prop = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Prop) {
  return (
    <html lang='ru-RU'>
      <body>
        {children}
      </body>
    </html>
  );
}
