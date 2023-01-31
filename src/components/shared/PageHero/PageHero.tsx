import React from 'react';
import {Link} from 'react-router-dom';
import {ReactSVG} from 'react-svg';

import {
    NUMBER_DECLINATIONS_TEMPLATES,
    numberDeclination,
} from '@src/utils/numberDeclination';

import classes from './PageHero.module.scss';

interface PageHeroProps {
    pageHeroData: IPageHeroData;
    isMainPage: boolean;
}
export type IPageHeroData = {
    pageHeroH1: string | undefined;
    pageHeroP: string | undefined;
    pageHeroButtonLink: string;
    pageHeroButtonText: string;
    pageHeroImg: string;
    pageHeroLessonsNumber: number | undefined;
    pageHeroLevel: string | undefined;
};

export const PageHero = ({pageHeroData, isMainPage}: PageHeroProps) => {
    return (
        <div className={classes.pageHero}>
            <div className={classes.pageHeroInner}>
                {!isMainPage && (
                    <div className="page-hero-header">
                        <div className="item-badge bordered right">
                            <span>{pageHeroData.pageHeroLevel}</span>
                        </div>
                        <div className="back-link">
                            <Link to=".." relative="path">
                                Назад
                            </Link>
                        </div>
                    </div>
                )}
                <h1>{pageHeroData.pageHeroH1}</h1>
                <ReactSVG
                    className={classes.pageHeroPic}
                    src={pageHeroData.pageHeroImg}
                />
                <p
                    className={
                        !isMainPage ? 'page-hero-course' : classes.pageHeroMain
                    }
                >
                    {pageHeroData.pageHeroP}
                </p>
                {!isMainPage && !!pageHeroData.pageHeroLessonsNumber && (
                    <div className={classes.itemLessonsNumber}>
                        <span>
                            {pageHeroData.pageHeroLessonsNumber + ' '}
                            {numberDeclination(
                                pageHeroData.pageHeroLessonsNumber,
                                NUMBER_DECLINATIONS_TEMPLATES.lessons,
                            )}
                        </span>
                    </div>
                )}
                <Link to={`${pageHeroData.pageHeroButtonLink}`}>
                    <button className="button button-blue">
                        {pageHeroData.pageHeroButtonText}
                    </button>
                </Link>
            </div>
        </div>
    );
};
