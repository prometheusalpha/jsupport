import Footer from './components/Footer'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export default function Home() {
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
              <h1 className="text-5xl py-8 font-semibold">JSupport</h1>
              <p className="py-3">Nơi bạn được giúp đỡ</p>
              <h1 className="text-4xl py-8 font-semibold">Hot topics</h1>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="/"
                  className="rounded-lg border border-neutral-600 overflow-hidden group"
                >
                  <img src="https://picsum.photos/300/200" className="w-full" alt="" />
                  <p
                    className="bg-neutral-700 p-2 text-center font-semibold group-hover:bg-neutral-800 duration-75"
                  >
                    Kỳ 3
                  </p>
                </a>
                <a
                  href="/"
                  className="rounded-lg border border-neutral-600 overflow-hidden group"
                >
                  <img src="https://picsum.photos/300/200" className="w-full" alt="" />
                  <p
                    className="bg-neutral-700 p-2 text-center font-semibold group-hover:bg-neutral-800 duration-75"
                  >
                    Kỳ 1
                  </p>
                </a>
                <a
                  href="/"
                  className="rounded-lg border border-neutral-600 overflow-hidden group"
                >
                  <img src="https://picsum.photos/300/200" className="w-full" alt="" />
                  <p
                    className="bg-neutral-700 p-2 text-center font-semibold group-hover:bg-neutral-800 duration-75"
                  >
                    Kỳ 6
                  </p>
                </a>
                <a
                  href="/"
                  className="rounded-lg border border-neutral-600 overflow-hidden group"
                >
                  <img src="https://picsum.photos/300/200" className="w-full" alt="" />
                  <p
                    className="bg-neutral-700 p-2 text-center font-semibold group-hover:bg-neutral-800 duration-75"
                  >
                    Kỳ 2
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="border-l border-neutral-700" />
        </div>
      </div>
      <Footer />
    </main>
  )
}
