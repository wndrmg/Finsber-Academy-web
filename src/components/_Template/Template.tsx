import cn from 'classnames';
import React, {useEffect} from 'react';

import * as T from './Template.model';
import * as S from './Template.scss';

export const Template = ({data}: T.TemplateProps) => {
    useEffect(() => {
        console.log('Template');
    }, []);

    return <div className={cn(S.template)} />;
};
