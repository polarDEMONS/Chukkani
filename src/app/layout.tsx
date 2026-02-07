export const metadata = { title: 'Chukkani - Book IMDB', description: 'IMDB-style database for books' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
