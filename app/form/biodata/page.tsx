"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useState } from "react"

export default function BiodataPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const status = searchParams.get("status") || "Tidak dipilih"

  const [nama, setNama] = useState("")
  const [instansi, setInstansi] = useState("")
  const [telp, setTelp] = useState("")
  const [gaji, setGaji] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // kirim data ke step berikut
    const query = new URLSearchParams({
      status,
      nama,
      instansi,
      telp,
      gaji,
    }).toString()

    router.push(`/form/kredit?${query}`)
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-black">Isi Biodata</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-black">Status</label>
            <input
              type="text"
              value={status}
              disabled
              className="w-full border rounded-lg px-3 py-2 bg-gray-100 text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-black">Nama</label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
              className="w-full border rounded-lg px-3 py-2 text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-black">Instansi</label>
            <input
              type="text"
              value={instansi}
              onChange={(e) => setInstansi(e.target.value)}
              required
              className="w-full border rounded-lg px-3 py-2 text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-black">Nomor HP</label>
            <input
              type="tel"
              value={telp}
              onChange={(e) => setTelp(e.target.value)}
              required
              className="w-full border rounded-lg px-3 py-2 text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-black">Range Gaji</label>
            <select
              value={gaji}
              onChange={(e) => setGaji(e.target.value)}
              required
              className="w-full border rounded-lg px-3 py-2 text-black text-black"
            >
              <option value="">Pilih range</option>
              <option value="2-5jt">2 - 5 juta</option>
              <option value="5-10jt">5 - 10 juta</option>
              <option value="10-20jt">10 - 20 juta</option>
              <option value="20jt+">20 juta ke atas</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
          >
            Lanjut
          </button>
        </form>
      </div>
    </main>
  )
}
