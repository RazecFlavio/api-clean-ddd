import { beforeEach, describe, expect, it } from 'vitest'
import { Question } from '../entities/question'
import { Instructor } from '../entities/instructor';
import { AnswerQuestionUseCase } from './answer-question';
import { AnswersRepository } from '../repositories/answers-repository';
import { Answer } from '../entities/answer';

let fakeAnswerRepository: AnswersRepository = {
    create: async (answer: Answer) => { return }
};

describe('Answer question use case', async () => {

    it('should be able to answer a question', async () => {
        const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository)
        const answer = await answerQuestion.execute({
            instructId: '1',
            questionId: '1',
            content: 'Nova Resposta'
        })

        expect(answer.content).toEqual('Nova Resposta')
    })

})