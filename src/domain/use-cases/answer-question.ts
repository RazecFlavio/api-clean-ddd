import { Answer } from "../entities/answer"
import { AnswersRepository } from "../repositories/answers-repository"

interface AnswerQuestionUseCaseRequest {
    instructId: string
    questionId: string
    content: string
}

export class AnswerQuestionUseCase {
    constructor(private answerRepository: AnswersRepository) { }
    async execute({ instructId, questionId, content }: AnswerQuestionUseCaseRequest) {
        const answer = new Answer({
            content,
            authorId: instructId,
            questionId
        })

        await this.answerRepository.create(answer)

        return answer;
    }
}