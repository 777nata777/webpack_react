import React from 'react';
import * as styles from './TeamMember.module.css';

const TeamMember = ({ name, position, imageSrc, alt }) => {
    return (
        <div className={styles.teamMember}>
            <img src={imageSrc} alt={alt} />
            <p>
                <strong>{name}</strong>
                <br />
                Должность: {position}
            </p>
        </div>
    );
};

export default TeamMember;
