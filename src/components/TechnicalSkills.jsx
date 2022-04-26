
import React from 'react';
import PropTypes from 'prop-types';

const TechnicalSkills = ({ skills }) => {
  const list = skills.map(skill => (<li className="skill" key={skill.stack + Math.random()}><span>{skill.stack}</span></li>));
  return (
    <ul className="skills">
      {list}
    </ul>
  );
};

TechnicalSkills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TechnicalSkills;






// const TechnicalSkills = ({ skills }) => {
//   const items = skills.map(skill => (
//     <div className="candidatos" key={skill + Math.random()}>
//       <div className="parcial">
//         <div className="info">
//           <div className="nome">{skill.stack}</div>
//           {/* <div className="percentagem-num">{skill.level}</div> */}
//         </div>
//         {/* <div className="progressBar">
//           <div className="percentagem" style={{ width: skill.level }} />
//         </div> */}
//       </div>
//     </div>
//   ));
//   return (
//     <div className="each-skills">
//       {items}
//     </div>
//   );
// };

// TechnicalSkills.propTypes = {
//   skills: PropTypes.arrayOf(PropTypes.object).isRequired
// };

// export default TechnicalSkills;
