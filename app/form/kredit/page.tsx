"use client"

import { Suspense, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"

function KreditContent() {
  const searchParams = useSearchParams()
  const router = useRouter()

  // Ambil data sebelumnya
  const status = searchParams.get("status") || ""
  const nama = searchParams.get("nama") || ""
  const instansi = searchParams.get("instansi") || ""
  const telp = searchParams.get("telp") || ""
  const gaji = searchParams.get("gaji") || ""

  // State untuk input kredit
  const [jumlah, setJumlah] = useState(10000000) // default 10 juta
  const [tenor, setTenor] = useState("12") // default 12 bulan

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const query = new URLSearchParams({
      status,
      nama,
      instansi,
      telp,
      gaji,
      jumlah: jumlah.toString(),
      tenor,
    }).toString()

    router.push(`/form/hasil?${query}`)
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-black">Pilih Kredit</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Slider Jumlah Pinjaman */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Jumlah Pinjaman
            </label>
            <input
              type="range"
              min="2500000"
              max="500000000"
              step="5000000"
              value={jumlah}
              onChange={(e) => setJumlah(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-right font-medium mt-1 text-black">
              Rp {jumlah.toLocaleString("id-ID")}
            </div>
          </div>

          {/* Dropdown Tenor */}
          <div>
            <label className="block text-sm font-medium mb-1 text-black">Tenor</label>
            <select
              value={tenor}
              onChange={(e) => setTenor(e.target.value)}
              required
              className="w-full border rounded-lg px-3 py-2 text-black"
            >
              <option value="6">6 bulan</option>
              <option value="12">12 bulan</option>
              <option value="24">24 bulan</option>
              <option value="36">36 bulan</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
          >
            Hitung
          </button>
        </form>
      </div>
    </main>
  )
}

export default function KreditPage() {
  return (
    <Suspense fallback={<div className="p-6 text-center">Memuat form kredit...</div>}>
      <KreditContent />
    </Suspense>
  )
}
