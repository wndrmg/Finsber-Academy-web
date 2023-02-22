import React, {PropsWithChildren} from 'react';
import {Link} from 'react-router-dom';

export type KohanaLinkProps = {
    link?: string;
    isLink?: boolean;
};
export const KohanaLink = ({
    children,
    link,
    isLink,
}: PropsWithChildren<KohanaLinkProps>) => {
    if (!!link && isLink) {
        return <Link to={link}>{children}</Link>;
    }

    return <>{children}</>;
};
