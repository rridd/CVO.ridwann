import RowPekerjaan from "./rowPekerjaan";

export default function RiwayatPekerjaan() {
    return (
        <div className="container mx-auto p-2 text-center">
            <div className="container mx-auto p-2 text-center pt-20">
                <h2 className="text-2x1">Riwayat Pekerjaan</h2>
            </div>
            <RowPekerjaan tahun="2021" instansi="Pedagang" sebagai="Bagian Memasak" />
            <RowPekerjaan tahun="2022" instansi="Buruh" sebagai="Bagian Packaging" />
            <RowPekerjaan tahun="2023" instansi="Pedagang" sebagai="Seller" />
            <RowPekerjaan tahun="2024" instansi="Bisnis Eksport" sebagai="Bagian Packaging" />
        </div>
    );
}