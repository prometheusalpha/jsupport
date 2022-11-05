import Link from 'next/link'

export default function Sidebar() {
  return (
    <div
      className="flex flex-col pr-3 items-stretch text-neutral-300 pt-10 border-r border-neutral-700"
    >
      <Link
        href="/semester/one"
        className="text-left py-2 px-2 font-medium rounded-xl hover:bg-neutral-800"
      >Kỳ 1</Link
      >
      <a
        href="/two"
        className="text-left py-2 px-2 font-medium rounded-xl hover:bg-neutral-800"
      >
        Kỳ 2</a
      >
      <a
        href="/three"
        className="text-left py-2 px-2 font-medium rounded-xl hover:bg-neutral-800"
      >
        Kỳ 3</a
      >
      <a
        href="/four"
        className="text-left py-2 px-2 font-medium rounded-xl hover:bg-neutral-800"
      >
        Kỳ 4</a
      >
      <a
        href="/five"
        className="text-left py-2 px-2 font-medium rounded-xl hover:bg-neutral-800"
      >
        Kỳ 5</a
      >
      <a
        href="/six"
        className="text-left py-2 px-2 font-medium rounded-xl hover:bg-neutral-800"
      >
        Kỳ 6</a
      >
      <a
        href="/seven"
        className="text-left py-2 px-2 font-medium rounded-xl hover:bg-neutral-800"
      >
        Kỳ 7</a
      >
      <a
        href="/eight"
        className="text-left py-2 px-2 font-medium rounded-xl hover:bg-neutral-800"
      >
        Kỳ 8</a
      >
      <a
        href="/nine"
        className="text-left py-2 px-2 font-medium rounded-xl hover:bg-neutral-800"
      >
        Kỳ 9</a
      >
      <a
        href="/other"
        className="text-left py-2 px-2 font-medium rounded-xl hover:bg-neutral-800"
      >
        Khác</a
      >
    </div>)
}
