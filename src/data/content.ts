export type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  image: string;
  className: string;
};

export const projects: Project[] = [
  {
    number: '01', category: 'Brand world · Digital', title: 'Form & Field',
    description: 'A calmer kind of commerce. A new digital home for objects made to last.',
    image: 'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1500&q=85', className: 'project-card--wide',
  },
  {
    number: '02', category: 'Art direction · Web', title: 'The Slow Edit',
    description: 'An editorial platform celebrating considered living and everyday rituals.',
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=85', className: 'project-card--tall',
  },
  {
    number: '03', category: 'Strategy · Identity', title: 'Terra Objects',
    description: 'A tactile identity for a design label rooted in natural materials.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1500&q=85', className: 'project-card--wide',
  },
];

export const services = [
  { number: '01', title: 'Digital experiences', text: 'Thoughtful websites and digital products that feel as good as they function.', icon: '↗' },
  { number: '02', title: 'Brand identities', text: 'Distinctive visual systems built to make the right kind of lasting impression.', icon: '✳' },
  { number: '03', title: 'Creative direction', text: 'A clear point of view, from the first sketch to the final pixel.', icon: '⌁' },
];
