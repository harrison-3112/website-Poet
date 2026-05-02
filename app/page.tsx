import Image from "next/image";
import Link from "next/link";

import CustomAudioPlayer from "./components/custom-audio-player";
import FacebookShareButton from "./components/facebook-share-button";
import LazyPdfViewer from "./components/lazy-pdf-viewer";
import ParallaxBackgroundVideo from "./components/parallax-background-video";
import SectionDivider from "./components/section-divider";

const baiThoNoiBat = [
  {
    tieuDe: "Dòng Sông Xuân",
    trang: "Trang 10",
    noiDung: `Ngọn gió Xuân mơn man trong lành
Đưa hồn anh trở về dĩ vãng
Ngày ấy cùng nhau bên sông lạnh
Hơi thở nồng nàn làm ấm lòng anh
Dòng sông tình yêu bừng sáng ánh bình minh
Hạt nắng trải mặt sông lấp loáng
Thuở ấy chúng mình bao khát vọng
Mơ tương lai, cuộc sống ngày mai
Nay trở lại dòng sông tuổi thơ này
Gió mơn man trên mái đầu điểm bạc
Nhưng với ta dòng sông thân thiết
Vẫn như xưa: nồng ấm mối tình đầu!`,
  },
  {
    tieuDe: "Bản Tình Ca Tháng Giêng",
    trang: "Trang 11",
    noiDung: `Dòng sông cựa mình tuôn chảy
Rạt rào sóng vỗ bờ vui
Đàn én chao liệng lưng trời
Đưa nàng Xuân về đất Tổ.
Cung đàn Xuân rung nỗi nhớ
Thẳm sâu trong trái tim ai?
Tơ lòng quyện với tơ trời
Đọng thành giọt xuân lấp lánh.
Bên nhau em ơi! có biết
Đất trời vạn vật sinh sôi
Quê mình thắm sắc xuân tươi
Trong ta thiết tha gắn bó.
Tóc xòa bay về miền nhớ
Gió vờn rung tiếng nhạc lòng
Lan xa xa tới mênh mông
Cho tình người bao rạo rực.
Sao ai đêm Xuân thổn thức
Về bản tình ca tháng Giêng?`,
  },
  {
    tieuDe: "Hoa Mai",
    trang: "Trang 12",
    noiDung: `Lấp ló sân nhà ai đó
Nhành mai hoa nở trắng ngần
Nhà bên lặng lẽ trầm ngâm
Ngắm nhìn nụ hoa hé nở
Tiếng cười sao mà bỡ ngỡ
Gửi gió cho hương trời bay
Nhà bên ơi! Em có hay
Tơ trời đang đùa trong gió.
Khúc nhạc quê thêu nỗi nhớ
Tơ trời buông nhẹ khoảng không
Theo gió quyện với tơ lòng
Hương trời đọng trong ánh mắt.
Nhà bên ơi! Em có biết
Hoa mai trong trắng anh tìm?
Tiếng lòng ca lên muôn điệu
Trong anh in đậm hình em.`,
  },
  {
    tieuDe: "Dòng Sông",
    trang: "Trang 47",
    noiDung: `Dòng sông uốn lượn giữa trời xanh,
Chở nặng phù sa, chở mộng lành.
Mặt nước long lanh như gương biếc,
Phản chiếu mây trời, nắng lung linh.
Sông kể chuyện đời qua bao mùa,
Lúa vàng nghiêng bóng dưới chiều mưa.
Thuyền trôi nhè nhẹ, hồn phiêu lãng,
Lặng nghe con nước hát lời xưa.
Đêm về sông hát khúc ru êm,
Ánh trăng rơi nhẹ, gió thổi mềm.
Dòng đời cuộn chảy không ngừng nghỉ,
Dẫu bao bể dâu, vẫn mãi bền.
Sông là ký ức của quê hương,
Chở bao nỗi nhớ, chở yêu thương.
Qua bao thế hệ, sông còn đó,
Mãi mãi thủy chung, mãi vấn vương.`,
  },
  {
    tieuDe: "Mùa Xuân - Sắc Xuân",
    trang: "Trang 53",
    noiDung: `Tết đến hoa cười thắm sắc hường,
Lộc xanh tràn ngập khắp quê hương.
Nắng mai dịu nhẹ vờn đôi lá,
Gió thoảng hây hây đượm nẻo đường.
Đàn én chao nghiêng bay rợp cánh,
Mai vàng lúng liếng trải muôn phương.
Lòng người náo nức chào năm mới,
Xuân tới dậy khơi những nhớ thương.

Xuân sang nắng trải một màu hường,
Cỏ biếc hoa cười nhuộm ánh dương.
Gió lộng lay cành nghe ríu rít,
Mây ngàn trải lối thả tơ vương.
Hương xuân thắm đượm lòng thêm ấm,
Ý cảnh say nồng dạ vấn vương.
Nhẹ bước chân đi trong nắng sớm,
Ngàn đời xuân đến: mãi yêu thương.`,
  },
];

const danhSachPhoTho = [
  {
    tieuDe: "Mùa Xuân Lung Linh",
    nhacSi: "Sáng tác: Ngô Đức Tâm",
    tep: "mua-xuan-lung-linh.mp3",
    hinh: "/images/music/mua-xuan-lung-linh.png",
  },
  {
    tieuDe: "Hoa rừng",
    nhacSi: "Sáng tác: Ngô Đức Tâm",
    tep: "hoa-rung.mp3",
    hinh: "/images/music/hoa-rung.png",
  },
  {
    tieuDe: "Hương Hoa Sữa",
    nhacSi: "Sáng tác: Ngô Đức Tâm",
    tep: "huong-hoa-sua.mp3",
    hinh: "/images/music/huong-hoa-sua.png",
  },
  {
    tieuDe: "Hương bưởi 1",
    nhacSi: "Sáng tác: Ngô Đức Tâm",
    tep: "huong-buoi-1.mp3",
    hinh: "/images/music/huong-buoi-1.png",
  },
];

const phanLoaiTheoChuDe = [
  {
    tieuDe: "1. Khúc Giao Mùa Đắm Say",
    phuDe: "Góc lưu giữ những bản tình ca của 12 tháng và 4 mùa.",
    slogan: "Thời gian êm đềm trôi / Muôn hoa thắm đất trời...",
    moTa:
      "Những câu thơ chạm vào khoảnh khắc chuyển mùa như giọt sương khẽ run trên lá, ghi lại nhịp tuần hoàn êm ái của đất trời và lòng người.",
    baiTieuBieu: [
      "Khúc giao mùa",
      "Xuân - Hạ thời khắc giao mùa",
      "Bản tình ca tháng giêng, tháng hai, tháng ba",
      "Dòng sông xuân",
    ],
    trichDan: [
      {
        noiDung: "Dòng sông cựa mình tuôn chảy, rạt rào sóng vỗ bờ vui.",
        baiTho: "Bản tình ca tháng giêng",
      },
      {
        noiDung: "Đàn én chao liệng lưng trời, đưa nàng Xuân về đất Tổ.",
        baiTho: "Bản tình ca tháng giêng",
      },
    ],
    lopNen: "bg-[linear-gradient(150deg,rgba(255,253,252,0.96),rgba(226,240,248,0.92))]",
  },
  {
    tieuDe: "2. Tơ Lòng Vương Sắc Hoa",
    phuDe: "Góc ngợi ca hương sắc của các loài hoa trong tự nhiên.",
    slogan: "Màu hoa ấp ưu nồng đượm / Thắp sáng tình người hôm nay...",
    moTa:
      "Không gian thơ mở ra như một vườn bích họa trong sương, nơi từng cánh hoa hé nở cũng mang theo một nhịp thương, một nỗi nhớ dịu dàng.",
    baiTieuBieu: [
      "Hoa bưởi",
      "Bạch liên",
      "Hoa bằng lăng",
      "Hoa gạo",
      "Hương tràm",
    ],
    trichDan: [
      {
        noiDung: "Nhành mai hoa nở trắng ngần, nhà bên lặng lẽ trầm ngâm.",
        baiTho: "Hoa Mai",
      },
      {
        noiDung: "Hoa mai trong trắng anh tìm, tiếng lòng ca lên muôn điệu.",
        baiTho: "Hoa Mai",
      },
    ],
    lopNen: "bg-[linear-gradient(150deg,rgba(255,253,252,0.96),rgba(250,236,223,0.92))]",
  },
  {
    tieuDe: "3. Bến Tình Người Đất Tổ",
    phuDe: "Góc thơ nặng lòng với quê hương Trung du, dòng Thao Giang và người Mẹ.",
    slogan: "Sáng mãi lòng con một bóng quê...",
    moTa:
      "Âm hưởng ở đây trầm lắng như tiếng chuông chiều bên bến sông xưa, neo giữ hình bóng quê hương Phú Thọ, Đền Hùng và dáng bầm tảo tần qua tháng năm.",
    baiTieuBieu: [
      "Xuân trên Đất Tổ Vua Hùng",
      "Cẩm Khê quê bầm",
      "Trăng sáng trên dòng Thao Giang",
      "Bầm, Mừng tuổi bầm",
    ],
    trichDan: [
      {
        noiDung: "Sông là ký ức của quê hương, chở bao nỗi nhớ, chở yêu thương.",
        baiTho: "Dòng Sông",
      },
      {
        noiDung: "Qua bao thế hệ, sông còn đó, mãi mãi thủy chung, mãi vấn vương.",
        baiTho: "Dòng Sông",
      },
    ],
    lopNen: "bg-[linear-gradient(150deg,rgba(255,253,252,0.96),rgba(236,232,216,0.92))]",
  },
  {
    tieuDe: "4. Dấu Xưa Phong Kín",
    phuDe: "Miền ký ức tuổi học trò, những hoài niệm và tri kỷ.",
    slogan: "Thời gian phong lại dấu xưa / Mà lòng vẫn nhớ như vừa đâu đây...",
    moTa:
      "Miền thơ nhuốm sắc sepia của ký ức, nơi tiếng ve, trang vở, cuộc chia tay và bóng bạn cũ cùng trở về trong một nỗi nhớ lặng sâu mà bền bỉ.",
    baiTieuBieu: [
      "Thuở còn thơ 1 & 2",
      "Hoài niệm mùa thi",
      "Dấu xưa",
      "Chia tay tri kỷ",
    ],
    trichDan: [
      {
        noiDung: "Ngọn gió Xuân mơn man trong lành, đưa hồn anh trở về dĩ vãng.",
        baiTho: "Dòng Sông Xuân",
      },
      {
        noiDung: "Thuở ấy chúng mình bao khát vọng, mơ tương lai, cuộc sống ngày mai.",
        baiTho: "Dòng Sông Xuân",
      },
    ],
    lopNen: "bg-[linear-gradient(150deg,rgba(255,253,252,0.96),rgba(244,229,214,0.92))]",
  },
  {
    tieuDe: "5. Giọt Trăng Rơi Ngoài Thềm",
    phuDe: "Góc lãng mạn dành riêng cho hình tượng Trăng và bóng đêm.",
    slogan: "Ngoài thềm / Rơi giọt trăng / Nghiêng...",
    moTa:
      "Không gian đêm xanh thẫm gom lại những thi ảnh về trăng, nơi mỗi ánh bạc rơi xuống đều hóa thành lời tự sự mơ hồ mà tha thiết.",
    baiTieuBieu: [
      "Trăng Tây Bắc",
      "Đừng để mảnh trăng rơi",
      "Trăng chiều",
      "Đêm nguyên tiêu",
    ],
    trichDan: [
      {
        noiDung: "Đêm về sông hát khúc ru êm, ánh trăng rơi nhẹ, gió thổi mềm.",
        baiTho: "Dòng Sông",
      },
      {
        noiDung: "Lặng nghe con nước hát lời xưa.",
        baiTho: "Dòng Sông",
      },
    ],
    lopNen: "bg-[linear-gradient(150deg,rgba(251,250,255,0.96),rgba(225,231,248,0.9))]",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip text-[var(--color-ink)] paper-texture">
      <div aria-hidden className="page-bg-layer fixed inset-0 -z-10 overflow-hidden">
        <ParallaxBackgroundVideo source="/video/hero-loop.mp4" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-24"
          style={{ backgroundImage: "url('/images/generated/gemini-e00.png')" }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-18"
          style={{
            backgroundImage: "url('/images/generated/gemini-3elz.png')",
            mixBlendMode: "soft-light",
          }}
        />
        <div className="absolute inset-0 bg-[rgba(246,241,232,0.56)]" />
      </div>

      <aside
        aria-label="Mục lục nhanh"
        className="pointer-events-none fixed right-4 top-1/2 z-20 hidden -translate-y-1/2 lg:block"
      >
        <nav className="pointer-events-auto rounded-2xl border border-[var(--color-mist)] bg-[color-mix(in_srgb,var(--color-cream)_84%,white_16%)] p-3 shadow-[0_12px_30px_rgba(30,26,23,0.14)] backdrop-blur-sm">
          <p className="px-2 pb-2 text-[10px] tracking-[0.2em] text-[var(--color-muted)]">MỤC LỤC</p>
          <div className="grid gap-1 text-xs text-[var(--color-muted)]">
            <a className="rounded-lg px-2 py-1 transition-colors hover:bg-white/70 hover:text-[var(--color-ink)]" href="#tap-tho">
              Tập thơ
            </a>
            <a className="rounded-lg px-2 py-1 transition-colors hover:bg-white/70 hover:text-[var(--color-ink)]" href="#doc-online">
              Đọc online
            </a>
            <a className="rounded-lg px-2 py-1 transition-colors hover:bg-white/70 hover:text-[var(--color-ink)]" href="#trich-tho">
              Trích thơ
            </a>
            <a className="rounded-lg px-2 py-1 transition-colors hover:bg-white/70 hover:text-[var(--color-ink)]" href="#pho-tho">
              Phổ thơ
            </a>
          </div>
        </nav>
      </aside>

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <p className="text-xs tracking-[0.3em] text-[var(--color-muted)] md:text-sm">DI SẢN THI CA</p>
        <nav className="flex flex-wrap items-center justify-end gap-3 text-sm text-[var(--color-muted)] md:gap-6">
          <Link className="transition-colors hover:text-[var(--color-ink)]" href="/ve-tac-gia">
            Về tác giả
          </Link>
          <a className="transition-colors hover:text-[var(--color-ink)]" href="#tap-tho">
            Tập thơ
          </a>
          <a className="transition-colors hover:text-[var(--color-ink)]" href="#doc-online">
            Đọc online
          </a>
          <a className="transition-colors hover:text-[var(--color-ink)]" href="#trich-tho">
            Trích thơ
          </a>
          <a className="transition-colors hover:text-[var(--color-ink)]" href="#pho-tho">
            Phổ thơ
          </a>
          <a
            className="transition-colors hover:text-[var(--color-ink)]"
            href="https://web.facebook.com/ngoductampt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            className="transition-colors hover:text-[var(--color-ink)]"
            href="https://ngoductampt.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </nav>
      </header>

      <section data-reveal className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="relative h-56 overflow-hidden rounded-[2rem] border border-[var(--color-mist)] shadow-[0_14px_38px_rgba(30,26,23,0.2)] md:h-72">
          <Image
            src="/images/hero-background.jpg"
            alt="Ảnh chủ đề thi ca của nhà thơ Ngô Đức Tâm"
            fill
            className="object-cover"
            priority
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(95deg,rgba(0,0,0,0.55),rgba(0,0,0,0.26)_58%,rgba(0,0,0,0.12))]"
          />
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
            <p className="text-xs tracking-[0.28em] text-white/80">KHÔNG GIAN THI CA</p>
            <h2 className="mt-2 max-w-2xl font-serif text-2xl leading-tight text-white md:text-4xl">
              Ngọn lửa ký ức quê hương trong thơ Ngô Đức Tâm
            </h2>
          </div>
        </div>
      </section>

      <section
        data-reveal
        className="mx-auto grid w-full max-w-6xl gap-8 px-6 pb-14 pt-7 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:pb-20"
      >
        <div>
          <p className="fade-in text-sm tracking-[0.28em] text-[var(--color-muted)]" style={{ animationDelay: "40ms" }}>
            NGÔ ĐỨC TÂM
          </p>

          <h1
            className="fade-in mt-3 max-w-4xl font-serif text-4xl leading-[1.15] font-semibold md:text-6xl"
            style={{ animationDelay: "120ms" }}
          >
            Dòng thơ quê hương trong không gian số hiện đại và tinh tế
          </h1>

          <blockquote
            className="fade-in mt-5 max-w-3xl border-l-2 border-[var(--color-gold)] pl-5 font-serif text-2xl leading-[1.55] md:text-3xl"
            style={{ animationDelay: "220ms" }}
          >
            &ldquo;Ngọn gió Xuân mơn man trong lành,
            <br />
            đưa hồn anh trở về dĩ vãng.&rdquo;
          </blockquote>

          <p
            className="fade-in mt-2 text-sm text-[var(--color-muted)]"
            style={{ animationDelay: "260ms" }}
          >
            Trích bài Dòng Sông Xuân, trang 10, tập thơ Dòng Sông Xuân.
          </p>

          <p
            className="fade-in mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] md:text-lg"
            style={{ animationDelay: "320ms" }}
          >
            Đây là nơi lưu giữ hành trình thi ca của nhà thơ Ngô Đức Tâm, kết nối văn bản, âm nhạc phổ thơ và tư
            liệu quý cho nhiều thế hệ độc giả.
          </p>

          <div className="fade-in mt-7 flex flex-wrap gap-4" style={{ animationDelay: "420ms" }}>
            <Link
              className="rounded-full border border-[var(--color-mist)] bg-[var(--color-cream)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors duration-300 hover:border-[var(--color-gold)]"
              href="/ve-tac-gia"
            >
              Xem tiểu sử đầy đủ
            </Link>
            <a
              className="rounded-full border border-[var(--color-mist)] bg-[var(--color-cream)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors duration-300 hover:border-[var(--color-gold)]"
              href="#tap-tho"
            >
              Tập thơ đã hoàn thành
            </a>
          </div>
        </div>

        <aside className="fade-in md:justify-self-end" style={{ animationDelay: "200ms" }}>
          <div className="rounded-[2rem] border border-[var(--color-mist)] bg-[var(--color-cream)] p-4 shadow-[0_12px_40px_rgba(30,26,23,0.12)] md:p-5">
            <Image
              src="/images/ngo-duc-tam-avatar.jpg"
              alt="Chân dung nhà thơ Ngô Đức Tâm"
              width={360}
              height={360}
              className="h-auto w-full rounded-[1.5rem] object-cover"
              priority
            />
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              Nhà thơ Ngô Đức Tâm sinh năm 1951 tại vùng Đất Tổ Phú Thọ. Ông là gương mặt thơ ca tiêu biểu của địa phương,
              có nhiều đóng góp quan trọng cho sự phát triển của nền thơ ca tỉnh Phú Thọ, với những sáng tác giàu tình yêu
              quê hương và đậm bản sắc văn hóa vùng trung du.
            </p>
          </div>
        </aside>
      </section>

      <SectionDivider variant="mist-gold" />

      <section id="tap-tho" data-reveal className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 md:py-12">
        <div className="spotlight-card grid items-center gap-6 rounded-3xl border border-[var(--color-mist)] bg-[var(--color-cream)] p-6 md:grid-cols-[1.08fr_0.92fr] md:p-10">
          <div className="md:pr-4">
            <p className="text-xs tracking-[0.26em] text-[var(--color-muted)]">TẬP THƠ ĐÃ HOÀN THÀNH</p>
            <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight md:text-4xl">
              Dòng Sông Xuân - hành trình thi ca từ ký ức đến hiện tại
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-[var(--color-muted)]">
              Bạn có thể đọc trực tiếp trên web bằng trình xem PDF tích hợp, hoặc mở bản PDF đầy đủ để lưu trữ và
              tra cứu.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-[var(--color-cream)]"
                href="#doc-online"
              >
                Đọc trực tiếp trên web
              </a>
              <a
                className="rounded-full border border-[var(--color-mist)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)]"
                href="/books/dong-song-xuan-ngo-duc-tam.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mở PDF Dòng Sông Xuân
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[var(--color-mist)] bg-black/10">
            <Image
              src="/images/dong-song-xuan-cover.jpg"
              alt="Ảnh bìa tập thơ Dòng Sông Xuân"
              width={1200}
              height={1600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <SectionDivider variant="gold-moss" />

      <section id="doc-online" data-reveal className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 md:py-14">
        <div className="section-surface rounded-3xl border border-[var(--color-mist)] p-6 md:p-10">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs tracking-[0.26em] text-[var(--color-muted)]">ĐỌC ONLINE TRÊN WEB</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
                Đọc trực tiếp tập thơ PDF ngay trên website
              </h2>
            </div>
            <a
              className="rounded-full border border-[var(--color-mist)] px-4 py-2 text-sm font-medium text-[var(--color-ink)]"
              href="/books/dong-song-xuan-ngo-duc-tam.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mở PDF toàn tập
            </a>
          </div>

          <div className="mt-6">
            <LazyPdfViewer tepPdf="/books/dong-song-xuan-ngo-duc-tam.pdf" tieuDe="Đọc tập thơ Dòng Sông Xuân" />
          </div>

          <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
            Nếu trình duyệt được cài đặt chế độ tự tải PDF thay vì hiển thị nội tuyến, bạn có thể mở trực tiếp tệp
            qua nút phía trên để xem toàn bộ nội dung.
          </p>
        </div>
      </section>

      <SectionDivider variant="mist-ink" />

      <section id="trich-tho" data-reveal className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 md:py-14">
        <div className="spotlight-card rounded-3xl border border-[var(--color-mist)] bg-[var(--color-cream)] p-6 md:p-10">
          <p className="text-xs tracking-[0.26em] text-[var(--color-muted)]">TOÀN VĂN BÀI THƠ TIÊU BIỂU</p>
          <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight md:text-4xl">Một số bài thơ tiêu biểu</h2>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {baiThoNoiBat.map((bai, index) => (
              <article
                key={bai.tieuDe}
                id={`bai-tho-${index + 1}`}
                data-reveal
                className="lift-card h-full scroll-mt-24 rounded-2xl border border-[var(--color-mist)] bg-[var(--color-paper)] p-5"
              >
                <h3 className="font-serif text-2xl text-[var(--color-ink)]">{bai.tieuDe}</h3>
                <p className="mt-4 whitespace-pre-line font-serif leading-8 text-[var(--color-ink)]">{bai.noiDung}</p>

                <div className="mt-5 rounded-xl border border-[var(--color-mist)]/70 bg-[var(--color-cream)]/70 p-3">
                  <div className="flex min-h-14 flex-col justify-between gap-3">
                    <p className="text-xs tracking-[0.2em] text-[var(--color-muted)]">{bai.trang}</p>

                    <div className="flex justify-end">
                      <FacebookShareButton
                        anchorId={`bai-tho-${index + 1}`}
                        quote={`Chia sẻ bài thơ ${bai.tieuDe} (${bai.trang}) của Ngô Đức Tâm`}
                        className="rounded-full border border-[var(--color-mist)] bg-[var(--color-cream)] px-3 py-1.5 text-xs font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-gold)]"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="gold-moss" />

        <section id="chu-de-noi-dung" data-reveal className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 md:py-14">
          <div className="section-surface rounded-3xl border border-[var(--color-mist)] p-6 md:p-10">
            <p className="text-xs tracking-[0.26em] text-[var(--color-muted)]">PHÂN LOẠI THEO CHỦ ĐỀ</p>
            <h2 className="mt-3 max-w-4xl font-serif text-3xl leading-tight md:text-4xl">Năm miền thơ theo chủ đề</h2>
            <p className="mt-5 max-w-4xl leading-8 text-[var(--color-muted)]">
              Mỗi nhóm thơ được đặt thành một miền cảm xúc riêng, vừa gợi không khí thị giác, vừa giữ nhịp văn chương để
              người đọc bước vào thế giới thi ca bằng cả trí nhớ và rung cảm.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {phanLoaiTheoChuDe.map((nhom) => (
                <article key={nhom.tieuDe} className={`rounded-2xl border border-[var(--color-mist)] p-5 ${nhom.lopNen}`}>
                  <p className="text-xs tracking-[0.2em] text-[var(--color-muted)]">MIỀN CẢM HỨNG</p>
                  <h3 className="font-serif text-2xl leading-tight">{nhom.tieuDe}</h3>
                  <p className="mt-2 text-sm italic leading-7 text-[var(--color-moss)]">{nhom.phuDe}</p>
                  <blockquote className="mt-4 border-l-2 border-[var(--color-gold)] pl-3 font-serif text-lg italic leading-8 text-[var(--color-ink)]">
                    &ldquo;{nhom.slogan}&rdquo;
                  </blockquote>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{nhom.moTa}</p>

                  <p className="mt-4 text-xs tracking-[0.2em] text-[var(--color-muted)]">BÀI TIÊU BIỂU</p>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-7 text-[var(--color-muted)]">
                    {nhom.baiTieuBieu.map((muc) => (
                      <li key={muc}>{muc}</li>
                    ))}
                  </ul>

                  <div className="mt-4 border-t border-[var(--color-mist)] pt-3">
                    <p className="text-xs tracking-[0.2em] text-[var(--color-muted)]">TRÍCH DẪN TIÊU BIỂU</p>
                    <div className="mt-2 space-y-3">
                      {nhom.trichDan.map((dongTrich, index) => (
                        <blockquote
                          key={`${nhom.tieuDe}-${index}`}
                          className="rounded-lg bg-[color-mix(in_srgb,var(--color-cream)_82%,white_18%)] p-3"
                        >
                          <p className="font-serif text-base italic leading-7 text-[var(--color-ink)]">
                            &ldquo;{dongTrich.noiDung}&rdquo;
                          </p>
                          <p className="mt-2 text-xs tracking-[0.08em] text-[var(--color-muted)]">
                            Trích từ bài: {dongTrich.baiTho}
                          </p>
                        </blockquote>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider variant="mist-ink" />

      <section id="pho-tho" data-reveal className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 md:py-14">
        <article className="spotlight-card rounded-3xl border border-[var(--color-mist)] bg-[var(--color-cream)] p-7 md:p-10">
          <p className="text-xs tracking-[0.26em] text-[var(--color-muted)]">PHỔ THƠ - ÂM NHẠC</p>
          <h3 className="mt-4 font-serif text-2xl leading-tight md:text-3xl">Tuyển chọn nhạc phổ thơ</h3>
          <p className="mt-4 leading-8 text-[var(--color-muted)]">
            Danh sách dưới đây tổng hợp các bản nhạc phổ thơ đã được thêm vào kho audio để có thể nghe trực tiếp
            ngay trên landing page.
          </p>

          <div className="mt-6 grid gap-4">
            {danhSachPhoTho.map((baiHat, index) => (
              <article
                key={baiHat.tep}
                id={`pho-tho-${index + 1}`}
                className="lift-card scroll-mt-24 rounded-2xl border border-[var(--color-mist)] bg-[var(--color-paper)] p-1"
              >
                <CustomAudioPlayer
                  tieuDe={baiHat.tieuDe}
                  nhacSi={baiHat.nhacSi}
                  tep={baiHat.tep}
                  hinh={baiHat.hinh}
                  anchorId={`pho-tho-${index + 1}`}
                />
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-[var(--color-cream)]"
              href="https://web.facebook.com/ngoductampt"
              target="_blank"
              rel="noopener noreferrer"
            >
              Xem thêm trên Facebook
            </a>
            <a
              className="rounded-full border border-[var(--color-mist)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)]"
              href="https://ngoductampt.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Đọc thêm trên Blog
            </a>
          </div>
        </article>
      </section>

    </main>
  );
}
