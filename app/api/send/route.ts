import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    console.log("Data diterima:", data)

    // ===============================
    // TODO: Tambahkan integrasi email/WA di sini
    // contoh pakai Resend API atau Twilio/Fonnte
    // ===============================

    return NextResponse.json({
      success: true,
      message: "Data berhasil diterima",
    })
  } catch (error) {
    console.error("Error API send:", error)
    return NextResponse.json(
      { success: false, message: "Gagal kirim data" },
      { status: 500 }
    )
  }
}
