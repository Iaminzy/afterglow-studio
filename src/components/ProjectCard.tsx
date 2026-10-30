import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Project } from '../data/content';

type Props = { project: Project; index: number };

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.article className={`project-card ${project.className}`} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}>
      <a className="project-image-wrap" href="#contact" aria-label={`Discuss a project like ${project.title}`}>
        <motion.img src={project.image} alt={`${project.title} visual direction`} loading="lazy" whileHover={{ scale: 1.045 }} transition={{ duration: 0.65, ease: 'easeOut' }} />
        <span className="project-open"><ArrowUpRight size={20} /></span>
        <span className="project-number">/{project.number}</span>
      </a>
      <div className="project-meta"><div><span className="eyebrow">{project.category}</span><h3>{project.title}</h3></div><p>{project.description}</p></div>
    </motion.article>
  );
}
