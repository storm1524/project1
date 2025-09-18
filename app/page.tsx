export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <img 
          src="/logo.png" 
          alt="Logo LINCA" 
          className="mx-auto mb-6 w-32 h-auto" 
        />
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
