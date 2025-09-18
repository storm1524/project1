import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <Image src="/logo.png" alt="Logo" width={200} height={200} />
        <a
          href="/form"
          style={{ backgroundColor: '#143661' }}
          className="px-6 py-3 text-white rounded-xl hover:opacity-90 transition"
        >
          Mulai Simulasi
        </a>
      </div>
    </main>
  )
}
