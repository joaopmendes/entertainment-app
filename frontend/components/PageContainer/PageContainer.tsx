import { PropsWithChildren } from 'react';
import { IContainerProps } from './type';
import styles from './pagecontainer.module.css';

export const PageContainer: React.FC<IContainerProps> = ({
                                                             children,
                                                             className,
                                                         }: PropsWithChildren<IContainerProps>) => {

    return (
        <div className={`${className} ${styles.pageContainer}`}>
            {children}
        </div>
    );
};