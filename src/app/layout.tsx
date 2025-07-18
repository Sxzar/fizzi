import './globals.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { PrismicPreview } from '@prismicio/next';
import ViewCanvas from '@/components/ViewCanvas';
import { repositoryName } from '@/prismicio';

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="font-alpino">
            <body className="overflow-x-hidden bg-yellow-300">
                <Header />
                <main>
                    {children}
                    <ViewCanvas />
                </main>
                <Footer />
            </body>
            <PrismicPreview repositoryName={repositoryName} />
        </html>
    );
}
