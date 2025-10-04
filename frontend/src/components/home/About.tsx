import Image from "next/image";
import Timeline from "@/components/home/Timeline";
import { Github, Twitter } from "lucide-react";

const socialLinks = [
  { name: "GitHub", url: "#", icon: Github },
  { name: "Twitter", url: "#", icon: Twitter },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-black text-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-center mb-20">
          <div className="md:col-span-1 flex justify-center">
            <Image
              src="/images/profile.svg" // ファイルリストからのプレースホルダーを使用
              alt="enje"
              width={200}
              height={200}
              className="rounded-full border-4 border-gray-700"
            />
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-300 mb-4 max-w-xl mx-auto md:mx-0">
              I am a software engineer passionate about building modern web
              applications and exploring the world of FPGA.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-center mb-12">My Journey</h2>
        <Timeline />
      </div>
    </section>
  );
}
