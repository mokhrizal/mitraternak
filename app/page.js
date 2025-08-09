export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 text-gray-800">
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center text-amber-800 mb-6">Mitra Ternak Kambing</h1>
        <p className="text-center text-lg mb-8">
          Menyediakan paket usaha ternak kambing terpercaya, dengan sistem kemitraan yang menguntungkan.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <h2 className="text-xl font-semibold mb-2 text-amber-700">Paket Pemula</h2>
            <p className="text-sm mb-4">Mulai usaha ternak dengan modal terjangkau.</p>
            <span className="text-lg font-bold">Rp 5 Juta</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <h2 className="text-xl font-semibold mb-2 text-amber-700">Paket Menengah</h2>
            <p className="text-sm mb-4">Kembangkan usaha dengan jumlah kambing lebih banyak.</p>
            <span className="text-lg font-bold">Rp 15 Juta</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <h2 className="text-xl font-semibold mb-2 text-amber-700">Paket Pro</h2>
            <p className="text-sm mb-4">Cocok untuk skala besar dan ekspansi pasar.</p>
            <span className="text-lg font-bold">Rp 30 Juta</span>
          </div>
        </div>

        <div className="bg-amber-700 p-6 rounded-lg text-white">
          <h3 className="text-lg font-semibold mb-2">Bergabung Menjadi Mitra</h3>
          <p className="mb-4">Isi formulir dan kami akan menghubungi Anda melalui WhatsApp.</p>
          <form
            action="https://wa.me/6281234567890"
            method="get"
            target="_blank"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Nama Lengkap"
              className="w-full p-2 rounded text-black"
              required
            />
            <input
              type="text"
              name="paket"
              placeholder="Paket yang dipilih"
              className="w-full p-2 rounded text-black"
              required
            />
            <button
              type="submit"
              className="bg-white text-amber-700 px-4 py-2 rounded font-semibold hover:bg-amber-100"
            >
              Kirim ke WhatsApp
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
