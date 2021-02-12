import React from 'react';
const mySkills = require('../myskills.json');

const Skills = ({theme, classNameHandler}) => {
    return(
        <div className={classNameHandler(theme, "skills")}>
            <pre>
                {JSON.stringify(mySkills, null, 4)}
            </pre>
        </div>
    )
}

export default Skills;