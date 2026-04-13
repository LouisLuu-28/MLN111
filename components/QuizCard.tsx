'use client'

import { Check, X } from 'lucide-react'

interface Quiz {
  id: number
  question: string
  options: string[]
  correctIndexes: number[]
  explanation: string
  isMultiple?: boolean
}

interface QuizCardProps {
  quiz: Quiz
  selectedAnswers: number[]
  isSubmitted: boolean
  onSelectAnswer: (index: number) => void
}

function isSameSelection(selected: number[], correct: number[]) {
  if (selected.length !== correct.length) {
    return false
  }

  const selectedSet = new Set(selected)
  return correct.every((item) => selectedSet.has(item))
}

export default function QuizCard({ quiz, selectedAnswers, isSubmitted, onSelectAnswer }: QuizCardProps) {
  const isCorrect = isSubmitted && isSameSelection(selectedAnswers, quiz.correctIndexes)

  return (
    <div className="space-y-6">
      {/* Question */}
      <div>
        <h3 className="text-2xl font-bold text-foreground">{quiz.question}</h3>
        {quiz.isMultiple && (
          <p className="text-sm text-primary font-medium mt-2">Câu hỏi nhiều đáp án đúng. Bạn có thể chọn nhiều lựa chọn.</p>
        )}
      </div>

      {/* Options */}
      <div className="space-y-3">
        {quiz.options.map((option, index) => {
          const isSelected = selectedAnswers.includes(index)
          const isCorrectOption = quiz.correctIndexes.includes(index)
          const showCorrect = isSubmitted && isCorrectOption
          const showIncorrect = isSubmitted && isSelected && !isCorrectOption

          let bgClass = 'bg-white hover:bg-secondary/30'
          let borderClass = 'border-border'
          let textClass = 'text-foreground'

          if (showCorrect) {
            bgClass = 'bg-green-50 hover:bg-green-50'
            borderClass = 'border-green-500'
            textClass = 'text-green-900'
          } else if (showIncorrect) {
            bgClass = 'bg-red-50 hover:bg-red-50'
            borderClass = 'border-red-500'
            textClass = 'text-red-900'
          } else if (isSelected && !isSubmitted) {
            bgClass = 'bg-primary/10'
            borderClass = 'border-primary'
          }

          return (
            <button
              key={index}
              onClick={() => onSelectAnswer(index)}
              disabled={isSubmitted}
              className={`w-full p-4 rounded-lg border-2 text-left font-medium transition ${bgClass} ${borderClass} ${textClass} ${
                isSubmitted ? 'cursor-default' : 'cursor-pointer'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 ${quiz.isMultiple ? 'rounded-md' : 'rounded-full'} border-2 flex items-center justify-center flex-shrink-0 ${
                  showCorrect ? 'border-green-500 bg-green-500' : 
                  showIncorrect ? 'border-red-500 bg-red-500' :
                  isSelected ? 'border-primary bg-primary' : 'border-muted'
                }`}>
                  {showCorrect && <Check className="w-4 h-4 text-white" />}
                  {showIncorrect && <X className="w-4 h-4 text-white" />}
                  {!isSubmitted && isSelected && <Check className="w-4 h-4 text-white" />}
                </div>
                <span>{option}</span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Explanation */}
      {isSubmitted && (
        <div className={`rounded-lg p-4 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <p className={`font-semibold mb-2 ${isCorrect ? 'text-green-900' : 'text-red-900'}`}>
            {isCorrect ? '✓ Chính xác!' : '✗ Không chính xác'}
          </p>
          <p className={`text-sm ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
            {quiz.explanation}
          </p>
        </div>
      )}
    </div>
  )
}
