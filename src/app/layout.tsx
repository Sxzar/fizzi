import './globals.css';

import Header from '@/components/Header';
import { PrismicPreview } from '@prismicio/next';
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
                <main>{children}</main>
            </body>
            <PrismicPreview repositoryName={repositoryName} />
        </html>
    );
}
