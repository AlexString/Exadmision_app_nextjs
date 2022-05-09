import { NextPage } from 'next';

import MainLayout from 'containers/Layouts/Main';

export type PageWithLayout = NextPage & { layout: typeof MainLayout | null };
