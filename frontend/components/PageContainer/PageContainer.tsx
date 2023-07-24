import { PropsWithChildren } from 'react';
import { IPageContainerProps } from './type';
import styles from './pagecontainer.module.css';

export const PageContainer: React.FC<PropsWithChildren<IPageContainerProps>> = ({
                                                                                    children,
                                                                                    className,
                                                                                }) => {

    return (
        <div className={`${styles.pageContainer} ${className}`}>
            {children}
        </div>
    );
};