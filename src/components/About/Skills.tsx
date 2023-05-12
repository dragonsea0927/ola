import React from 'react'
import Image from 'next/image'
import { styled } from '@mui/material/styles';

const StyledSkills = styled('div')(({ theme }) => ({
  margin: '50px auto',
  maxWidth: 800,

  h3: {
    textAlign: 'center',
    marginBottom: 30,
  },
  p: {
    margin: '0 auto',
    maxWidth: 600,
    textAlign: 'center',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.3s ease-in-out',
  },
  a: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.secondary.main,
      transition: '0.3s ease-in-out',
      transform: 'scale(1.5)',
    },
  },
  '& .MuiAvatar-root': {
    width: 60,
    height: 60,
    margin: '0 auto',
    marginBottom: 10,
  },

  [theme.breakpoints.down('sm')]: {
    margin: '50px auto',
    width: '100%',

    h3: {
      fontSize: '1.5rem',
      textAlign: 'center',
    },

    p: {
      margin: '0 auto',
      maxWidth: 500,
      gap: 10,
    },
  },

}));

const Skills = () => {
  return (
    <StyledSkills>
      <h3> Languages and Tools:</h3>
      <p> <a href="https://babeljs.io/" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="40" height="40" /> </a> <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="40" height="40" /> </a> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40" /> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" /> </a> <a href="https://www.cypress.io" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg" alt="cypress" width="40" height="40" /> </a> <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40" /> </a> <a href="https://emberjs.com/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ember/ember-original-wordmark.svg" alt="ember" width="40" height="40" /> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" /> </a> <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40" /> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" /> </a> <a href="https://heroku.com" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40" /> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" /> </a> <a href="https://jasmine.github.io/" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/jasmine/jasmine-icon.svg" alt="jasmine" width="40" height="40" /> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" /> </a> <a href="https://jestjs.io" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40" /> </a> <a href="https://kubernetes.io" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" alt="kubernetes" width="40" height="40" /> </a> <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40" /> </a> <a href="https://mariadb.org/" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg" alt="mariadb" width="40" height="40" /> </a> <a href="https://mochajs.org" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg" alt="mocha" width="40" height="40" /> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40" /> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40" /> </a> <a href="https://nestjs.com/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg" alt="nestjs" width="40" height="40" /> </a> <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <Image src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width="40" height="40" /> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" /> </a> <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40" /> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40" /> </a> <a href="https://www.python.org" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40" /> </a> <a href="https://rubyonrails.org" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg" alt="rails" width="40" height="40" /> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" /> </a> <a href="https://redux.js.org" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40" /> </a> <a href="https://www.ruby-lang.org/en/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg" alt="ruby" width="40" height="40" /> </a> <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40" /> </a> <a href="https://www.selenium.dev" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg" alt="selenium" width="40" height="40" /> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40" /> </a> <a href="https://webpack.js.org" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" alt="webpack" width="40" height="40" /></a>
        <a href="material-ui.com" target="_blank" rel="noopener noreferrer">
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="Material-UI logo" width="40" height="40" />
        </a>
        <a href='' target="_blank" rel="noopener noreferrer">
          <Image src=" https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" alt="Markdown" width="40" height="40" />
        </a>

        <a href='npmjs.com' target="_blank" rel="noopener noreferrer">
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="npm logo" width="40" height="40" />
        </a>
        <a href='visualstudio.com' target="_blank" rel="noopener noreferrer">
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="Visual Studio logo" width="40" height="40" />
        </a>
      </p>
    </StyledSkills>
  )
}

export default Skills