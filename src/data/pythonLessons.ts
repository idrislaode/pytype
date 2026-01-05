export interface Lesson {
  id: number;
  title: string;
  description: string;
  icon: string;
  category: string;
  snippets: string[];
}

export const pythonLessons: Lesson[] = [
  // === LEVEL 1-10: PENGENALAN PYTHON ===
  {
    id: 1,
    title: "Apa itu Python?",
    description: "Pengenalan bahasa pemrograman Python",
    icon: "🐍",
    category: "Pengenalan",
    snippets: [
      `# Selamat datang di Python!
# Python adalah bahasa pemrograman
# Python dibuat oleh Guido van Rossum
# Python pertama kali rilis tahun 1991
# Python mudah dipelajari untuk pemula`,
      `# Python sangat populer di dunia
# Python digunakan oleh Google
# Python digunakan oleh Instagram
# Python digunakan oleh Netflix
# Python digunakan oleh Spotify`,
      `# Keunggulan Python antara lain:
# 1. Sintaks yang mudah dibaca
# 2. Banyak library tersedia
# 3. Komunitas yang besar
# 4. Gratis dan open source`,
    ],
  },
  {
    id: 2,
    title: "Mengapa Belajar Python?",
    description: "Alasan kenapa Python layak dipelajari",
    icon: "🎯",
    category: "Pengenalan",
    snippets: [
      `# Python untuk berbagai bidang:
# 1. Web Development
# 2. Data Science
# 3. Machine Learning
# 4. Automation
# 5. Game Development`,
      `# Python mudah untuk pemula
# Kode Python mirip bahasa Inggris
# Tidak perlu titik koma di akhir
# Indentasi menentukan blok kode
# Error message mudah dipahami`,
      `# Karir dengan Python:
# 1. Data Scientist
# 2. Web Developer
# 3. Machine Learning Engineer
# 4. DevOps Engineer
# 5. Software Engineer`,
    ],
  },
  {
    id: 3,
    title: "Cara Kerja Python",
    description: "Memahami bagaimana Python bekerja",
    icon: "⚡",
    category: "Pengenalan",
    snippets: [
      `# Python adalah interpreted language
# Kode dieksekusi baris per baris
# Tidak perlu compile seperti Java
# Python membaca dari atas ke bawah
# Setiap baris langsung dijalankan`,
      `# Interpreter Python bekerja:
# 1. Baca kode sumber
# 2. Parse menjadi token
# 3. Compile ke bytecode
# 4. Eksekusi bytecode
# 5. Tampilkan hasil`,
      `# File Python berekstensi .py
# Contoh: program.py
# Contoh: aplikasi.py
# Contoh: game.py
# Jalankan dengan: python file.py`,
    ],
  },
  {
    id: 4,
    title: "Komentar di Python",
    description: "Cara menulis komentar dalam kode",
    icon: "💬",
    category: "Pengenalan",
    snippets: [
      `# Ini adalah komentar satu baris
# Komentar dimulai dengan tanda pagar
# Komentar tidak dieksekusi
# Komentar untuk penjelasan kode
# Komentar membantu programmer lain`,
      `# Komentar penting untuk:
# 1. Menjelaskan kode yang rumit
# 2. Meninggalkan catatan
# 3. Menonaktifkan kode sementara
# 4. Dokumentasi program
# 5. Memudahkan maintenance`,
      `# Tips menulis komentar:
# Tulis komentar yang jelas
# Jangan terlalu panjang
# Gunakan bahasa yang konsisten
# Update komentar saat kode berubah`,
    ],
  },
  {
    id: 5,
    title: "Print - Menampilkan Output",
    description: "Cara menampilkan teks ke layar",
    icon: "🖨️",
    category: "Pengenalan",
    snippets: [
      `# print() untuk menampilkan output
# Teks harus dalam tanda kutip
print("Halo Dunia!")
print("Selamat belajar Python")
print("Ini adalah output")`,
      `# print bisa dengan kutip tunggal
# atau kutip ganda, keduanya sama
print('Halo dengan kutip tunggal')
print("Halo dengan kutip ganda")
print("Python itu menyenangkan")`,
      `# print beberapa baris sekaligus
print("Baris pertama")
print("Baris kedua")
print("Baris ketiga")
print("Baris keempat")`,
    ],
  },
  {
    id: 6,
    title: "Indentasi Python",
    description: "Pentingnya indentasi dalam Python",
    icon: "↔️",
    category: "Pengenalan",
    snippets: [
      `# Indentasi adalah spasi di awal baris
# Python menggunakan indentasi
# untuk menentukan blok kode
# Biasanya 4 spasi atau 1 tab
# Indentasi harus konsisten`,
      `# Contoh indentasi yang benar:
# Blok kode dalam if harus indent
# Semua baris dalam blok sama
# Gunakan 4 spasi untuk standar
# Jangan campur tab dan spasi`,
      `# Indentasi menunjukkan hierarki
# Kode di dalam fungsi indent
# Kode di dalam loop indent
# Kode di dalam kondisi indent
# Konsistensi sangat penting`,
    ],
  },
  {
    id: 7,
    title: "Apa itu Variabel?",
    description: "Konsep dasar variabel",
    icon: "📦",
    category: "Variabel",
    snippets: [
      `# Variabel adalah wadah data
# Bayangkan seperti kotak penyimpanan
# Setiap kotak punya nama
# Di dalam kotak ada isinya
# Isi bisa diambil atau diganti`,
      `# Variabel menyimpan nilai
# Nilai bisa berupa angka
# Nilai bisa berupa teks
# Nilai bisa berupa apapun
# Variabel memudahkan pengelolaan`,
      `# Analogi variabel:
# nama_kotak = isi_kotak
# Nama di kiri tanda sama dengan
# Nilai di kanan tanda sama dengan
# Python mengingat pasangan ini`,
    ],
  },
  {
    id: 8,
    title: "Membuat Variabel",
    description: "Cara membuat variabel di Python",
    icon: "✏️",
    category: "Variabel",
    snippets: [
      `# Cara membuat variabel sangat mudah
# Tulis nama, lalu sama dengan, lalu nilai
nama = "Bowo"
umur = 25
kota = "Solo"`,
      `# Variabel tidak perlu deklarasi tipe
# Python otomatis menentukan tipe
nama = "Wowo"
tinggi = 165
berat = 55.5`,
      `# Beberapa variabel sekaligus
nama = "Joko"
alamat = "Semarang"
telepon = "08123456789"
email = "joko@email.com"`,
    ],
  },
  {
    id: 9,
    title: "Aturan Nama Variabel",
    description: "Cara penamaan variabel yang benar",
    icon: "📝",
    category: "Variabel",
    snippets: [
      `# Nama variabel harus diawali huruf
# Atau bisa diawali underscore
# Tidak boleh diawali angka
nama_depan = "Bowo"
_variabel_privat = "rahasia"
namaUser = "Joko"`,
      `# Nama variabel case sensitive
# huruf besar dan kecil berbeda
Nama = "Bowo"
nama = "Wowo"
NAMA = "Joko"`,
      `# Gunakan nama yang deskriptif
# Hindari nama satu huruf
jumlah_siswa = 30
total_harga = 150000
rata_rata_nilai = 85.5`,
    ],
  },
  {
    id: 10,
    title: "Mengubah Nilai Variabel",
    description: "Cara mengubah nilai variabel",
    icon: "🔄",
    category: "Variabel",
    snippets: [
      `# Nilai variabel bisa diubah
# Cukup assign nilai baru
skor = 100
skor = 150
skor = 200
print(skor)`,
      `# Variabel bisa ubah tipe data
# Python sangat fleksibel
data = 100
data = "seratus"
data = 100.0
data = True`,
      `# Nilai lama akan hilang
# Diganti dengan nilai baru
pesan = "Halo"
pesan = "Selamat Pagi"
pesan = "Selamat Malam"`,
    ],
  },
  
  // === LEVEL 11-20: TIPE DATA ===
  {
    id: 11,
    title: "Apa itu Tipe Data?",
    description: "Pengenalan konsep tipe data",
    icon: "🏷️",
    category: "Tipe Data",
    snippets: [
      `# Tipe data menentukan jenis nilai
# Setiap nilai punya tipe data
# Python punya banyak tipe data
# Tipe data penting dipahami
# Operasi tergantung tipe data`,
      `# Tipe data utama di Python:
# 1. String untuk teks
# 2. Integer untuk bilangan bulat
# 3. Float untuk bilangan desimal
# 4. Boolean untuk benar atau salah`,
      `# Gunakan type() untuk cek tipe
# type(nilai) mengembalikan tipe
# Berguna untuk debugging
# Memastikan tipe yang benar`,
    ],
  },
  {
    id: 12,
    title: "String - Tipe Teks",
    description: "Memahami tipe data string",
    icon: "📜",
    category: "Tipe Data",
    snippets: [
      `# String adalah tipe data teks
# Ditulis dalam tanda kutip
# Bisa kutip tunggal atau ganda
nama = "Indonesia"
pesan = 'Selamat datang'
kota = "Jakarta"`,
      `# String bisa berisi apa saja
# Huruf, angka, simbol, spasi
alamat = "Jl. Merdeka No. 17"
telepon = "021-5551234"
email = "user@email.com"`,
      `# String kosong juga valid
# Berguna untuk inisialisasi
kosong = ""
juga_kosong = ''
pesan = "Akan diisi nanti"`,
    ],
  },
  {
    id: 13,
    title: "Integer - Bilangan Bulat",
    description: "Memahami tipe data integer",
    icon: "🔢",
    category: "Tipe Data",
    snippets: [
      `# Integer adalah bilangan bulat
# Tidak ada titik desimal
# Bisa positif atau negatif
umur = 25
tahun = 2024
suhu = -5`,
      `# Integer untuk menghitung
# Jumlah, kuantitas, urutan
jumlah_siswa = 30
halaman = 150
stok_barang = 1000`,
      `# Integer bisa sangat besar
# Python tidak ada batas
angka_besar = 999999999999
populasi = 270000000
jarak_km = 149600000`,
    ],
  },
  {
    id: 14,
    title: "Float - Bilangan Desimal",
    description: "Memahami tipe data float",
    icon: "🔣",
    category: "Tipe Data",
    snippets: [
      `# Float adalah bilangan desimal
# Ada titik sebagai pemisah
# Untuk nilai yang presisi
tinggi = 175.5
berat = 65.3
suhu = 36.6`,
      `# Float untuk perhitungan detail
# Harga, ukuran, persentase
harga = 15000.50
diskon = 0.25
nilai_pi = 3.14159`,
      `# Float bisa sangat kecil
# Atau sangat besar
atom = 0.00000001
jarak = 1.496e8
kecil = 2.5e-10`,
    ],
  },
  {
    id: 15,
    title: "Boolean - Benar atau Salah",
    description: "Memahami tipe data boolean",
    icon: "✅",
    category: "Tipe Data",
    snippets: [
      `# Boolean hanya dua nilai
# True artinya benar
# False artinya salah
# Huruf pertama kapital
sudah_login = True
belum_bayar = False`,
      `# Boolean untuk kondisi
# Cek status, keadaan, syarat
aktif = True
verified = True
premium = False
banned = False`,
      `# Boolean dari perbandingan
# Hasil operasi logika
lebih_besar = 10 > 5
sama_dengan = 5 == 5
tidak_sama = 3 != 4`,
    ],
  },
  {
    id: 16,
    title: "Konversi Tipe Data",
    description: "Mengubah satu tipe ke tipe lain",
    icon: "🔄",
    category: "Tipe Data",
    snippets: [
      `# int() mengubah ke integer
# Menghilangkan desimal
angka = int(3.7)
dari_string = int("42")
bulat = int(99.9)`,
      `# float() mengubah ke desimal
# Menambahkan titik desimal
desimal = float(5)
dari_teks = float("3.14")
pecahan = float(100)`,
      `# str() mengubah ke string
# Semua jadi teks
teks_angka = str(123)
teks_desimal = str(3.14)
teks_bool = str(True)`,
    ],
  },
  {
    id: 17,
    title: "None - Nilai Kosong",
    description: "Memahami nilai None di Python",
    icon: "⭕",
    category: "Tipe Data",
    snippets: [
      `# None adalah nilai kosong
# Bukan nol, bukan string kosong
# None artinya tidak ada nilai
# Digunakan untuk inisialisasi
hasil = None`,
      `# None untuk variabel belum diisi
# Menandakan belum ada data
nama = None
skor = None
alamat = None`,
      `# Cek apakah None dengan is
# Jangan pakai == untuk None
data = None
kosong = data is None
ada_isi = data is not None`,
    ],
  },
  {
    id: 18,
    title: "Memeriksa Tipe Data",
    description: "Menggunakan fungsi type()",
    icon: "🔍",
    category: "Tipe Data",
    snippets: [
      `# type() mengembalikan tipe data
# Berguna untuk debugging
nama = "Bowo"
umur = 25
aktif = True
print(type(nama))`,
      `# Cek berbagai tipe data
angka = 100
desimal = 3.14
teks = "Python"
print(type(angka))
print(type(desimal))`,
      `# isinstance() untuk cek tipe
# Lebih fleksibel dari type()
nilai = 42
is_int = isinstance(nilai, int)
is_str = isinstance(nilai, str)`,
    ],
  },
  {
    id: 19,
    title: "Input dari Pengguna",
    description: "Menerima input dengan input()",
    icon: "⌨️",
    category: "Tipe Data",
    snippets: [
      `# input() menerima teks dari user
# Hasil selalu berupa string
# Tampilkan prompt di dalam ()
nama = input("Nama Anda: ")
kota = input("Kota: ")`,
      `# Konversi input ke angka
# input selalu menghasilkan string
umur = input("Umur: ")
umur = int(umur)
tahun = int(input("Tahun: "))`,
      `# Input untuk perhitungan
angka1 = int(input("Angka 1: "))
angka2 = int(input("Angka 2: "))
hasil = angka1 + angka2`,
    ],
  },
  {
    id: 20,
    title: "Multiple Assignment",
    description: "Membuat beberapa variabel sekaligus",
    icon: "📋",
    category: "Tipe Data",
    snippets: [
      `# Assign banyak variabel sekaligus
# Pisahkan dengan koma
a, b, c = 1, 2, 3
nama, umur = "Bowo", 25
x, y, z = 10, 20, 30`,
      `# Nilai yang sama ke banyak variabel
# Semua mendapat nilai sama
a = b = c = 100
x = y = z = 0
satu = dua = tiga = "sama"`,
      `# Tukar nilai variabel
# Cara mudah di Python
a = 10
b = 20
a, b = b, a`,
    ],
  },
  
  // === LEVEL 21-30: OPERATOR ===
  {
    id: 21,
    title: "Apa itu Operator?",
    description: "Pengenalan konsep operator",
    icon: "🔧",
    category: "Operator",
    snippets: [
      `# Operator untuk operasi nilai
# Menggabungkan, membandingkan
# Melakukan perhitungan
# Python punya banyak operator
# Setiap operator punya fungsi`,
      `# Jenis operator di Python:
# 1. Aritmatika untuk hitung
# 2. Perbandingan untuk banding
# 3. Logika untuk kondisi
# 4. Assignment untuk assign`,
      `# Operator bekerja pada operand
# 5 + 3 : 5 dan 3 adalah operand
# + adalah operator
# Hasil operasi adalah nilai baru`,
    ],
  },
  {
    id: 22,
    title: "Operator Penjumlahan",
    description: "Menjumlahkan angka dengan +",
    icon: "➕",
    category: "Operator",
    snippets: [
      `# Operator + untuk penjumlahan
# Menggabungkan dua nilai angka
# Hasil adalah jumlah keduanya
hasil = 10 + 5
total = 100 + 50
jumlah = 25 + 75`,
      `# Penjumlahan dengan variabel
# Variabel dihitung nilainya
a = 10
b = 20
c = a + b
total = c + 5`,
      `# Penjumlahan banyak angka
# Bisa lebih dari dua operand
total = 1 + 2 + 3 + 4
hasil = 10 + 20 + 30
jumlah = 5 + 5 + 5 + 5`,
    ],
  },
  {
    id: 23,
    title: "Operator Pengurangan",
    description: "Mengurangkan angka dengan -",
    icon: "➖",
    category: "Operator",
    snippets: [
      `# Operator - untuk pengurangan
# Mengurangi nilai dari nilai lain
# Hasil bisa positif atau negatif
hasil = 20 - 5
sisa = 100 - 30
selisih = 50 - 25`,
      `# Pengurangan dengan variabel
a = 100
b = 35
c = a - b
sisa = c - 10`,
      `# Pengurangan berantai
# Dikerjakan dari kiri ke kanan
hasil = 100 - 20 - 30
sisa = 50 - 10 - 5
nilai = 1000 - 100 - 200`,
    ],
  },
  {
    id: 24,
    title: "Operator Perkalian",
    description: "Mengalikan angka dengan *",
    icon: "✖️",
    category: "Operator",
    snippets: [
      `# Operator * untuk perkalian
# Mengalikan dua nilai angka
# Hasil adalah produk keduanya
hasil = 5 * 4
total = 10 * 10
kali = 7 * 8`,
      `# Perkalian dengan variabel
harga = 15000
jumlah = 3
total = harga * jumlah
pajak = total * 0.1`,
      `# Perkalian berantai
hasil = 2 * 3 * 4
volume = 5 * 5 * 5
angka = 10 * 10 * 10`,
    ],
  },
  {
    id: 25,
    title: "Operator Pembagian",
    description: "Membagi angka dengan /",
    icon: "➗",
    category: "Operator",
    snippets: [
      `# Operator / untuk pembagian
# Hasil selalu float (desimal)
# Bahkan jika habis dibagi
hasil = 20 / 4
bagi = 15 / 3
pecah = 100 / 8`,
      `# Pembagian dengan variabel
total = 1000
orang = 4
bagian = total / orang
masing = bagian / 2`,
      `# Hati-hati pembagian nol
# Akan menyebabkan error
a = 100
b = 5
hasil = a / b`,
    ],
  },
  {
    id: 26,
    title: "Operator Modulo",
    description: "Mencari sisa bagi dengan %",
    icon: "🔢",
    category: "Operator",
    snippets: [
      `# Operator % untuk modulo
# Menghasilkan sisa pembagian
# Berguna untuk cek genap ganjil
sisa = 17 % 5
hasil = 10 % 3
mod = 25 % 7`,
      `# Cek bilangan genap atau ganjil
angka = 8
sisa = angka % 2
genap = sisa == 0
ganjil = sisa != 0`,
      `# Modulo untuk siklus
# Nilai berputar 0 sampai n-1
jam = 25 % 24
menit = 125 % 60
hari = 10 % 7`,
    ],
  },
  {
    id: 27,
    title: "Operator Pangkat",
    description: "Memangkatkan angka dengan **",
    icon: "⬆️",
    category: "Operator",
    snippets: [
      `# Operator ** untuk pangkat
# Angka pertama dipangkatkan
# Dengan angka kedua
kuadrat = 5 ** 2
kubik = 3 ** 3
pangkat = 2 ** 10`,
      `# Pangkat dengan variabel
alas = 4
tinggi = 3
luas = alas ** 2
volume = alas ** tinggi`,
      `# Akar dengan pangkat pecahan
# Akar kuadrat = pangkat 0.5
akar = 16 ** 0.5
akar3 = 27 ** (1/3)
hasil = 81 ** 0.5`,
    ],
  },
  {
    id: 28,
    title: "Operator Pembagian Bulat",
    description: "Pembagian tanpa sisa dengan //",
    icon: "📐",
    category: "Operator",
    snippets: [
      `# Operator // pembagian bulat
# Hasil dibulatkan ke bawah
# Menghasilkan integer
hasil = 17 // 5
bagi = 25 // 4
bulat = 100 // 7`,
      `# Perbedaan / dan //
biasa = 17 / 5
bulat = 17 // 5
desimal = 25 / 4
integer = 25 // 4`,
      `# Berguna untuk membagi rata
total = 100
kelompok = 7
per_kelompok = total // kelompok
sisa = total % kelompok`,
    ],
  },
  {
    id: 29,
    title: "Urutan Operasi",
    description: "Prioritas dalam perhitungan",
    icon: "📊",
    category: "Operator",
    snippets: [
      `# Ada urutan prioritas operasi
# Pangkat dulu, lalu kali bagi
# Terakhir tambah kurang
hasil = 2 + 3 * 4
jawab = 10 - 2 ** 2
nilai = 20 / 4 + 3`,
      `# Gunakan kurung untuk prioritas
# Dalam kurung dikerjakan dulu
hasil = (2 + 3) * 4
jawab = (10 - 2) ** 2
nilai = 20 / (4 + 1)`,
      `# Contoh perhitungan kompleks
a = 10
b = 5
c = 2
hasil = (a + b) * c / 2`,
    ],
  },
  {
    id: 30,
    title: "Operator Assignment",
    description: "Operator penugasan singkat",
    icon: "📝",
    category: "Operator",
    snippets: [
      `# Operator assignment singkat
# Mengubah dan assign sekaligus
x = 10
x += 5
x -= 3
x *= 2`,
      `# Berbagai operator assignment
a = 100
a += 10
a -= 20
a *= 2
a /= 5`,
      `# Sama dengan bentuk panjang
# x += 5 sama dengan x = x + 5
skor = 0
skor = skor + 10
skor += 10`,
    ],
  },
  
  // === LEVEL 31-40: PERBANDINGAN DAN LOGIKA ===
  {
    id: 31,
    title: "Operator Perbandingan",
    description: "Membandingkan dua nilai",
    icon: "⚖️",
    category: "Perbandingan",
    snippets: [
      `# Operator perbandingan
# Menghasilkan True atau False
# Untuk membandingkan nilai
sama = 5 == 5
beda = 3 != 4
lebih = 10 > 5`,
      `# Semua operator perbandingan:
# == sama dengan
# != tidak sama dengan
# > lebih besar
# < lebih kecil
# >= lebih besar sama dengan
# <= lebih kecil sama dengan`,
      `# Perbandingan dengan variabel
umur = 18
dewasa = umur >= 17
anak = umur < 12
remaja = umur >= 12`,
    ],
  },
  {
    id: 32,
    title: "Sama Dengan dan Tidak Sama",
    description: "Operator == dan !=",
    icon: "🟰",
    category: "Perbandingan",
    snippets: [
      `# == untuk cek kesamaan
# Menghasilkan True jika sama
a = 10
b = 10
sama = a == b
hasil = 5 == 5`,
      `# != untuk cek ketidaksamaan
# Menghasilkan True jika beda
a = 10
b = 20
beda = a != b
hasil = 5 != 3`,
      `# Perbandingan string
nama1 = "Bowo"
nama2 = "Bowo"
nama3 = "bowo"
sama = nama1 == nama2
beda = nama1 == nama3`,
    ],
  },
  {
    id: 33,
    title: "Lebih Besar dan Lebih Kecil",
    description: "Operator > dan <",
    icon: "↔️",
    category: "Perbandingan",
    snippets: [
      `# > untuk lebih besar
# Kiri lebih besar dari kanan
a = 10 > 5
b = 3 > 7
hasil = 100 > 50`,
      `# < untuk lebih kecil
# Kiri lebih kecil dari kanan
a = 5 < 10
b = 7 < 3
hasil = 25 < 50`,
      `# Perbandingan dengan variabel
umur = 20
dewasa = umur > 17
anak = umur < 12
nilai = 85
lulus = nilai > 75`,
    ],
  },
  {
    id: 34,
    title: "Lebih Besar/Kecil Sama Dengan",
    description: "Operator >= dan <=",
    icon: "↕️",
    category: "Perbandingan",
    snippets: [
      `# >= lebih besar atau sama
# True jika >= nilai pembanding
a = 10 >= 10
b = 15 >= 10
c = 5 >= 10`,
      `# <= lebih kecil atau sama
# True jika <= nilai pembanding
a = 10 <= 10
b = 5 <= 10
c = 15 <= 10`,
      `# Contoh penggunaan praktis
nilai = 75
lulus = nilai >= 75
stok = 0
habis = stok <= 0`,
    ],
  },
  {
    id: 35,
    title: "Operator and",
    description: "Logika AND - semua harus benar",
    icon: "🔗",
    category: "Logika",
    snippets: [
      `# and: semua kondisi harus True
# Jika satu False, hasil False
a = True and True
b = True and False
c = False and False`,
      `# Penggunaan and praktis
umur = 20
punya_ktp = True
boleh_vote = umur >= 17 and punya_ktp`,
      `# Multiple and conditions
nilai = 85
kehadiran = 90
aktif = True
lulus = nilai >= 75 and kehadiran >= 80`,
    ],
  },
  {
    id: 36,
    title: "Operator or",
    description: "Logika OR - salah satu benar",
    icon: "🔀",
    category: "Logika",
    snippets: [
      `# or: salah satu True cukup
# Hasil True jika ada yang True
a = True or False
b = False or True
c = False or False`,
      `# Penggunaan or praktis
hari = "Sabtu"
libur = hari == "Sabtu" or hari == "Minggu"`,
      `# Multiple or conditions
role = "admin"
bisa_edit = role == "admin" or role == "editor"
akses = role == "admin" or role == "mod"`,
    ],
  },
  {
    id: 37,
    title: "Operator not",
    description: "Logika NOT - membalik nilai",
    icon: "🔃",
    category: "Logika",
    snippets: [
      `# not membalik nilai boolean
# True jadi False, sebaliknya
a = not True
b = not False
c = not (5 > 3)`,
      `# Penggunaan not praktis
login = False
perlu_login = not login
data_ada = True
kosong = not data_ada`,
      `# not dengan kondisi
umur = 15
belum_dewasa = not (umur >= 18)
stok = 10
tidak_habis = not (stok == 0)`,
    ],
  },
  {
    id: 38,
    title: "Kombinasi Operator Logika",
    description: "Menggabungkan and, or, not",
    icon: "🧮",
    category: "Logika",
    snippets: [
      `# Kombinasi operator logika
# Gunakan kurung untuk jelas
a = True and (False or True)
b = not (True and False)
c = (True or False) and True`,
      `# Contoh praktis kombinasi
umur = 20
member = True
promo = False
diskon = member and (umur < 25 or promo)`,
      `# Validasi kompleks
nilai = 85
hadir = 95
tugas = True
lulus = (nilai >= 75 and hadir >= 80) or tugas`,
    ],
  },
  {
    id: 39,
    title: "Operator in",
    description: "Memeriksa keanggotaan",
    icon: "🔎",
    category: "Logika",
    snippets: [
      `# in untuk cek keberadaan
# Cek apakah ada di dalam
teks = "Python"
ada_y = "y" in teks
ada_z = "z" in teks`,
      `# in untuk list
buah = ["apel", "jeruk", "mangga"]
ada_apel = "apel" in buah
ada_anggur = "anggur" in buah`,
      `# not in untuk kebalikannya
angka = [1, 2, 3, 4, 5]
tidak_ada = 10 not in angka
ada = 3 not in angka`,
    ],
  },
  {
    id: 40,
    title: "Operator is",
    description: "Memeriksa identitas objek",
    icon: "🎯",
    category: "Logika",
    snippets: [
      `# is untuk cek identitas
# Apakah objek yang sama
a = None
cek = a is None
bukan = a is not None`,
      `# Perbedaan == dan is
# == cek nilai, is cek identitas
a = [1, 2, 3]
b = [1, 2, 3]
sama_nilai = a == b
sama_objek = a is b`,
      `# Gunakan is untuk None
data = None
kosong = data is None
ada = data is not None`,
    ],
  },
  
  // === LEVEL 41-50: KONDISI IF ===
  {
    id: 41,
    title: "Apa itu Kondisi?",
    description: "Pengenalan percabangan kondisi",
    icon: "🔀",
    category: "Kondisi",
    snippets: [
      `# Kondisi untuk keputusan
# Program memilih jalur kode
# Berdasarkan suatu syarat
# True jalankan kode tertentu
# False lewati kode tersebut`,
      `# Analogi kondisi:
# Jika hujan, bawa payung
# Jika tidak, pakai topi
# Program melakukan hal sama
# Berdasarkan kondisi True/False`,
      `# Kondisi di Python:
# if untuk kondisi utama
# elif untuk kondisi tambahan
# else untuk kondisi lainnya`,
    ],
  },
  {
    id: 42,
    title: "Pernyataan if",
    description: "Kondisi dasar dengan if",
    icon: "✅",
    category: "Kondisi",
    snippets: [
      `# if untuk kondisi sederhana
# Jalankan jika True
nilai = 85
if nilai >= 75:
    print("Lulus")`,
      `# Blok if harus diindentasi
# Semua baris dalam blok indent
umur = 18
if umur >= 17:
    print("Dewasa")
    print("Boleh vote")`,
      `# if dengan variabel boolean
login = True
if login:
    print("Selamat datang")
    print("Akses diberikan")`,
    ],
  },
  {
    id: 43,
    title: "Pernyataan if-else",
    description: "Dua kemungkinan dengan else",
    icon: "↔️",
    category: "Kondisi",
    snippets: [
      `# else untuk kondisi sebaliknya
# Jika if False, jalankan else
nilai = 60
if nilai >= 75:
    status = "Lulus"
else:
    status = "Tidak Lulus"`,
      `# Contoh if-else praktis
umur = 15
if umur >= 18:
    kategori = "Dewasa"
else:
    kategori = "Anak-anak"`,
      `# if-else untuk validasi
saldo = 50000
harga = 75000
if saldo >= harga:
    print("Bisa beli")
else:
    print("Saldo kurang")`,
    ],
  },
  {
    id: 44,
    title: "Pernyataan elif",
    description: "Kondisi bertingkat dengan elif",
    icon: "📊",
    category: "Kondisi",
    snippets: [
      `# elif untuk kondisi tambahan
# Cek jika if sebelumnya False
nilai = 85
if nilai >= 90:
    grade = "A"
elif nilai >= 80:
    grade = "B"
else:
    grade = "C"`,
      `# Banyak elif sekaligus
skor = 75
if skor >= 90:
    level = "Expert"
elif skor >= 70:
    level = "Intermediate"
elif skor >= 50:
    level = "Beginner"
else:
    level = "Newbie"`,
      `# elif untuk kategori umur
umur = 25
if umur < 13:
    kat = "Anak"
elif umur < 20:
    kat = "Remaja"
elif umur < 60:
    kat = "Dewasa"
else:
    kat = "Lansia"`,
    ],
  },
  {
    id: 45,
    title: "Nested If",
    description: "If di dalam if",
    icon: "🪆",
    category: "Kondisi",
    snippets: [
      `# If bersarang (nested)
# If di dalam blok if lain
umur = 20
punya_ktp = True
if umur >= 17:
    if punya_ktp:
        print("Boleh vote")`,
      `# Nested if dengan else
nilai = 85
kehadiran = 90
if nilai >= 75:
    if kehadiran >= 80:
        status = "Lulus"
    else:
        status = "Remedial"
else:
    status = "Tidak Lulus"`,
      `# Nested if lebih dalam
login = True
role = "admin"
if login:
    if role == "admin":
        print("Full access")
    else:
        print("Limited access")`,
    ],
  },
  {
    id: 46,
    title: "Kondisi dengan and",
    description: "Menggabungkan kondisi dengan and",
    icon: "🔗",
    category: "Kondisi",
    snippets: [
      `# and untuk gabung kondisi
# Semua harus True
umur = 20
member = True
if umur >= 18 and member:
    print("Dapat diskon")`,
      `# Multiple and dalam if
nilai = 85
kehadiran = 90
tugas = True
if nilai >= 75 and kehadiran >= 80 and tugas:
    print("Lulus")`,
      `# and lebih rapi dari nested
# Daripada if dalam if
username = "admin"
password = "12345"
if username == "admin" and password == "12345":
    print("Login berhasil")`,
    ],
  },
  {
    id: 47,
    title: "Kondisi dengan or",
    description: "Alternatif kondisi dengan or",
    icon: "🔀",
    category: "Kondisi",
    snippets: [
      `# or untuk alternatif kondisi
# Salah satu True cukup
hari = "Sabtu"
if hari == "Sabtu" or hari == "Minggu":
    print("Libur")`,
      `# or untuk validasi input
jawab = "Y"
if jawab == "Y" or jawab == "y":
    print("Ya")
else:
    print("Tidak")`,
      `# Kombinasi or dan and
umur = 20
member = False
promo = True
if member or (umur < 25 and promo):
    print("Dapat diskon")`,
    ],
  },
  {
    id: 48,
    title: "Ternary Operator",
    description: "Kondisi satu baris",
    icon: "⚡",
    category: "Kondisi",
    snippets: [
      `# Kondisi singkat satu baris
# nilai_true if kondisi else nilai_false
umur = 20
status = "Dewasa" if umur >= 18 else "Anak"`,
      `# Ternary untuk assignment
nilai = 85
lulus = "Ya" if nilai >= 75 else "Tidak"
grade = "A" if nilai >= 90 else "B"`,
      `# Ternary bersarang
skor = 75
level = "A" if skor >= 90 else "B" if skor >= 80 else "C"`,
    ],
  },
  {
    id: 49,
    title: "Match Case (Python 3.10+)",
    description: "Pattern matching di Python",
    icon: "🎯",
    category: "Kondisi",
    snippets: [
      `# match case seperti switch
# Untuk banyak kemungkinan nilai
hari = 1
match hari:
    case 1:
        nama = "Senin"
    case 2:
        nama = "Selasa"
    case _:
        nama = "Lainnya"`,
      `# match dengan wildcard
kode = "A"
match kode:
    case "A":
        status = "Aktif"
    case "N":
        status = "Nonaktif"
    case _:
        status = "Unknown"`,
      `# match untuk tipe data
data = 100
match data:
    case int():
        tipe = "Integer"
    case str():
        tipe = "String"
    case _:
        tipe = "Lainnya"`,
    ],
  },
  {
    id: 50,
    title: "Praktik Kondisi",
    description: "Latihan penggunaan kondisi",
    icon: "🎓",
    category: "Kondisi",
    snippets: [
      `# Sistem grading lengkap
nilai = 85
if nilai >= 90:
    grade = "A"
    predikat = "Sangat Baik"
elif nilai >= 80:
    grade = "B"
    predikat = "Baik"
else:
    grade = "C"
    predikat = "Cukup"`,
      `# Cek tahun kabisat
tahun = 2024
if tahun % 4 == 0:
    if tahun % 100 == 0:
        if tahun % 400 == 0:
            kabisat = True
        else:
            kabisat = False
    else:
        kabisat = True
else:
    kabisat = False`,
      `# Validasi login
user = "admin"
pwd = "12345"
aktif = True
if user == "admin" and pwd == "12345":
    if aktif:
        print("Login sukses")
    else:
        print("Akun nonaktif")
else:
    print("Login gagal")`,
    ],
  },
  
  // === LEVEL 51-60: PERULANGAN ===
  {
    id: 51,
    title: "Apa itu Perulangan?",
    description: "Pengenalan konsep loop",
    icon: "🔁",
    category: "Perulangan",
    snippets: [
      `# Perulangan mengulang kode
# Jalankan kode berkali-kali
# Hemat penulisan kode
# Otomatis dan efisien
# Python punya for dan while`,
      `# Tanpa loop sangat panjang:
# print(1)
# print(2)
# print(3)
# Dengan loop lebih singkat
# Satu kode untuk banyak`,
      `# Kapan gunakan loop:
# Proses data berulang
# Iterasi list atau range
# Operasi sampai kondisi
# Automasi tugas repetitif`,
    ],
  },
  {
    id: 52,
    title: "For Loop Dasar",
    description: "Perulangan dengan for",
    icon: "🔄",
    category: "Perulangan",
    snippets: [
      `# for untuk iterasi
# Ulangi untuk setiap item
for i in range(5):
    print(i)`,
      `# range menghasilkan angka
# range(5) = 0, 1, 2, 3, 4
for x in range(3):
    print("Halo")`,
      `# Variabel loop berubah
# Setiap iterasi nilai baru
for angka in range(1, 6):
    print(angka)`,
    ],
  },
  {
    id: 53,
    title: "Range dengan Parameter",
    description: "Mengatur range lebih detail",
    icon: "📏",
    category: "Perulangan",
    snippets: [
      `# range(start, stop)
# Mulai dari start
# Berhenti sebelum stop
for i in range(1, 6):
    print(i)`,
      `# range(start, stop, step)
# Step adalah lompatan
for i in range(0, 10, 2):
    print(i)`,
      `# Range mundur
# Step negatif untuk mundur
for i in range(10, 0, -1):
    print(i)`,
    ],
  },
  {
    id: 54,
    title: "For Loop dengan List",
    description: "Iterasi elemen list",
    icon: "📋",
    category: "Perulangan",
    snippets: [
      `# for untuk iterasi list
# Setiap item diproses
buah = ["apel", "jeruk", "mangga"]
for item in buah:
    print(item)`,
      `# Proses setiap elemen
angka = [1, 2, 3, 4, 5]
total = 0
for x in angka:
    total = total + x`,
      `# Operasi pada elemen
nama = ["Bowo", "Wowo", "Joko"]
for n in nama:
    sapa = "Halo " + n
    print(sapa)`,
    ],
  },
  {
    id: 55,
    title: "While Loop Dasar",
    description: "Perulangan dengan while",
    icon: "⏳",
    category: "Perulangan",
    snippets: [
      `# while berjalan selama True
# Cek kondisi sebelum loop
hitung = 0
while hitung < 5:
    print(hitung)
    hitung = hitung + 1`,
      `# while untuk input
# Loop sampai input benar
password = ""
while password != "rahasia":
    password = input("Password: ")`,
      `# while dengan counter
i = 1
while i <= 10:
    print(i)
    i += 1`,
    ],
  },
  {
    id: 56,
    title: "Break - Keluar dari Loop",
    description: "Menghentikan loop dengan break",
    icon: "🛑",
    category: "Perulangan",
    snippets: [
      `# break menghentikan loop
# Keluar langsung dari loop
for i in range(10):
    if i == 5:
        break
    print(i)`,
      `# break di while loop
angka = 0
while True:
    if angka == 5:
        break
    print(angka)
    angka += 1`,
      `# break untuk pencarian
nama = ["Mega", "Bowo", "Joko"]
for n in nama:
    if n == "Bowo":
        print("Ditemukan!")
        break`,
    ],
  },
  {
    id: 57,
    title: "Continue - Skip Iterasi",
    description: "Melewati iterasi dengan continue",
    icon: "⏭️",
    category: "Perulangan",
    snippets: [
      `# continue skip ke iterasi berikut
# Tidak menghentikan loop
for i in range(5):
    if i == 2:
        continue
    print(i)`,
      `# continue untuk filter
angka = [1, 2, 3, 4, 5, 6]
for x in angka:
    if x % 2 == 0:
        continue
    print(x)`,
      `# continue di while
i = 0
while i < 10:
    i += 1
    if i % 2 == 0:
        continue
    print(i)`,
    ],
  },
  {
    id: 58,
    title: "Enumerate",
    description: "Index dan nilai sekaligus",
    icon: "🔢",
    category: "Perulangan",
    snippets: [
      `# enumerate untuk index dan nilai
buah = ["apel", "jeruk", "mangga"]
for i, item in enumerate(buah):
    print(i, item)`,
      `# enumerate dengan start
nama = ["Bowo", "Wowo", "Mulyono"]
for no, n in enumerate(nama, start=1):
    print(no, n)`,
      `# enumerate praktis
tugas = ["Belajar", "Kerja", "Istirahat"]
for idx, t in enumerate(tugas):
    print(f"{idx}. {t}")`,
    ],
  },
  {
    id: 59,
    title: "Nested Loop",
    description: "Loop di dalam loop",
    icon: "🪆",
    category: "Perulangan",
    snippets: [
      `# Loop bersarang (nested)
# Loop dalam loop
for i in range(3):
    for j in range(3):
        print(i, j)`,
      `# Nested untuk tabel
for baris in range(1, 4):
    for kolom in range(1, 4):
        hasil = baris * kolom
        print(hasil)`,
      `# Nested untuk pattern
for i in range(1, 6):
    bintang = "*" * i
    print(bintang)`,
    ],
  },
  {
    id: 60,
    title: "Loop dengan else",
    description: "Else setelah loop selesai",
    icon: "✅",
    category: "Perulangan",
    snippets: [
      `# else dijalankan setelah loop
# Jika tidak ada break
for i in range(5):
    print(i)
else:
    print("Selesai")`,
      `# else tidak jalan jika break
angka = [1, 2, 3, 4, 5]
for x in angka:
    if x == 3:
        break
else:
    print("Tidak break")`,
      `# else untuk pencarian
data = [1, 2, 4, 5]
cari = 3
for x in data:
    if x == cari:
        print("Ditemukan")
        break
else:
    print("Tidak ada")`,
    ],
  },
  
  // === LEVEL 61-70: FUNGSI ===
  {
    id: 61,
    title: "Apa itu Fungsi?",
    description: "Pengenalan konsep fungsi",
    icon: "⚙️",
    category: "Fungsi",
    snippets: [
      `# Fungsi adalah blok kode
# Yang bisa dipanggil berkali-kali
# Membuat kode terorganisir
# Menghindari pengulangan
# Mudah untuk maintenance`,
      `# Keuntungan fungsi:
# 1. Reusable - pakai ulang
# 2. Modular - terpisah rapi
# 3. Readable - mudah baca
# 4. Testable - mudah tes`,
      `# Fungsi di Python:
# def untuk definisi fungsi
# Nama fungsi harus deskriptif
# Parameter dalam kurung
# Blok kode diindentasi`,
    ],
  },
  {
    id: 62,
    title: "Membuat Fungsi Sederhana",
    description: "Fungsi tanpa parameter",
    icon: "🔨",
    category: "Fungsi",
    snippets: [
      `# Fungsi sederhana
# def nama_fungsi():
def sapa():
    print("Halo!")
    print("Selamat datang")
sapa()`,
      `# Fungsi bisa dipanggil berkali
def garis():
    print("=" * 20)
garis()
print("Python")
garis()`,
      `# Nama fungsi snake_case
def tampil_pesan():
    print("Ini pesan")
    print("Dari fungsi")
tampil_pesan()`,
    ],
  },
  {
    id: 63,
    title: "Fungsi dengan Parameter",
    description: "Mengirim data ke fungsi",
    icon: "📥",
    category: "Fungsi",
    snippets: [
      `# Parameter menerima data
# Data dikirim saat panggil
def sapa(nama):
    print("Halo, " + nama)
sapa("Bowo")
sapa("Wowo")`,
      `# Multiple parameter
def info(nama, umur):
    print("Nama: " + nama)
    print("Umur: " + str(umur))
info("Joko", 25)`,
      `# Parameter untuk perhitungan
def tambah(a, b):
    hasil = a + b
    print(hasil)
tambah(10, 5)
tambah(3, 7)`,
    ],
  },
  {
    id: 64,
    title: "Return Value",
    description: "Mengembalikan nilai dari fungsi",
    icon: "📤",
    category: "Fungsi",
    snippets: [
      `# return mengembalikan nilai
# Nilai bisa disimpan
def tambah(a, b):
    return a + b
hasil = tambah(5, 3)
print(hasil)`,
      `# return menghentikan fungsi
# Kode setelah return tidak jalan
def hitung(x):
    return x * 2
    print("Ini tidak jalan")
hasil = hitung(5)`,
      `# return berbagai tipe
def info(nama):
    return "Halo, " + nama
pesan = info("Bowo")
print(pesan)`,
    ],
  },
  {
    id: 65,
    title: "Default Parameter",
    description: "Parameter dengan nilai default",
    icon: "🎁",
    category: "Fungsi",
    snippets: [
      `# Default jika tidak diberi nilai
def sapa(nama="Tamu"):
    return "Halo, " + nama
print(sapa())
print(sapa("Bowo"))`,
      `# Default di akhir parameter
def pesan(teks, ulang=1):
    for i in range(ulang):
        print(teks)
pesan("Halo")
pesan("Halo", 3)`,
      `# Multiple default
def profil(nama, kota="Solo", umur=0):
    print(nama, kota, umur)
profil("Joko")
profil("Wowo", "Semarang")`,
    ],
  },
  {
    id: 66,
    title: "Keyword Arguments",
    description: "Memanggil fungsi dengan nama parameter",
    icon: "🏷️",
    category: "Fungsi",
    snippets: [
      `# Sebut nama parameter saat panggil
def profil(nama, umur, kota):
    print(nama, umur, kota)
profil(nama="Bowo", umur=25, kota="Solo")`,
      `# Urutan bisa berbeda
def info(a, b, c):
    print(a, b, c)
info(c=3, a=1, b=2)`,
      `# Campuran positional dan keyword
def data(nama, umur, kota="Solo"):
    print(nama, umur, kota)
data("Joko", umur=25)
data("Wowo", 20, kota="Semarang")`,
    ],
  },
  {
    id: 67,
    title: "Args - Argumen Variabel",
    description: "Fungsi dengan banyak argumen",
    icon: "📦",
    category: "Fungsi",
    snippets: [
      `# *args untuk banyak argumen
# args adalah tuple
def jumlah(*args):
    total = 0
    for x in args:
        total += x
    return total
print(jumlah(1, 2, 3))`,
      `# args dengan parameter biasa
def info(nama, *nilai):
    print(nama)
    for n in nilai:
        print(n)
info("Bowo", 80, 90, 85)`,
      `# args untuk fleksibilitas
def rata(*angka):
    total = sum(angka)
    return total / len(angka)
print(rata(80, 90, 85))`,
    ],
  },
  {
    id: 68,
    title: "Kwargs - Keyword Arguments Variabel",
    description: "Fungsi dengan keyword dinamis",
    icon: "🗝️",
    category: "Fungsi",
    snippets: [
      `# **kwargs untuk keyword variabel
# kwargs adalah dictionary
def profil(**kwargs):
    for key, val in kwargs.items():
        print(key, val)
profil(nama="Bowo", umur=25)`,
      `# kwargs untuk data fleksibel
def simpan(**data):
    for k, v in data.items():
        print(f"{k}: {v}")
simpan(nama="Wowo", kota="Jogja")`,
      `# Kombinasi args dan kwargs
def info(*args, **kwargs):
    print(args)
    print(kwargs)
info(1, 2, nama="Joko")`,
    ],
  },
  {
    id: 69,
    title: "Lambda Function",
    description: "Fungsi anonim satu baris",
    icon: "⚡",
    category: "Fungsi",
    snippets: [
      `# lambda untuk fungsi singkat
# Tidak perlu def dan return
kuadrat = lambda x: x ** 2
print(kuadrat(5))`,
      `# lambda dengan multiple parameter
tambah = lambda a, b: a + b
kali = lambda x, y: x * y
print(tambah(3, 5))
print(kali(4, 6))`,
      `# lambda dalam sort
data = [(1, 2), (3, 1), (2, 3)]
data.sort(key=lambda x: x[1])
print(data)`,
    ],
  },
  {
    id: 70,
    title: "Scope Variabel",
    description: "Jangkauan variabel dalam fungsi",
    icon: "🔍",
    category: "Fungsi",
    snippets: [
      `# Variabel lokal dalam fungsi
# Tidak bisa diakses di luar
def hitung():
    x = 10
    return x
hasil = hitung()
print(hasil)`,
      `# Variabel global di luar fungsi
# Bisa diakses dalam fungsi
nama = "Global"
def tampil():
    print(nama)
tampil()`,
      `# global keyword untuk ubah
counter = 0
def tambah():
    global counter
    counter += 1
tambah()
print(counter)`,
    ],
  },
  
  // === LEVEL 71-80: LIST ===
  {
    id: 71,
    title: "Apa itu List?",
    description: "Pengenalan struktur data list",
    icon: "📋",
    category: "List",
    snippets: [
      `# List menyimpan banyak nilai
# Dalam satu variabel
# Nilai dipisah koma
# Dibungkus kurung siku
buah = ["apel", "jeruk", "mangga"]`,
      `# List bisa berisi tipe berbeda
# Angka, teks, boolean
campuran = [1, "dua", 3.0, True]
data = ["Bowo", 25, True]`,
      `# List bisa kosong
# Berguna untuk inisialisasi
kosong = []
angka = []
nama = []`,
    ],
  },
  {
    id: 72,
    title: "Akses Elemen List",
    description: "Mengambil nilai dari list",
    icon: "🎯",
    category: "List",
    snippets: [
      `# Index dimulai dari 0
# Akses dengan kurung siku
buah = ["apel", "jeruk", "mangga"]
pertama = buah[0]
kedua = buah[1]
ketiga = buah[2]`,
      `# Index negatif dari belakang
# -1 adalah elemen terakhir
angka = [10, 20, 30, 40, 50]
terakhir = angka[-1]
kedua_terakhir = angka[-2]`,
      `# Akses dan simpan ke variabel
nama = ["Mega", "Bowo", "Joko"]
orang1 = nama[0]
orang2 = nama[1]
orang3 = nama[2]`,
    ],
  },
  {
    id: 73,
    title: "Mengubah Elemen List",
    description: "Mengganti nilai dalam list",
    icon: "✏️",
    category: "List",
    snippets: [
      `# List bisa diubah (mutable)
# Assign nilai baru ke index
buah = ["apel", "jeruk", "mangga"]
buah[0] = "anggur"
buah[1] = "melon"`,
      `# Ubah dengan index negatif
angka = [1, 2, 3, 4, 5]
angka[-1] = 50
angka[-2] = 40`,
      `# Ubah berdasarkan kondisi
nilai = [60, 75, 80]
if nilai[0] < 70:
    nilai[0] = 70`,
    ],
  },
  {
    id: 74,
    title: "Menambah Elemen List",
    description: "Menambah item ke list",
    icon: "➕",
    category: "List",
    snippets: [
      `# append menambah di akhir
buah = ["apel", "jeruk"]
buah.append("mangga")
buah.append("melon")`,
      `# insert menambah di posisi
angka = [1, 2, 4, 5]
angka.insert(2, 3)
angka.insert(0, 0)`,
      `# extend menambah banyak item
data = [1, 2, 3]
data.extend([4, 5, 6])
data.extend([7, 8])`,
    ],
  },
  {
    id: 75,
    title: "Menghapus Elemen List",
    description: "Menghapus item dari list",
    icon: "🗑️",
    category: "List",
    snippets: [
      `# remove hapus berdasarkan nilai
buah = ["apel", "jeruk", "mangga"]
buah.remove("jeruk")
print(buah)`,
      `# pop hapus berdasarkan index
angka = [10, 20, 30, 40]
angka.pop()
angka.pop(0)
print(angka)`,
      `# del untuk hapus elemen
data = [1, 2, 3, 4, 5]
del data[2]
del data[0]
print(data)`,
    ],
  },
  {
    id: 76,
    title: "Slicing List",
    description: "Mengambil sebagian list",
    icon: "✂️",
    category: "List",
    snippets: [
      `# Slicing dengan [start:end]
# Tidak termasuk end
angka = [0, 1, 2, 3, 4, 5]
potong = angka[1:4]
awal = angka[:3]
akhir = angka[3:]`,
      `# Slicing dengan step
angka = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
genap = angka[::2]
ganjil = angka[1::2]`,
      `# Reverse dengan slicing
data = [1, 2, 3, 4, 5]
balik = data[::-1]
print(balik)`,
    ],
  },
  {
    id: 77,
    title: "Method List Berguna",
    description: "Fungsi-fungsi list yang sering dipakai",
    icon: "🛠️",
    category: "List",
    snippets: [
      `# len untuk panjang list
buah = ["apel", "jeruk", "mangga"]
jumlah = len(buah)
print(jumlah)`,
      `# sort untuk mengurutkan
angka = [3, 1, 4, 1, 5, 9, 2]
angka.sort()
print(angka)`,
      `# count untuk menghitung
data = [1, 2, 2, 3, 2, 4, 2]
jumlah_dua = data.count(2)
print(jumlah_dua)`,
    ],
  },
  {
    id: 78,
    title: "List Comprehension",
    description: "Membuat list dengan cara singkat",
    icon: "⚡",
    category: "List",
    snippets: [
      `# Membuat list baru singkat
# [ekspresi for item in list]
angka = [1, 2, 3, 4, 5]
kuadrat = [x**2 for x in angka]
print(kuadrat)`,
      `# Dengan kondisi filter
angka = [1, 2, 3, 4, 5, 6]
genap = [x for x in angka if x % 2 == 0]
print(genap)`,
      `# Transformasi string
kata = ["halo", "dunia", "python"]
besar = [k.upper() for k in kata]
print(besar)`,
    ],
  },
  {
    id: 79,
    title: "Nested List",
    description: "List di dalam list",
    icon: "🪆",
    category: "List",
    snippets: [
      `# List bisa berisi list
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
baris1 = matrix[0]
elemen = matrix[0][0]`,
      `# Akses nested list
data = [["Mega", 80], ["Bowo", 90]]
nama = data[0][0]
nilai = data[0][1]`,
      `# Loop nested list
matrix = [[1, 2], [3, 4]]
for baris in matrix:
    for elemen in baris:
        print(elemen)`,
    ],
  },
  {
    id: 80,
    title: "Copy List",
    description: "Menyalin list dengan benar",
    icon: "📄",
    category: "List",
    snippets: [
      `# Shallow copy dengan copy()
original = [1, 2, 3, 4, 5]
salinan = original.copy()
salinan[0] = 10`,
      `# Copy dengan slicing
data = [1, 2, 3]
copy = data[:]
copy.append(4)`,
      `# list() untuk copy
angka = [10, 20, 30]
baru = list(angka)
baru[0] = 100`,
    ],
  },
  
  // === LEVEL 81-90: DICTIONARY ===
  {
    id: 81,
    title: "Apa itu Dictionary?",
    description: "Pengenalan struktur data dictionary",
    icon: "📖",
    category: "Dictionary",
    snippets: [
      `# Dictionary menyimpan pasangan
# Key dan value
# Key harus unik
# Value bisa apa saja
siswa = {"nama": "Bowo", "umur": 17}`,
      `# Akses dengan key, bukan index
# Lebih deskriptif
data = {"nama": "Wowo", "kota": "Solo"}
nama = data["nama"]
kota = data["kota"]`,
      `# Dictionary bisa kosong
kosong = {}
profil = {}
config = {}`,
    ],
  },
  {
    id: 82,
    title: "Membuat Dictionary",
    description: "Cara membuat dictionary",
    icon: "🔨",
    category: "Dictionary",
    snippets: [
      `# Dictionary dengan kurung kurawal
siswa = {
    "nama": "Joko",
    "umur": 17,
    "kelas": "XII"
}`,
      `# Dictionary satu baris
mobil = {"merk": "Toyota", "tahun": 2020}
buku = {"judul": "Python", "halaman": 300}`,
      `# dict() constructor
data = dict(nama="Wowo", umur=20)
config = dict(host="localhost", port=8080)`,
    ],
  },
  {
    id: 83,
    title: "Akses Value Dictionary",
    description: "Mengambil nilai dari dictionary",
    icon: "🎯",
    category: "Dictionary",
    snippets: [
      `# Akses dengan key
siswa = {"nama": "Bowo", "umur": 17}
nama = siswa["nama"]
umur = siswa["umur"]`,
      `# get() lebih aman
data = {"nama": "Wowo", "umur": 20}
nama = data.get("nama")
alamat = data.get("alamat", "Tidak ada")`,
      `# Cek key sebelum akses
config = {"host": "localhost"}
if "port" in config:
    port = config["port"]
else:
    port = 8080`,
    ],
  },
  {
    id: 84,
    title: "Mengubah Dictionary",
    description: "Menambah dan mengubah nilai",
    icon: "✏️",
    category: "Dictionary",
    snippets: [
      `# Ubah value yang ada
siswa = {"nama": "Bowo", "umur": 17}
siswa["umur"] = 18
siswa["nama"] = "Bowo Mulyono"`,
      `# Tambah key-value baru
data = {"nama": "Wowo"}
data["umur"] = 20
data["kota"] = "Solo"`,
      `# update() untuk banyak item
profil = {"nama": "Joko"}
profil.update({"umur": 25, "kota": "Semarang"})`,
    ],
  },
  {
    id: 85,
    title: "Menghapus dari Dictionary",
    description: "Menghapus key-value",
    icon: "🗑️",
    category: "Dictionary",
    snippets: [
      `# del untuk hapus key
siswa = {"nama": "Bowo", "umur": 17, "kelas": "XII"}
del siswa["kelas"]
print(siswa)`,
      `# pop() mengembalikan value
data = {"a": 1, "b": 2, "c": 3}
nilai = data.pop("b")
print(nilai, data)`,
      `# clear() hapus semua
config = {"host": "localhost", "port": 8080}
config.clear()
print(config)`,
    ],
  },
  {
    id: 86,
    title: "Method Dictionary",
    description: "Fungsi-fungsi dictionary berguna",
    icon: "🛠️",
    category: "Dictionary",
    snippets: [
      `# keys() untuk semua key
siswa = {"nama": "Bowo", "umur": 17}
kunci = siswa.keys()
print(list(kunci))`,
      `# values() untuk semua value
data = {"a": 1, "b": 2, "c": 3}
nilai = data.values()
print(list(nilai))`,
      `# items() untuk semua pasangan
profil = {"nama": "Wowo", "kota": "Jogja"}
pasangan = profil.items()
print(list(pasangan))`,
    ],
  },
  {
    id: 87,
    title: "Loop Dictionary",
    description: "Iterasi dictionary",
    icon: "🔄",
    category: "Dictionary",
    snippets: [
      `# Loop default mengakses key
siswa = {"nama": "Bowo", "umur": 17}
for k in siswa:
    print(k)`,
      `# Loop key dan value
data = {"a": 1, "b": 2, "c": 3}
for key, val in data.items():
    print(key, val)`,
      `# Loop hanya values
harga = {"apel": 5000, "jeruk": 3000}
for h in harga.values():
    print(h)`,
    ],
  },
  {
    id: 88,
    title: "Nested Dictionary",
    description: "Dictionary di dalam dictionary",
    icon: "🪆",
    category: "Dictionary",
    snippets: [
      `# Dictionary bersarang
siswa = {
    "bowo": {"umur": 17, "kelas": "XII"},
    "wowo": {"umur": 16, "kelas": "XI"}
}`,
      `# Akses nested dictionary
data = {
    "user1": {"nama": "Joko", "skor": 85}
}
nama = data["user1"]["nama"]
skor = data["user1"]["skor"]`,
      `# Ubah nested value
config = {
    "database": {"host": "localhost", "port": 5432}
}
config["database"]["port"] = 3306`,
    ],
  },
  {
    id: 89,
    title: "Dictionary Comprehension",
    description: "Membuat dictionary dengan cara singkat",
    icon: "⚡",
    category: "Dictionary",
    snippets: [
      `# Dictionary comprehension
angka = [1, 2, 3, 4, 5]
kuadrat = {x: x**2 for x in angka}
print(kuadrat)`,
      `# Dengan kondisi
angka = [1, 2, 3, 4, 5, 6]
genap = {x: x**2 for x in angka if x % 2 == 0}
print(genap)`,
      `# Dari dua list
keys = ["a", "b", "c"]
vals = [1, 2, 3]
gabung = {k: v for k, v in zip(keys, vals)}`,
    ],
  },
  {
    id: 90,
    title: "Dictionary dan List",
    description: "Kombinasi dictionary dengan list",
    icon: "🔗",
    category: "Dictionary",
    snippets: [
      `# List berisi dictionary
siswa = [
    {"nama": "Bowo", "nilai": 85},
    {"nama": "Wowo", "nilai": 90}
]
print(siswa[0]["nama"])`,
      `# Dictionary berisi list
kelas = {
    "XII-A": ["Bowo", "Wowo", "Joko"],
    "XII-B": ["Mega", "Mulyono", "Budi"]
}
print(kelas["XII-A"])`,
      `# Loop list of dict
data = [{"nama": "Bowo"}, {"nama": "Wowo"}]
for item in data:
    print(item["nama"])`,
    ],
  },
  
  // === LEVEL 91-100: STRING DAN LAINNYA ===
  {
    id: 91,
    title: "String Lanjutan",
    description: "Operasi string lebih dalam",
    icon: "📝",
    category: "String",
    snippets: [
      `# String adalah sequence
# Bisa diakses per karakter
teks = "Python"
pertama = teks[0]
terakhir = teks[-1]`,
      `# Slicing string
kata = "Programming"
potong = kata[0:7]
akhir = kata[7:]`,
      `# String immutable
# Tidak bisa diubah langsung
nama = "Bowo"
baru = nama.replace("B", "D")
print(baru)`,
    ],
  },
  {
    id: 92,
    title: "Method String Format",
    description: "Memformat string",
    icon: "🎨",
    category: "String",
    snippets: [
      `# upper dan lower
teks = "Hello World"
besar = teks.upper()
kecil = teks.lower()
print(besar, kecil)`,
      `# capitalize dan title
kalimat = "halo dunia python"
kapital = kalimat.capitalize()
judul = kalimat.title()
print(kapital, judul)`,
      `# strip menghapus whitespace
teks = "   Hello   "
bersih = teks.strip()
kiri = teks.lstrip()
kanan = teks.rstrip()`,
    ],
  },
  {
    id: 93,
    title: "Method String Pencarian",
    description: "Mencari dalam string",
    icon: "🔍",
    category: "String",
    snippets: [
      `# find mencari posisi
teks = "Hello Python World"
posisi = teks.find("Python")
tidak_ada = teks.find("Java")
print(posisi, tidak_ada)`,
      `# count menghitung kemunculan
kalimat = "abracadabra"
jumlah_a = kalimat.count("a")
jumlah_ab = kalimat.count("ab")`,
      `# startswith dan endswith
file = "dokumen.pdf"
adalah_pdf = file.endswith(".pdf")
awalan = file.startswith("dok")`,
    ],
  },
  {
    id: 94,
    title: "Split dan Join",
    description: "Memecah dan menggabung string",
    icon: "✂️",
    category: "String",
    snippets: [
      `# split memecah string
kalimat = "satu dua tiga empat"
kata = kalimat.split(" ")
print(kata)`,
      `# join menggabung list
kata = ["Halo", "Dunia", "Python"]
gabung = " ".join(kata)
print(gabung)`,
      `# Split dengan delimiter
data = "Bowo,25,Solo"
parsed = data.split(",")
nama = parsed[0]
umur = parsed[1]`,
    ],
  },
  {
    id: 95,
    title: "F-String Format",
    description: "Format string modern",
    icon: "📐",
    category: "String",
    snippets: [
      `# f-string untuk format
nama = "Bowo"
umur = 25
pesan = f"Nama: {nama}, Umur: {umur}"
print(pesan)`,
      `# f-string dengan ekspresi
a = 10
b = 5
hasil = f"Hasil: {a + b}"
kuadrat = f"Kuadrat: {a ** 2}"`,
      `# f-string format angka
harga = 1500000
format_rp = f"Rp {harga:,}"
desimal = f"Pi: {3.14159:.2f}"`,
    ],
  },
  {
    id: 96,
    title: "Tuple",
    description: "Struktur data immutable",
    icon: "📦",
    category: "Tuple",
    snippets: [
      `# Tuple seperti list tapi immutable
# Tidak bisa diubah setelah dibuat
koordinat = (10, 20)
rgb = (255, 128, 0)
data = ("Joko", 25, "Buton")`,
      `# Akses tuple sama seperti list
data = (10, 20, 30, 40, 50)
pertama = data[0]
terakhir = data[-1]
potong = data[1:4]`,
      `# Tuple untuk multiple return
def info():
    return "Bowo", 25
nama, umur = info()`,
    ],
  },
  {
    id: 97,
    title: "Set",
    description: "Koleksi nilai unik",
    icon: "🔵",
    category: "Set",
    snippets: [
      `# Set menyimpan nilai unik
# Tidak ada duplikasi
angka = {1, 2, 3, 4, 5}
huruf = {"a", "b", "c"}
print(angka)`,
      `# Duplikasi otomatis hilang
data = {1, 2, 2, 3, 3, 3}
print(data)`,
      `# Set dari list
angka = [1, 2, 2, 3, 3, 3]
unik = set(angka)
print(unik)`,
    ],
  },
  {
    id: 98,
    title: "Operasi Set",
    description: "Union, intersection, difference",
    icon: "➗",
    category: "Set",
    snippets: [
      `# Union menggabungkan
a = {1, 2, 3}
b = {3, 4, 5}
gabung = a | b
print(gabung)`,
      `# Intersection irisan
a = {1, 2, 3}
b = {2, 3, 4}
irisan = a & b
print(irisan)`,
      `# Difference selisih
a = {1, 2, 3}
b = {2, 3, 4}
selisih = a - b
print(selisih)`,
    ],
  },
  {
    id: 99,
    title: "Exception Handling",
    description: "Menangani error",
    icon: "🚨",
    category: "Exception",
    snippets: [
      `# try-except menangkap error
try:
    hasil = 10 / 0
except:
    print("Terjadi error")`,
      `# except spesifik
try:
    angka = int("abc")
except ValueError:
    print("Bukan angka valid")`,
      `# finally selalu dijalankan
try:
    file = open("data.txt")
except:
    print("File tidak ada")
finally:
    print("Selesai")`,
    ],
  },
  {
    id: 100,
    title: "Selamat! Kamu Hebat!",
    description: "Kamu telah menyelesaikan semua level",
    icon: "🏆",
    category: "Penutup",
    snippets: [
      `# Selamat! Kamu telah selesai!
# Kamu sudah belajar banyak:
# - Variabel dan tipe data
# - Operator dan kondisi
# - Perulangan dan fungsi
# - List, dictionary, dan lainnya
print("Kamu hebat!")`,
      `# Terus berlatih dan belajar
# Python punya banyak lagi:
# - Object Oriented Programming
# - File handling lebih dalam
# - Library dan framework
# - Web development dengan Django
print("Jangan berhenti belajar!")`,
      `# Terima kasih sudah belajar
# Semoga sukses di perjalananmu
# Menjadi Python developer
# Sampai jumpa di level berikutnya!
print("Terima kasih!")`,
    ],
  },
];

export const getLessonById = (id: number): Lesson | undefined => {
  return pythonLessons.find((lesson) => lesson.id === id);
};

export const getRandomSnippet = (lesson: Lesson): string => {
  const randomIndex = Math.floor(Math.random() * lesson.snippets.length);
  return lesson.snippets[randomIndex];
};

export const categories = [
  "Pengenalan",
  "Variabel",
  "Tipe Data",
  "Operator",
  "Perbandingan",
  "Logika",
  "Kondisi",
  "Perulangan",
  "Fungsi",
  "List",
  "Dictionary",
  "String",
  "Tuple",
  "Set",
  "Exception",
  "Penutup",
];
