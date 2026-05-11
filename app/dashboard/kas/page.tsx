"use client";

export default function KasPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">
        Input Kas Warga
      </h1>

      <select className="border p-3 rounded">
        <option>Kesehatan</option>
        <option>Keagamaan</option>
        <option>Sosial</option>
        <option>Ekonomi</option>
      </select>
    </div>
  );
}
