"use client"

import { Suspense, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"

function BiodataForm() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const status = searchParams.get("status") || "Tidak dipilih"

  const [nama, setNama] = useState("")
  const [instansi, setInstansi] = useState("")
  const [telp, setTelp] = useState("")
  const [gaji, setGaji] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
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
            <label className="block text-sm font-medium mb-1 text-black">
              Status
            </label>
            <input
              type="text"
              value={status}
              disabled
              className="w-full border rounded-lg px-3 py-2 bg-gray-100 text-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black">
              Nama
            </label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
              className="w-full border rounded-lg px-3 py-2 text-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black">
              Instansi
            </label>
            <input
              type="text"
              value={instansi}
              onChange={(e) => setInstansi(e.target.value)}
              required
              className="w-full border rounded-lg px-3 py-2 text-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black">
              Nomor HP
            </label>
            <input
              type="tel"
              value={telp}
              onChange={(e) => setTelp(e.target.value)}
              required
              className="w-full border rounded-lg px-3 py-2 text-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black">
              Range Gaji
            </label>
            <select
              value={gaji}
              onChange={(e) => setGaji(e.target.value)}
              required
              className="w-full border rounded-lg px-3 py-2 text-black"
            >
              <option value="">Pilih range</option>
              <option value="3-5jt">3 - 5 juta</option>
              <option value="5-10jt">5 - 10 juta</option>
              <option value="10-15jt">10 - 15 juta</option>
              <option value="15-25jt">15 - 25 juta</option>
              <option value="25jt+">25 juta ke atas</option>
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

export default function BiodataPage() {
  return (
    <Suspense fallback={<div className="text-center p-6">Loading...</div>}>
      <BiodataForm />
    </Suspense>
  )
}
