import Image from "next/image";
import Link from "next/link";
import { FaBluesky, FaGithub, FaArrowRight } from "react-icons/fa6";

/*
 * SNS系リンクの定義リスト
 * アイコンは react-icons を使用
 */
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/koh-tom",
    icon: FaGithub,
    className: "text-gray-400 hover:text-white transition-colors",
  },
  {
    name: "BlueSky",
    url: "https://bsky.app/profile/coysdaje.bsky.social",
    icon: FaBluesky,
    className: "text-blue-500 hover:text-blue-400 transition-colors",
  },
];

/*
 * Aboutセクションコンポーネント
 *
 * プロフ画像、自己紹介文、SNSリンクを表示
 */
export function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-black text-white">
      <div className="container mx-auto">
        {/* プロフィール概要エリア */}
        <div className="grid md:grid-cols-3 gap-12 items-center mb-20">
          {/* プロフィール画像 */}
          <div className="md:col-span-1 flex justify-center">
            <Image
              src="/images/enje.png"
              alt="enje"
              width={150}
              height={150}
              className="rounded-full border-4 border-gray-700"
              priority
            />
          </div>

          {/* 自己紹介テキスト */}
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">自己紹介 / About Me</h2>
            <p className="text-gray-300 mb-4 max-w-xl mx-auto md:mx-0">
              Webアプリケーション開発とFPGAの世界に情熱を注ぐ、ソフトウェアエンジニア学生です。
              <br />
              FPGAやコンピュータパフォーマンスに関する研究を行っており、ソフトウェアエンジニアを志す、
              現役の大学生です。
              <br />
              FPGA/Computer Perfomance/Algorithm
              <br />
              C/C++/Assembly/Verilog/React/Rust/Ruby/Julia
              <br />
              Tottenham
              Hotspur/Azzurri/北海道日本ハムファイターズ/居飛車党(矢倉)
              <br />
              観劇/映画/読書
            </p>
            {/* SNSリンクアイコン */}
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer" // セキュリティ対策: 新しいタブで開く際に必須
                  className={link.className}
                  aria-label={link.name} // アクセシビリティ向上
                >
                  <link.icon size={30} />
                </a>
              ))}
            </div>
            <div className="mt-8 flex justify-center md:justify-start">
              <Link
                href="/about"
                className="group relative inline-flex items-center gap-3 px-8 py-3 bg-white text-black rounded-full font-bold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] active:scale-95"
              >
                <span>詳細を見る</span>
                <span className="bg-black text-white p-2 rounded-full transition-transform duration-300 group-hover:-rotate-45">
                  <FaArrowRight size={14} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
