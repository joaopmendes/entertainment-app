import { PropsWithChildren } from 'react';
import { IPageContainerProps } from './type';
import styles from './pagecontainer.module.css';

export const PageContainer: React.FC<IPageContainerProps> = ({
                                                                 children,
                                                                 className,
                                                             }: PropsWithChildren<IPageContainerProps>) => {

    return (
        <div className={`${className} ${styles.pageContainer}`}>
            {children}
        </div>
    );
};