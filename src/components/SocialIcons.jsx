import React from 'react';

const SocialIcons = props => (
  <ul {...props}>
    <li>
      <a
        href="https://github.com/amomutai/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-github" />
      </a>
    </li>
    <li>
      <a
        href="https://stackoverflow.com/users/17142717/amos-mutai"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-stack-overflow" />
      </a>
    </li>
    <li>
      <a
        href="https://ke.linkedin.com/in/amosmutai"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-linkedin" />
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com/MutaiTweets/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-twitter" />
      </a>
    </li>
  </ul>
);

export default SocialIcons;
