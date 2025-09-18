"use client"
import { useRouter } from "next/navigation"

export default function FormStep1() {
  const router = useRouter()

  const handleSelect = (status: string) => {
    // Simpan status pekerjaan di query param
    router.push(`/form/biodata?status=${status}`)
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded-2xl shadow-md w-80 text-center">
        <h2 className="text-xl font-semibold mb-4 text-black">Pilih Status Pekerjaan</h2>
        <div className="space-y-3">
          <button
            onClick={() => handleSelect("PNS")}
            style={{ backgroundColor: '#edb436' }}
            className="w-full px-4 py-2 text-white rounded-xl hover:bg-blue-600"
          >
            PNS
          </button>
          <button
            onClick={() => handleSelect("BUMN")}
            style={{ backgroundColor: '#edb436' }}
            className="w-full px-4 py-2 text-white rounded-xl hover:bg-green-600"
          >
            BUMN
          </button>
          <button
            onClick={() => handleSelect("Swasta")}
            style={{ backgroundColor: '#edb436' }}
            className="w-full px-4 py-2 text-white rounded-xl hover:bg-purple-600"
          >
            Swasta
          </button>
        </div>
      </div>
    </main>
  )
}
