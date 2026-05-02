export type Question = {
    id: number;
    question: string;
};

export type Information = {
    id: string;
    categories: string;
    questions: Question[];
};