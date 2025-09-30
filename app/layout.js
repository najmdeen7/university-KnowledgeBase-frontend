import Header from './Combonents/Header';
import Footer from './Combonents/Footer';
import './globals.css';

export const metadata = {
    title: 'مركز المساعدة - جامعة طرابلس',
    description: 'مركز المساعدة لطلاب ومنتسبي جامعة طرابلس',
};

export default function RootLayout({ children }) {
    return (
        <html lang="ar" dir="rtl">
        <body>
        {/* These 3 classes create the sticky footer layout */}
        <div className="flex flex-col min-h-screen">
            <Header />

            {/* This "main" element will now grow to fill all empty space */}
            <main className="flex-grow ">
                {children}
            </main>

            <Footer />
        </div>
        </body>
        </html>
    );
}