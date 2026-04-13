'use client'

import { useEffect, useState } from 'react'
import QuizCard from './QuizCard'

interface Quiz {
  id: number
  question: string
  options: string[]
  correctIndexes: number[]
  explanation: string
  isMultiple?: boolean
}

const quizzes: Quiz[] = [
  {
    id: 1,
    question: 'Nhà nước xuất hiện khi nào?',
    options: [
      'Khi con người biết trồng trọt',
      'Khi xã hội có phân hóa giai cấp',
      'Khi có chiến tranh',
      'Khi có tôn giáo'
    ],
    correctIndexes: [1],
    explanation: 'Nhà nước là sản phẩm của xã hội khi phát triển tới giai đoạn mà xã hội bị phân thành những giai cấp đối lập không thể điều hòa.'
  },
  {
    id: 2,
    question: 'Theo quan điểm Mác - Lênin, nhà nước là gì?',
    options: [
      'Tổ chức trung lập',
      'Công cụ của toàn dân',
      'Công cụ thống trị của giai cấp',
      'Tổ chức tự quản'
    ],
    correctIndexes: [2],
    explanation: 'Theo Mác - Lênin, nhà nước là công cụ thống trị của giai cấp thống trị để áp bức giai cấp bị trị.'
  },
  {
    id: 3,
    question: 'Nguyên nhân sâu xa dẫn đến sự ra đời của nhà nước là gì?',
    options: [
      'Chiến tranh',
      'Tôn giáo',
      'Phát triển lực lượng sản xuất',
      'Văn hóa'
    ],
    correctIndexes: [2],
    explanation: 'Phát triển lực lượng sản xuất dẫn đến sự dư thừa tương đối của cải, xuất hiện chế độ tư hữu, là nguyên nhân sâu xa.'
  },
  {
    id: 4,
    question: 'Nguyên nhân trực tiếp dẫn đến sự ra đời của nhà nước là gì?',
    options: [
      'Mâu thuẫn giai cấp',
      'Thiên tai',
      'Khoa học phát triển',
      'Di cư'
    ],
    correctIndexes: [0],
    explanation: 'Mâu thuẫn giai cấp gay gắt không thể điều hòa là nguyên nhân trực tiếp dẫn đến sự ra đời của nhà nước.'
  },
  {
    id: 5,
    question: 'Đặc trưng nào KHÔNG phải của nhà nước?',
    options: [
      'Lãnh thổ',
      'Quân đội',
      'Huyết thống',
      'Thuế khóa'
    ],
    correctIndexes: [2],
    explanation: 'Ba đặc trưng cơ bản của nhà nước là lãnh thổ, cơ quan cưỡng chế và thuế khóa. Huyết thống là đặc trưng của tổ chức thị tộc, bộ lạc cũ.'
  },
  {
    id: 6,
    question: 'Nhà nước quản lý xã hội chủ yếu bằng gì?',
    options: [
      'Đạo đức',
      'Tập quán',
      'Pháp luật',
      'Tình cảm'
    ],
    correctIndexes: [2],
    explanation: 'Nhà nước quản lý xã hội chủ yếu bằng pháp luật, là công cụ cưỡng bức để buộc mọi người phục tùng ý chí của giai cấp cầm quyền.'
  },
  {
    id: 7,
    question: 'Chức năng quan trọng nhất của nhà nước là gì?',
    options: [
      'Xã hội',
      'Đối ngoại',
      'Thống trị chính trị',
      'Văn hóa'
    ],
    correctIndexes: [2],
    explanation: 'Chức năng thống trị chính trị là chức năng quan trọng nhất, vì đó là bản chất giai cấp của nhà nước.'
  },
  {
    id: 8,
    question: 'Chức năng xã hội của nhà nước bao gồm gì?',
    options: [
      'Đàn áp',
      'Quản lý xã hội',
      'Chiến tranh',
      'Chính trị'
    ],
    correctIndexes: [1],
    explanation: 'Chức năng xã hội là quản lý các công việc chung như y tế, giáo dục, giao thông, bảo vệ môi trường.'
  },
  {
    id: 9,
    question: 'Nhà nước có mấy đặc trưng cơ bản?',
    options: ['2', '3', '4', '5'],
    correctIndexes: [1],
    explanation: 'Nhà nước có ba đặc trưng cơ bản: lãnh thổ, cơ quan quyền lực chuyên nghiệp và thuế khóa.'
  },
  {
    id: 10,
    question: 'Kiểu nhà nước nào KHÔNG tồn tại trong lịch sử?',
    options: ['Chủ nô', 'Phong kiến', 'Tư sản', 'Công nghệ'],
    correctIndexes: [3],
    explanation: 'Bốn kiểu nhà nước trong lịch sử là: chủ nô, phong kiến, tư sản và vô sản. Công nghệ không phải kiểu nhà nước.'
  },
  {
    id: 31,
    question: 'Nguyên nhân dẫn đến sự ra đời của nhà nước là gì? (Chọn nhiều)',
    options: [
      'Sự phát triển lực lượng sản xuất',
      'Xuất hiện tư hữu',
      'Mâu thuẫn giai cấp',
      'Tôn giáo phát triển'
    ],
    correctIndexes: [0, 1, 2],
    isMultiple: true,
    explanation: 'Nguyên nhân đúng gồm: phát triển lực lượng sản xuất, xuất hiện tư hữu và mâu thuẫn giai cấp gay gắt.'
  },
  {
    id: 32,
    question: 'Đặc trưng của nhà nước gồm những gì? (Chọn nhiều)',
    options: [
      'Lãnh thổ',
      'Hệ thống cưỡng chế',
      'Huyết thống',
      'Thuế khóa'
    ],
    correctIndexes: [0, 1, 3],
    isMultiple: true,
    explanation: 'Đặc trưng cơ bản của nhà nước gồm lãnh thổ, bộ máy cưỡng chế chuyên nghiệp và thuế khóa.'
  },
  {
    id: 33,
    question: 'Chức năng của nhà nước gồm những gì? (Chọn nhiều)',
    options: ['Thống trị chính trị', 'Xã hội', 'Đối nội', 'Đối ngoại'],
    correctIndexes: [0, 1, 2, 3],
    isMultiple: true,
    explanation: 'Nhà nước có các nhóm chức năng: thống trị chính trị, chức năng xã hội, đối nội và đối ngoại.'
  },
  {
    id: 34,
    question: 'Những kiểu nhà nước trong lịch sử gồm: (Chọn nhiều)',
    options: ['Chủ nô', 'Phong kiến', 'Tư sản', 'Công nghệ'],
    correctIndexes: [0, 1, 2],
    isMultiple: true,
    explanation: 'Các kiểu nhà nước cơ bản trong lịch sử gồm chủ nô, phong kiến, tư sản và vô sản; công nghệ không phải kiểu nhà nước.'
  },
  {
    id: 35,
    question: 'Bản chất của nhà nước thể hiện ở: (Chọn nhiều)',
    options: [
      'Công cụ giai cấp',
      'Tổ chức trung lập',
      'Bảo vệ lợi ích giai cấp thống trị',
      'Mang tính lịch sử'
    ],
    correctIndexes: [0, 2, 3],
    isMultiple: true,
    explanation: 'Nhà nước không trung lập; nó mang bản chất giai cấp, bảo vệ lợi ích giai cấp thống trị và tồn tại mang tính lịch sử.'
  },
  {
    id: 36,
    question: 'Điều kiện để cách mạng xã hội xảy ra gồm: (Chọn nhiều)',
    options: ['Mâu thuẫn gay gắt', 'Tình thế cách mạng', 'Nhân tố chủ quan', 'Thời tiết'],
    correctIndexes: [0, 1, 2],
    isMultiple: true,
    explanation: 'Cách mạng xã hội cần mâu thuẫn gay gắt, tình thế cách mạng và nhân tố chủ quan chín muồi.'
  },
  {
    id: 37,
    question: 'Động lực của cách mạng xã hội là: (Chọn nhiều)',
    options: ['Giai cấp công nhân', 'Nông dân', 'Trí thức tiến bộ', 'Giai cấp thống trị'],
    correctIndexes: [0, 1, 2],
    isMultiple: true,
    explanation: 'Động lực cách mạng là các lực lượng tiến bộ như công nhân, nông dân, trí thức tiến bộ; không phải giai cấp thống trị cũ.'
  },
  {
    id: 38,
    question: 'Phương pháp cách mạng gồm: (Chọn nhiều)',
    options: ['Bạo lực', 'Hòa bình', 'Đàm phán cá nhân', 'Đấu tranh nghị trường'],
    correctIndexes: [0, 1, 3],
    isMultiple: true,
    explanation: 'Phương pháp cách mạng có thể gồm bạo lực cách mạng và các hình thức hòa bình như đấu tranh nghị trường trong điều kiện phù hợp.'
  },
  {
    id: 39,
    question: 'Chức năng đối nội của nhà nước thể hiện qua: (Chọn nhiều)',
    options: ['Giáo dục', 'Y tế', 'Giao thông', 'Ngoại giao'],
    correctIndexes: [0, 1, 2],
    isMultiple: true,
    explanation: 'Đối nội tập trung quản lý các lĩnh vực trong nước như giáo dục, y tế, giao thông; ngoại giao thuộc đối ngoại.'
  },
  {
    id: 40,
    question: 'Xu hướng phát triển xã hội hiện nay gồm: (Chọn nhiều)',
    options: ['Cải cách', 'Đổi mới', 'Chiến tranh liên tục', 'Hợp tác quốc tế'],
    correctIndexes: [0, 1, 3],
    isMultiple: true,
    explanation: 'Xu hướng chung là cải cách, đổi mới và hợp tác quốc tế; chiến tranh liên tục không phải xu hướng chủ đạo.'
  }
]

function shuffleQuizzes(input: Quiz[]) {
  const arr = [...input]
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr
}

function isSelectionCorrect(selected: number[], correct: number[]) {
  if (selected.length !== correct.length) {
    return false
  }

  const selectedSet = new Set(selected)
  return correct.every((item) => selectedSet.has(item))
}

function getAnswerText(options: string[], selected: number[]) {
  if (selected.length === 0) {
    return 'Chưa chọn'
  }

  return selected
    .map((index) => options[index])
    .filter(Boolean)
    .join(', ')
}

export default function QuizSection() {
  const [quizList, setQuizList] = useState<Quiz[]>(quizzes)
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[][]>(quizzes.map(() => []))
  const [submitted, setSubmitted] = useState<boolean[]>(quizzes.map(() => false))
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    const shuffled = shuffleQuizzes(quizzes)
    setQuizList(shuffled)
    setSelectedAnswers(shuffled.map(() => []))
    setSubmitted(shuffled.map(() => false))
    setCurrentQuizIndex(0)
    setShowResults(false)
  }, [])

  const currentQuiz = quizList[currentQuizIndex]
  const currentSelected = selectedAnswers[currentQuizIndex] ?? []
  const isSubmitted = submitted[currentQuizIndex]
  const canSubmit = currentSelected.length > 0 && !isSubmitted

  const handleSelectAnswer = (index: number) => {
    if (isSubmitted) {
      return
    }

    const updatedAnswers = [...selectedAnswers]

    if (currentQuiz.isMultiple) {
      const currentSet = new Set(updatedAnswers[currentQuizIndex])
      if (currentSet.has(index)) {
        currentSet.delete(index)
      } else {
        currentSet.add(index)
      }
      updatedAnswers[currentQuizIndex] = Array.from(currentSet).sort((a, b) => a - b)
    } else {
      updatedAnswers[currentQuizIndex] = [index]
    }

    setSelectedAnswers(updatedAnswers)
  }

  const handleSubmit = () => {
    if (!canSubmit) {
      return
    }

    const updatedSubmitted = [...submitted]
    updatedSubmitted[currentQuizIndex] = true
    setSubmitted(updatedSubmitted)
  }

  const handleNext = () => {
    if (currentQuizIndex < quizList.length - 1) {
      setCurrentQuizIndex((prev) => prev + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuizIndex > 0) {
      setCurrentQuizIndex((prev) => prev - 1)
    }
  }

  const handleRestart = () => {
    const reshuffled = shuffleQuizzes(quizzes)
    setQuizList(reshuffled)
    setSelectedAnswers(reshuffled.map(() => []))
    setSubmitted(reshuffled.map(() => false))
    setCurrentQuizIndex(0)
    setShowResults(false)
  }

  const correctCount = quizList.filter((quiz, index) =>
    isSelectionCorrect(selectedAnswers[index] ?? [], quiz.correctIndexes)
  ).length

  if (showResults) {
    const percentage = Math.round((correctCount / quizList.length) * 100)

    return (
      <section id="quiz" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Kết Quả Quiz</h2>

          <div className="bg-white rounded-lg border border-border p-8 shadow-md mb-8">
            <div className="mb-6">
              <div className="text-6xl font-bold text-primary mb-2">{correctCount}/{quizList.length}</div>
              <p className="text-2xl font-semibold text-foreground mb-4">{percentage}%</p>

              {percentage >= 80 && (
                <p className="text-lg text-green-600 font-semibold">Xuất sắc! Bạn đã nắm vững kiến thức!</p>
              )}
              {percentage >= 60 && percentage < 80 && (
                <p className="text-lg text-blue-600 font-semibold">Tốt! Bạn hiểu rõ phần lớn nội dung.</p>
              )}
              {percentage >= 40 && percentage < 60 && (
                <p className="text-lg text-yellow-600 font-semibold">Bạn cần ôn luyện thêm một số phần.</p>
              )}
              {percentage < 40 && (
                <p className="text-lg text-orange-600 font-semibold">Bạn nên quay lại ôn tập lý luận.</p>
              )}
            </div>

            <details className="text-left bg-secondary/50 rounded-lg p-4 mb-6">
              <summary className="font-semibold text-foreground cursor-pointer mb-4">Chi tiết từng câu</summary>
              <div className="space-y-3 text-sm">
                {quizList.map((quiz, index) => {
                  const userAnswer = selectedAnswers[index] ?? []
                  const isUserCorrect = isSelectionCorrect(userAnswer, quiz.correctIndexes)

                  return (
                    <div key={quiz.id} className={`p-3 rounded ${isUserCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                      <p className="font-semibold text-foreground mb-1">Câu {index + 1}: {quiz.question}</p>
                      <p className="text-sm text-foreground">
                        Bạn chọn:{' '}
                        <span className={isUserCorrect ? 'text-green-700' : 'text-red-700'}>
                          {getAnswerText(quiz.options, userAnswer)}
                        </span>
                      </p>
                      {!isUserCorrect && (
                        <p className="text-sm text-foreground mt-1">
                          Đáp án đúng:{' '}
                          <span className="text-green-700">{getAnswerText(quiz.options, quiz.correctIndexes)}</span>
                        </p>
                      )}
                    </div>
                  )
                })}
              </div>
            </details>

            <button
              onClick={handleRestart}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              Làm lại quiz
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="quiz" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Kiểm Tra Kiến Thức</h2>
        <p className="text-muted-foreground text-lg">
          Câu {currentQuizIndex + 1} / {quizList.length}
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg border border-border p-6 sm:p-8 shadow-md">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-foreground">Tiến độ</span>
              <span className="text-sm text-muted-foreground">
                {currentQuizIndex + 1}/{quizList.length}
              </span>
            </div>
            <div className="w-full bg-border rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all"
                style={{ width: `${((currentQuizIndex + 1) / quizList.length) * 100}%` }}
              />
            </div>
          </div>

          <QuizCard
            quiz={currentQuiz}
            selectedAnswers={currentSelected}
            isSubmitted={isSubmitted}
            onSelectAnswer={handleSelectAnswer}
          />

          <div className="flex gap-4 mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentQuizIndex === 0}
              className="flex-1 px-4 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              ← Quay lại
            </button>
            <button
              onClick={isSubmitted ? handleNext : handleSubmit}
              disabled={(!isSubmitted && !canSubmit)}
              className="flex-1 px-4 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {isSubmitted
                ? (currentQuizIndex === quizList.length - 1 ? 'Xem Kết Quả' : 'Tiếp Tục →')
                : 'Xác nhận'}
            </button>
          </div>

          {!isSubmitted && currentSelected.length === 0 && (
            <p className="text-center text-muted-foreground text-sm mt-4">
              Vui lòng chọn {currentQuiz.isMultiple ? 'ít nhất một đáp án' : 'một đáp án'}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
