import React, { useState } from 'react';
import Carousel from './Carousel.jsx';
import gIcon from './assets/icons/github.svg';
import xIcon from './assets/icons/close.svg';
import './styles/ProjectModal.css';

export default function ProjectModal({ projects, select, selected, style }) {
  if (!selected) return null;
  const currProject = projects[selected];
  const { gallery, description, url, github } = currProject;

  return (
    <div className={`modal-darken ${style}`} onClick={select(null)}>
      <div className={`modal-body`} onClick={e => e.stopPropagation()}>
        <img src={xIcon} className="modal-close" onClick={select(null)} />
        <Carousel slides={gallery} />
        {description.map(paragraph => (
          <p>{paragraph}</p>
        ))}
        <div className="project-links">
          {github ? (
            <a className="github-link" href={github}>
              <img src={gIcon} alt="github-icon" />
            </a>
          ) : null}
          <a className={`bold-link ${url ? '' : 'disabled'}`} href={url}>
            View Live Site
          </a>
        </div>
      </div>
    </div>
  );
}