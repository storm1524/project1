import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // contoh: ambil data dari form
    const { nama, instansi, telepon } = body;

    console.log("Data diterima:", nama, instansi, telepon);

    // di sini nanti bisa tambahin kirim ke Fonnte/Email/WA

    return NextResponse.json(
      { success: true, message: "Data berhasil dikirim" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
