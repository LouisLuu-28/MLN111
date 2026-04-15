import TheoryCard from './TheoryCard'

const theories = [
  {
    id: 0,
    section: 'Nhà nước',
    title: 'Định nghĩa nhà nước',
    shortDesc: 'Khái niệm nhà nước theo quan điểm Mác - Lênin',
    content: 'Nhà nước là một tổ chức quyền lực công cộng đặc biệt của giai cấp thống trị, được thiết lập để quản lý xã hội trên một lãnh thổ nhất định bằng pháp luật và các công cụ cưỡng chế nhằm bảo vệ trật tự xã hội phù hợp với lợi ích của giai cấp cầm quyền.',
    images: [
      {
        url: 'https://media.quochoi.vn/Uploads/Originals/2026/04/06/202604060848231220_z7695451418776_8a74210e288a0155ed4652f52f968428.jpg',
        caption: 'Hình ảnh một phiên họp của Quốc hội nước CHXHCN Việt Nam'
      },
      {
        url: 'https://tse1.mm.bing.net/th/id/OIP.fzmQgSyIIQcSpTHGumTkHAHaHP?rs=1&pid=ImgDetMain&o=7&rm=3',
        caption: 'Tranh vẽ về nhà Ming ở Trung Quốc, một ví dụ về nhà nước phong kiến trong lịch sử'
      }
    ],
    keyPoints: [
      'Là tổ chức quyền lực công cộng đặc biệt trong xã hội có giai cấp',
      'Quản lý xã hội bằng pháp luật trên phạm vi lãnh thổ quốc gia',
      'Mang bản chất giai cấp và phục vụ trật tự xã hội hiện hành'
    ]
  },
  {
    id: 1,
    section: 'Nhà nước',
    title: 'Nguồn gốc của nhà nước',
    shortDesc: 'Nhà nước ra đời từ mâu thuẫn giai cấp không thể điều hòa',
    content: 'Theo quan điểm Mác - Lênin, nhà nước là một phạm trù lịch sử, chỉ xuất hiện khi xã hội phân chia thành các giai cấp đối kháng. Nguyên nhân sâu xa là sự phát triển của lực lượng sản xuất làm xuất hiện tư hữu và phân hóa giàu nghèo; nguyên nhân trực tiếp là mâu thuẫn giai cấp gay gắt cần một bộ máy cưỡng chế để duy trì trật tự theo lợi ích của giai cấp thống trị.',
    images: [
      {
        url: 'https://image.luatvietnam.vn/uploaded/665twebp/images/original/2023/06/09/Mau-thuan-giai-cap-manh-me-trong-xa-hoi-tu-ban_0906142048.jpeg',
        caption: 'Đây là hình ảnh về quần chúng cách mạng Nga dưới sự lãnh đạo của Lenin trong Cách mạng Tháng Mười 1917, thể hiện hoạt động đấu tranh chính trị nhằm xây dựng nhà nước mới'
      },
      {
        url: 'https://1.bp.blogspot.com/-Y3vNwbeqrMY/YSnGWImbMHI/AAAAAAAAAb8/DR68gvN0F7UOCqczH6WVPeXwmqQUzhI6QCLcBGAsYHQ/s1280/WhatsApp%2BImage%2B2021-08-27%2Bat%2B23.10.35.jpeg',
        caption: 'Bức tranh mô tả xã hội tư bản theo hình kim tự tháp, trong đó giai cấp tư sản ở trên bóc lột và thống trị, còn công nhân ở dưới lao động nuôi toàn xã hội, thể hiện rõ bản chất giai cấp của nhà nước tư sản'
      }
    ],
    keyPoints: [
      'Nhà nước không tồn tại vĩnh viễn, chỉ có trong xã hội có giai cấp',
      'Ra đời để làm dịu xung đột giai cấp trong khuôn khổ trật tự hiện hành',
      'Gắn với sự xuất hiện của tư hữu và bất bình đẳng xã hội'
    ]
  },
  {
    id: 2,
    section: 'Nhà nước',
    title: 'Bản chất của nhà nước',
    shortDesc: 'Nhà nước là công cụ thống trị giai cấp',
    content: 'Bản chất của nhà nước là tính giai cấp: nhà nước là bộ máy do giai cấp có vị thế kinh tế thống trị tổ chức và sử dụng để hợp pháp hóa, củng cố quyền lực chính trị của mình. Vì vậy, nhà nước không phải tổ chức trung lập đứng ngoài giai cấp, mà luôn phản ánh tương quan lợi ích giai cấp trong từng thời kỳ lịch sử.',
    images: [
      {
        url: 'https://bcp.cdnchinhphu.vn/Uploaded/tranthithom/2020_08_03/toa%20an.jpg',
        caption: 'Hình ảnh tòa án thể hiện cho việc nhà nước quản lí xã hôi bằng pháp luật'
      },
      {
        url: '/hinh%20anh%20canh%20sat%20va%20quan%20doi.jpg',
        caption: 'Hình ảnh AI thể hiện quyền lực cưỡng chế của nhà nước trong việc duy trì trật tự xã hội hiện hành'
      }
    ],
    keyPoints: [
      'Không có nhà nước đứng trên mọi giai cấp',
      'Nhà nước là công cụ chuyên chính của giai cấp cầm quyền',
      'Bản chất giai cấp luôn biểu hiện qua pháp luật và bộ máy quyền lực'
    ]
  },
  {
    id: 3,
    section: 'Nhà nước',
    title: 'Đặc trưng cơ bản của nhà nước',
    shortDesc: 'Lãnh thổ, quyền lực công cộng, thuế khóa',
    content: 'Nhà nước có ba đặc trưng nổi bật: (1) quản lý cư dân theo lãnh thổ quốc gia; (2) có bộ máy quyền lực công cộng chuyên nghiệp, bao gồm cơ quan hành chính, tư pháp, lực lượng vũ trang; (3) có hệ thống tài chính công, đặc biệt là thuế, để duy trì hoạt động của bộ máy nhà nước.',
    images: [
      {
        url: 'https://mtcs.1cdn.vn/thumbs/540x360/2020/01/06/media.moitruong.net.vn-2020-01-_giay-to1.jpg',
        caption: 'Nhà nước quản lý công dân thông qua hệ thống giấy tờ pháp lý'
      },
      {
        url: 'https://mediabls.mediatech.vn/upload/image/202406/medium/466369_mceu_84504461511719234651649_20105424.png?1719234654742',
        caption: 'Hình ảnh kiểm soát cửa khẩu biên giới quốc gia'
      }
    ],
    keyPoints: [
      'Quản lý xã hội theo lãnh thổ, không theo huyết thống',
      'Có lực lượng cưỡng chế chuyên nghiệp để bảo vệ trật tự',
      'Thuế là nguồn tài chính chủ yếu nuôi bộ máy nhà nước'
    ]
  },
  {
    id: 4,
    section: 'Nhà nước',
    title: 'Chức năng của nhà nước',
    shortDesc: 'Thống trị chính trị và quản lý xã hội',
    content: 'Nhà nước thực hiện đồng thời hai nhóm chức năng: chức năng thống trị chính trị và chức năng xã hội. Về phạm vi hoạt động, nhà nước còn triển khai chức năng đối nội (duy trì trật tự, quản lý phát triển trong nước) và đối ngoại (bảo vệ lợi ích quốc gia, thiết lập quan hệ quốc tế). Các chức năng này liên hệ chặt chẽ và tác động qua lại lẫn nhau.',
    images: [
      {
        url: 'https://hoidongytrunguong.vn/pic/News/tay-bac-24325_2121_HasThumb_Thumb.jpg',
        caption: 'Hình ảnh đối nội của nhà nước'
      },
      {
        url: 'https://file3.qdnd.vn/data/images/0/2024/06/29/upload_2231/a5.jpg?dpi=150&quality=100&w=870',
        caption: 'Hình ảnh miêu tả về đối ngoại, ngoại giao giữa Việt Nam và Nga'
      }
    ],
    keyPoints: [
      'Chức năng chính trị thường giữ vai trò định hướng',
      'Chức năng xã hội là điều kiện để nhà nước ổn định lâu dài',
      'Đối nội và đối ngoại là hai mặt của một chỉnh thể quyền lực'
    ]
  },
  {
    id: 5,
    section: 'Nhà nước',
    title: 'Kiểu và hình thức nhà nước',
    shortDesc: 'Phân loại theo bản chất giai cấp và cách tổ chức quyền lực',
    content: 'Theo lịch sử xã hội có giai cấp, có bốn kiểu nhà nước tiêu biểu: chủ nô, phong kiến, tư sản và vô sản. Bên cạnh kiểu nhà nước, mỗi thời kỳ còn có nhiều hình thức tổ chức quyền lực khác nhau như quân chủ, cộng hòa, liên bang... Hình thức có thể đa dạng nhưng bản chất giai cấp của nhà nước vẫn là tiêu chí quyết định.',
    images: [
      {
        url: 'https://hocluat.vn/wp-content/uploads/2020/01/nha-nuoc-chu-no.jpg',
        caption: 'Hình ảnh miêu tả về một nhà nước chủ nô'
      },
      {
        url: 'https://hocluat.vn/wp-content/uploads/2018/02/nha-nuoc-tu-san.jpg',
        caption: 'Hình ảnh nói về một nhà nước tư sản'
      }
    ],
    keyPoints: [
      'Kiểu nhà nước gắn với giai cấp nắm quyền thống trị',
      'Hình thức nhà nước là cách tổ chức và thực thi quyền lực',
      'Cần phân biệt hình thức và bản chất khi đánh giá một nhà nước'
    ]
  },
  {
    id: 6,
    section: 'Nhà nước',
    title: 'Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam',
    shortDesc: 'Nhà nước của nhân dân, do nhân dân, vì nhân dân',
    content: 'Ở Việt Nam hiện nay, xây dựng Nhà nước pháp quyền xã hội chủ nghĩa là nhiệm vụ trọng tâm của đổi mới hệ thống chính trị. Mô hình này nhấn mạnh nguyên tắc thượng tôn pháp luật, quyền làm chủ của nhân dân, sự phân công và kiểm soát quyền lực giữa lập pháp - hành pháp - tư pháp, đồng thời đặt dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.',
    images: [
      {
        url: 'https://media.quochoi.vn/Uploads/Originals/2026/04/06/202604060848231220_z7695451418776_8a74210e288a0155ed4652f52f968428.jpg',
        caption: 'Hình ảnh một phiên họp của Quốc hội nước CHXHCN Việt Nam'
      },
      {
        url: 'https://bcp.cdnchinhphu.vn/Uploaded/tranthithom/2020_08_03/toa%20an.jpg',
        caption: 'Hình ảnh tòa án thể hiện cho việc nhà nước Việt Nam quản lí xã hôi bằng pháp luật'
      }
    ],
    keyPoints: [
      'Bản chất: nhà nước của nhân dân, do nhân dân, vì nhân dân',
      'Vận hành theo pháp luật, coi trọng kiểm soát quyền lực',
      'Mục tiêu: dân giàu, nước mạnh, dân chủ, công bằng, văn minh'
    ]
  },
  {
    id: 7,
    section: 'Cách mạng xã hội',
    title: 'Nguồn gốc của cách mạng xã hội',
    shortDesc: 'Bắt nguồn từ mâu thuẫn của phương thức sản xuất',
    content: 'Nguồn gốc sâu xa của cách mạng xã hội là mâu thuẫn giữa lực lượng sản xuất tiến bộ với quan hệ sản xuất lỗi thời. Khi quan hệ sản xuất trở thành “xiềng xích” của lực lượng sản xuất, mâu thuẫn kinh tế chuyển hóa thành mâu thuẫn xã hội và chính trị, thúc đẩy sự ra đời của một cuộc cách mạng để thiết lập trật tự mới.',
    images: [
      {
        url: 'https://resource.kinhtedothi.vn/2021/12/22/mexico.jpg',
        caption: 'Hình ảnh thể hiện sự mẫu thuẫn giàu-nghèo trong trong đời sống'
      },
      {
        url: 'https://cdnmedia.baotintuc.vn/Upload/yTwlGtgJTRZkeJAfcpWR4g/files/2018/08/8B/chia1.jpg',
        caption: 'Bức ảnh về thực trạng phân hóa giàu nghèo tàn khốc trên thế giới'
      }
    ],
    keyPoints: [
      'Mâu thuẫn lực lượng sản xuất - quan hệ sản xuất là cốt lõi',
      'Đấu tranh giai cấp là nguyên nhân trực tiếp trong xã hội có giai cấp',
      'Cách mạng xuất hiện khi trật tự cũ cản trở phát triển xã hội'
    ]
  },
  {
    id: 8,
    section: 'Cách mạng xã hội',
    title: 'Bản chất và đặc điểm của cách mạng xã hội',
    shortDesc: 'Sự thay đổi căn bản về chất của toàn xã hội',
    content: 'Cách mạng xã hội là sự biến đổi căn bản về chất của đời sống xã hội, khác với cải cách chỉ thay đổi từng bộ phận. Theo nghĩa hẹp, đó là quá trình lật đổ chính quyền cũ, thiết lập chính quyền mới tiến bộ hơn. Cách mạng xã hội vừa có tính xã hội (thay đổi cấu trúc xã hội), vừa có tính chính trị (thay đổi quyền lực nhà nước).',
    images: [
      {
        url: 'https://bna.1cdn.vn/2024/10/29/bna.1cdn.vn-2024-10-27-_cao-trao-xo-viet-nghe-tinh.jpg',
        caption: 'Cuộc biểu tình ngày 12/9/1930 của nông dân phủ Hưng Nguyên (Nghệ An) đấu tranh và phản đối chính sách khủng bố dã man của đế quốc Pháp và phong kiến'
      },
      {
        url: 'https://cdn.baohatinh.vn/images/7b4731fffcc5ec4070dba6ab8805eaf39023cf7a66873b34b89ffcf2474c7d6fa134f3668e9aa8bc79fe41b14ef97d36/article.jpg',
        caption: 'Lật đổ chính quyền tư sản và xây dựng nhà nước xã hội chủ nghĩa'
      }
    ],
    keyPoints: [
      'Khác với cải cách: cách mạng tạo thay đổi toàn diện hơn',
      'Gắn với chuyển đổi hình thái kinh tế - xã hội',
      'Tính chất mỗi cuộc cách mạng phụ thuộc mục tiêu và nhiệm vụ lịch sử'
    ]
  },
  {
    id: 9,
    section: 'Cách mạng xã hội',
    title: 'Lực lượng, động lực và lãnh đạo cách mạng',
    shortDesc: 'Ai tham gia và ai giữ vai trò quyết định',
    content: 'Lực lượng cách mạng xã hội gồm những giai cấp, tầng lớp có lợi ích gắn với mục tiêu cách mạng. Trong đó, động lực là các lực lượng có tinh thần triệt để, tự giác, kiên định và khả năng lôi cuốn quần chúng. Giai cấp lãnh đạo phải có hệ tư tưởng tiến bộ và đại diện cho xu hướng phát triển của phương thức sản xuất mới.',
    images: [
      {
        url: 'https://hvlq.vn/upload/61311/fck/files/2020_08_19_09_22_192.jpg',
        caption: 'Cách mạng Tháng Tám: lực lượng là công nhân, nông dân, nhân dân; lãnh đạo là Hồ Chí Minh; tổ chức là Đảng Cộng sản Việt Nam, thể hiện qua khoảnh khắc đọc Tuyên ngôn Độc lập năm 1945'
      },
      {
        url: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=500&h=400&fit=crop',
        caption: 'Vai trò tổ chức và lãnh đạo quyết định hướng đi của phong trào'
      }
    ],
    keyPoints: [
      'Cần xác định rõ đối tượng cách mạng và lực lượng cách mạng',
      'Động lực cách mạng là lực lượng có lợi ích gắn bó lâu dài với cách mạng',
      'Lãnh đạo đúng đắn giúp tập hợp và phát huy sức mạnh toàn xã hội'
    ]
  },
  {
    id: 10,
    section: 'Cách mạng xã hội',
    title: 'Điều kiện nổ ra và thời cơ cách mạng',
    shortDesc: 'Kết hợp điều kiện khách quan và nhân tố chủ quan',
    content: 'Cách mạng xã hội chỉ có thể nổ ra khi điều kiện khách quan chín muồi (khủng hoảng kinh tế - chính trị, mâu thuẫn xã hội gay gắt) và nhân tố chủ quan đủ mạnh (lực lượng cách mạng có tổ chức, có đường lối, có khả năng hành động). Thời cơ cách mạng là thời điểm hội tụ cả hai yếu tố này ở mức thuận lợi nhất.',
    images: [
      {
        url: 'https://resource.kinhtedothi.vn/2022/05/06/canh-kho-cuc-cua-nguoi-nong-dan-truoc-cach-mang-thang-8-anh-tu-lieu.jpg',
        caption: 'Hình ảnh thực dân Pháp bóc lột sức lao động với nông dân Việt Nam'
      },
      {
        url: 'https://vcdn1-giaitri.vnecdn.net/2025/08/08/anh-nan-doi-1945-1754621146-17-7764-1915-1754621222.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=4cRDhz8UDcCN9hi2wsk0yw',
        caption: 'Hình ảnh nạn đói năm 1945'
      }
    ],
    keyPoints: [
      'Không phải mọi khủng hoảng đều tự động dẫn tới cách mạng',
      'Phải có tổ chức lãnh đạo đủ năng lực phát động quần chúng',
      'Bỏ lỡ thời cơ có thể làm cách mạng thất bại hoặc không nổ ra'
    ]
  },
  {
    id: 11,
    section: 'Cách mạng xã hội',
    title: 'Phương pháp cách mạng',
    shortDesc: 'Bạo lực cách mạng và khả năng đấu tranh hòa bình',
    content: 'Phương pháp cách mạng phụ thuộc tương quan lực lượng và bối cảnh lịch sử cụ thể. Trong nhiều trường hợp, cách mạng bạo lực là con đường chủ yếu để đập tan bộ máy nhà nước cũ. Tuy nhiên, trong những điều kiện đặc biệt, đấu tranh hòa bình thông qua nghị trường cũng có thể được sử dụng nếu lực lượng cách mạng đủ mạnh và kẻ thống trị không còn khả năng chống trả hiệu quả.',
    images: [
      {
        url: 'https://nghiencuuquocte.org/wp-content/uploads/2021/08/15.jpg',
        caption: 'Phong trào độc lập Ấn Độ do Mahatma Gandhi lãnh đạo, đấu tranh bất bạo động'
      },
      {
        url: 'https://media.vov.vn/uploaded/ql0rp46pywc/2017_10_23/tan_cong_cung_dien_mua_dong_pevp.jpg',
        caption: 'Hình ảnh Cách mạng Tháng Mười Nga dùng vũ trang lật đổ chính quyền'
      }
    ],
    keyPoints: [
      'Bạo lực cách mạng là công cụ, không phải mục tiêu tự thân',
      'Đấu tranh hòa bình chỉ khả thi trong điều kiện đặc biệt',
      'Cần kết hợp linh hoạt phương pháp theo thực tiễn'
    ]
  },
  {
    id: 12,
    section: 'Cách mạng xã hội',
    title: 'Vấn đề cách mạng xã hội hiện nay',
    shortDesc: 'Biến đổi xã hội hiện đại theo hướng đa dạng hơn',
    content: 'Trong bối cảnh toàn cầu hóa, cách mạng khoa học - công nghệ và kinh tế tri thức, nhiều biến đổi xã hội hiện nay diễn ra thông qua cải cách, đổi mới, điều chỉnh thể chế và hợp tác quốc tế thay vì các cuộc cách mạng điển hình như trước đây. Dù hình thức khác nhau, xu hướng chung vẫn là thúc đẩy phát triển tiến bộ, dân chủ, công bằng và văn minh.',
    images: [
      {
        url: 'https://www.nait.vn/uploads/news/2024/01/mh1.jpg',
        caption: 'Hình ảnh AI về việc thay đổi cách con người học tập, làm việc với công nghệ'
      },
      {
        url: 'https://vinuni.edu.vn/wp-content/uploads/2024/12/cuoc-cach-mang-cong-nghiep-4-0-la-gi-tac-dong-manh-me-cua-cuoc-cach-mang-cong-nghiep.jpg',
        caption: 'Hình ảnh miêu tả tự động hóa AI, chuyển đổi số trong cách mạng công nghiệp 4.0'
      }
    ],
    keyPoints: [
      'Hình thức biến đổi xã hội ngày càng đa dạng và linh hoạt',
      'Đối thoại, hòa giải và hợp tác quốc tế có vai trò ngày càng lớn',
      'Mục tiêu phát triển tiến bộ vẫn là xu hướng chủ đạo'
    ]
  }
]

const stateTheories = theories.filter((theory) => theory.section === 'Nhà nước')
const socialRevolutionTheories = theories.filter((theory) => theory.section === 'Cách mạng xã hội')

export default function TheorySection() {
  return (
    <section id="theory" className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-8 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/3 -right-10 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="space-y-12">
        <div className="rounded-3xl border border-border/80 bg-white/80 backdrop-blur-sm p-6 sm:p-8 shadow-sm">
          <div className="mb-6 flex flex-col gap-3 sm:gap-2">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">1. Nhà nước</h3>
              <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs sm:text-sm font-semibold">
                {stateTheories.length} tiểu mục
              </span>
            </div>
            {/* <p className="text-muted-foreground mt-1">Nhà nước là sản phẩm của xã hội có giai cấp, mang bản chất là công cụ thống trị của giai cấp cầm quyền.</p> */}
            {/* <p className="text-muted-foreground">Quan điểm Mác - Lênin giải thích nhà nước một cách khoa học, khách quan dựa trên bản chất giai cấp và lịch sử.</p> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stateTheories.map((theory) => (
              <TheoryCard
                key={theory.id}
                theory={theory}
              />
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-border/80 bg-white/80 backdrop-blur-sm p-6 sm:p-8 shadow-sm">
          <div className="mb-6 flex flex-col gap-3 sm:gap-2">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">2. Cách mạng xã hội</h3>
              <span className="inline-flex items-center rounded-full bg-accent/10 text-accent px-3 py-1 text-xs sm:text-sm font-semibold">
                {socialRevolutionTheories.length} tieu muc
              </span>
            </div>
            <p className="text-muted-foreground">Trình bày theo từng tiểu mục: nguồn gốc, bản chất, lực lượng, điều kiện, phương pháp và bối cảnh hiện nay.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialRevolutionTheories.map((theory) => (
              <TheoryCard
                key={theory.id}
                theory={theory}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
