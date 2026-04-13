export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center space-y-6">
        <div className="inline-block bg-accent/10 border border-accent/20 rounded-full px-4 py-1">
          <span className="text-accent text-sm font-semibold">Khóa học Lịch Sử Chính Trị</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance text-foreground">
          Nhà Nước và <span className="text-accent">Cách Mạng</span> Xã Hội
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          Tìm hiểu về khái niệm, bản chất, đặc trưng và chức năng của nhà nước trong lịch sử phát triển xã hội loài người.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <a
            href="#theory"
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Bắt đầu học
          </a>
          <a
            href="#quiz"
            className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition"
          >
            Làm bài quiz
          </a>
        </div>
      </div>
    </section>
  )
}
