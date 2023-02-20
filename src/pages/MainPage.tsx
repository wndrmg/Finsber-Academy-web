import React from 'react';

import {CoursesList} from '@components/shared/CoursesList/CoursesList';
import {PageHero} from '@components/shared/PageHero/PageHero';

export const MainPage = () => {
    const pageHeroData = {
        pageHeroH1: 'Курсы по финансам и\xa0инвестициям',
        pageHeroP: `Научитесь управлять своими финансами. 
                    Узнайте, как наращивать капитал и получать дополнительный доход за счет инвестиций`,
        pageHeroButtonLink: '/courses',
        pageHeroButtonText: 'Смотреть все курсы',
        pageHeroImg: 'covers/top-banner.svg',
        pageHeroLessonsNumber: undefined,
        pageHeroLevel: undefined,
    };

    return (
        <main>
            <PageHero pageHeroData={pageHeroData} isMainPage={true} />
            <div className="main-content">
                <CoursesList />
            </div>
        </main>
    );
};
