// RiwayatPendidikan.js
import React from 'react';

// Definisikan komponen RiwayatPendidikan yang menerima props
function RiwayatPendidikan({ pendidikan }) {
  return (
    <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-50-800 p-2 my-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-3">{pendidikan.jenjang}</div>
          <div className="col-span-12 md:col-span-3">{pendidikan.namaSekolah}</div>
          <div className="col-span-12 md:col-span-3">{pendidikan.tahun}</div>
        </div>
      </div>
    </div>
  );
}

export default RiwayatPendidikan;