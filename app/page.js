export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const nama = e.target.nama.value;
    const wa = e.target.wa.value;
    const paket = e.target.paket.value;
    const pesan = e.target.pesan.value;
    const url = `https://wa.me/6281234567890?text=Halo%2C%20saya%20${nama}%20tertarik%20dengan%20paket%20${paket}.%20Pesan%3A%20${pesan}`;
    window.open(url, "_blank");
  };

  return (
    <main className="bg-cream text-brown min-h-screen">
      <header className="bg-brown text-white p-4">
        <div className="container mx-auto flex justify-between">
          <h1 className="font-bold text-lg">Mitra Ternak Kambing</h1>
          <nav className="space-x-4">
            <a href="#paket" className="hover:underline">Paket Usaha</a>
            <a href="#form" className="hover:underline">Daftar Mitra</a>
          </nav>
        </div>
      </header>

      <section className="bg-mocha py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Bergabung Jadi Mitra Ternak Kambing</h2>
        <p>Usaha mudah, menguntungkan, dan terpercaya</p>
      </section>

      <section id="paket" className="container mx-auto py-12">
        <h3 className="text-2xl font-bold mb-6 text-center">Paket Usaha</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { nama: "Paket Pemula", harga: "Rp 3.000.000", fasilitas: ["2 ekor kambing", "Bimbingan awal"] },
            { nama: "Paket Menengah", harga: "Rp 5.000.000", fasilitas: ["4 ekor kambing", "Bimbingan langsung"] },
            { nama: "Paket Premium", harga: "Rp 8.000.000", fasilitas: ["6 ekor kambing", "Pendampingan full"] }
          ].map((paket, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow text-center">
              <h4 className="font-bold text-lg">{paket.nama}</h4>
              <p className="text-mocha font-semibold">{paket.harga}</p>
              <ul className="mt-2 text-sm">
                {paket.fasilitas.map((f, idx) => (
                  <li key={idx}>✅ {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="form" className="bg-mocha py-12 text-white">
        <div className="container mx-auto max-w-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">Form Pendaftaran Mitra</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="nama" type="text" placeholder="Nama" className="w-full p-2 rounded text-brown" required />
            <input name="wa" type="text" placeholder="Nomor WhatsApp" className="w-full p-2 rounded text-brown" required />
            <select name="paket" className="w-full p-2 rounded text-brown" required>
              <option value="">Pilih Paket</option>
              <option value="Paket Pemula">Paket Pemula</option>
              <option value="Paket Menengah">Paket Menengah</option>
              <option value="Paket Premium">Paket Premium</option>
            </select>
            <textarea name="pesan" placeholder="Pesan tambahan" className="w-full p-2 rounded text-brown"></textarea>
            <button type="submit" className="w-full bg-brown text-white py-2 rounded hover:bg-[#5A3620]">
              Kirim ke WhatsApp
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-brown text-white text-center py-4 mt-6">
        <p>© 2025 Mitra Ternak Kambing</p>
      </footer>
    </main>
  );
}
