import localFont from "next/font/local";

const ubuntuRegular = localFont({
  src: "./fonts/Ubuntu-Regular.ttf",
  variable: "--font-ubuntu-regular",
});

export default function Home() {
  return (
    <div
      className={`${ubuntuRegular.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-ubuntu-regular)]`}
    >
      <h1>Sketchpad</h1>
    </div>
  );
}
