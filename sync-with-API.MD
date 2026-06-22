SAYA PUNYA LANDING PAGE DI: D:\Ruang Bumi\Project Management System\apps\landing-page-ksc. Saya ingin agar landing page itu disesuaikan agar dinamis. Saya sudah membuat rancangan database yang perlu dibuat. BACKEND taruh di D:\Ruang Bumi\Project Management System\apps\be-ksc, buat app baru khusus untuk API CRUD landing page. UNTUK FORM INPUT DATA LANDING PAGE TARUH DI D:\Ruang Bumi\Project Management System\apps\ksc-nextjs\src\app\website\page.tsx, jadi user bisa ubah landing page darisana.untuk file yang diupload ke bucket S3, buat file_signed_url seperti di BE lainnya yaa.

Catatan: 
- di DI D:\Ruang Bumi\Project Management System\apps\ksc-nextjs\src\app\website\page.tsx, di data deskripsi, buat pakai rich text editor. jadi nanti yang ditampilkan di landing-page adalah generate dari text editor langsung.
- untuk data koordinat, buat ada map sehingga user bisa pick dari mapnya untuk semua data koordinat.




- SKEMA RANCANGAN TABEL UNTUK BACKEND:
Table landing_page_home {
  file_hero_image text
}
p.s: file_hero_image akan diupload ke bucket S3 aws folder /landing-page/home

Table landing_page_layanan {
  id uuid [primary key]
  file_icon text
  title text
  deskripsi text
}
p.s: file_icon akan diupload ke bucket S3 aws folder /landing-page/layanan


Table landing_page_proyek {
  id uuid [primary key]
  nama_proyek varchar
  slug varchar
  file_image_cover text
  deskripsi text
  klien varchar
  lokasi varchar
  tahun_pelaksanaan varchar
  durasi varchar
  koordinat geometry
  kategori enum
}
p.s: file_image_cover akan diupload ke bucket S3 aws folder /landing-page/[namaproyek]/
koordinat merupakan point untuk ditampilkan di map
slug digenerate otomatis dari nama-proyek

Table landing_page_proyek_images {
  id uuid [primary key]
  file_images text
  landing_page_proyek_id uuid [ref: > landing_page_proyek.id]
}
p.s: file_images akan diupload ke bucket S3 aws folder /landing-page/[namaproyek]/

Table landing_page_about {
  header varchar
  deskripsi text
  visi text
  misi text
  standard text
}

Table landing_page_kontak {
  nama_perusahaan varchar
  alamat varchar
  telepon varchar
  email varchar
  jam_operasional varchar
  koordinat geometry
}
p.s: koordinat merupakan point untuk ditampilkan di map


LIST LANDING PAGE YANG PERLU DI ADJUST:
1. di D:\Ruang Bumi\Project Management System\apps\landing-page-ksc\src\components\Hero.tsx, line 9-13 src image diambil dari database tabel 'landing_page_home' data file_hero_image
2. di D:\Ruang Bumi\Project Management System\apps\landing-page-ksc\src\components\Services.tsx, data services akan diambil dari database tabel 'landing_page_layanan'. 'features' hilangkan saja.
3. di D:\Ruang Bumi\Project Management System\apps\landing-page-ksc\src\components\About.tsx:
    - line 9 data description diambil dari data visi di database tabel 'landing_page_about' kolom visi
    - line 14 data description diambil dari data misi di database tabel 'landing_page_about' kolom misi
    - line 19 data description diambil dari data standard di database tabel 'landing_page_about' kolom standard
    - header di line 41-44 diambil dari data header di database tabel 'landing_page_about' kolom header
    - line 45-50 diambil dari data deskripsi di database tabel 'landing_page_about' kolom deksripsi

4. di D:\Ruang Bumi\Project Management System\apps\landing-page-ksc\src\components\Projects.tsx, data proyek diambil dari data di database tabel 'landing_page_proyek' 

5. di D:\Ruang Bumi\Project Management System\apps\landing-page-ksc\src\components\Contact.tsx data contact diambil dari data di database tabel 'landing_page_kontak'


P. S: KAMU DILARANG MENJALANKAN ATAU MEMBUAT MIGRASI DULU YAA, MIGRASI BIAR SAYA JALANKAN SENDIRI