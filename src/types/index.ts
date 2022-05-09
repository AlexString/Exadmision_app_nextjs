import { NextPage } from 'next';

import MainLayout from 'containers/Layouts/Main';

export type PageWithLayout = NextPage & { layout: typeof MainLayout | null };

export type QuestionType = {
	id: number;
	formula_id: string[];
	description: string;
	answers: {
		correct: string;
		wrong: string[];
	};
}
