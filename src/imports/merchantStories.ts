// src/content/merchantStories.ts

export type MerchantStory = {
  slug: string; // unique id for URL, e.g. /merchant/emados
  name: string;
  websiteUrl?: string; // optional kalau merchant ga punya web
  headline: string;
  thumbnailSrc: string; // can be url or imported asset path
  paragraph: string[]; // paragraphs
};

export const merchantStories: MerchantStory[] = [
  {
    slug: "emados",
    name: "EMADO'S SHAWARMA",
    websiteUrl: "linktr.ee/emados",
    headline:
      "Mendukung pembukaan 30+ cabang EMADO'S di seluruh Indonesia dengan operasional yang tetap terkendali.",
    thumbnailSrc:
      "figma:asset/63087a4264ffae928c2ac1a14b6765b838b1e37e.png", // Image from MerchantKami
    paragraph: [
      "Pembukaan lebih dari 30 cabang EMADO'S di berbagai wilayah Indonesia adalah langkah signifikan dalam fase pertumbuhan yang menuntut kesiapan di banyak sisi sekaligus. Setiap lokasi baru tidak hanya menghadirkan tantangan, tetapi juga kebutuhan operasional yang berbeda-beda. Ini mencakup pengadaan bahan baku yang berkualitas, kesiapan dapur dan tim yang terlatih, serta memastikan bahwa standar kualitas tetap konsisten di seluruh cabang yang baru dibuka. Dalam fase ini, tantangan utama bukan hanya sekadar membuka cabang baru, tetapi juga memastikan bahwa seluruh operasional tetap berjalan dengan rapi dan terkontrol.",
      "Seiring dengan bertambahnya jumlah cabang, kompleksitas operasional yang dihadapi juga meningkat secara signifikan. EMADO'S perlu menjaga keseimbangan yang tepat antara ekspansi yang agresif dan stabilitas operasional, agar proses yang sudah berjalan tidak terganggu oleh skala yang terus bertambah. Dengan pendekatan yang terstruktur dan fleksibel terhadap kebutuhan di lapangan, EMADO'S dapat melanjutkan ekspansi ke lebih banyak lokasi strategis di seluruh Indonesia, sambil tetap menjaga kendali operasional yang ketat di setiap fase pertumbuhan yang dilalui. Hal ini penting untuk memastikan bahwa setiap cabang dapat beroperasi secara optimal dan memberikan pengalaman terbaik bagi pelanggan.",
    ],
  },
  {
    slug: "erigo",
    name: "ERIGO Apparel",
    websiteUrl: "erigostore.co.id",
    headline:
      "Menjaga stok ERIGO sehingga dapat mendorong penjualan hingga 200% di online dan offline store.",
    thumbnailSrc:
      "figma:asset/2572f0e8b7ca83dda4cbfa018f706003b41159f1.png", // Updated to Image 2 - Couple in casual wear
    paragraph: [
      "Ketersediaan stok yang konsisten merupakan salah satu faktor paling krusial dalam mendukung pertumbuhan penjualan ERIGO, baik di kanal online maupun offline. Dalam dunia bisnis yang bergerak cepat, di mana permintaan dapat meningkat tajam dalam waktu singkat, kekosongan stok dapat langsung berdampak pada hilangnya peluang transaksi yang berharga. Oleh karena itu, pengelolaan stok tidak hanya dipandang sebagai urusan logistik semata, tetapi juga sebagai bagian integral dari strategi pertumbuhan yang lebih luas.",
      "Di tengah tingginya volume permintaan dan aktivitas penjualan yang melibatkan berbagai kanal, ERIGO perlu memastikan bahwa stok selalu siap untuk mengikuti ritme transaksi yang terus berubah. Dengan pendekatan yang lebih terstruktur dan sistematis terhadap pengelolaan persediaan, ERIGO dapat menjaga ketersediaan produk di berbagai titik penjualan. Hal ini memungkinkan perusahaan untuk memaksimalkan momentum penjualan yang terjadi, sehingga dapat meraih hasil yang signifikan. Dalam beberapa kasus, peningkatan penjualan hingga 200% dapat dicapai di baik online maupun offline store, tanpa mengorbankan stabilitas operasional yang telah dibangun dengan baik.",
    ],
  },
  {
    slug: "heylocal",
    name: "HEYLOCAL.ID",
    websiteUrl: "heylocal.id",
    headline:
      "Mendukung persediaan stok HEYLOCAL untuk mendukung kelancaran 500.000+ transaksi saat peak season di Hari Lebaran.",
    thumbnailSrc:
      "figma:asset/90af57d91fa7ef7742706b9e5bdc5b57abda464c.png", // Image from MerchantKami
    paragraph: [
      "Menjelang momen hari raya yang selalu dinanti, Heylocal kini berada di fase yang menuntut kesiapan ekstra dan perhatian yang lebih mendalam. Permintaan dari pelanggan meningkat tajam, dan mereka mengharapkan produk tersedia tepat waktu tanpa ada kendala. Kesalahan kecil dalam perencanaan stok bisa berdampak besar pada kepuasan pelanggan dan reputasi perusahaan. Di sisi lain, momen puncak seperti ini tidak datang dua kali, keputusan harus diambil dengan cepat, namun tetap matang dan berdasarkan analisis yang tepat. Bagi Heylocal, tantangannya bukan hanya memastikan stok cukup, tetapi juga menjaga ritme operasional agar tetap stabil di tengah lonjakan aktivitas yang padat dan penuh tantangan.",
      "Di tengah situasi yang penuh tekanan ini, FLIK hadir untuk mendampingi Heylocal dalam menyiapkan persediaan dengan lebih terarah dan strategis. Pendampingan ini sangat berharga, karena membantu Heylocal melihat kebutuhan stok secara lebih menyeluruh dan mengatur langkah dengan lebih percaya diri. Dengan bimbingan yang tepat, mereka dapat menghindari keputusan terburu-buru yang bisa merugikan. Dengan persiapan yang lebih tenang dan terstruktur, Heylocal dapat fokus melayani pelanggan di momen hari raya tanpa harus terbebani oleh kekhawatiran operasional yang sering kali mengganggu. Momen puncak pun tidak hanya dilewati, tetapi dimanfaatkan sebagai bagian penting dari perjalanan pertumbuhan bisnis mereka, yang pada gilirannya akan memperkuat posisi mereka di pasar.",
    ],
  },
  {
    slug: "begor-pondok-suryo",
    name: "Bebek Goreng Pondok Suryo",
    websiteUrl: "linktr.ee/begorpondoksuryo",
    headline:
      "Mendukung Bebek Goreng Pondok Suryo untuk menjaga dan membeli stok bebek premium dan mengoptimalkan anggaran pemasaran hingga 40%.",
    thumbnailSrc:
      "figma:asset/1a466fc240b92dfd7c6870fa9cdf2e18397d5769.png", // Updated to Image 1 - Fried duck dish
    paragraph: [
      "Menjaga kualitas adalah prioritas utama bagi Bebek Goreng Pondok Suryo. Kami berkomitmen untuk memastikan ketersediaan stok bebek premium yang konsisten di setiap periode operasional. Pengadaan bahan baku dengan standar tertentu memerlukan perencanaan yang matang, mengingat fluktuasi permintaan dan ketersediaan pasokan dapat berdampak langsung pada kualitas sajian dan kelancaran operasional harian. Di sisi lain, untuk tetap menjangkau pelanggan, kami juga harus memanfaatkan kanal digital yang ada. Hal ini menuntut pengelolaan anggaran pemasaran yang lebih terukur dan strategis. ",
      "Dengan pendekatan yang lebih terstruktur terhadap pengadaan stok dan pengaturan anggaran pemasaran, Bebek Goreng Pondok Suryo dapat menjaga kesiapan stok bebek premium sekaligus mengoptimalkan anggaran pemasaran hingga 40%. Pendekatan ini tidak hanya memungkinkan operasional tetap terkendali, tetapi juga memastikan bahwa kami tidak mengorbankan kualitas sajian maupun efektivitas pemasaran. Dengan demikian, kami dapat terus memberikan pengalaman kuliner yang memuaskan bagi setiap pelanggan yang datang.",
    ],
  },
  {
    slug: "jokopi",
    name: "Jokopi",
    websiteUrl: "instagram.com/jo.ko.pi",
    headline:
      "Mendukung Jokopi ekspansi di 3 cabang baru dengan tetap menjaga pasokan bahan baku dan operasional.",
    thumbnailSrc:
      "figma:asset/b88a48a4df30e1928aa489088d962850599431d9.png", // Image from MerchantKami
    paragraph: [
      "Ekspansi ke tiga cabang baru merupakan fase yang sangat penting bagi JOKOPI dalam upaya memperluas jangkauan bisnisnya tanpa mengorbankan konsistensi operasional yang telah dibangun. Setiap cabang baru yang akan dibuka memerlukan kesiapan di berbagai aspek secara bersamaan, mulai dari pasokan bahan baku yang berkualitas, kesiapan peralatan yang memadai, hingga penyesuaian alur kerja agar standar kualitas yang tinggi tetap terjaga di seluruh lokasi yang ada.",
      "Di tengah proses ekspansi yang dinamis ini, menjaga kelancaran pasokan bahan baku menjadi sangat krusial untuk memastikan bahwa operasional di cabang yang sudah berjalan tidak terdampak negatif. Dengan pendekatan yang terstruktur dan fleksibel terhadap kebutuhan spesifik setiap lokasi, JOKOPI dapat membuka tiga cabang baru dengan sukses sambil memastikan bahwa pasokan bahan baku dan operasional tetap berjalan stabil di seluruh jaringan yang ada. Hal ini tidak hanya akan meningkatkan jangkauan pasar, tetapi juga memperkuat reputasi JOKOPI sebagai penyedia kopi berkualitas tinggi di berbagai daerah.",
    ],
  },
];