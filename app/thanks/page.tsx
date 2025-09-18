export default function ThanksPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-green-50">
      <div className="bg-white p-6 rounded-2xl shadow-md text-center max-w-md">
        <div className="text-5xl mb-4">✅</div>
        <h2 className="text-xl font-bold mb-2">Terima Kasih!</h2>
        <p className="text-gray-600 mb-4">
          Data Anda telah kami terima. Tim kami akan segera menghubungi Anda.
        </p>
        <a
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          Kembali ke Beranda
        </a>
      </div>
    </main>
  )
}
