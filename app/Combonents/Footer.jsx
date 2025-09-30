import Link from "next/link"; // 1. Import Link from Next.js

export default function Footer() {
  return (
      <div className="bg-[#0A2D57] text-white p-8 w-full text-right">
        <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">عن الجامعة</h3>
            <ul className="space-y-2">
              <li>
                <Link
                    href="/events"
                    className="text-gray-300 hover:text-white transition-colors"
                >
                  اهم الاحداث القادمة
                </Link>
              </li>
              <li>
                <Link
                    href="/research"
                    className="text-gray-300 hover:text-white transition-colors"
                >
                  البحث العلمي
                </Link>
              </li>
              <li>
                <Link
                    href="/map"
                    className="text-gray-300 hover:text-white transition-colors"
                >
                  خريطة الجامعة
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">روابط هامة</h3>
            <ul className="space-y-2">
              <li>
                <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors"
                >
                  الموقع الرئيسي
                </Link>
              </li>
              <li>
                <Link
                    href="/portal"
                    className="text-gray-300 hover:text-white transition-colors"
                >
                  البوابة الرقمية
                </Link>
              </li>
              <li>
                <Link
                    href="/journals"
                    className="text-gray-300 hover:text-white transition-colors"
                >
                  المجلات العلمية
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
            <div className="flex gap-4">
              <a
                  href="https://facebook.com"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <svg
                    className="h-6 w-6 text-gray-300 hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="mailto:info@university.edu" aria-label="Email">
                <svg
                    className="h-6 w-6 text-gray-300 hover:text-white transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-white/20 text-gray-400 text-sm">
          <p>© 2025 جامعة طرابلس. جميع الحقوق محفوظة.</p>
        </div>
      </div>
  );
}
