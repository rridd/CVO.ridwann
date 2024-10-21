import RowRiwayat from "./rowRiwayat";

export default function RiwayatPendidikan() {
    return (
        <div className="container mx-auto p-2 text-center">
            <div className="container mx-auto p-2 text-center pt-20">
                <h2 className="text-2x1">Riwayat Pendidikan</h2>
            </div>
            <RowRiwayat jenjang="SD" sekolah="SDN 02 Ciranjang " tahun="2009 - 2015" />
            <RowRiwayat jenjang="SMP" sekolah="Mts Cilageni Kadungora" tahun="2015 - 2018" />
            <RowRiwayat jenjang="SMK" sekolah="MA Ma'arif Cilageni kadungora" tahun="2018 - 2021" />
            <RowRiwayat jenjang="Perguruan Tinggi" sekolah="Universitas Ma'soem" tahun="2022 - 2026" />
        </div>
    );
}