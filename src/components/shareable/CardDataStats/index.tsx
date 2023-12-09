import { LevelDownIcon, LevelUpIcon } from '@/custom-icons';
import { styles } from '@/styles/tailwind/CardDataStats/index.css';
import React, { ReactNode } from 'react';

interface CardDataStatsProps {
    title: string;
    total: string;
    rate: string;
    levelUp?: boolean;
    levelDown?: boolean;
    children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
    title,
    total,
    rate,
    levelUp,
    levelDown,
    children,
}) => {
    return (
        <div className={`${styles.cardDataStatsWrapper}`}>
            <div className={`${styles.cardDataStatsChildrenWrapper}`}>
                {children}
            </div>

            <div className={`${styles.cardDataStatsContentWrapper}`}>
                <div>
                    <h4 className={`${styles.cardDataStatsTotal}`}>
                        {total}
                    </h4>
                    <span className={`${styles.cardStateTitle}`}>{title}</span>
                </div>

                <span
                    className={`${styles.cardStatsLevelWrapper} ${levelUp && 'text-meta-3'
                        } ${levelDown && 'text-meta-5'} `}
                >
                    {rate}

                    {levelUp && (
                        <LevelUpIcon />
                    )}
                    {levelDown && (
                        <LevelDownIcon />
                    )}
                </span>
            </div>
        </div>
    );
};

export default CardDataStats;
