import Link from "next/link";  // 1. Import Link from Next.js for navigation
import Image from "next/image"; // 2. Import Image from Next.js for optimized images

export default function Header() {
  return (
      // 3. Replaced inline style with a Tailwind class
      <header className="bg-[#E6DCC4] shadow-sm">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div>
            {/* 4. Replaced the <a> tag with the Link component */}
            <Link
                href="/"
                className="font-semibold text-[#0A2D57] hover:underline transition-colors"
            >
              العودة الى الصفحة الرئيسية
            </Link>
          </div>

          <div>
            {/* 5. Replaced <img> with the Image component and updated the path */}
            <Image
                src="/icon.svg" // This path now refers to the file in your "public" folder
                alt="شعار جامعة طرابلس"
                width={56} // Required for the Image component
                height={56} // Required for the Image component
            />
          </div>
        </div>
      </header>
  );
}