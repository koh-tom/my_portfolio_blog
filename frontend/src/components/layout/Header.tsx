import Link from "next/link";
import { ModeToggle } from "@/components/theme-toggle";

export const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          enje's Portfolio & Blog
        </Link>
        <div className="flex items-center gap-4">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/portfolio" className="hover:text-gray-400">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-400">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
