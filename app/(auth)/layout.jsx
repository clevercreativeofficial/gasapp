export const metadata = {
  title: "Yoonda - Auth",
  description: "Yoonda is an online chat platform for young people across the globe",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <div className="z-20">
        {children}
        </div>
      </body>
    </html>
  );
}
