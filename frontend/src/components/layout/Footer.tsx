import { Github, Twitter, Heart } from "lucide-react";

const socialLinks = [
  { name: "GitHub", url: "#", icon: Github },
  { name: "Twitter", url: "#", icon: Twitter },
];

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* コピーライト */}
        <div className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Koh TOMITA. All rights reserved.
        </div>

        {/* リンク */}
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>

        {/* 技術スタック */}
        <div className="text-sm text-center md:text-right flex items-center gap-2">
          <span>Built with</span>
          <Heart size={14} className="text-red-500" />
          <span>using Next.js, TypeScript, and Ruby on Rails</span>
        </div>
      </div>
    </footer>
  );
};
