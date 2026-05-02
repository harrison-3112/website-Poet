import Image from "next/image";
import Link from "next/link";

import SectionDivider from "../components/section-divider";

const mocThoiGian = [
  {
    nam: "Giai đoạn đầu",
    tieuDe: "Khởi nguồn cảm hứng từ quê hương",
    moTa:
      "Những sáng tác đầu tiên đặt nền cho giọng thơ giàu chất hồi niệm, gắn với dòng sông, mùa xuân và ký ức gia đình.",
  },
  {
    nam: "Giai đoạn phát triển",
    tieuDe: "Mở rộng mạch thơ đời sống và nhân bản",
    moTa:
      "Thơ hướng về tình người đất tổ, lao động, tình yêu xóm làng và nhịp sống đời thường với ngôn ngữ gần gũi.",
  },
  {
    nam: "Giai đoạn số hóa",
    tieuDe: "Hoàn thiện di sản thi ca trên không gian số",
    moTa:
      "Tác phẩm được chuẩn hóa tư liệu, kết nối với nhạc phổ thơ và lưu trữ kèm nguồn tham chiếu để phục vụ độc giả nhiều thế hệ.",
  },
];

const anhTheoThoiKy = [
  {
    tieuDe: "Chân dung tác giả",
    chuThich: "Ảnh tư liệu đại diện cho giai đoạn sáng tác và giao lưu văn nghệ.",
    anh: "/images/ngo-duc-tam-avatar.jpg",
    alt: "Chân dung nhà thơ Ngô Đức Tâm",
  },
  {
    tieuDe: "Giai đoạn hoàn thiện Dòng Sông Xuân",
    chuThich: "Tập thơ đánh dấu mạch cảm xúc về quê hương và dòng chảy ký ức.",
    anh: "/images/dong-song-xuan-cover.jpg",
    alt: "Bìa tập thơ Dòng Sông Xuân",
  },
  {
    tieuDe: "Mở rộng chủ đề tình người đất tổ",
    chuThich: "Không gian sáng tác hướng đến cộng đồng và giá trị nhân văn bền vững.",
    anh: "/images/tinh-nguoi-dat-to-cover.jpg",
    alt: "Bìa tác phẩm Tình người đất tổ",
  },
];

const danhSachTacPham = [
  {
    ten: "Dòng Sông Xuân",
    moTa:
      "Tập thơ tiêu biểu, tập trung vào ký ức, mùa xuân quê hương và dòng chảy cảm xúc xuyên suốt nhiều giai đoạn sáng tác.",
    lienKet: "/books/dong-song-xuan-ngo-duc-tam.pdf",
    nhan: "Mở PDF",
  },
  {
    ten: "Tình người đất tổ",
    moTa:
      "Mạch thơ nhân bản, đề cao cội nguồn và sự gắn kết giữa con người với văn hóa địa phương.",
    lienKet: "/",
    nhan: "Xem trên trang chủ",
  },
  {
    ten: "Tuyển tập phổ thơ",
    moTa:
      "Các bài thơ được phổ nhạc, giúp tác phẩm lan tỏa tới độc giả đại chúng qua hình thức nghe - cảm - ghi nhớ.",
    lienKet: "/#pho-tho",
    nhan: "Nghe phổ thơ",
  },
];

const danhSachGiaiThuong = [
  {
    tieuDe: "Ghi nhận hoạt động văn nghệ địa phương",
    moTa:
      "Hồ sơ năm và đơn vị trao tặng đang tiếp tục được số hóa, đối soát từ tư liệu gốc để công bố chính xác.",
  },
  {
    tieuDe: "Ghi nhận đóng góp phổ biến thơ ca",
    moTa:
      "Nhiều tác phẩm được chia sẻ rộng rãi trong các chương trình giao lưu văn hóa, câu lạc bộ thơ nhạc và hoạt động cộng đồng.",
  },
  {
    tieuDe: "Ghi nhận giá trị lưu trữ di sản",
    moTa:
      "Dự án số hóa hướng tới chuẩn lưu trữ dài hạn, tạo điều kiện cho nghiên cứu và tiếp cận công khai theo thời gian.",
  },
];

const trichDanPheBinh = [
  {
    cauNoi:
      "Thơ Ngô Đức Tâm có chất điềm tĩnh của người từng trải, nhưng vẫn giữ được ánh sáng lạc quan của làng quê Bắc Bộ.",
    nguon: "Tư liệu phê bình văn học địa phương, đang cập nhật đầy đủ thông tin nguồn.",
  },
  {
    cauNoi:
      "Điểm đáng quý là ngôn ngữ thơ mộc mạc, không cầu kỳ hình thức, tạo khoảng gần gũi với nhiều lớp độc giả.",
    nguon: "Ghi chú biên tập học thuật trong quá trình xây dựng kho di sản số.",
  },
  {
    cauNoi:
      "Khi thơ được phổ nhạc, mạch cảm xúc trong tác phẩm tiếp tục sống ở một đời sống thứ hai, giàu tính lan tỏa.",
    nguon: "Nhận định chuyên đề thơ và âm nhạc, đang chuẩn hóa dữ liệu trích dẫn.",
  },
];

export default function VeTacGiaPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip text-[var(--color-ink)] paper-texture">
      <div aria-hidden className="page-bg-layer fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-22"
          style={{ backgroundImage: "url('/images/generated/gemini-3elz.png')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,241,232,0.9),rgba(246,241,232,0.68))]" />
      </div>

      <header className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-7 md:px-10">
        <Link
          href="/"
          className="rounded-full border border-[var(--color-mist)] bg-[var(--color-cream)] px-4 py-2 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-gold)]"
        >
          Về trang chủ
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-4 text-sm text-[var(--color-muted)]">
          <a className="transition-colors hover:text-[var(--color-ink)]" href="#timeline">
            Timeline
          </a>
          <a className="transition-colors hover:text-[var(--color-ink)]" href="#tac-pham">
            Tác phẩm
          </a>
          <a className="transition-colors hover:text-[var(--color-ink)]" href="#giai-thuong">
            Ghi nhận
          </a>
          <a className="transition-colors hover:text-[var(--color-ink)]" href="#phe-binh">
            Nhận định
          </a>
        </nav>
      </header>

      <section className="mx-auto grid w-full max-w-6xl gap-7 px-6 pb-10 md:grid-cols-[1.05fr_0.95fr] md:px-10 md:pb-14">
        <div className="rounded-3xl border border-[var(--color-mist)] bg-[var(--color-cream)] p-6 md:p-8">
          <p className="text-xs tracking-[0.28em] text-[var(--color-muted)]">HỒ SƠ TÁC GIẢ</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">Nhà thơ Ngô Đức Tâm</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)] md:text-lg">
            Nhà thơ Ngô Đức Tâm sinh năm 1951 tại vùng Đất Tổ Phú Thọ, nơi giàu truyền thống văn hóa và lịch sử dân tộc.
            Ông là một trong những gương mặt thơ ca tiêu biểu của địa phương, dành nhiều tâm huyết cho sáng tác văn học
            nghệ thuật và có những đóng góp đáng ghi nhận đối với sự phát triển của đời sống thơ ca tỉnh Phú Thọ.
          </p>
          <p className="mt-3 max-w-2xl text-base leading-8 text-[var(--color-muted)] md:text-lg">
            Thơ Ngô Đức Tâm mang đậm tình yêu quê hương, con người và thiên nhiên trung du, giàu cảm xúc nhân văn,
            mộc mạc mà sâu lắng, phản ánh những trải nghiệm đời sống cùng suy tư về thời gian, ký ức và giá trị tinh
            thần của con người. Qua nhiều năm sáng tác, ông đã xây dựng cho mình một phong cách thơ riêng, gắn bó với
            cội nguồn văn hóa Đất Tổ và tinh thần dân tộc.
          </p>
          <p className="mt-3 max-w-2xl text-base leading-8 text-[var(--color-muted)] md:text-lg">
            Trang tiểu sử này tổng hợp những dấu mốc sáng tác quan trọng, hệ thống tư liệu hình ảnh theo từng giai
            đoạn hoạt động văn chương, cùng các nhận định, đánh giá học thuật tiêu biểu của giới nghiên cứu và bạn đọc,
            qua đó phác họa toàn diện hành trình thi ca bền bỉ, giàu tâm huyết và đóng góp ý nghĩa của nhà thơ đối với
            văn học địa phương.
          </p>

          <blockquote className="mt-6 border-l-2 border-[var(--color-gold)] pl-4 font-serif text-2xl leading-[1.6] md:text-3xl">
            &ldquo;Thơ là nơi ký ức và tình người song song tồn tại, để lại sợi dây kết nối giữa quá khứ và hiện tại.&rdquo;
          </blockquote>

          <p className="mt-3 text-sm text-[var(--color-muted)]">Trích ghi chú từ bộ hồ sơ biên tập di sản số.</p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[var(--color-mist)] bg-[var(--color-cream)] p-4 md:p-5">
          <Image
            src="/images/ngo-duc-tam-avatar.jpg"
            alt="Chân dung nhà thơ Ngô Đức Tâm"
            width={720}
            height={900}
            className="h-full max-h-[520px] w-full rounded-2xl object-cover"
            priority
          />
        </div>
      </section>

      <SectionDivider />

      <section id="timeline" className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 md:py-12">
        <div className="section-surface rounded-3xl border border-[var(--color-mist)] p-6 md:p-9">
          <p className="text-xs tracking-[0.28em] text-[var(--color-muted)]">TIMELINE CUOC DOI VA SANG TAC</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">Nhung moc chinh trong hanh trinh thi ca</h2>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {mocThoiGian.map((moc) => (
              <article key={moc.tieuDe} className="rounded-2xl border border-[var(--color-mist)] bg-[var(--color-cream)] p-5">
                <p className="text-xs tracking-[0.24em] text-[var(--color-muted)]">{moc.nam}</p>
                <h3 className="mt-2 font-serif text-2xl">{moc.tieuDe}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{moc.moTa}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {anhTheoThoiKy.map((khungAnh) => (
              <figure key={khungAnh.tieuDe} className="rounded-2xl border border-[var(--color-mist)] bg-[var(--color-paper)] p-3">
                <Image
                  src={khungAnh.anh}
                  alt={khungAnh.alt}
                  width={720}
                  height={920}
                  className="h-60 w-full rounded-xl object-cover"
                />
                <figcaption className="mt-3">
                  <p className="font-serif text-xl">{khungAnh.tieuDe}</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{khungAnh.chuThich}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="tac-pham" className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 md:py-12">
        <div className="rounded-3xl border border-[var(--color-mist)] bg-[var(--color-cream)] p-6 md:p-9">
          <p className="text-xs tracking-[0.28em] text-[var(--color-muted)]">DANH MUC TAC PHAM</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">Tuyen tap duoc gioi thieu trong kho di san</h2>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {danhSachTacPham.map((tacPham) => (
              <article key={tacPham.ten} className="rounded-2xl border border-[var(--color-mist)] bg-[var(--color-paper)] p-5">
                <h3 className="font-serif text-2xl">{tacPham.ten}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{tacPham.moTa}</p>
                <Link
                  href={tacPham.lienKet}
                  className="mt-4 inline-flex rounded-full border border-[var(--color-mist)] bg-[var(--color-cream)] px-4 py-2 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-gold)]"
                >
                  {tacPham.nhan}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="giai-thuong" className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 md:py-12">
        <div className="section-surface rounded-3xl border border-[var(--color-mist)] p-6 md:p-9">
          <p className="text-xs tracking-[0.28em] text-[var(--color-muted)]">GIAI THUONG VA GHI NHAN</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">Nhung dong ghi nhan dang duoc doi soat tu lieu</h2>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {danhSachGiaiThuong.map((muc) => (
              <article key={muc.tieuDe} className="rounded-2xl border border-[var(--color-mist)] bg-[var(--color-cream)] p-5">
                <h3 className="font-serif text-2xl">{muc.tieuDe}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{muc.moTa}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="phe-binh" className="mx-auto w-full max-w-6xl px-6 py-10 pb-20 md:px-10 md:pb-24">
        <div className="rounded-3xl border border-[var(--color-mist)] bg-[var(--color-cream)] p-6 md:p-9">
          <p className="text-xs tracking-[0.28em] text-[var(--color-muted)]">TRICH DAN PHE BINH</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">Goc nhin hoc thuat ve giong tho</h2>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {trichDanPheBinh.map((trichDan, index) => (
              <article key={`${trichDan.cauNoi}-${index}`} className="rounded-2xl border border-[var(--color-mist)] bg-[var(--color-paper)] p-5">
                <blockquote className="font-serif text-xl leading-8 text-[var(--color-ink)]">
                  &ldquo;{trichDan.cauNoi}&rdquo;
                </blockquote>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{trichDan.nguon}</p>
              </article>
            ))}
          </div>

          <footer className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-mist)] pt-5 text-sm text-[var(--color-muted)]">
            <p>Ho so nay se tiep tuc bo sung du lieu goc, nam va nguon trich dan theo lo trinh bien tap.</p>
            <Link className="transition-colors hover:text-[var(--color-ink)]" href="/">
              Quay lai trang chu
            </Link>
          </footer>
        </div>
      </section>
    </main>
  );
}
