import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Template() {
  return (

    <main
      className="flex flex-col items-stretch bg-neutral-900 text-neutral-300 text-center mx-0 min-h-screen"
    >
      <Header />
      <div className="px-2 grow">
        <div
          className="min-h-screen max-w-[1500px] mx-auto grid grid-cols-[150px_7fr_2fr] lg:grid-cols-[200px_7fr_2fr]"
        >
          <Sidebar />
          <div className="p-2 text-left">
            <div className="max-w-[60ch] pt-12 mx-auto">
              <article className="prose prose-lg prose-invert">
              </article>
            </div>
          </div>
          <div className="border-l border-neutral-700" />
        </div>
      </div>
      <Footer />
    </main>
  )
}
