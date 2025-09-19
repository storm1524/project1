"use client"

import { Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"

function HasilContent() {
  const searchParams = useSearchParams()
  const router = useRouter()

  // Ambil data dari query
  const status = searchParams.get("status") || ""
  const nama = searchParams.get("nama") || ""
  const instansi = searchParams.get("instansi") || ""
  const telp = searchParams.get("telp") || ""
  const gaji = searchParams.get("gaji") || ""
  const jumlah = Number(searchParams.get("jumlah") || 0)
  const tenor = Number(searchParams.get("tenor") || 0)

  // Tentukan rate bunga berdasarkan status
  let rate = 0.17 // default 17% per tahun
  if (status === "PNS") rate = 0.0825
  if (status === "BUMN") rate = 0.0825
  if (status === "Swasta") rate = 0.105

  // Tentukan rate bunga berdasarkan status dan instansi
  let rate = 0.17 // default 17% per tahun
  
  if (status === "PNS" || status === "BUMN") {
    rate = 0.0825
  } else if (status === "Swasta" && (instansi.toLowerCase() === "chakra jawara" || instansi.toLowerCase() === "cakra jawara")) {
    rate = 0.105
  } else if (status === "Swasta") {
    rate = 0.17
  }

  const handleSubmit = () => {
    router.push("/thanks")
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold text-black mb-4">Hasil Simulasi</h2>

        <div className="space-y-2 text-sm text-black">
          <p><strong>Nama:</strong> {nama}</p>
          <p><strong>Status:</strong> {status}</p>
          <p><strong>Instansi:</strong> {instansi}</p>
          <p><strong>Telp:</strong> {telp}</p>
          <p><strong>Gaji:</strong> {gaji}</p>
          <p><strong>Pinjaman:</strong> Rp {jumlah.toLocaleString("id-ID")}</p>
          <p><strong>Tenor:</strong> {tenor} bulan</p>
          <p><strong>Rate:</strong> {(rate * 100).toFixed(2)}% per tahun</p>
        </div>

        <hr className="my-4" />

        <div className="space-y-1 text-black">
          <p>
            <strong>Angsuran:</strong> Rp {Math.round(angsuran).toLocaleString("id-ID")}
          </p>
          <p>
            <strong>Dana yang bisa digunakan:</strong> Rp {Math.round(totalDana).toLocaleString("id-ID")}
          </p>
        </div>

        <div className="mt-6 space-y-2">
          <button
            onClick={handleSubmit}
            className="w-full px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700"
          >
            Kirim Data
          </button>
          <button
            onClick={() => router.back()}
            style={{ backgroundColor: '#143661' }}
            className="w-full px-4 py-2 rounded-xl hover:bg-gray-300"
          >
            Hitung Ulang
          </button>
        </div>
      </div>
    </main>
  )
}

export default function HasilPage() {
  return (
    <Suspense fallback={<div className="p-6 text-center">Memuat hasil simulasi...</div>}>
      <HasilContent />
    </Suspense>
  )
}
